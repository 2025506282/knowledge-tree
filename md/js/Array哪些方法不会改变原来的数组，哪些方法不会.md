# Array哪些方法不会改变原来的数组，哪些方法不会？

### 改变
```
push(item): boolean, // 返回数组的长度
pop(item): boolean, // 返回删除的元素
shift(item): boolean, 
unshift(item): boolean,
splice(start: number, count: number, ...insertItem),
```

### 不会改变
```
slice(start:number, end: number): []
sort(desc: boolean): [];
join(str: string): []

```
