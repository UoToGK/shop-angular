import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  myGroup: any;
  myControl: any;
  constructor() { }
  curContact={
    nameGroup: {
      firstname: '',
      lastname: '',
    },
    addressGroup: { 
      street: '', 
      zip: '',
      city: ''
    } 
  }
  ngOnInit() {
    this.myControl = new FormControl('Semlinker');
    this.myGroup = new FormGroup({
      name: new FormControl('Semlinker'),
      location: new FormControl('China, CN')
    });
    
  }
  @ViewChild('firstname') 
  firstname:TemplateRef<any>;
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log( this.firstname );
    console.log(this.curContact.nameGroup.firstname);
  }

}
export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  }
}