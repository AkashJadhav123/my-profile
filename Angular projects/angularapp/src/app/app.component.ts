import { Component } from '@angular/core';
import { MyserviceService } from './services/my-service.service';
import { UserService } from './services/user-service.service';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-app';

  age;
  showAge;
  // injecct the service
  constructor(private firebaseservice : FirebaseService,private myService: MyserviceService, private userService: UserService) {
    
    firebaseservice.createPost().subscribe(res=>{
      console.log(res);
    })

    firebaseservice.getPostData().subscribe(res=>{
      console.log("firebase user data",res);
      
    })
    // this.getUserData()
  }

  ageCalculator() {
    this.showAge = this.myService.ageCalculator(this.age)
   }

   getUserData() {
    this.userService.GetUsers().subscribe(data => {
     console.log('user data', data);
    });
   }

   data : string = 'red';
   changecolor() {
    this.data = 'blue';
  }
}


