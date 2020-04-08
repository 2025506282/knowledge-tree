# String中substring  substr  slice异同?
### 字面意思
- substring 子串，子链
- substr 子串函数；字符截取函数；取字符串的子串
- slice 切割，切开，割破
### 代码
```
    var sliceStr = '12345678';
    console.log('sliceStrRes : ' + sliceStr.slice(1, 2) + '  sliceStr : ' + sliceStr);
    // sliceStrRes : 2  sliceStr : 12345678
    var substrStr = '12345678';
    console.log('substrStrRes : ' + substrStr.substr(1, 2) + '  substrStr : ' + substrStr);
    // substrStrRes : 23  sliceStr : 12345678
    var substringStr = '12345678';
    console.log('substringStrRes : ' + substringStr.substring(1, 2) + '  substringStr : ' + substringStr);
    // substringStrRes : 2  substringStr : 12345678
```
### 总结
##### 相同点
- substring,substr,slice都是截取字符串函数,且都只能传入两份参数,
- substring,substr,slice都不会改变原来的字符串
##### 不同点
- substring,slice,substr第一个参数的意思都是字符串起始位置,substr第二个参数是从截取位置截取的个数,substring,slice第二个参数是字符串结束位置