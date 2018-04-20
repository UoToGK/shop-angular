import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  SimpleChanges
} from "@angular/core";

@Component({
    selector: 'app-updateview',
  templateUrl: './updateview.component.html',
  styleUrls: ['./updateview.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateviewComponent  {
 
}
/**
 * @description 
 * @author xiaobin
 * @export
 * @class ViewSonComponent
 * @implements {OnInit}
 */
@Component({
  selector: "exe-gg",
  template: `
     儿子
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSonComponent implements OnInit {
  @Input() counter: number = 0;
 count:number=0;
  constructor(private cdRef: ChangeDetectorRef) {
    console.log("constructor", this.count++);
  }
ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
   console.log("ngOnChanges", this.count++);
}
  ngOnInit() {
    setTimeout(() => {
      this.counter++;
      this.cdRef.markForCheck();
    }, 1000);
    console.log("ngOnInit", this.count++);
  }
  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
   console.log("ngAfterViewChecked", this.count++);
  }
  /*
  变化检测的原理：Angular 应用是一个响应系统，变化检测总是从根组件到子组件这样一个从上到下的顺序开始执行，
  它是一棵线性的有向树，默认情况下，变化检测系统将会走遍整棵树，但我们可以使用 OnPush 变化检测策略，
  在结合 Observables 对象，
  进而利用 ChangeDetectorRef 实例提供的方法，来实现局部的变化检测，最终提高系统的整体性能
  */
 ngAfterContentChecked() {
   //Called after every check of the component's or directive's content.
   //Add 'implements AfterContentChecked' to the class.
    console.log("ngAfterContentChecked", this.count++);
 }
 ngAfterContentInit() {
   //Called after ngOnInit when the component's or directive's content has been initialized.
   //Add 'implements AfterContentInit' to the class.
   console.log("ngAfterContentInit", this.count++);
 }
 ngDoCheck() {
   //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
   //Add 'implements DoCheck' to the class.
   console.log("ngDoCheck", this.count++);
 }
 ngOnDestroy(): void {
   //Called once, before the instance is destroyed.
   //Add 'implements OnDestroy' to the class.
   console.log("ngOnDestroy", this.count++);
 }
}
