import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpass-generator',
  templateUrl: './newpass-generator.component.html',
  styleUrls: ['./newpass-generator.component.css']
})
export class NewpassGeneratorComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
  }


  str=''
  length=0
  onChangeLenth(l : string)
  {
    
  }

  
  letters='abcdefghijklmnopqrstuvwxyz'
  usingletters()
  {

  }

}
