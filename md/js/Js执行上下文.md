# Js执行上下文
`Js`执行上下文分为全局执行上下文,函数执行上下文,`eval`执行上下文
函数执行上下文是在函数调用的时候执行的，恰恰与函数作用域相反,函数作用域是在函数定义时候定义的
每个执行上下文都有三个剧本概念
- 变量对象(Variable object, VO)
- 作用域链(Scope chain)
- this
### 变量对象
变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明
因为不同执行上下文下的变量对象稍有不同
### 函数上下文
在函数上下文中，我们用活动对象(activation object,AO)来表示变量对象。活动对象是在进入函数上下文时被创建的，它通过函数的arguments属性初始化，arguments属性值是Argument对象
### 执行过程
执行上下文的代码会分成两个阶段进行处理:分析和执行，我们也可以叫做:
1、进入执行上下文
2、代码执行
### 进入执行上下文
当进入执行上下文时，这时候还没有执行代码
变量对象会包括:
1、函数的所有形参（如果是函数上下文）
- 由名称和对应值组成的一个变量对象的属性被创建
-
```
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();
```
执行上下文栈的变化
```
ECStack.push(<checkscope> functionContext);
ECStack.push(<f> functionContext)
ECStack.pop();
ECStack.pop();
```