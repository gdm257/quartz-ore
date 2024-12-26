---
tags:
  - Label/Industry-工业科学/IT/Library/StandardLibrary
  - flag/Library/DataAccessLayer/Implement__/OOP/Context
aliases:
  - context
go: context
---

- Philosophy
    - Variables Sharing
        1. 全局变量
        2. 编程语言作用域机制
        3. Context
            - 想要共享变量，但既不依靠向上层查找的作用域机制，也不使用昂贵的网络 IO，那就只剩最后一条路：*函数参数*
            - 不同的需求，需要共享的 variables 以及 types 都是不同的。第一种方法，函数调用时，一个一个传入需要共享的 variables，显然不是个好方案……第二种方法，创建一个*容器*对象，把需要共享的 variables 通通放进容器里，函数调用时只需传入一个容器对象……嗯，这是个简单明了的好方法，这个容器对象，人们称呼它为 *Context*（上下文），并约定俗成将函数参数命名为 `ctx`
            - 为什么叫 *上下文* ？因为 `ctx` 需要**主动传递**给函数，这意味着「共享的变量不受作用域影响，仅仅只在主动传入的几个*特定的*函数中共享」。通常一个 `ctx` 仅在某几个 *回调函数* 中使用，例如处理一个 [[HTTP]] 请求的几个回调函数。也就是说，`ctx` 是 *业务级*，而不是编程语言模块级/全局级，而不同业务又是相互独立的，因此叫 *上下文*，非常形象
        4. 外部数据
            - MQ
            - [[Redis]]
            - [[MySQL]]
            - OSS

- Fundamentals
    - [【Go】透彻理解 context.Context - 潘忠显](https://panzhongxian.cn/cn/2023/08/go-context/)
    - [深入浅出Context原理 - ttlv - 博客园](https://www.cnblogs.com/tttlv/p/15026576.html)
