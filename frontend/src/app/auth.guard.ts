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
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if logged in
    this.token = localStorage.getItem('token');
    if (!this.token) {
      return false;
    } else {
      this.http.post('http://localhost:3000/validateToken', this.token)
        .subscribe(res => {
          this.response = res;
          if (this.response.data.error === false && this.response.data.error === true) {
            console.log(`Token is: ${this.token}`);
            console.log(this.response);
            return true;
          } else {
            this.router.navigateByUrl('/login');
            console.log('token not validated');
            return false;
          }
        });
    }
  }

  constructor(private http: HttpClient, private router: Router) { }

}
