import { Component, OnInit } from '@angular/core';
import { Person } from '../../domian/model/mock.data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
user:Person|any={};
  constructor() { }

  ngOnInit() {
    
  }

}
