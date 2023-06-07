// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoService {
// apiUrl : string='http://localhost:3000/todos'
//   constructor(private httpClient : HttpClient) { }

//   //create - post
//   create(data)
//   {
//     let API_URL=`${this.apiUrl}`

//     return this.httpClient.post(API_URL,data)
//   }

//   //read - get
//   list()
//   {
//     return this.httpClient.get(this.apiUrl)
//   }
// }
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'

})

export class TodoService {

  apiUrl: string = 'http://localhost:3000/todos';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClinet: HttpClient) { }
 
  // create - post
  create(data: any) : Observable<any> {

    let API_URL = `${this.apiUrl}`;
    return this.httpClinet.post(API_URL, data);
  }
  // read - get
  list() {

    return this.httpClinet.get(`${this.apiUrl}`);

  }

}