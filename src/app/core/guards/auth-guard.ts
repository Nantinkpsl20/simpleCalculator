import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth } from '../../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  //check if the user is logged in
  if (auth.isLoggedIn()) { return true; }

  //redirect him on login page
  router.navigate(['/login']);
  return false;
};
