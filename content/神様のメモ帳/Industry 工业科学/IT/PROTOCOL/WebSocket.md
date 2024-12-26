---
tags:
  - Label/Industry-工业科学/IT/TCP_IP/Protocol/7-应用层
  - flag/Protocol/TCP
protocol-scheme:
  - ws
  - wss
---

[WebSocket 是什么 - FooFish](https://foofish.net/what-is_websocket.html)

[网络编程 - 廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/1252599548343744/1255945371526048)

- Fundamentals
    - 全双工
        - 一句话，[[TCP]] 支持全双工
        - 别想着 [[HTTP]]，对于 [[HTTP]] 来说，[[WebSocket]] 和 [[SSH]] 没区别——都是未知的协议
        - 容易疑惑的地方在于，[[WebSocket]] 与 [[HTTP]] **共用端口号**，但二者是互不相同、**互不兼容的协议**。实现原理？想想 [[Nginx]] + [[V2Ray]] 就懂了，接收 [[TCP]]，判断是 [[HTTP]] 还是 [[WebSocket]]，然后转发给不同后端

- Alternatives
    - [[SSE]]
