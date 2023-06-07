import { Component, OnInit } from '@angular/core';
import { RapidapiService } from '../services/rapidapi.service';

@Component({
  selector: 'app-rapidapi',
  templateUrl: './rapidapi.component.html',
  styleUrls: ['./rapidapi.component.css']
})
export class RapidapiComponent implements OnInit {

  //to check valu is object type or simple value to print in html
  isObject(value: any): boolean {
    return typeof value === 'object' && value !== null;
  }
  // Inject the rapid api service
  constructor(private rapidApiService: RapidapiService) 
  {
  }

 result : any=[]
r1 : any=[]
r2 : any=[]
matchInfo :any=[] 
venue : any =[]
ground;
t1 : any=[];

    ngOnInit() {
      this.rapidApiService.getDataYahooFinance().subscribe( res => {
        console.log('getting data from rapid API ', res);
      })
      this.rapidApiService.getDataCrickBuzz().subscribe(res => {
        console.log("------",res);
        
        this.result=res;
        // this.venue=this.result.venueInfo;
        // console.log("venue Info--",this.venue);
        // this.ground=this.venue.country;
        // console.log("Ground name is ==",this.ground);
        this.t1=this.result.matchInfo.team1;
console.log("Player deyails are :",this.t1);

        // for(let val of this.result.typeMatches)
        // {
        //   for(let match of val.seriesMatches) {
        //     if(match.seriesAdWrapper != undefined) {           
        //       for(let matchinfo of match.seriesAdWrapper.matches) 
        //       {
        //         console.log('from crickbuzz', matchinfo.matchInfo);
        //         this.matchInfo = matchinfo.matchInfo;
        //       }
        //     }
        //   }
        // }
      })
    }
  }
