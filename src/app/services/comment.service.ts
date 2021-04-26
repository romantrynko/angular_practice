import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentModel } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getCommentsOfPost(id: string) {
    return this.http.get<CommentModel[]>(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}
