import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  // FIX: Explicitly type the injected Router instance to resolve type inference issue.
  const router: Router = inject(Router);
  const currentUser = authService.currentUser();
  
  if (!currentUser) {
    router.navigate(['/login']);
    return false;
  }
  
  const requiredRoles = route.data['roles'] as string[];
  if (requiredRoles && !requiredRoles.includes(currentUser.role)) {
    router.navigate(['/dashboard']); // Redirect to a safe page
    return false;
  }

  return true;
};
