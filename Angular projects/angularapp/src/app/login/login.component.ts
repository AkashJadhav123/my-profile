import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,private firebaseService : FirebaseService ){ 
  }

  ngOnInit() {
    this.firebaseService.getPostData().subscribe(res=>{
      console.log('get data from firebase',res);
    })
  }

  GotoProduct(){
    this.router.navigate(['product']);
  }
}
