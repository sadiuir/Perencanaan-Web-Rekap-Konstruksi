import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { signal } from '@angular/core';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  authService = inject(AuthService);
  // FIX: Explicitly type the injected Router instance to resolve type inference issue.
  router: Router = inject(Router);
  
  isSidebarOpen = signal(true);
  isLoggedIn = this.authService.isLoggedIn;
  currentUser = this.authService.currentUser;

  canAccessAdmin = computed(() => this.authService.hasRole(['Superadmin']));
  canAccessValidation = computed(() => this.authService.hasRole(['Superadmin', 'Admin Kantor']));

  pageTitle = signal('Dashboard');

  constructor() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Basic logic to set title based on URL
      if (event.urlAfterRedirects.includes('/dashboard')) {
        this.pageTitle.set('Dashboard');
      } else if (event.urlAfterRedirects.includes('/project')) {
        this.pageTitle.set('Project Details');
      } else if (event.urlAfterRedirects.includes('/admin')) {
        this.pageTitle.set('System Administration');
      } else if (event.urlAfterRedirects.includes('/validation')) {
        this.pageTitle.set('Report Validation');
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen.update(val => !val);
  }

  logout() {
    this.authService.logout();
  }
}
