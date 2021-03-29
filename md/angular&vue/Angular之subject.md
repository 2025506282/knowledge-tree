# Angular之subject
subject一般都是放在service上面的
## Subject
`const test$ = new Subject()`
初始化不带参数，正常的发布订阅
## BehaviorSubject
`const test$ = new BehaviorSubject<boolean>(null)`，
初始化必须要带参数，且初始化就会发布一次，而且他会记录最后一次的值
比如说有两个页面A，B,
```
// A页面
test$.subscribe((res)=>{

})
```
```
// B页面
test$.subscribe((res)=>{

})
```
A页面点击,跳转到B，然后重新跳转到A,此时A页面的值还是会监听到‘A'
```
test$.next('A')
```