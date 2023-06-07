import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RapidapiService {

   yahooUrl = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete';
   yahooHeaders = new HttpHeaders({
    'X-RapidAPI-Key': 'c2b090dad2mshb508a79e34cddcdp181128jsn4d12dd32b177',
    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
   })
  //  cricbuzzurl='https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent';
  cricbuzzurl='https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/41881'
   cricbuzzHeaders = new HttpHeaders({
    'X-RapidAPI-Key': '9c468f71admsh53e9e780cbcb74bp136398jsn675cc9300f2e',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
   })

   constructor(private httpClient: HttpClient) { }

  getDataYahooFinance() : Observable<any>  
  {
    let params = new HttpParams();
    params=params.append('q','tesla'),
    params=params.append('region','US')
   return this.httpClient.get(this.yahooUrl, {headers: this.yahooHeaders,params : params})
  }

  getDataCrickBuzz()
  {
   return this.httpClient.get(this.cricbuzzurl,{headers : this.cricbuzzHeaders});
  }
}
