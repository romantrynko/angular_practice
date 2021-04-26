import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() user: UserModel

  constructor(
    private activatedRouter: ActivatedRoute,
    private userService: UserService
  ) {
    this.activatedRouter.params.subscribe(params => {
      this.userService.getUserById(params.id).subscribe(value => this.user = value)
    })
  }

  ngOnInit() {
  }

}
