import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import {  ContentChild, AfterContentInit } from "@angular/core";
@Component({
  selector: "exe-child",
  template: `
      <p>Child Component</p>  
    `
})
export class ChildComponent {
  name: string = "child-component";
}

@Component({
  selector: "exe-parent",
  template: `
      <p>Parent Component</p>  
      <ng-content></ng-content>
    `
}) /*如果不加<ng-content></ng-content>,那么在父组件(
  <exe-parent>
  <exe-child></exe-child>
</exe-parent>)不会显示子组件
在 host 元素 <opening> 和 </closing> 标签中被称为 Content Children
在组件的模板中定义的内容，它是组件的一部分，被称为 View Children
*/
export class ParentComponent implements AfterContentInit {
  @ContentChild(ChildComponent) childCmp: ChildComponent;
  @ContentChildren(ChildComponent) childCmps: QueryList<ChildComponent>;
  ngAfterContentInit() {
    console.log(this.childCmp, this.childCmps);
  }
}
@Component({
  selector: "exe-son",
  template: `
      <p>Son Component</p>  
    `
})
export class SonComponent {
  name: string = "son-component";
}