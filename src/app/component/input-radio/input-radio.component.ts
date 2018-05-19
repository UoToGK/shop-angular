import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements OnInit {
on:boolean=false;
  constructor() { }

  ngOnInit() {
  }
method(){
  this.on=!this.on;
  console.log(this.on)
}
}
