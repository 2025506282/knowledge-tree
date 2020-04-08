## 1、组件通信？

### 1.1 Angular组件通信
- 方式一，通过属性和EventEmitter
```
// 父组件
import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  template: `
    <app-child title="father works!" (sendEmitter)="onSendEmitter($event)">
    </app-child>
  `,
})
export class FatherComponent  {
  onSendEmitter(e) {
    console.log(e);
  }
}
```
```
// 子组件
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
        {{title}}
    </p>
    <button (click)="send()">send</button>
  `,
})
export class ChildComponent {
  @Input()  title: string;
  @Output()  sendEmitter = new EventEmitter<boolean>();
  constructor() { }
  public send(): void {
    this.sendEmitter.emit(true);
  }
}
```
- 方式二，通过获取组件实例
```
// 父组件
import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-father',
  template: `
    <app-child title="father works!" #child (sendEmitter)="onSendEmitter($event)">
    </app-child>
  `,
})
export class FatherComponent  {
  @ViewChild(ChildComponent, {static: false})
  private childComponent: ChildComponent;
  onSendEmitter(e) {
    console.log(this.childComponent);
  }
}
```
```
// 子组件不变，如上
```
- 方式三，通过service进行通信，可以直接复制一个变量(其实类似一个全局变量)或者通过一个subject(类似于event.bus)
```
// homeService
private missionAnnouncedSource = new Subject<string>();
public missionAnnounced$ = this.missionAnnouncedSource.asObservable();
public announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
}
public globalName: string = 'John';
```
```
// 注入服务的组件，例如子组件或者父组件
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { HomeService } from '../../../home.service';

@Component({
  selector: 'app-child',
  template: `
    <p>
      {{title}}
    </p>
    <button (click)="send()">send</button>
  `,
})
export class ChildComponent {
  constructor(private homeService: HomeService) {
    console.log(this.homeService)
  }
}

```
### 1.2 Vue组件通信

- 方式一，通过props和emit，on
- 方式二，通过ref获取组件实例
- 方式三, 通过vuex
```
// 父组件
<template>
  <div class="box">
    <h1>{{title}}</h1>
    <button @click="getComponent">getComponent</button>
    <child :username="username" ref="childRef" @changeNameEmit="changeName"></child>// 方式一，通过props和emit
  </div>
</template>

<script>
import Child from "./components/Child";
import { mapState } from 'vuex';
export default {

  components: {
    child: Child
  },
  created() {
    this.$on("changeNameEmit", $event => {
      console.log($event); 
    });
  },
  computed:  mapState(['title']),// 方式三，vuex
  data() {
    return {
      username: "Sunji"
    };
  },
  methods: {
    getComponent() {
      console.log(this.$refs.childRef);// 方式二，通过ref
    },
    changeName($event) {
      this.username = $event;
    }
  },
};
</script>
```
```
// 子组件
<template>
   <div class='box'>
       <h1> Hello {{username}}</h1>
       <button @click="changeName">changeName</button>
   </div>
</template>

<script>
export default {
   props: {
       username: String,
   },
   methods: {
       changeName() {
           this.$emit('changeNameEmit', this.username + ' Child');
       }
   },
}
</script>
```


通过比较发现，两者区别很少，唯一的区别就是vuex和service有一些区别，我们会在下一篇中讲解