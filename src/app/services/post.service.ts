import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  post!:Post | any;

  constructor() { }

  getPosts() {
    return fetch('http://localhost:3000/posts').then((res):Promise<Post[]> => res.json())
  }

  fetchData() {
    let p = this.getPosts()
    p.then(res => {
      this.posts = res
    });
  }

  getPostFiltrati(active: boolean):Post[] {
    let newArray = this.posts.filter((e) => {
      return e.active == active
    });
    return newArray;
  }

  attivaDB(id:number) {
    let postAttivato = this.posts.find((e)=>e.id==id)

    postAttivato!.active = !postAttivato!.active
    return fetch("http://localhost:3000/posts/"+id, {
      method:"PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postAttivato)
    })
  }

  getData(id:number) {
    return fetch('http://localhost:3000/posts/'+id).then((res): Promise<Post> => res.json())
  }
}
