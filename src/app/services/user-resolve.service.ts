import { UserModel } from '../models/user.model';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<UserModel[]> {

  constructor(private userService: UserService) {
  }

  resolve(): Observable<UserModel[]> {
    return this.userService.getUsers()
  }

}
