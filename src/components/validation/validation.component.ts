import { Component, ChangeDetectionStrategy, computed, inject, signal } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DataService } from '../../services/data.service';
import { DailyReport } from '../../models';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-validation',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './validation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidationComponent {
  dataService = inject(DataService);
  authService = inject(AuthService);

  selectedReport = signal<DailyReport | null>(null);

  pendingReports = computed(() => {
    return this.dataService.dailyReports().filter(r => r.status === 'Pending');
  });

  getProjectName(projectId: number): string {
    return this.dataService.projects().find(p => p.id === projectId)?.name || 'Unknown Project';
  }
  
  getReporterName(reporterId: number): string {
    return this.dataService.users().find(u => u.id === reporterId)?.fullName || 'Unknown';
  }
  
  getMaterialName(materialId: number): string {
    const material = this.dataService.masterMaterials().find(m => m.id === materialId);
    return material ? `${material.name} (${material.unit})` : 'Unknown Material';
  }

  getRabItemName(rabItemId: number): string {
    const rabItem = this.dataService.rabItems().find(r => r.id === rabItemId);
    if (!rabItem) {
      return 'Unknown Item';
    }
    const masterItem = this.dataService.masterItems().find(m => m.id === rabItem.masterItemId);
    return masterItem?.name || 'Unknown Item';
  }

  getRabItemUnit(rabItemId: number): string {
    const rabItem = this.dataService.rabItems().find(r => r.id === rabItemId);
    if (!rabItem) {
      return '';
    }
    const masterItem = this.dataService.masterItems().find(m => m.id === rabItem.masterItemId);
    return masterItem?.unit || '';
  }

  viewReport(report: DailyReport) {
    this.selectedReport.set(report);
  }

  closeModal() {
    this.selectedReport.set(null);
  }

  approveReport(reportId: number) {
    const user = this.authService.currentUser();
    if (!user) return;

    this.dataService.approveReport(reportId, user.id);
    this.closeModal();
  }

  rejectReport(reportId: number) {
    const user = this.authService.currentUser();
    if (!user) return;
    
    // In a real app, you'd get this from a textarea in the modal.
    const reason = prompt("Please provide a reason for rejection:");
    if (reason) {
        this.dataService.rejectReport(reportId, user.id, reason);
        this.closeModal();
    }
  }
}
