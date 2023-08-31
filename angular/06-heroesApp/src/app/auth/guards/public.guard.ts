import { inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

const checkAuthStatus = (): Observable<boolean> => {
 
  const service: AuthService = inject(AuthService);
  const router: Router = inject(Router);
 
  return service.checkAuthentication()
    .pipe(
      tap(isAuthenticated => {
        if (isAuthenticated) {
          router.navigate(['/']);
        }
      }),
      map(isAuthenticated => !isAuthenticated)
    )
}

//No hay necesidad de crear una clase, simplemente definiendo una función flecha y exportándola podemos utilizar sus funcionalidades de guard en el app-routing
export const canActivatePublicGuard: CanActivateFn = (
  //Hay que tener en cuenta el tipado CanActiveFn
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  console.log('CanActivate');
  console.log({ route, state });

  return checkAuthStatus();
};

export const canMatchPublicGuard: CanMatchFn = (
  //Tipado CanMatchFN
  route: Route,
  segments: UrlSegment[]
) => {
  console.log('CanMatch');
  console.log({ route, segments });

  return checkAuthStatus();
};
