---
aliases:
- clr
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/BusinessLogicLayer/Implement__/Interop
---

[Python for .NET — pythonnet 2.4.0 文档](https://dev.listera.top/docs/pythonnet/pythonnet.github.io.html)

[pythonnet/pythonnet: Python for .NET is a package that gives Python programmers nearly seamless integration with the .NET Common Language Runtime (CLR) and provides a powerful application scripting tool for .NET developers.](https://github.com/pythonnet/pythonnet)

[Python中调用C#的dll库 - 知乎](https://zhuanlan.zhihu.com/p/435528777)

[怎么通俗的解释COM组件？ - 知乎](https://www.zhihu.com/question/49433640)

[【CLR via C#】全书提炼总结-第一部分 CLR基础 - 知乎](https://zhuanlan.zhihu.com/p/50883007)


```python
import sys
import clr
from clr import System

"""
CLR 公共语言运行时，是 python 互操作其他语言的核心.

Managed Code 托管代码: CLR 控制下运行的代码.
    E.g. C#、VB.NET 代码

Unmanaged Code 非托管代码: 不在 CLR 控制下运行的代码.
    E.g. COM、COM+、C++ 组件、ActiveX 组件和 Microsoft Windows API


什么是「互操作」？

平时我们编程都只在一个平台，平台里的对象之间可以直接相互调用。例如，Python 是一个平台，Python 对象可以直接操作另一个 Python 对象。JVM 是一个平台，Java 对象可以直接操作另一个 Java 对象，甚至可以操作 Kotlin 对象。

现在的问题是，一个平台中，怎么操作另一个平台的对象？例如，C# 怎么操作 Java 的类？

答案是没法直接操作。每个语言的规范不一样，模型不一样，实现不一样，什么都不一样，自然没法直接操作。

直接操作不行，间接操作可不可以呢？

答案是理论上可以。COM 就是为此而生。COM 相当于语言平台级别的 protobuf，能够将不同语言的**部分**对象翻译成 COM 定义的对象，然后将 COM 对象翻译成另一个语言平台的对象。除了翻译，COM 还允许调用 COM 组件，从而实现间接操作另一个语言平台的对象。

理想是好的，但语言之间的差异实在是太大了，想要 100% 兼容那是不可能的，想要简单那是更不可能的。所以 COM 才那么复杂，功能相比单一语言才那么少，用的人也就更少。

JVM 则放弃了跨平台的互调：我为什么要跨平台？我直接做一个 VM，让不同语言按规范运行不就好了，语法规范什么的语言自己决定，这就是 Java 与 JVM。所以 Kotlin 操作 Java 对象才那么轻松，因为它们都运行在 JVM 平台下，根本没有跨平台。

JVM 的成功说明这条路能走通，但是「不同语言平台之间的协作」的需求仍然存在，真没有其他办法了吗？

有，且仅有一个：进程间通信。这也是一直以来最普遍的做法。上到 Web，下到 Linux 内核，进程间通信无处不在。

COM 的思想是，A 语言平台能通过 COM **调用** B 语言平台的对象。

进程间通信 的思想是，A 进程（A 语言平台）向 B 进程（B 语言平台）发送 TCP/UDP 请求，进程 B 接收到请求后，**进程 B 自己操作 B 语言平台的对象，将执行结果响应给进程 A**，这就是 API。

优点：
简单。「互操作/调用」变成了「通信」，大大降低了复杂性。
跨所有平台。A 不需要实现 B 的任何模型，只需要根据 B 公开的 API 发送请求即可。

缺点：
功能少。A 只能使用 B 公开的 API，API 没有提供的操作就没办法了。
不够灵活。「调用」变成了「通信」，操作对象变成了发送请求，自由度大大下降。






CLR跟Jvm还是有点区别的，前者会把代码编译为Native code，而后者底层还是个解析器 解析字节码。

COM的规范为了适配不同的语言，对象类型的机制非常复杂。如果你用过typelib系列的API的话，就知道对象成员，方法，参数的信息表达是很不直观的，为了考虑语言特性，会有很多兼容设计。嵌套类型想要解析出来也需要下一番功夫。

另外还有一个问题，COM需要统一注册，而很多人喜欢用绿色软件往往缺少这个过程导致功能异常。已经删除的软件由于程序员的疏忽也非常容易在注册表里留下垃圾。

COM要解决的问题大致有这些：

1，跨语言的互操作：C++、VB、JS等语言之间互相调

2，组件服务的可见性：需要一个仓库（注册表）登记提供服务的组件让使用者可以找到

3，组件的线程安全：需不需要考虑线程安全？在调用者线程执行还是在组件的工作线程执行？谁加锁？COM提供了三种选择。

4，调用的权限控制：调用者有没有权限使用组件提供的服务？

5，跨进程：RPC

6，跨机器（DCOM）

7，事务性支持（COM+）

无论用什么编程语言，要实现这些设计目标，都不会很简单。

一个类似的例子是Android的Binder框架。它要解决的问题跟COM很相似：

1，跨语言：C++、JAVA

2，服务的可见性：组件需要注册到Service Manager

3，线程的安全性：组件自己解决，框架不管

4，调用的权限控制：checkPermission。。。

5，跨进程：Binder Driver

如果把目标简化一点，比如不考虑跨语言、跨进程、权限检查等目标，自己写一个COM框架其实不复杂。

.net是com一套精美的封装，精美到你不必关心它是否是com组建

COM是OO技术的巅峰之作，COM之后的OO都是COM的子集而已

COM的意图在于标准化OO组件的界面，使得

    跨平台跨语言
    跨机器跨进程

的分布式对象服务可以标准化，而且服务方可以被动态替换。COM的本质是一个分布式OO-RPC规范

COM的最核心的思想，说白了就是要做个跨语言的 “class” “object” “function” 。

因为所有OOP语言，这三个都是核心，如果能做到这三个语言要素跨语言，所有语言不都是可以互通了，互通了，那么所有程序员不都可以很happy的在windows上用自己喜欢的语言编程了，这是目的。是不是很简单？

但做起来就费事儿了，而且用起来过于复杂，这就导致了后来的vm的方式来达到语言互通，vm提供了基础的语言或者说运行时的抽象，上层语言架构在vm之上，之后的语言互通就好办了，毕竟有了“经济基础”，这条路被java证实了，而且很成功。所以微软就放弃了com，走了CLR。

什么叫COM组件，说白了，就是一堆功能相关的interface，他是某种语言向另种语言暴露功能的最大单位。

首先很多大型软件都使用 COM 来提供 API，这个死不了，Office 软件、Adobe PDF、IE的API、正则表达式接口、CAD的API，winnet 接口等等。
"""





```