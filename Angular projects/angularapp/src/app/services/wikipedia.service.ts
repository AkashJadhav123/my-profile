import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private httpClient : HttpClient) { }

  wikipediaUrl1='https://test.wikipedia.org/w/api.php?action=action&format=json&maxlag=&list=search&formatversion=2&srsearch=meaning&srwhat=text';
  wikipediaUrl2='https://test.wikipedia.org/w/api.php?action=query&format=json&list=search&formatversion=2&srsearch=meaning&srwhat=text';
  wikipediaUrl3='https://test.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=searchedValue&origin=*';

  getData(search)
  {
    let searchedValue=search.value
    let parameters=new HttpParams;
    parameters.append('action' , 'action'),
    parameters.append('format','json'),
    parameters.append('list','search'),
    parameters.append('utf8', '1'),
    parameters.append('srsearch', 'searchedValue'),
    parameters.append('origin','*')

   return this.httpClient.get(this.wikipediaUrl2,{params : parameters})


  }

}
