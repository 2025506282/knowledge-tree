
## Vue生命周期
![Vue生命周期](https://user-gold-cdn.xitu.io/2020/1/12/16f97fb8239f33a4?w=1200&h=3039&f=png&s=77677)
* beforeCreate<br/>
Vue实例还没有创建
* created<br/>
Vue实例创建完，属性方法都已创建;用于api请求,初始化参数
* beforeMount<br/>
虚拟节点已经合成，等待dom渲染
* mounted<br/>
api请求,初始化参数,此时情况,所有dom节点都已渲染完毕,能够获取真实的dom节点
* beforeUpdate<br/>
* updated<br/>
属性发生改变
* beforeDestroy<br/>
* destroyed<br/>

## Angular生命周期
![Angular生命周期](https://user-gold-cdn.xitu.io/2020/1/13/16f9e09186e9df65?w=609&h=361&f=jpeg&s=60065)
* constructor<br/>
初始话一些参数
* ngOnInit<br/>
一些api请求
* ngOnChanges(change: SimpleChanges)<br/>
输入属性的值发生改变
* ngDoCheck<br/>
* ngAfterContentInit<br/>
ContentChild与ContentChildren初始化之后调用，只调用一次
* ngAfterContentChecked<br/>
* ngAfterViewInit<br/>
ViewChild与ViewChildren初始化之后调用，只调用一次
* ngAfterViewChecked<br/>
检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应。
在每个变更检测周期中，紧跟在 ngOnChanges() 和 ngOnInit() 后面调用,
有些特殊情况，有的时候我们需要真实的dom节点，可以再ngDoCheck判断
* ngOnDestroy<br/>
去除订阅，销毁事件


## Vue与Angular生命周期区别？
#### Lifecircle.vue
```
<template>
   <div class='box'>
       <h1>Lifecycle</h1>
       <lifecycle-child :username="username"></lifecycle-child>
       <button @click="changeName">changeName</button>
    </div>
</template>

<script>
import LifecycleChild from './components/LifecycleChild';
export default {
   components: {
       'lifecycle-child': LifecycleChild
   },
   data() {
       return {
           username: 'Kobe',
       };
   },
   methods: {
       changeName() {
           this.username = 'sunji';
       }
   },
   beforeCreate() {
       console.log('------------beforeCreate------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box'));
   },
   created() {
       console.log('------------created------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box'));
   },
   beforeMount() {
       console.log('------------beforeMount------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box'));
   },
   mounted() {
       console.log('------------mounted------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box'));
   },
   
   beforeUpdate() {
       console.log('------------beforeUpdate------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box'));
   },
   updated() {
       console.log('------------updated------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box'));
   },
   beforeDestroy() {
       console.log('------------beforeDestroy------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box'));
   },
   destroyed() {
       console.log('------------destroyed------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box'));
   },
}
</script>
```
#### LifecircleChild.vue
```
<template>
   <div class='box1'>{{ username }}</div>
</template>
<script>
export default {
   props: ['username'],
   beforeCreate() {
       console.log('------------beforeCreate lifecircle child------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box1'));
   },
   created() {
       console.log('------------created lifecircle child------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box1'));
   },
   beforeMount() {
       console.log('------------beforeMount lifecircle child------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box1'));
   },
   mounted() {
       console.log('------------mounted lifecircle child------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box1'));
   },
   
   beforeUpdate() {
       console.log('------------beforeUpdate lifecircle child------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box1'));
   },
   updated() {
       console.log('------------updated lifecircle child------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box1'));
   },
   beforeDestroy() {
       console.log('------------beforeDestroy lifecircle child------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box1'));
   },
   destroyed() {
       console.log('------------destroyed lifecircle child------------');
       console.log('vue里面的data: ', this.username);
       console.log('vue里面的dom节点: ', document.querySelector('.box1'));
   },
}
</script>
```

#### angular的lifecircle.ts
```
import {
  Component, OnInit, SimpleChanges, AfterContentChecked,
  AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecircle',
  template: `
  <div class='box'>
    <h1>Lifecycle</h1>
    <app-lifecircle-child [username]="username"></app-lifecircle-child>
    <button (click)="changeName()">changeName</button>
  </div>
  `,
})
export class LifecircleComponent implements
OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  public username = 'Kobe';
  constructor() {
    console.log('------------constructor------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('------------ngOnChanges------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
  ngOnInit(): void {
    console.log('------------ngOnInit------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }

  ngAfterContentInit(): void {
    console.log('------------ngAfterContentInit------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
  ngAfterContentChecked(): void {
    console.log('------------ngAfterContentChecked------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
  ngAfterViewInit(): void {
    console.log('------------ngAfterViewInit------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
  ngAfterViewChecked(): void {
    console.log('------------ngAfterViewChecked------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }

  changeName() {
    this.username = 'Sunji';
  }
}
```
#### angular的lifecircle-child.ts
```
import { Component, OnInit, Input, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecircle-child',
  template: `
    <div class='box1'>{{ username }}</div>
  `,
})
export class LifecircleChildComponent implements
OnInit, OnChanges, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked {
  @Input() username: string;
  constructor() {
    console.log('------------LifecircleChild constructor------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('------------LifecircleChild ngOnChanges------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
  ngOnInit(): void {
    console.log('------------LifecircleChild ngOnInit------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }

  ngAfterContentInit(): void {
    console.log('------------LifecircleChild ngAfterContentInit------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
  ngAfterContentChecked(): void {
    console.log('------------LifecircleChild ngAfterContentChecked------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
  ngAfterViewInit(): void {
    console.log('------------LifecircleChild ngAfterViewInit------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
  ngAfterViewChecked(): void {
    console.log('------------LifecircleChild ngAfterViewChecked------------');
    console.log('angular里面的属性: ', this.username);
    console.log('angular里面的dom节点: ', document.querySelector('.box'));
  }
}

```
## 不同点与相同点
| 不同点 | Angualar | Vue |
|------|------------|------------|
| 属性，方法获取  | 任何生命周期都可以访问                      | 除了beforeCreate生命周期函数，其他都可以访问属性方法      |
| dom节点获取 |     只能通过ngDoCheck函数(包括ngAfterViewCheck,ngAgterContentCheck)不停判断dom节点    | mounted生命周期函数后都可以访问dom节点        |
| ngDoCheck |     检测页面上的任何变动      | vue没有类似 |
| ngOnInit |    在构造函数之后马上执行复杂的初始化逻辑，在 Angular 设置完输入属性之后，对该组件进行准备     | created有点类似 |
| mounted |     Angular没有类似     | 页面已经挂载渲染完毕 |

<br/>

| 相同点 | Angualar & Vue |
|------ |-------------|
| 函数  | ngOnChange同update相似，ngOnDestory与destroyed相似 |

