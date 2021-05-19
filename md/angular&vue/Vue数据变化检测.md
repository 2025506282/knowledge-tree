`Vue`数据变化检测，主要是通过数据劫持的方式。`
Vue`会对`data`里面的属性进行遍历，并对`data`的对象或者值进行重新定义，调用`Object.defineProperty(obj, property, Function)`，重新定义他的`set,get`方法,所以每次`data`里面的值发生改变都能检测到,但是Object.defineProperty()对数组的劫持不是太友好，比如说const a = [3,4,5];他的下标都是他的属性，所以当我们修改数组时，会重新调用调用set方法，而当一个数组特别长时，set会频繁调用，所以作者综合考虑，对数组的方法，进行重写单独处理,
Vue数据变化检测，主要涉及到三个对象Observer,Dep,Watcher
Observer是将Vue中data,转变为响应式的主要通过方法
Object.defineProperty(value,{
    get: function() {
        dep.depend();
    },
    set: function() {
        dep.notify();
    }
});
Watch观察者，是将Vue中的html绑定的data数据
Dep是将Observer和Watch连接起来的桥梁，Dep