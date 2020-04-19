# EventLoop你了解吗？
- js执行代码的时候先执行同步任务再执行异步任务。js中所有代码都是在执行栈中执行的，同步代码会直接放到执行栈执行的，当执行栈为空的时候,然后查找任务队列，然后把任务队列的任务放到执行栈中执行
```
    async function  test1() {
        console.log('1');
        await 1;
        console.log('2');
    }
    function test2() {
        return new Promise((resolve) => {
            console.log('3');
            resolve();
        })
    }
    setTimeout(()=>{
        console.log('4');
    })
    test2().then((data)=>{
        console.log('5');
    })
    test1();
    console.log('6');
```
### 1、同步任务
- 普通的js语法，for循坏, resolve(data)前面的语法,awiat 1前面的语法,直接放在执行栈中执行。上述代码1,3,6都是同步任务
### 2、异步任务
- js中异步任务分为微任务和宏任务,js是先执行同步任务，再执行宏任务,最后执行微任务,宏任务放在宏任务队列,微任务放在微任务队列。上述代码2,4,5是异步任务。2,5是微任务,4是宏任务;按顺序是**script(宏任务)=》同步任务=》微任务=》宏任务**;**注意script标签就是一个宏任务**;
#### 2.1、宏任务
- setInterval,setInterval,宏任务里面可能还有微任务和同步代码、宏任务; 先执行同步,再执行微任务,最后执行宏任务,如此循坏
#### 2.2、微任务
- await ,Promise.resolve().then,那么await与Promise哪一个先执行,其实asyns,await语法也可以看成是一个Promise
```
    async function  test1() {
        console.log('1');
        await 1;
        console.log('2');
    }
    // 可以看成
    function test1() {
        return new Promise((resolve)=>{
            console.log('1');
            resolve(1);
        }).then((data)=>{
            console.log('2');
        })
    }
```
具体的async语法源代码会在下一篇文中详解
- 所以先执行5,后执行2
### 3、结果
- 所以上述代码结果1,3,6,5,2,4

