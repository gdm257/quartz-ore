---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/Collections/Queue
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[Python中的Queue和deque - 知乎](https://zhuanlan.zhihu.com/p/146393319)


- [aioamqp](https://github.com/Polyconseil/aioamqp) \- 使用 asyncio 实现 AMQP.
- [pyzmq](https://github.com/zeromq/pyzmq) -ZeroMQ 的 Python 绑定.
- [aiozmq](https://github.com/aio-libs/aiozmq) \- 与 ZeroMQ 的替代性 Asyncio 集成.
- [crossbar](https://github.com/crossbario/crossbar) -Crossbar.io 是用于分布式和微服务应用程序的网络平台.
- [asyncio-nats](https://github.com/nats-io/asyncio-nats) \- Client for the NATS messaging system.
- [aiokafka](https://github.com/aio-libs/aiokafka) -Apache Kafka 的客户端.

```python
from queue import (
    Empty,
    Full,
    LifoQueue,
    PriorityQueue,
    Queue,
    SimpleQueue
)

q = Queue(maxsize=7)  # 默认 maxsize=0，无上限
lq = LifoQueue(maxsize=7)
pq = PriorityQueue(maxsize=7)

max_size: int = q.maxsize
current_size: int = q.qsize()
is_empty: bool = q.empty()
is_full: bool = q.full()
unfinished_size:int = q.unfinished_tasks

q.put(obj)
q.put_nowait(obj)
obj = q.get()  # 阻塞 get，直到拿到对象
obj = q.get_nowait()
q.join()  # 阻塞，直到

.not_full
.not_empty
.all_tasks_done
task_done()
.mutex
.queue



```