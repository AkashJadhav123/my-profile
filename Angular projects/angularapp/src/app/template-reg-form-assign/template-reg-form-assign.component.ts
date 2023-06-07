import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-reg-form-assign',
  templateUrl: './template-reg-form-assign.component.html',
  styleUrls: ['./template-reg-form-assign.component.css']
})
export class TemplateRegFormAssignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flag :boolean =true;
  lengh :any
  onSubmit(form : NgForm)
  {
    console.log(form);
    this.lengh= form.value.firstname.length
    console.log("Length is=",this.lengh);
    if(this.lengh<3 || this.lengh>=10)
    {
      this.flag=false
    }
  }

}
