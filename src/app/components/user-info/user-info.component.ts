import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  id: number


  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params.subscribe(value => {
      console.log(value, 'params');
      this.id = value.id
    })

    this.activatedRouter.queryParams.subscribe(value => {
      console.log(value, 'queryParams');
    })
   }


  ngOnInit() {
  }

}
