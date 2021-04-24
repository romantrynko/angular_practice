import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'users',
  //   component: AllUsersComponent,
  //   children: [
  //     {
  //       path: ':id',
  //       component: UserInfoComponent
  //     }
  //   ]
  // }
  { path: 'users', component: AllUsersComponent },
  { path: 'users/:id', component: UserInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
