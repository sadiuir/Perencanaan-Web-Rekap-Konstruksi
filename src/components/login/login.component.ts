
import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  authService = inject(AuthService);

  username = signal('superadmin');
  password = signal('password');
  loginError = signal(false);

  onSubmit() {
    this.loginError.set(false);
    const success = this.authService.login(this.username(), this.password());
    if (!success) {
      this.loginError.set(true);
    }
  }

  setCredentials(user: string) {
    this.username.set(user);
    this.password.set('password');
    this.loginError.set(false);
  }
}
