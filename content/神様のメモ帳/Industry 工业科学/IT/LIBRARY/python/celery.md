---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/Collections/Queue
  - flag/Library/DataAccessLayer/Implement__/IO/DbClient
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[Python 定时任务最佳实践 - 知乎](https://zhuanlan.zhihu.com/p/92152648)


```python
celery 主要作为分布式队列使用.

redis/MQ needed，对我来说太重了。

Reactor这个词译成汉语还真没有什么合适的，很多地方叫反应器模式，但更多好像就直接叫reactor模式了，其实我觉着叫应答者模式更好理解一些。Reactor 是基于事件驱动模型的。

并发系统常使用reactor模式，代替常用的多线程的处理方式，节省系统的资源，提高系统的吞吐量。




```