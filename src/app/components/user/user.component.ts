import { UserModel } from '../../models/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: UserModel

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  goToUser(id: string): void {
    this.router.navigate(['details', id], {
      relativeTo: this.activatedRouter,
      state: { userId: id }
    })
  }

  ngOnInit() {
  }

}
