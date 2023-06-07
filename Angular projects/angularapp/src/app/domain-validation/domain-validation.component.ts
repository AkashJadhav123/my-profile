import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-domain-validation',
  templateUrl: './domain-validation.component.html',
  styleUrls: ['./domain-validation.component.css']
})
export class DomainValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flag =true;
  validemail :string='';
  onSubmit( form : NgForm)
{
  console.log('My template form values',form);
  this.validemail=form.value.email;
  if(this.validemail==null)
  {
    this.flag=false
  }
}

}
