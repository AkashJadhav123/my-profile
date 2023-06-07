import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  firebaseUrl='https://angular-32066-default-rtdb.firebaseio.com/';

  constructor(private httpClient : HttpClient) { }
  createPost()
  {
    let postData = {
      title : 'This is angular 8 crud with firebase',
      content : 'This is test firebase'
    }
   return this.httpClient.post(this.firebaseUrl + 'posts.json',postData)
  }
  getPostData()
  {
   return this.httpClient.get(this.firebaseUrl + 'posts.json')
  }
}
