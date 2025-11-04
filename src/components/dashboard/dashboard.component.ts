
import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Project, RABItem, DailyReport, ProgressItem } from '../../models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  dataService = inject(DataService);
  authService = inject(AuthService);
  
  currentUser = this.authService.currentUser;

  projectsWithProgress = computed(() => {
    const user = this.currentUser();
    if (!user) return [];

    let visibleProjects = this.dataService.projects();
    if (user.role === 'Admin Lapangan') {
      visibleProjects = visibleProjects.filter(p => p.assignedUsers.includes(user.id));
    }
    
    return visibleProjects.map(project => {
      const projectRAB = this.dataService.rabItems().filter(r => r.projectId === project.id);
      const approvedReports = this.dataService.dailyReports().filter(r => r.projectId === project.id && r.status === 'Approved');

      const totalContractValue = project.contractValue;
      let totalSpent = 0;
      let totalPhysicalProgress = 0;

      if (projectRAB.length > 0) {
        const completedVolumes = new Map<number, number>();
        
        approvedReports.forEach(report => {
          report.progressItems.forEach(item => {
            const currentVolume = completedVolumes.get(item.rabItemId) || 0;
            completedVolumes.set(item.rabItemId, currentVolume + item.volumeCompleted);
          });
        });
        
        let weightedProgressSum = 0;

        projectRAB.forEach(rabItem => {
          const completedVolume = completedVolumes.get(rabItem.id) || 0;
          const progressForItem = rabItem.targetVolume > 0 ? (completedVolume / rabItem.targetVolume) : 0;
          
          weightedProgressSum += progressForItem * rabItem.totalPrice;
          totalSpent += completedVolume * rabItem.unitPrice;
        });
        
        totalPhysicalProgress = totalContractValue > 0 ? (weightedProgressSum / totalContractValue) * 100 : 0;
      }

      const costProgress = totalContractValue > 0 ? (totalSpent / totalContractValue) * 100 : 0;
      
      return {
        ...project,
        physicalProgress: Math.min(100, totalPhysicalProgress),
        costProgress: Math.min(100, costProgress),
        totalSpent
      };
    });
  });
}
