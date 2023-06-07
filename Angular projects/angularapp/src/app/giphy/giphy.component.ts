import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../services/giphy.service';
// import { clear } from 'console';

@Component({
  selector:'app-giphy',
  templateUrl:'./giphy.component.html',
  styleUrls:['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  constructor(private giphy : GiphyService) { }

  ngOnInit() {
  }

  temp : any;
  length=0
  link : string[]=[]
  isButtonClicked: boolean = false;
  title :string;
  callGiphy(gphyTitle)
  {
    //entered value in searchBox
    this.title=gphyTitle.value;
    console.log("Entered title is",this.title);
    
    this.giphy.getGiphys(this.title).subscribe(res=>{
     console.log("Giphys are :",res); 
     this.temp=res; 
     console.log(this.temp);
     
//this.temp.data.length
     for(let i=0 ; i<10;i++)
     {
      this.link.push(this.temp.data[i].images.downsized.url)
    }
      console.log("links--",this.link);
      
      this.isButtonClicked = true;
    });

    this.link=[];
    
  }
}
