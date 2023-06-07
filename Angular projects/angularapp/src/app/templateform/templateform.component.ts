import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user : User
  isSubmitted = false;

  courseArr : string [] = [
    'Angular', 'HMTL', 'JavaScript'
  ]

  genders = [
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  defaultGenderValue= 'Male';

  OnSubmit(form: NgForm) {
    //console.log('my template form values', form.value);
    this.isSubmitted = true;
    // api/ saveuserData(user: User); // api endpoint 
  

  this.user = new User();
    this.user.userName = form.value.username;
    this.user.email = form.value.email;
    this.user.course = form.value.course;
    this.user.gender = form.value.gender;

    console.log('After bind value to User Object', this.user);
}
}