Angular编译器解析装饰器和模版 并生成一些运行时可以理解的代码 

组件数的构成是由一些指令完成的
创建指令
```
element()
text()
template()
elementContainer()
projection()
listener()
pipe()
...∂
````
更新指令
```
property()
attribute()
styleProp()
classProp()
hostProperty()
pipeBind()
...
```
```
<div>
  <button (click)="toggleHeading()">Toggle Heading</button>
  <h1 *ngIf="showHeading">Hello {{name}}</h1>

  <input type='value' value="hello world" #input/>{{input.value}}
  <button (click)="alert()">alert</button>
</div>
```
Angular2
模版编译器Code Generation
自己编译html,转换为javascript并且在运行时呈现 
缺点： 生成的模版太冗长了，增加了太多了字节
Angular4
View Engine
不将模版转化为命令 ，而是作为数据结构，遍历数据接口执行dom节点或执行更改检测，这样就优化了模版大小，但是遍历的时候会消耗性能

### 步骤 
Template.Decorators,Stylesheet => AST => TypeScript/JavaScript =>  Wep/App
组件的定义只能创建一次，因此每个组件创建一个视图定义，然后实例化组件时创建视图数据，因此视图数据连接到视图定义
### 定义视图分为两个部分
- 生成DOM的静态描述
- 当组件状态改变时调用的函数
_View_{COMPONENT}_Host{COUNTER}-我们称其为“内部主机组件”。
_View_{COMPONENT}{COUNTER}-我们称其为“内部组件”。
这两个类都扩展AppView并实现了以下方法：



createInternal -渲染组件。
destroyInternal -执行清理（删除事件侦听器等）。
detectChangesInternal -使用针对内联缓存优化的方法实现来检测更 改。
Angular
## lvy
打包出来的已读，更快
缩短构建时间（增加增量编译）
🔥达到更好的构建大小（生成的代码与摇树更兼容）
🔓解锁新的潜在功能（元编程或更高级别的组件，组件的延迟加载而不是模块的加载，不基于zone.js的新变更检测系统……）
步骤
1、剥离所有装饰器，并将其存储在metadata.json中
2、然后将html模版转化为JavaScript指令，，然后有Angular Interpreter用来理解如何在DOM中显示他们
![example](https://miro.medium.com/max/700/1*dr0dXgU1WH2jaCK0qj3cBg.png)

typeScript编译成JS,然后运行angular编译器生成metadata.json
而使用lvy直接提交js代码就可以了

#### 为什么使用lvy
手机和平板电脑占80%，

快速高效的“差异”算法
多个前端（JSX，超标）
轻巧到足以在移动设备上运行
很多牵引力和思想分享
无需React也可以使用（即作为独立引擎）
DOM的完整内存副本（更高的内存使用量）
静态和动态元素之间没有区别*

### Vue & React
#### diff算法
每次添加和删除一个节点都会重新生成一个tree，内存占用非常重要
新旧VirtualDOM比较，diff算法(统一等级比较)，找出差异节点和差异的类型，一共分为四类，然后根据不同的类型打补丁
1、替换掉原来的节点，例如把上面的div换成了section
2、移动、删除、新增子节点，例如上面div的子节点，把p和ul顺序互换
3、修改了节点的属性
4、对于文本节点，文本内容可能会改变。例如修改上面的文本节点2内容为Virtual DOM 2

### Angular
每次发生改变是真实的DOM节点与之进行对比，所以是非常消耗性能的。所以在大多数情况下，Angular是要比vue,react速度慢的，但是他内存开销是比较小的
通过删除DOM的其他副本，增量DOM 减少了内存使用量。