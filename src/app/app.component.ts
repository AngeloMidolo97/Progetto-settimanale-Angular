import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'esercizio-post';

  constructor(private postSrv: PostService ) {}

  ngOnInit(): void {
    this.postSrv.fetchData();
  }
}
