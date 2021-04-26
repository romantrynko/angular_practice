import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
