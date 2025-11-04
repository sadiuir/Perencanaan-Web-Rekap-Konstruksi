import { Component, ChangeDetectionStrategy, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Project, RABItem, DailyReport, MasterWorkItem, MasterMaterial } from '../../models';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, DatePipe, DecimalPipe],
  templateUrl: './project-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailComponent implements OnInit {
  // FIX: Explicitly type the injected ActivatedRoute instance to resolve type inference issue.
  private route: ActivatedRoute = inject(ActivatedRoute);
  private dataService = inject(DataService);
  authService = inject(AuthService);

  project = signal<Project | undefined>(undefined);
  rabItems = signal<(RABItem & { masterItem: MasterWorkItem | undefined })[]>([]);
  reports = signal<DailyReport[]>([]);
  activeTab = signal<'overview' | 'rab' | 'reports'>('overview');

  canSubmitReport = computed(() => {
    const user = this.authService.currentUser();
    const proj = this.project();
    if (!user || !proj) return false;
    return user.role === 'Admin Lapangan' && proj.assignedUsers.includes(user.id);
  });

  financialSummary = computed(() => {
    const proj = this.project();
    const rab = this.rabItems();
    if (!proj || !rab.length) {
      return { totalContractValue: 0, totalSpent: 0, remainingBudget: 0 };
    }

    const approvedReports = this.reports().filter(r => r.status === 'Approved');
    let totalSpent = 0;

    approvedReports.forEach(report => {
      report.progressItems.forEach(item => {
        const rabItem = rab.find(r => r.id === item.rabItemId);
        if (rabItem) {
          totalSpent += item.volumeCompleted * rabItem.unitPrice;
        }
      });
    });

    const remainingBudget = proj.contractValue - totalSpent;

    return {
      totalContractValue: proj.contractValue,
      totalSpent,
      remainingBudget,
    };
  });

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = Number(params.get('id'));
      if (projectId) {
        this.project.set(this.dataService.getProjectById(projectId));
        this.rabItems.set(this.dataService.getRabForProject(projectId));
        this.reports.set(this.dataService.getReportsForProject(projectId));
      }
    });
  }

  setTab(tab: 'overview' | 'rab' | 'reports') {
    this.activeTab.set(tab);
  }
  
  getReporterName(reporterId: number): string {
    return this.dataService.users().find(u => u.id === reporterId)?.fullName || 'Unknown';
  }
  
  getMaterialName(materialId: number): string {
    const material = this.dataService.masterMaterials().find(m => m.id === materialId);
    return material ? `${material.name} (${material.unit})` : 'Unknown Material';
  }

  getRabItemName(rabItemId: number): string {
    const rabItem = this.rabItems().find(r => r.id === rabItemId);
    return rabItem?.masterItem?.name || 'Unknown Item';
  }

  getRabItemUnit(rabItemId: number): string {
    const rabItem = this.rabItems().find(r => r.id === rabItemId);
    return rabItem?.masterItem?.unit || '';
  }
}