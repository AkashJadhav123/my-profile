import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-assi',
  templateUrl: './reactive-form-assi.component.html',
  styleUrls: ['./reactive-form-assi.component.css']
})
export class ReactiveFormAssiComponent implements OnInit {

  ngOnInit() {}

  myReactiveForm : FormGroup
  constructor() 
  {
    this.createForm()
  }

 genders = [
  {id : '1', value : 'Male'},
  {id : '2',value : 'Female'}
 ]

  createForm()
  {
    this.myReactiveForm = new FormGroup({
      userDetails : new FormGroup({
        fullName : new FormControl('',[Validators.required]),
        dateOfBirth : new FormControl('',[Validators.required]),
        gender : new FormControl('Male'),
        country : new FormControl('India'),
        phone : new FormControl('',[Validators.required]),
        bio : new FormControl('',[Validators.required,Validators.maxLength(256),Validators.minLength(2)])
      }),
      accountDetails : new FormGroup({
        userName : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(25),Validators.pattern(('^[a-zA-Z0-9]+$'))]),
        email : new FormControl(''),
        password : new FormControl(''),
        confirmPassword : new FormControl(''),
      })
    })
  }

  onSubmit()
  {
    console.log(this.myReactiveForm);
  }
}
