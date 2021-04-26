import { AppComponent } from './app.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserResolveService } from './services/user-resolve.service';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostsResolveService } from './services/posts-resolve.service';
import { UserComponent } from './components/user/user.component';
import { UserDetailsTwoComponent } from './components/user-details-two/user-details-two.component';
import { UserDetailsThreeComponent } from './components/user-details-three/user-details-three.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: AllUsersComponent,
    resolve: { userResolve: UserResolveService },
    children: [
      // {
      //   path: 'details/:id',
      //   component: UserInfoComponent
      // }
      // {
      //   path: 'details/:id',
      //   component: UserDetailsTwoComponent
      // }
      {
        path: 'details/:id',
        component: UserDetailsThreeComponent
      }
    ]
  },
  {
    path: 'posts',
    component: AllPostsComponent,
    resolve: { postsResolve: PostsResolveService }
  },
  {
    path: 'comments',
    component: CommentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
