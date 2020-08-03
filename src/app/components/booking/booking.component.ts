import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  size: NzButtonSize = 'large';

  //Select trip type
  selectedType = 'Round-trip';
  typeData = ['Round-trip', 'One-way', 'Multi-city', 'Trip Builder'];

  //Selects class type
  selectedClass = 'Economy';
  selectedClass2 = 'Economy';
  selectedClass3 = 'Economy';
  classData = ['Economy', 'Premium Economy', 'Business', 'First Multiple'];

  oneWay = false
  multiCity = false

  selectFrom = []
  selectTo = []
  selectFrom2 = []
  selectTo2 = []
  selectFrom3 = []
  selectTo3 = []
  temp1 = null
  temp2 = null

  
  //Travelers quantity inputs 
  demoValue1 = 1;
  demoValue2 = 0;
  demoValue3 = 0;
  demoValue4 = 0;
  demoValue5 = 0;
  demoValue6 = 0;

  totalTravelers = 1;
  totalBags = 0;

  dateFormat = 'yyyy/MM/dd';

  //Array with cityData(normally come from backend)
  cityData = [
    {
      cityID: 'MIA', 
      cityName:'MIAMI'
    }, 
    {
      cityID: 'SNU',
      cityName:'SANTA CLARA'
    },
    {
      cityID: 'HAV', 
      cityName:'HAVANA'
    },
    {
      cityID: 'SAN', 
      cityName:'SAN DIEGO'
    } 
  ]

  
  constructor() { }

  ngOnInit(): void {
  }
  //When user pick one-way or multi-city on travel type
  TypeChange(value: any): void {
    //console.log(`onTypeChange: ${value}`);
    if(value == 'One-way'){
      this.oneWay = true
    }
    if(value == 'Multi-city'){
      this.multiCity = true
    }
    if(value == 'Round-trip'){
      this.multiCity = false
      this.oneWay = false
    }
  }

  ClassChange(value: any): void {
    console.log(`onClassChange: ${value}`);
  }

  onSelectChange(value: any): void {
    console.log(`onClassChange: ${value}`);
  }

  //When user select quantity of travelers
  TravelersChange(value: any): void {
    //console.log(`onClassChange: ${value}`);
    this.totalTravelers = this.demoValue1 + this.demoValue2 + this.demoValue3 + this.demoValue4;
  }

  //When user select quantity of bags
  BagsChange(value: any): void {
    //console.log(`onClassChange: ${value}`);
    this.totalBags = this.demoValue5 + this.demoValue6;
  }

  //Swap functions round trip and multi city
  SwapSelect() {
    if(this.selectFrom.length != 0 || this.selectTo.length != 0){
      this.temp1 = this.selectFrom;
      this.temp2 = this.selectTo;
      this.selectFrom = this.temp2
      this.selectTo = this.temp1
    }    
  }

  SwapSelect2() {
    if(this.selectFrom2.length != 0 || this.selectTo2.length != 0){
      this.temp1 = this.selectFrom2;
      this.temp2 = this.selectTo2;
      this.selectFrom2 = this.temp2
      this.selectTo2 = this.temp1
    }    
  }

  SwapSelect3() {
    if(this.selectFrom3.length != 0 || this.selectTo3.length != 0){
      this.temp1 = this.selectFrom3;
      this.temp2 = this.selectTo3;
      this.selectFrom3 = this.temp2
      this.selectTo3 = this.temp1
    }    
  }

}
