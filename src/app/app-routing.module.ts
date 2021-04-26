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
  {
    path: 'users',
    component: AllUsersComponent,
    resolve: { userResolve: UserResolveService }
  },
  {
    path: 'users/:id',
    component: UserInfoComponent
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
