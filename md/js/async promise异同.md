# async promise异同？
### 用法
- async 与 promise 都是为了解决异步请求而出现的,
- promise 是链式调用,async看起来同步调用
- async必须要搭配awiat使用，其原理也是采用promise要搭配resolve,reject
### 错误处理
- async 财通try {} catch(){}
- promise 采用链式.catch
### 简洁
- async 更加简洁方便调试
