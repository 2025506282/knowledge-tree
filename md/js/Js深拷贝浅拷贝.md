# Js深拷贝浅拷贝?
js中分为基础类型和引用类型,
基础类型分为boolean,number,string,null,undefined,symbol
引用类型是对象，Array,function,Object,Map
基础类型的值是放在栈中的,引用类型的值是放在堆中的,又因为JS中所有代码都是在执行栈中执行的，找不到堆中的值，所以堆中有一个地址或引用是放在栈中的。
### 浅拷贝
栈中值的拷贝
### 深拷贝
将堆中的值进行拷贝

#### 深拷贝的方法分为数组和对象
- 数组的拷贝
```
newArr = [...arr];
newArr = arr.slice();
```
- `lodash/cloneDeep`
- `JSON.parse(JSON.stringfy())`
- `Object.assign({}, obj)`