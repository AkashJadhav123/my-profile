import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  // DI 
  constructor(private postService: PostService) { }
  arrPosts : Post[]= [];
  ngOnInit() {
    this.postService.GetAllPosts().subscribe((res: Post[])=> {
      console.log('from post list', res);
      this.arrPosts = res;
    })
  }
}
