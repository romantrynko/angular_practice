import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(users => this.users = users)
  }

  ngOnInit() {
  }

}
