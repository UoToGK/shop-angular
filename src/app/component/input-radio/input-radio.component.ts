import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.css']
})
export class InputRadioComponent implements OnInit {
@Input() on:boolean=false;//开关
  constructor() { }

  ngOnInit() {
  }
method(){
  this.on=!this.on;
  console.log(this.on)
}
}
