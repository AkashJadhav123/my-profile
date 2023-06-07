import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  
  userName;
  mobileNo;
  utiliti : utilityClass;
  
  // inject service
  constructor(private utilityService: UtilityService) {
    this.utilityService.userName.subscribe(res => {
      console.log('res from comp1', res);
      this.userName = res;
    })
  }

  ngOnInit() {}
  
  updateUserName(uname) {
    console.log(uname.value);3
    this.userName = uname.value;
    this.utilityService.userName.next(uname.value);
  }

  // updateUserName(uname,umono) {
  //   // this.utiliti = new utilityClass
  //   this.utiliti.userName=uname.value;
  //   this.utiliti.moNo=umono.value;
  //   console.log("value in object",this.utiliti);
    
  // }

}
