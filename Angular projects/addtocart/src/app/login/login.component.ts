import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CakeService } from '../services/cake.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mylogin : FormGroup;
  imagearray :any[] =[];
  imageurlarry :any[]=[];
  isButtonClicked :boolean=false;
  constructor(private cakeservice : CakeService) {
    this.createLogin()
   }

  ngOnInit() {
  }

  createLogin()
  {
    this.mylogin=new FormGroup({
      'username' : new FormControl('',[Validators.required]),
      'password' : new FormControl('',[Validators.required])
    })
  }

  onsubmit()
  {
    if(this.mylogin.status=='INVALID')
    {

    }
    console.log('Login credentials are',this.mylogin);
    this.cakeservice.getcakes().subscribe((res : any)=>{
      console.log('All cakes',res);
      this.imagearray=res;
      console.log('image array is :',this.imagearray);
      // console.log(ṛes.image);
      for(let i=0;i<=20;i++)
      {
      // this.imageurlarry=this.imagearray[i].image
        this.imageurlarry.push(this.imagearray[i].image)
      }
      console.log('image url array is',this.imageurlarry);
      
    })
    this.imageurlarry=[];
  }
}
