# http强缓存和协商缓存
1、浏览器进行资源请求时，会判断response headers是否命中强缓存，如果命中，直接从本地读取缓存，不会向服务器发送请求
2、当强缓存没有命中时，会发送请求到服务端，判断协商缓存是否命中，如果命中，服务器将请求返回，不会返回资源，告诉浏览器从本地读取缓存。如果不命中，服务器直接返回资源。
| 缓存 | 是否请求服务器 | 状态码 | 操作 |
|-----|------------|-----|------------|
| 强缓存  | 不会 | 200（from cache） | 直接读取缓存 |
| 协商缓存  | 会 | 304 (not modified) | 不会返回内容，然后读取缓存  |

### 如何判断是强缓存和协商缓存
response headers判断是否命中强缓存还是协商缓存