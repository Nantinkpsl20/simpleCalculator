import { CanActivateFn } from '@angular/router';
import { Auth } from '../../services/auth';
import { inject } from '@angular/core';


export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);

  //check if the user has a specific role data.role in route
  const expectedRole = route.data['role'];
  return auth.hasRole(expectedRole);
};
