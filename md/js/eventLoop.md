
        // 之前碰到过这种代码，虽然解决了问题但是不知道原因， 求解     
        setInterval(async () => {
            console.log('setInterval------------------------------------');
            await startConction();
            console.log('setInterval end');
        }, 1000)
        function startConction() {
            return new Promise((resolve) => {
                setTimeout(()=>{
                    console.log('timeout');
                    resolve();
                },5000)
            })
        }
这段代码会每隔一秒打印‘setInterval----'吗，五秒后打印’timeout'吗？为什么？

         // 之前碰到过这种代码，虽然解决了问题但是不知道原因， 求解     
        setInterval(async () => {
            console.log('setInterval------------------------------------');
            await startConction();
            console.log('setInterval end');
        }, 1000)
        function startConction() {
            return new Promise((resolve) => {
                // for循环执行超过一秒
                for (let index = 0; index < 9999999; index++) {
                }
                console.log('Promise start');
                resolve();
            })
        }
        
这段代码也会每隔一秒打印‘setInterval----'吗，五秒后打印’timeout'吗？为什么？


## 在js中分为同步任务和异步任务

js执行的时候先执行同步任务再执行异步任务。

js中都是在执行栈中执行的，同步代码会直接放到执行栈执行的

js中异步任务是先放到任务队列中，当执行栈为空的时候,然后查找任务队列，把任务队列放到执行栈中执行。

js中异步任务分为微任务和宏任务，js是先执行同步任务，再执行宏任务，最后执行微任务，注意其实整个js文件就是一个宏任务。其中setInterval和setTimeout为宏任务，其中setInterval和setTimeout都是有一个专门的计时器线程进行管理执行：都会被计时器线程每隔一秒推送到任务队列中，而setTimeout也是微任务Promise里面的宏任务。

例子1分析，刚开始是一整个宏任务，没有同步任务和微任务，此时隔一秒后会把setInterval里面的回调函数放到任务队列中，然后执行栈为空，检查任务队列，执行回调函数，该回调函数里面有同步任务，先执行同步任务，当执行到startConnection里面会有一个setTimeout函数宏任务，隔五秒后放到任务队列，而setInterval会隔一秒后放到任务队列。所以再执行四个setInterval的回调函数再执行setTimeout的回调函数