import { Component, OnInit } from '@angular/core';
import { RandomuserserviceService } from '../services/randomuserservice.service';

@Component({
  selector: 'app-randomuser',
  templateUrl: './randomuser.component.html',
  styleUrls: ['./randomuser.component.css']
})
export class RandomuserComponent implements OnInit {

  constructor(private userservice : RandomuserserviceService) { }

  users : any
  resultsarray :any[]=[]
  imagearray :any[]=[]  //first column
  final :any[]=[]

  ngOnInit() {
    this.accesUsers()
  }

  accesUsers()
  {
    this.userservice.getUsers().subscribe((res :[])=>{
      console.log('results are',res);
      this.users=res
      // console.log('users are',this.users.results);
      this.resultsarray=this.users.results
      console.log('finar users ary is :',this.resultsarray);

      for(let i=0;i<50;i++)
      {
        this.imagearray.push(this.resultsarray[i].picture.medium)
      }
      //console.log(this.imagearray,this.imagearray.length);  //all images 

      // this.final=res;
      // console.log('final arry ---',this.final);
      
    })
    this.imagearray=[];
  }  
}


