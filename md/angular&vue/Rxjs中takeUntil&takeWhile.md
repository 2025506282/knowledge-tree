# Rxjs中takeUntil&takeWhile
- takeUntil
```
$.pipe(
    takeUntil(this.destory$)
)
.subscrble((res)=>{

})
```
takeUntil接受一个Observable,当这个Observable完成，取消订阅
- takeWhile
```
interval(1000)
.pipe(
    takeWhile((val)=>val < 5)
)
.subscrble((res)=>{
    console.log(res);
})
// 输出1，2，3，4

```