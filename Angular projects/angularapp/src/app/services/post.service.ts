import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
