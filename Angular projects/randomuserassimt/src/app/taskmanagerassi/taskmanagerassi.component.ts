import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-taskmanagerassi',
  templateUrl: './taskmanagerassi.component.html',
  styleUrls: ['./taskmanagerassi.component.css']
})
export class TaskmanagerassiComponent implements OnInit {

  constructor() {this.log() }

  ngOnInit() {
  }

  taskarray=[
    { task:'task1',duedate:'14/9/2023'},
    { task:'task2',duedate:'30/11/2023'},
    { task:'task3',duedate:'12/3/2023'}
  ]

  log()
  {
    console.log(this.taskarray);
  }
  
  enteredTask(task)
  {
    console.log("-------",task);
  }

 
}


