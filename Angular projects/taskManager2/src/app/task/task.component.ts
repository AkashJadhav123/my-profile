import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTask(t,d)
  {
    console.log("--------",t.value,d.value);
    let obj={task:'t.value',date:'d.value'}
  }
  
}

