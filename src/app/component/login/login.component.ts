import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReflectiveInjector } from '@angular/core';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  @ViewChild("myInput", { read: ViewContainerRef })
  myInput2: ViewContainerRef;
  @ViewChild("tpl") tplRef: TemplateRef<any>;
  @ViewChild("tpl") tpl: TemplateRef<any>;
  @ViewChild("tpl", { read: ViewContainerRef })
  tplVcRef: ViewContainerRef;
  constructor(protected router: Router) {}

  ngOnInit() {
    var source = Observable.of("Semlinker", "Lolo");

    source.subscribe({
      next: function(value) {
        console.log(value);
      },
      complete: function() {
        console.log("complete!");
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class..
    // 页面中的<!--template bindings={}-->元素
    let commentElement = this.tpl.elementRef.nativeElement;
    // 创建内嵌视图
    let embeddedView = this.tpl.createEmbeddedView(null);
    // 动态添加子节点
    embeddedView.rootNodes.forEach(node => {
      commentElement.parentNode.insertBefore(node, commentElement.nextSibling);
    });
    console.log(this.tplVcRef, this.tpl);
    this.tplVcRef.createEmbeddedView(this.tplRef);
  }
  private login() {
    this.router.navigate(["/app/home"]);
  }
}
