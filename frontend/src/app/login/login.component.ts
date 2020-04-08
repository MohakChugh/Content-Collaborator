import { Component, OnInit } from '@angular/core';
import * as axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  email: any;
  password: any;
  isLoggedIn = false;
  message: string;
  token: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    axios.default.post('http://localhost:3000/login', {
      email: this.email,
      password: this.password
    })
      .then(response => {
        console.log(response);
        this.isLoggedIn = true;
        this.token = response.data.token;
        localStorage.setItem('token', this.token);
        this.router.navigateByUrl('/editor');
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        console.log('Login function runned!');
      });
  }
}
