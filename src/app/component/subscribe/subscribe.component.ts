import { Component, OnInit, OnChanges, Input, SimpleChange, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
  /* 
  针对有变化的组件去检测,当使用 OnPush 策略的时候，若输入属性没有发生变化，组件的变化检测将会被跳过

  Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
  用法:
  const object1 = {
  a: 1,
  b: 2,
  c: 3
};
const object2 = Object.assign({c: 4, d: 5}, object1);
console.log(object2.c, object2.d);
如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。
   */
})
export class SubscribeComponent implements OnInit {
  constructor() {}
  name: string = "Semlinker";
  ngOnInit() {}
  events = (function() {
    //实现订阅者发布者模式
    var topics = {};
    var hOP = topics.hasOwnProperty;

    return {
      subscribe: function(topic: any, listener: any) {
        // 如果topic类型不存在，则创建
        if (!hOP.call(topics, topic)) topics[topic] = [];

        // 添加listener
        var index = topics[topic].push(listener) - 1;

        // 返回对象用于移除listener
        return {
          remove: function() {
            delete topics[topic][index];
          }
        };
      },
      publish: function(topic: any, info: any) {
        if (!hOP.call(topics, topic)) return;
        topics[topic].forEach(function(item: any) {
          item(info != undefined ? info : {});
        });
      }
    };
  })();
  /* 当组件的任何输入属性发生变化的时候，我们可以通过组件生命周期提供的钩子 ngOnChanges 来捕获变化的内容 
   需要注意的是，如果在组件内手动改变输入属性的值，ngOnChanges 钩子是不会触发的
   变化检测总是从根组件开始。上面的例子中，ParentComponent 组件会比 ChildComponent 组件更早执行变化检测。
   因此在执行变化检测时 ParentComponent 组件中的 name 属性，会传递到 ChildComponent 组件的输入属性 text 中。
   此时 ChildComponent 组件检测到 text 属性发生变化，因此组件内的 p 元素内的文本值从空字符串 变成 'Semlinker' 。
   这虽然很简单，但很重要。另外对于单次变化检测，每个组件只检查一次。
   */
}//我们能否只针对那些有变化的组件才执行变化检测或灵活地控制变化检测的时机呢 ？
@Component({
  selector: "exe-ngchange",
  template: `
     <p>hello {{ text }}</p>
    `
})
export class NgOnChangeComponent implements OnChanges {
  @Input() text: string;

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    console.dir(changes["text"]);
  }
}