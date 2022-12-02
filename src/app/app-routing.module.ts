import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "postattivi",
    component: PostAttiviComponent
  },
  {
    path: "postinattivi",
    component: PostInattiviComponent
  },
  {
    path: "users",
    component: UserComponent,
    children: [
      {
        path: ':id',
        component: UserDetailsComponent
      }
    ]
  },
  {
    path: "users/:id",
    component: UserDetailsComponent
  },
  {
    path: "postinattivi/:id",
    component: PostDetailsComponent
  },
  {
    path: "postattivi/:id",
    component: PostDetailsComponent
  },
  {
    path: "**",
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
