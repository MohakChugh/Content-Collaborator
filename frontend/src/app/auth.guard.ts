import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: any;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  constructor(private http: HttpClient) { }

  CanActivate(): boolean {
    // if logged in
    this.token = localStorage.getItem('token');
    console.log(this.token);
    if (!this.token) {
      return false;
    }
    this.http.post('http://localhost:3000/validateToken', this.token)
      .subscribe(response => {
        console.log(`Token is: ${this.token}`);
        console.log(response);
        return true;
      });
    // else
    return false;
  }
}
