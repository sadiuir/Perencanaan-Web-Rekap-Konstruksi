import { Injectable, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRole } from '../models';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private dataService = inject(DataService);
  // FIX: Explicitly type the injected Router instance to resolve type inference issue.
  private router: Router = inject(Router);

  currentUser = signal<User | null>(null);

  isLoggedIn = computed(() => this.currentUser() !== null);
  
  hasRole(roles: UserRole[]): boolean {
      const user = this.currentUser();
      return user ? roles.includes(user.role) : false;
  }

  login(username: string, password_unused: string): boolean {
    const user = this.dataService.users().find(u => u.username.toLowerCase() === username.toLowerCase());
    if (user) {
      this.currentUser.set(user);
      this.router.navigate(['/dashboard']);
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser.set(null);
    this.router.navigate(['/login']);
  }
}
