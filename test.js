var Rx =require('rxjs');
var observable = Rx.Observable.create(function(observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
console.log("just before subscribe");
observable.subscribe({
  next: x => console.log("got value " + x),
  error: err => console.error("something wrong occurred: " + err),
  complete: () => console.log("done")
});
console.log("just after subscribe");
var observable = Rx.Observable.create(function subscribe(observer) {
//   var id = setInterval(() => {
//     observer.next("hi");
//   }, 1000);
});
 /* 
在你订阅了之后，你将会得到一个Subscription对象，它表示正在进行的执行。大胆的去使用unsubscribe()去终止执行吧。
 */
var subscription = observable.subscribe(x => console.log(x));
setTimeout(() => {
subscription.unsubscribe();        
}, 1000);

var observable1 = Rx.Observable.interval(400);
var observable2 = Rx.Observable.interval(300);

var subscription = observable1.subscribe(x => console.log("first: " + x));
var childSubscription = observable2.subscribe(x => console.log("second: " + x));

subscription.add(childSubscription);

setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 1000);

var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

var observable = Rx.Observable.from([1, 2, 3]);

observable.subscribe(subject); // You can subscribe providing a Subj


var subject3= new Rx.BehaviorSubject(0); // 0 is the initial value

subject3.subscribe({
  next: v => console.log("observerA: " + v)
});

subject3.next(1);
subject3.next(2);

subject3.subscribe({
  next: v => console.log("observerB: " + v)
});

subject3.next(3);