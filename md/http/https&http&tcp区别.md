# https&http&tcp区别
| 标题 | 定义 |
| --- | --- | 
| 应用层 | TELNET,FTP,HTTP,SMTP,DNS |
| 传输层 | TCP、UDP |
| 网络层 | IP、ICMP、ARP、RARP |
| 数据链路层 | 规定一套协议，专门的给0、1信号进行分组，以及规定不同的组代表什么意思，从而双方计算机都能够进行识别，这个协议就是以太网协议 |
| 物理层| 用物理手段将电脑连接起来 |
### TCP
    TCP是传输层协议，用来数据是如何传输的。用来建立连接。
### UDP
    不提供可靠性
### Http
    HTTP是应用层协议，用来数据传输的格式，如何包装数据.是在建立连接的基础上进行数据传输，依赖于TCP。
### HTTPS
    HTTPS需要证书，是有SSL+HTTP进行的加密传输，其中用到了CA证书，RSA非对称加密算法和对称加密算法