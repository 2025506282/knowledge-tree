# rxjs学习?

### Subject与BehaviorSubject区别？

`BehaviorSubject` 默认必须有一个值，初始化的时候就会调用,而且获取最新消息，每一次next('1')与next('2')
`Subject` 默认没有值，初始化不会调用
