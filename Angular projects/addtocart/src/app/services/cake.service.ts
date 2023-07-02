import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private httpclient : HttpClient) { }
  cakeurl='https://the-birthday-cake-db.p.rapidapi.com/';
  cakeheader=new HttpHeaders({
    'X-RapidAPI-Key': '9c468f71admsh53e9e780cbcb74bp136398jsn675cc9300f2e',
    'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
  })

  getcakes()
  {
   return this.httpclient.get(this.cakeurl,{headers : this.cakeheader})
  }
}
