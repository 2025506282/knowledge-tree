# `async` `promise`异同？
### 用法
- `async` 与 `promise` 都是为了解决异步请求而出现的,
- `promise` 是链式调用,`async`看起来同步调用
- `async`必须要搭配awiat使用，其原理也是采用`promise`
### 错误处理
- `async` 财通`try {} catch(){}`
- `promise` 采用链式`catch`
### 简洁
- `async` 更加简洁方便调试
