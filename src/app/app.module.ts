import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDirective } from './directives/post.directive';
import { MaiuscoloPipe } from './maiuscolo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    NavbarComponent,
    PostCardComponent,
    UserComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    PostDirective,
    MaiuscoloPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
