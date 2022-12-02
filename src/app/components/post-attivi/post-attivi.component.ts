import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postSrv:PostService) {
  }

  ngOnInit(): void {
    this.posts = this.postSrv.getPostFiltrati(true)
  }

  onActivePost(id: number) {
    this.postSrv.attivaDB(id).then(res => {
      this.posts = this.postSrv.getPostFiltrati(true)
    });
  }


}
