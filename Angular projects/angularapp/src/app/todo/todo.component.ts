import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todo : TodoService) { }

  ngOnInit() {
  }

  createTodo()
  {
    let todo={
      id: new Date().getTime(),
      title : 'Akash Jadhav'
    }
    this.todo.create(todo).subscribe(res=>{
      console.log("todo create",res);
    })
  }
}
