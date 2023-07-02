import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postUrl = 'https://jsonplaceholder.typicode.com/posts/'
  constructor(private httpClient : HttpClient) { }
  GetAllPosts()
  {
   return this.httpClient.get(this.postUrl)
  }

  GetPostById(id: any)  {

    return this.httpClient.get(this.postUrl + id);
 
   }

   UpdatePostById(id: any, body: any)  {
    return this.httpClient.put(this.postUrl + id, body);
   }

   DeletePostById(id: any) {

    return this.httpClient.delete(this.postUrl+ id);

  }

  Createpost(body : any)
  {
   return this.httpClient.post(this.postUrl,body)
  }

  // public requestDataFromMultipleSorces()   {
  //   let response1 = this.httpClient.get(this.postUrl);
  //   let response2 = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  //   let response3 = this.httpClient.get('https://jsonplaceholder.typicode.com/comments');

  //    forkJoin([response1, response2, response3]).subscribe(res => {
  //     console.log(res);
  //    })
  // }
}
