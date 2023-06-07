import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/my-service.service';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css']
})
export class Service1Component implements OnInit {

  constructor(private objMyserviceService: MyserviceService) { }

  ngOnInit() {
  }

  print()
  {
    console.log("hiii");
    
    this.objMyserviceService.PrintFile();
  }

}
