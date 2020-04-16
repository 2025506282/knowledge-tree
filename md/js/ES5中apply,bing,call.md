# `apply`,`bind`,`call`解析?
### `call`与`apply`代码

```
    // myApply
    Function.prototype.myApply = function(context) {
        if (typeof this !== 'function') {
            throw new Error('type error');
        }
        context.fn = this;
        let args = [...arguments][1];
        let result;
        if(args) {
            result = context.fn(args);
        } else {
            result = context.fn();
        }
        delete context.fn;
        return result;
    }
    // myCall
    Function.prototype.myCall = function(context) {
        if (typeof this !== 'function') {
            throw new Error('type error');
        }
        context.fn = this;
        let result = context.fn([...arguments].slice(1));
        delete context.fn;
        return result;
    }
    var cat = {
        name: "cat",
        speak: function () {
          console.log(this.name);
          console.log(arguments);
        },
    };
    var dog = {
        name: "dog",
        speak: function (arr) {
          console.log(this.name);
          console.log(arguments);
        },
    };
    cat.speak.myCall(dog, 1, 2, 3);
    cat.speak.myApply(dog, [2, 3]);
```
### `call`与`apply`共同点
`call`与`apply`函数都能改变指针,其实内部就是为传入的上下文赋值一个新的函数`fn`，然后调用这个函数
### `call`与`apply`不同点
`call`与`apply`参数不同,`apply(context, arr)`第一个参数是上下文,第二个参数是数组;`call(context, obj1,obj2,...)`第一个参数是上下文,剩下的参数是对象,可以传入多个对象;两者最后都是把传入的参数转化为数组调用

### `bind`代码

```
    // myBind
    Function.prototype.myBind = function (context) {
        if (typeof this !== "function") {
          throw new Error("type error");
        }
        let self = this;
        let args = [...arguments].slice(1);
        return function () {
          self.apply(context, args.concat([...arguments]));
        };
    };
    function foo() {
        console.log("arguments : ", arguments);
        console.log(this.a);
    }
    var obj = { a: 2 };
    var bar = foo.myBind(obj,123);
    bar(23); // 2
```
### `bind`,`call`,`apply`共同点
三者都能改变函数的指针
### `bind`,`call`,`apply`不同点
`bind(context,obj1,obj2,...)`返回的是一个新的函数,bind函数可以实现多次传参,`bind`函数改变指针,其实也是通过`apply`函数