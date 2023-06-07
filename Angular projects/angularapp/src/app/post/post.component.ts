import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postService : PostService) { }

  ngOnInit() {
   
   
   this.postService.GetPostById(77).subscribe(res=>{
    console.log("get post by id",res);
    
   })
   this.getAllPosts()
   this.deletePostById()
   this.updatePost()
   this.createPost()
  }
  results : any
  getAllPosts()
  {
    this.postService.GetAllPosts().subscribe(res=>{
       this.results=res;
      console.log("get all posts",this.results);
     })
  }

  updatePost() {

    let data = {

      id: new Date().getTime(),

      title: 'This is updated title'

    }
    this.postService.UpdatePostById(1, data).subscribe(res => {

      console.log('data updated successfully', res);

    })
  }

  deletePostById() {

    this.postService.DeletePostById(1).subscribe(res => {

      console.log('post deleted successfully', res);

    })
  }

   createPost()
   {
    let body={
      id : new Date().getTime(),
      title : 'This is new post',
      body : 'This is the test post method of httpclient'
    }
    this.postService.Createpost(body).subscribe(res=>
      {
        console.log("Post created successfully",res);
        
      })
   }
}

