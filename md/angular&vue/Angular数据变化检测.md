Angular数据变化检测，通常我们给组件传入一个对象，当我们改变对象的属性值时，angular在默认情况下，子组件是可以检测到变化的，例如：

父组件
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div>
    <app-user [user]="user"></app-user>
    <button (click)="changeUserName()">changeUserName</button>
  </div>`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public user = {
    name: 'sunji',
  };
  constructor() { }

  ngOnInit() { }
  changeUserName() {
    this.user.name = '123123';
  }
}

```
子组件
```
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>{{ user?.name }}!</p>`,
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() public user: any;
  constructor() {}

  ngOnInit() {
    
  }
}
```
当我们点击按钮，修改父组件的属性时，子组件监测到了变化，并响应在页面上面。说明：`Angular`监测一个对象或值的变化不仅是对比两个对象引用的值，还会对比对象的属性。但是这样会引发另外一个问题，当一个对象的属性多，且属性也是对象的话，这样进行遍历，修改前后对象进行对比会非常消耗性能的。

有问题则需要优化，`Angular`从两方面考虑：
- 1、C(减少检测一个绑定的时间)
- 2、N(减少需要检测的对象或属性数量)

`Angular`使用OnPush策略，只有当对象引用发生改变，才会认定对象发生了变化，并且更新页面：使用 ===; 只会检测`@Input`成员；如果检测结果为`false`,则不会检测其子组件。需要在`Component`修饰器中加入参数`changeDetection: ChangeDetectionStrategy.OnPush`策略；加入我们在上面的组件加了该策略，修改属性，并不会更新页面

`Angular`只检测`template`模版上使用的属性，模版上没有使用则不会进行检测


### 基于`Angular`的`ChangeDetection`我们能优化的方案
- 减少`ChangeDetection`的次数
- 减少每次`CD`检查的组件数
- 使用组件内需要检测的元素数

### 使用`OnPush`策略
- 避免在组件当中直接使用`service`的数据
- 设计只依赖`@Input`传入数据的功能组件
- 使用`Immutable Object`的方式来修改`@Input`的数据
- 必要时使用`ChangeDetectionRef`来手动控制`CD`