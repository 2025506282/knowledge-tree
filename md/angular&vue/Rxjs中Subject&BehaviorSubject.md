# Rxjs中Subject&BehaviorSubject,ReplaySubject,AsyncSubject 区别
- Subject
<br>    初始化无默认值，发布前必须订阅，否则接受不到值
```
    const sub = new Subject();
    sub.subscribe((res)=>{
        console.log('a');
    })
    sub.next();
    sub.subscribe((res)=>{
        console.log('b');
    })
    // 输出‘a'
```
- BehaviroSubject
<br>    初始化有默认值，发布前不一定需要订阅，他会保留最新的一个值
```
    const sub = new BehaviorSubject(true);
    sub.subscribe((res) => {
      console.log('a');
    })
    sub.next(true);
    sub.subscribe((res) => {
      console.log('b');
    })
    // 输出‘a''a''b'
```
- ReplaySubject
<br>    初始化有默认值，发布前不一定需要订阅，他会保留最新的几个值（自己设置）
```
    const sub = new ReplaySubject(2);
    sub.subscribe((res) => {
      console.log('a:', res);
    })
    sub.next(1);
    sub.next(2);
    sub.next(3);
    sub.subscribe((res) => {
      console.log('b:', res);
    })
    // 输出 a:1,a:2,a:3,b:2,b:3
```
- AsyncSubject
<br>    初始化无默认值，发布前需要订阅，会发布complete 前的最后一个值
- 用法不同
```
    const sub = new AsyncSubject(); 
    sub.subscribe((res) => {
      console.log('a:', res);
    })
    sub.next(1);
    sub.next(2);
    sub.complete();
    sub.subscribe((res) => {
      console.log('b:', res);
    })
    // 输出 a:2,b:2
```
