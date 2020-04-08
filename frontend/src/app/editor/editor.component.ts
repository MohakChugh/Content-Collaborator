import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import * as axios from 'axios';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  htmlContent = `<div style="text-align: center;"><span style="font-size: 25px; background-color: transparent; --darkreader-inline-bgcolor:transparent;" data-darkreader-inline-bgcolor=""><b><u>Main Heading</u></b></span></div><div style="text-align: justify;"><span style="font-size: 25px; background-color: transparent; --darkreader-inline-bgcolor:transparent;" data-darkreader-inline-bgcolor=""><b><u><br></u></b></span></div><div style="text-align: left;"></div><div style="text-align: left;"><span style="font-size: 25px;"></span></div><div style="text-align: left;"><span style="font-size: 25px;"></span></div><div style="text-align: left;"><span style="font-size: 15px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;</span></div><div style="text-align: left;"><span style="font-size: 15px;">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&nbsp;</span></div><div style="text-align: left;"><span style="background-color: transparent; font-size: 15px; --darkreader-inline-bgcolor:transparent;" data-darkreader-inline-bgcolor="">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.&nbsp;</span><br></div><div style="text-align: left;"><span style="font-size: 15px;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span><br></div><div style="text-align: center;"><span style="font-size: 25px;"><b>Sub-Heading</b></span></div><div style="text-align: left;"><div style=""><span style="font-size: 15px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed viverra ipsum nunc aliquet. Proin fermentum leo vel orci porta non pulvinar neque. Libero nunc consequat interdum varius. Tempus urna et pharetra pharetra massa massa. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Ultrices vitae auctor eu augue ut lectus arcu bibendum. Enim sed faucibus turpis in. Viverra aliquet eget sit amet tellus. Ante in nibh mauris cursus mattis molestie a iaculis at. Cursus mattis molestie a iaculis.</span></div><div style=""><br></div><div style=""><span style="font-size: 15px;">Bibendum ut tristique et egestas quis. Ac auctor augue mauris augue. Malesuada proin libero nunc consequat interdum varius sit. Nulla pellentesque dignissim enim sit amet. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Sodales ut etiam sit amet nisl purus in mollis nunc. Auctor elit sed vulputate mi sit amet mauris commodo quis. Ac odio tempor orci dapibus ultrices in. Id diam maecenas ultricies mi eget. Posuere sollicitudin aliquam ultrices sagittis orci a. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique.</span></div></div><div style="text-align: left;"><span style="font-size: 25px;"></span></div><div style="text-align: center;"><b style="background-color: transparent; font-size: 1rem; --darkreader-inline-bgcolor:transparent;" data-darkreader-inline-bgcolor=""><u></u></b></div>`;
  socket: any;
  constructor() { }

  ngOnInit() {
    this.socket = io('http://localhost:8080');
    this.socket.on('change', data => {
      this.htmlContent = data;
      console.log(this.htmlContent);
    });
  }


  fetch($event) {
    this.socket.emit('update', this.htmlContent);

    this.socket.on('change', data => {
      this.htmlContent = data;
      console.log(this.htmlContent);
    });
  }

  logger() {
    axios.default.post('http://localhost:3000/html', { html: this.htmlContent })
      .then((result) => {
        console.log(result);
        alert('Blog added to the database');
      }).catch((err) => {
        console.log(err);
      });

  }

}
