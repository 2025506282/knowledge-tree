# Rxjs中Subject&BehaviorSubject区别
- 用法不同
```
const sub = new Subject();
const bSub = new BehaviorSubject<boolean>(true);
```
BehaviorSubject初始化有一个默认值，且初始化时默认就会发布
- 保留
BehaviorSubject会保留最后一次的更新值