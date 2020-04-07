# Array中splice与slice的区别？
### 字面意思
- splice 拼接，接合；移接
- slice 切割，切开，割破

### 代码
```
// 不传参
var spliceArr1 = [1,2,3,4];
var spliceRes1 = spliceArr1.splice();
console.log('spliceArr1:' + spliceArr1 + '  <======> spliceRes1:' + spliceRes1); 
// spliceArr1:1,2,3,4  <======> spliceRes1:
   
// 传一个参
var spliceArr2 = [1,2,3,4];
var spliceRes2 = spliceArr2.splice(1);
console.log('spliceArr2:' + spliceArr2 + '  <======> spliceRes2:' + spliceRes2); 
// spliceArr2:  <======> spliceRes2:1,2,3,4

// 传二个参
var spliceArr3 = [1,2,3,4];
var spliceRes3 = spliceArr3.splice(1, 2);
console.log('spliceArr3:' + spliceArr3 + '  <======> spliceRes3:' + spliceRes3); 
// spliceArr3:3,4  <======> spliceRes3:1,2

// 传三个参
var spliceArr4 = [1,2,3,4];
var spliceRes4 = spliceArr4.splice(1, 2, 11, 22, 33);
console.log('spliceArr4:' + spliceArr4 + '  <======> spliceRes4:' + spliceRes4); 
// spliceArr4:1,11,22,33,4  <======> spliceRes4:2,3

// 不传参
var sliceArr1 = [1,2,3,4];
var sliceRes1 = sliceArr1.slice();
console.log('sliceArr1:' + sliceArr1 + '  <======> sliceRes1:' + sliceRes1); 
// sliceArr1:1,2,3,4  <======> sliceRes1:1,2,3,4

// 传一个参
var sliceArr2 = [1,2,3,4];
var sliceRes2 = sliceArr2.slice(1);
console.log('sliceArr2:' + sliceArr2 + '  <======> sliceRes2:' + sliceRes2); 
// sliceArr2:1,2,3,4  <======> sliceRes2:1,2,3,4


// 传二个参
var sliceArr3 = [1,2,3,4];
var sliceRes3 = sliceArr3.slice(1, 2);
console.log('sliceArr3:' + sliceArr3 + '  <======> sliceRes3:' + sliceRes3); 
// sliceArr3:3,4  <======> sliceRes3:1,2
```

### 不同点
- 1、参数的意思,第二个参数splice表示删除的数目，splice(start, count, ...insert)，slice表示删除的结束位置slice(start, end)
- 2、参数个个数，splice还有插入数组
- 3、splice会改变原来的数组，slice不会改变