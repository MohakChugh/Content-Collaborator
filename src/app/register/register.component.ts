import { Component, OnInit } from '@angular/core';
import * as axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  isRegistered = false;
  message: string;
  data: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log(this.email, this.password, this.name);
    this.data = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    axios.default.post('http://localhost:3000/register', this.data)
      .then(response => {
        console.log(response);
        this.message = response.data.message;
        this.isRegistered = true;
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 5000);
      })
      .catch(err => console.log(err));
  }

}
