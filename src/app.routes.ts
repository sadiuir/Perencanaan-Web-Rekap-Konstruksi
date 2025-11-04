
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { AdminComponent } from './components/admin/admin.component';
import { ValidationComponent } from './components/validation/validation.component';
import { authGuard } from './auth.guard';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [authGuard], 
    data: { roles: ['Superadmin', 'Admin Kantor', 'Admin Lapangan', 'User Biasa'] } 
  },
  { 
    path: 'project/:id', 
    component: ProjectDetailComponent, 
    canActivate: [authGuard], 
    data: { roles: ['Superadmin', 'Admin Kantor', 'Admin Lapangan', 'User Biasa'] } 
  },
  { 
    path: 'admin', 
    component: AdminComponent, 
    canActivate: [authGuard], 
    data: { roles: ['Superadmin'] } 
  },
  { 
    path: 'validation', 
    component: ValidationComponent, 
    canActivate: [authGuard], 
    data: { roles: ['Superadmin', 'Admin Kantor'] } 
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
