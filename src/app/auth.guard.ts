import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes the guard available app-wide
})
export class AuthGuard implements CanActivate {
  token:any

  constructor( private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.token = localStorage.getItem('token')
    if (this.token) {
      return true; // Allow navigation
    } else {
      console.log('fail')
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
  }
}
