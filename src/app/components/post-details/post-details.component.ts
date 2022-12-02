import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post!: Post
  id!: number

  constructor(private router:ActivatedRoute ,private postSrv: PostService) {

  }

  ngOnInit():void {
    this.router.params.subscribe(params => {
      const id = +params['id']
      let r = this.postSrv.getData(id)
      r.then((e) => {
        this.post = e;
      })
    });
  }

}
