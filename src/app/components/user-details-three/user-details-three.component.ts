import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-details-three',
  templateUrl: './user-details-three.component.html',
  styleUrls: ['./user-details-three.component.css']
})
export class UserDetailsThreeComponent implements OnInit {

  @Input() user: UserModel

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(value => {
      this.router.getCurrentNavigation().extras.state
    })
  }

  ngOnInit() {
  }

}
