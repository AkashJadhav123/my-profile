import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private httpclient : HttpClient) { }
  //https://api.giphy.com/v1/stickers/search?api_key=jd3PQeuBA7xplOtAWRYiUIdlYAMwIKif&q=chennai+super+kings&limit=10&offset=0&rating=g&lang=en
  giphyUrl='https:/api.giphy.com/v1/gifs/search';

  getGiphys(search)
  {
   let param =new HttpParams();
   param= param.append('api_key','2yCqxp49V25HEQpOinB55WKQm8xE2E3Q');
   param= param.append('q',search);
   param= param.append('limit','12');
   param= param.append('rating','g');
   return this.httpclient.get(this.giphyUrl,{params : param});
   
  }
}
