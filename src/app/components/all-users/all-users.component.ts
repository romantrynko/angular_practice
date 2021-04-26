import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.data.subscribe(value => this.users = value.userResolve)
  }

  ngOnInit() {
  }

}
