import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  //提示信息
@Input() msg:string=`看源码是为了解决问题。开源项目的源代码并没有什么非常特殊的地方，也都是普通的代码`;
@Input() title:string=`提示信息框`;//标题
@Input() cancelText:string=`取消`;
@Input() successText:string=`确定`;
  constructor() { }

  ngOnInit() {
  }
private cancel(){
  //执行取消逻辑

}
private success(){
//执行确定逻辑

}
}
