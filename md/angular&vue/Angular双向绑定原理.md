# Angular双向绑定原理?
在angular中有两种数据绑定，即`property binding`和`event binding`,这两种共同组成了双向绑定
- `propery binding`
```
[(ngModel)] = '[property of your component]'
```
如果要使用`ngModel`指令，需要依赖`FormsModule`在`angular/forms`包里面，我们需要`import [] array` 在`AppModule`