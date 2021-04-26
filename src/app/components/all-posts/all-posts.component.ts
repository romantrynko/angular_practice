import { PostModel } from '../../models/post.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[]

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.data.subscribe(value => this.posts = value.postsResolve)
   }

  ngOnInit() {
  }

}
