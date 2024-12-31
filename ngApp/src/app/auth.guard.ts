import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let _authService = inject(AuthService);
  let router = inject(Router);
  if (_authService.loggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
