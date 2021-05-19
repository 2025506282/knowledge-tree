# BFC
什么是`bfc`,简称块级格式上下文，盒子内部的元素与外部的元素互相不影响，我的理解就是css独立的模块的，而如何生成这个独立的模块，通过css属性可以设置
- overflow: hidden;// 只要overflow不等于auto
- display: inline-block; // table-cell 等
- float: left; // right,center
- 绝对定位