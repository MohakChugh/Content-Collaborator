import { Component, OnInit } from '@angular/core';
import * as axios from 'axios';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  username: string;
  password: string;
  htmlContent = `<br><br>ENTER TEXT HERE<br><br>`;
  socket: any;
  constructor() { }

  ngOnInit() {
  }

  logger() {
    axios.default.post('https://website-backend-mohak.herokuapp.com/blog',
      {
        html: this.htmlContent,
        username: this.username,
        password: this.password
      })
      .then((result) => {
        console.log(result);
        alert('Blog added to the database');
      }).catch((err) => {
        console.log(err);
      });
  }
}
