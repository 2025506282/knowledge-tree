# Js变量对象
当Js执行一段可执行代码，会创建对应的上下文，每个上下文都含有三个属性

变量对象（Variable Object,VO)

作用域链（Scope chain)

this

### 执行过程
执行上下文的代码分为两个阶段: 分析（进入执行上下文）和执行（代码执行）
#### 进入执行上下文
当进入执行上下文时，这时候还没执行代码
```
function foo(a) {
    var b = 2;
    function c() {}
    var d = function() {}
    b = 3;
}
foo(1);
```
在进入执行上下文后，这时候AO是
```
AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: reference to function c() {}
    d: undefined
}
```
代码执行，在代码执行阶段，会顺序执行代码，当代码执行完毕后，这时候AO是:
```
AO = {
    arugments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: 3,
    c: reference to function c() {},
    d: reference to FunctionExpression 'd'
}
```