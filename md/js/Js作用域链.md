# Js作用域链?
`Js`作用域分为全局作用域，函数作用域，块级作用域

### 作用域
作用域是指程序源代码中定义变量的区域
作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限
`JavaScript`采用词法作用域 **`(lexical scoping)`** ,也就是静态作用域

### 作用域分为静态作用域与动态作用域
应为JavaScript采用的是词法作用域，函数的作用域在函数定义的时候就决定了
而与词法作用域相对应的是动态作用域，函数的作用域是在函数调用的时候决定的
```
var value = 1;
function foo() {
  console.log(value);
}
function bar() {
  var value = 2;
  foo();
}
bar();
```
假设`JavaScript`采用静态作用域，让我们分析执行过程
执行`foo`函数，先从`foo`函数内部查找是否有局部变量`value`,如果没有,就根据书写的位置上,查找上面一层的代码,也就是`value`等于1，所以结果会打印1
假设`JavaScript`采用动态作用域，让我们分析执行过程
执行`foo`函数，先从`foo`函数内部查找是否有局部变量`value`,如果没有,就从调用函数的作用域,也就是`bar`函数内部查找`value`变量,所以结果会打印2
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
`js`是静态作用域，在定义的时候就已经决定了，不管何时执行`fn()`,`scope`始终是局部变量，但是`this`是在函数创建的时候调用的

### 函数创建
函数作用域在函数定义的时候就决定了，这是因为函数有一个内部属性`[[scope]]`，当函数创建的时候，就会保存所有父级变量对象到其中，你可以理解`[[scope]]`就是所有父变量对象的层级链，但是注意: `[[scope]]`并不代表完整的作用域链

举个列子
```
function foo() {
  function bar() {
    ...
  }
}
```
函数创建时，各自的`[[scope]]`为：
```
foo.[[scope]] = [
  globalContext.VO
];
bar.[[scope]] = {
  fooContext.AO,
  globalContext.VO
}
```
### 函数激活
当函数激活时，进入函数上下文，创建`VO/AO`,就会将活动对象添加作用链的前端，这时候执行上下文的作用域链，我们命名为`scope`:
`Scope = [AO].concat([[scope]])`


```
var scope = 'global scope';
function checkscope() {
  var scope2 = 'local scope';
  return scope2;
}
checkscope();
```
执行过程如下:

1、`checkscope`函数被创建，保存作用域链到内部属性`[[scope]]`
```
checkscope.[[scope]] = {
  globalContext.VO
}
```
2、执行`checkscope`函数，创建`checkscope`函数执行上下文,`checkscope`函数执行上下文被压入执行上下文栈
```
ECStack = {
  checkscopeContext,
  globalContext
}
```
3、`checkscope`函数并不立即执行，开始做准备工作，第一步: 复制函数`[[scope]]`属性创建作用域链
```
checkscopeContext = {
  Scope: checkscope.[[scope]]
}
```
4、第二步:用`arguments`创建活动对象,随后初始化活动对象，加入形参、函数声明、变量声明
```
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  Scope: checkscope.[[scope]]
}
```
5、第三步:将活动对象压入`checkscope`作用域链顶端
```
checksopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: undefined
  },
  Scope: [AO, [[scope]]]
}
```
6、准备工作做完，开始执行函数，随着函数的执行，修改AO的属性值
```
checkscopeContext = {
  AO: {
    arguments: {
      length: 0
    },
    scope2: 'local scope'
  },
  Scope: [AO, [[Scope]]]
}
```
7、 查找到`scope2`的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出
```
ECStack = [
  globalContext
]
```