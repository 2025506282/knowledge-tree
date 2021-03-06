## tcp三次握手，4次分手？

    TCP是一种面向连接的、可靠的、基于字节流的传输层通信协议，在发送数据前，通信双方必须彼此建立一条连接。所谓的‘连接’，其实是客户端和服务端保存的一份关于对方的信息，如IP　地址、端口号等

    一个TCP连接通常分为三个阶段：连接、数据传输、退出。通过三次握手建立一个链接，通过四次挥手来关闭一个连接
### 1. TCP报文的头部结构
![](https://user-gold-cdn.xitu.io/2020/1/7/16f7e03b19e6c134?imageslim)

#### 1.1 端口号(16位)
源端口号提示这端报文来自哪里；目的端口号表示这段报文要发往哪里。进行tcp通信时，一般客户端是通过系统自动选择的临时端口号，而服务器一般是使用指定的端口号
#### 1.2 序列号seq(32位)
因为TCP使用IP来传输报文段，而IP不能过滤掉重复的报文，也不能保证报文的顺序。比如客户端发送一条5kb的顺序，如果tcp一次只能发送1kb，那就要将数据分为5段分为5次来发，将这5段数据分别编号为1、2、3、4、5，发送的时候按照这个顺序进行发送，服务端收到的顺序有可能就是13254，也就是说服务端收到的顺序和发送的顺序可能是不一致的，甚至因为某些因素（比如客户端没收到服务器回复的ACK数据包就会重发数据）导致服务端收到多个编号相同的数据

那这样的话服务端收到全部数据后要如何将他们拼接成真确的数据呢？这里就用到了序列号。首先序列号被系统初始化为一个随机值ISN,一个报文的序列号就是ISN + 这个报文携带的数据的第一个字节的偏移量。比如上面所说的例子要发5个报文，第一个报文的第一个字节偏移量为0，序列号就是ISN + 0；由于第一个报文携带的数据大小是1kb(1024),所以第二个报文的第一个字节偏移量就是1024，序列号就是ISN + 1024
#### 1.3 确认号ack(32位)
还是用前面的例子，服务端收到客户端发过来的报文后需要给客户端回复一个ack数据包，回复报文的确认号的值等于服务端收到的报文序列号值+1，比如服务端当前收到的报文序列号ISN+2048(也就是第三段数据),那么它回复客户端的报文确认号的值就是ISN+2048+1之前的所有数据都已经收到了

##### 1.3.1 客户端发送一个报文后并不需要等服务端的ack回复就可以接着发送下一条报文
##### 1.3.2 服务端回复ack时，必须要确保确认号之前的数据全部已经收到了，比如上面的例子，如果序列号是ISN+2048报文收到了，但是ISN+1024的报文还没收到，那就不能回复ISN+2048+1的ack
##### 1.3.3 服务端在收到数据后不是立即给客户端发送ack的，一般会有200ms的延迟（系统有个定时器每隔200ms来检查是否需要发送ack包）。 这么做是因为TCP数据包到达的顺序是不保证的，就比如上面必须要等ISN+
#### 1.4 头部长度(4位)
- `第一次握手：` 客户端要向服务端发起连接请求，首先客户端随机生成一个其实序列号ISN(比如是100)，那客户端向服务端发送的报文端包含SYN标志位(也就是SYN = 1),序列号seq = 100
http 建立连接，是需要经过三次握手的，
第一次，客户端想服务端发送Ack,
第二次，服务端接收到Ack 消息，再附加Sy消息发送给客户端
第三次，客户端收到消息后，
                                            

## 页面中输入一个地址，浏览器经历了什么

- 1、输入地址，验证url的合法性，如果不是则是搜索引擎关键词搜索
- 2、检查本地是否有缓存或系统化缓存或者路由器缓存，有的话直接读取缓存内容，否则直接跳到第三步（强缓存和协商缓存）
- 3、DNS解析域名，转换为IP地址
- 4、通过IP地址与服务器建立连接，3次握手
- 5、数据传输
- 6、断开连接，4次挥手

## 关于http2.0你知道多少

## SSL有几次握手？具体过程是怎样的？