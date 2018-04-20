import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.css']
})
export class HostlistenerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
import { Directive, HostListener, ElementRef, Renderer } from "@angular/core";

@Directive({
  selector: "[exeHighlight]"
})
export class ExeHighlight {
  constructor(private el: ElementRef, private renderer: Renderer) {}

  @HostListener("document:click", ["$event"])
  onClick(btn: Event) {
    if (this.el.nativeElement.contains(event.target)) {
      this.highlight("yellow");
    } else {
      this.highlight(null);
    }
  }

  highlight(color: string) {
    this.renderer.setElementStyle(
      this.el.nativeElement,
      "backgroundColor",
      color
    );
  }
}

@Directive({
  selector: "button[counting]" //button[counting]是意味着这个Directive只能用于Button元素
})
export class CountClicks {
  numberOfClicks = 0;

  @HostListener("click", ["$event.target"])
  onClick(btn: HTMLElement) {
    console.log("button", btn, "number of clicks:", this.numberOfClicks++);
  }
}

import {  HostBinding } from "@angular/core";

@Directive({
  selector: "[exeButtonPress]"
  /*  也可以这样设置
 host: {
    role: "button",
    "[class.pressed]": "isPressed"
    element-name: 元素名匹配，如 exe-app
.class: 类名匹配，如 .intro
[attribute]: 属性名匹配，如 [target]
[attribute=value]: 属性名和属性值匹配，如 [target=_blank]
:not(sub_selector): 非(sub_selector) 匹配，如 :not(p)
selector1, selector2: selector1、selector2 匹配，如 div,p
  } */
})
export class ExeButtonPress {
  @HostBinding("attr.role") role = "button";
  @HostBinding("class.pressed") isPressed: boolean;

  @HostListener("mousedown")
  hasPressed() {
    this.isPressed = true;
    console.log("role:", this.role, this.isPressed);
  }
  @HostListener("mouseup")
  hasReleased() {
    this.isPressed = false;
    console.log("role:", this.role, this.isPressed);
  }
}