import { Component, OnInit } from '@angular/core';
import { course } from './classOfCourses/course';


@Component({
  selector: 'app-structural-directives-ass',
  templateUrl: './structural-directives-ass.component.html',
  styleUrls: ['./structural-directives-ass.component.css']
})
export class StructuralDirectivesAssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

v :boolean;
  onChange(event )
  {
    console.log(event.target.checked);
    this.v=event.target.checked
  }


  courses : String []=[]
   temp :string;

   


 textentered(value)
 {

 this.temp=value.target.value;
 this.courses.push(this.temp)
  console.log(this.courses);
  
 }

 searchValue:string = '';
 clearSearch() {
   this.searchValue = '';
 }

}










