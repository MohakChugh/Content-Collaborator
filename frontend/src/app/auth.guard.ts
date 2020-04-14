import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: any;
  response: any;
  result: any;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if logged in
    console.log('Inside Auth Guard')
    this.token = localStorage.getItem('token');
    console.log(this.token);

    if (!this.token) {
      return false;
    } else {
      return true;
    }
  }

  constructor(private http: HttpClient, private router: Router) { }

}
