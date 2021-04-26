import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-details-two',
  templateUrl: './user-details-two.component.html',
  styleUrls: ['./user-details-two.component.css']
})
export class UserDetailsTwoComponent implements OnInit {

  @Input() user: UserModel

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe(value => {
      const { user } = this.router.getCurrentNavigation().extras.state
      this.user = user
    })
  }

  ngOnInit() {
  }

}
