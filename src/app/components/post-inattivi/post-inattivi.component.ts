import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postSrv: PostService) {

  }

  ngOnInit(): void {
    this.posts = this.postSrv.getPostFiltrati(false);
  }

  onActivePost(id: number) {
    this.postSrv.attivaDB(id).then(res => {
      this.posts = this.postSrv.getPostFiltrati(false)
    });
  }
}
