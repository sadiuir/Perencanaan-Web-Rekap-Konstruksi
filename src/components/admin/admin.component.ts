
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { User } from '../../models';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  dataService = inject(DataService);

  users = this.dataService.users;
  masterItems = this.dataService.masterItems;
  
  activeTab = signal<'users' | 'master-data'>('users');

  editingUser = signal<User | null>(null);

  setTab(tab: 'users' | 'master-data') {
    this.activeTab.set(tab);
  }

  toggleUserStatus(user: User) {
    const updatedUser = { ...user, isActive: !user.isActive };
    this.dataService.updateUser(updatedUser);
  }
}
