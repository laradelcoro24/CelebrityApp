import { Injectable, inject } from '@angular/core';
import {   Router, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, CanMatchFn, CanActivateFn } from '@angular/router';
import { Observable, tap, map } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({providedIn: 'root'})
export class PublicGuard  {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  private checkAuthStatus=(): boolean | Observable<boolean> =>{

    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    return this.authService.checkAuthentication()
      .pipe(
        tap( isAuthenticated => console.log('Authenticated:', isAuthenticated ) ),
        tap( isAuthenticated => {
          if ( isAuthenticated ) {
            this.router.navigate(['./'])
          }
        }),
        map( isAuthenticated => !isAuthenticated )
      )

  };


    canMatch:CanMatchFn=(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> =>{
    // console.log('Can Match');
    // console.log({ route, segments })
    return this.checkAuthStatus();
  };

  canActivate: CanActivateFn=(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // console.log('Can Activate');
    // console.log({ route, state })

    return this.checkAuthStatus();
  }

}
