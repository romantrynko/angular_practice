import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './services/user.service';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllUsersComponent,
    UserComponent,
    UserInfoComponent,
    AllPostsComponent,
    PostComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
