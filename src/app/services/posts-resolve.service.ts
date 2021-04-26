import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post.model';
import { PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<PostModel[]> {

constructor(private postService: PostsService) { }

  resolve(): Observable<PostModel[]> {
    return this.postService.getPosts()
  }
}
