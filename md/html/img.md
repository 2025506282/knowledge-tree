## img标签title与alt区别
```
    <img src="./images/star.png"  title="test-title" />
    <img src="./images/star.png" alt="test-alt"/>
    <img src="./images/star.png" alt="test-blank-alt"  title="test-alt-title" />
    <img src="" alt="test-blank-alt" />
    <img src=""  title="test-blank-title" />
    <img src="" alt="test-blank-alt"  title="test-alt-title" />
```
#### alt属性
图片不存在会显示alt属性上的文字
#### title属性
title有两个作用,图片存在鼠标移上显示title;图片不存在会显示title属性上的文字,其优先级低于alt属性，
title有字数限制，不能超过8行(Chrome浏览器)

## PNG,GIF,JPG,SVG,base64区别
#### PNG
适用于一些小的图片,logo,icon可以用
#### GIF
适用于动画
#### JPG
适用于大一点的图片，人像
#### SVG
可大可小且不影响质量,可以改变尺寸颜色,svg可以放在一个文件中。
<br/>减少http请求,并进行压缩,可参考[svg-spirite](https://github.com/jkphl/svg-sprite)
#### Base64
不需要请求,减少请求次数,css文件体积太大。
<br/>白屏时间过长,所以转化为base64最好图片体积不要大于10K