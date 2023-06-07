import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/my-service.service';

@Component({
  selector: 'app-service2',
  templateUrl: './service2.component.html',
  styleUrls: ['./service2.component.css']
})
export class Service2Component implements OnInit {

  constructor(private objMyserviceService : MyserviceService) 
  {
    
  }

  ngOnInit() {
  }

  print()
  {
    this.objMyserviceService.PrintFile()
  }

}
