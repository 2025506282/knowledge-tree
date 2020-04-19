const PENDING = 'pending'
const FULFILED = 'FULFILED';
const REJECTED = 'REJECTED';
class MyPromise {
    constructor(fn) {
        if(typeof fn !== 'function') {
            throw new Error('fn must be function')
        }
        this.status = PENDING;
        this.value = undefined;
        this.successCallBacks = [];
        this.failCallBacks = [];
        fn(this._resolve, this._reject);        
    }
    _resolve(value) {
        console.log('_resolve')
    }
    _reject(value) {
        console.log('_reject')
    }
    then(res) {
        if(this.status === PENDING) {
            
        }
        if(typeof res === 'function') {
            res('1');
        }
    }
}
new MyPromise((resolve, reject) => {
    setTimeout(()=>{
        console.log('MyPromise');
        resolve(); 
    })
}).then((res)=>{
    console.log('then res :', res)
})