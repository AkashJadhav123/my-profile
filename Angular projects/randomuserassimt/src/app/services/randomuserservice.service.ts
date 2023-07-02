import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomuserserviceService {

  userUrl='https://randomuser.me/api/?results=50'
  constructor(private httpclient : HttpClient) { }
  getUsers()
  {
   return this.httpclient.get(this.userUrl)
  }
}


