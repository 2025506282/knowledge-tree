# Js执行上下文
`Js`执行上下文分为全局执行上下文,函数执行上下文,`eval`执行上下文
函数执行上下文是在函数调用的时候执行的，恰恰与函数作用域相反,函数作用域是在函数定义时候定义的
每个执行上下文都有三个剧本概念
- 变量对象(Variable object, VO)
- 作用域链(Scope chain)
- this
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