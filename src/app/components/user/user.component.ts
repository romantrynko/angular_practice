import { UserModel } from '../../models/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: UserModel

  constructor() { }

  ngOnInit() {
  }

}
