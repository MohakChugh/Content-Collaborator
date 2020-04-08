import { Component, OnInit } from '@angular/core';
import * as axios from 'axios';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  blogs: any;
  constructor() { }

  ngOnInit() {
    axios.default.get('http://localhost:3000/feed')
      .then(Response => {
        this.blogs = Response.data.message;
        console.log(this.blogs);
      })
      .catch(err => console.log(err));
  }

}
