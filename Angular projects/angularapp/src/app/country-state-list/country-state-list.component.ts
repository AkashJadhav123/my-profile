import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-country-state-list',
  templateUrl: './country-state-list.component.html',
  styleUrls: ['./country-state-list.component.css']
})
export class CountryStateListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  country : string;
  state : string;

  selectedCountry(value)
  {
    console.log(value.target.value);
    this.country=value.target.value;
  }


  selectedState(value)
  {
    this.state=value.target.value
  }
}
