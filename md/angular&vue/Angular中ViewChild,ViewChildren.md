# Angular中ViewChild,ViewChildren
Angular 如何获取子组件元素，获取模版视图中匹配元素,子组件如下：
```
import {Component, OnInit} from '@angular/core';
import {ChildService} from './child.service';

@Component({
  selector: 'app-child',
  template: `
    <h1>自定义的一个子组件</h1>
  `,
  providers: [
    ChildService
  ]
})
export class ChildComponent implements OnInit {

  constructor(public childService: ChildService) {
  }

  ngOnInit() {
  }

}
```
#### 1.1、通过class获取

`@ViewChild(ChildComponent) myComp: ChildComponent`


#### 1.2、通过模版变量获取

`<app-child #myComp></app-child>`

`@ViewChild('myComp') myComp: TemplateRef<any>`