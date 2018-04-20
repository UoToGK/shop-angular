import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template:`<h1>hello world main</h1>
<div>
  <router-outlet></router-outlet>
</div>`,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
