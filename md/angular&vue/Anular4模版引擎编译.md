# Anular4模版引擎编译


### angular4编译后会生成4种类型文件

- *.metadata.json: 把.ts(component, NgMdule)文件里的decorator信息和constructor的依赖注入信息用json的形式记录下来,然后第二次编译的时候直接从json里面获取。二次编译是指引用第三方的库，在编译自己项目的时候需要对第三方重新编译
- *.ngfactory.js: 里面包含了创建组件、渲染组件涉及DOM操作，执行变化简化检查（获取oldValue和newValue对比）、销毁组件的代码
- *.js： 是.ts(component/NgModule)文件里除了decorator和constructor之外的内容，编译成了es6代码
- *.ngsummary.json: 和metadata.json两者只能有一个