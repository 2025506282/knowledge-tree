# Incremental DOM&Virtual DOM
我们都知道，前端有三大框架，`react,vue,angular`;他们最核心的思想也就是`MVC`（`Model-View-Controller`），而其中核心之一，就是如何将模版视图渲染到屏幕上，他们都有自己的语法，无论是`react`的`JSX`,`angualr`的`ts`或者`vue`最终都会转化为`js，html,css`;而今天所讲的`Virtual DOM`和`Incremental DOM`到底和其中又有什么关系,

## Virtual DOM
每次修改了或增加一个节点时，都会重新创建Virtual DOM，尽管Virtual DOM构成的数已经简化了，但是内存开销还是比较大的。Virtual DOM，一共有三棵树：新的Virtual DOM Tree,旧的Virtual DOM,以及渲染出来的真正的DOM Tree,每次都会新Virtual DOM和旧Virtual DOM，进行比较，然后给真的DOM Tree打补丁

## Incremental DOM
`Incremental DOM`是`google`开发的，用来取代`Virtual DOM`，他只有两个Tree,Virtual DOM Tree和真实Dom Tree;他们两者进行比较后，然后打补丁