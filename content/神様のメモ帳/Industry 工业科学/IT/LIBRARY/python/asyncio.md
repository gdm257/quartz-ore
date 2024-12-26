---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- Label/Industry-工业科学/IT/Library/Plugin/Awaitable
- flag/Library/APILayer/Implement__/EventLoop
---

## asyncio

[Runners — Python 3.11.1 documentation](https://docs.python.org/3/library/asyncio-runner.html)

[Subprocesses — Python 3.11.1 documentation](https://docs.python.org/3/library/asyncio-subprocess.html)

[Coroutines and Tasks — Python 3.11.1 documentation](https://docs.python.org/3/library/asyncio-task.html)

[Exceptions — Python 3.11.1 documentation](https://docs.python.org/3/library/asyncio-exceptions.html)

[Synchronization Primitives — Python 3.11.1 documentation](https://docs.python.org/3/library/asyncio-sync.html)

[Queues — Python 3.11.1 documentation](https://docs.python.org/3/library/asyncio-queue.html)

[深入理解 Python 异步编程（上）](https://gist.github.com/baymaxium/53af1bca2123dbd0cb82154455e7d48e)

[《asyncio 系列》14. asyncio 的一些高级用法 - 古明地盆 - 博客园](https://www.cnblogs.com/traditional/p/17403428.html)

[Python小技巧之同步方法变为异步方法 - 掘金](https://juejin.cn/post/7084213927311048740)

[Asyncio中的子进程模块subprocess | Coderyang的笔记](https://zhaobugs.com/2020/03/11/Asyncio%E4%B8%AD%E7%9A%84%E5%AD%90%E8%BF%9B%E7%A8%8B%E6%A8%A1%E5%9D%97subprocess/)

[信号 - Python 项目工程化开发指南](https://pyloong.github.io/pythonic-project-guidelines/guidelines/advanced/signal_decouple/#aiosignal_1)

[同步执行异步代码](https://nemo2011.github.io/bilibili-api/#/sync-executor)


```python
import asyncio  # Python 3.4+


# 改造函数，为「创建任务」作准备
async def sum(*numbs) -> Union[int, float]:
    """数字求和."""
    return reduce(lambda x, y: return x + y, numbs)


# 入口函数
async def main():
    async_task_01 = sum(255, 257)  # 创建任务
    async_task_01 = sum(3.14, 257)  # 创建任务


result = asyncio.run(main())  # 创建事件循环。运行任务、阻塞等待、获取结果 Python 3.7+
async with asyncio.Runner() as runner:
    result = runner.run(aw)  # 创建事件循环。运行任务、阻塞等待、获取结果 Python 3.11+




def main():
    aw = something_async()  # 创建任务（非阻塞，之后就不再特别说明了）
    result = await aw  # 运行任务、阻塞等待、获取结果

    aw = something_async()  # 创建任务
    task = asyncio.create_task(aw)  # 运行任务
    result = await task  # 阻塞等待、获取结果

    aw = something_async()  # 创建任务
    task = asyncio.create_task(aw)  # 运行任务
    result = await asyncio.shield(task)  # 阻塞等待、获取结果

    aw = something_async()  # 创建任务
    task = asyncio.create_task(aw)  # 运行任务
    task.cancel()  # 取消任务
    task.get_coro() is aw # True



def run_aws(aws: list):
    fut_list = asyncio.as_completed(aws, timeout=None)  # 「批量」运行任务（设置总超时）
    for fut in fut_list:
        result = await fut  # 阻塞等待、获取结果
await 是阻塞的，不能批量运行任务。我们可以用 as_completed() 批量运行任务.


def run_aws(aws: list):
    result_list = await asyncio.gather(*aws)  # 「批量」运行任务、阻塞等待「所有」任务完成、获取「所有」任务结果
await 是阻塞的，不能批量运行任务。我们可以用 gather() 批量运行任务.




asyncio.wait_for() 可以当成「给 await 添加超时功能」.
await asyncio.wait_for(awaitable_obj, timeout=5.0)  # 运行任务、阻塞等待（限制超时）、获取结果
await 操作是阻塞的，而且没有设置超时，要是一直不返回，那就永久阻塞。


asyncio.timout(5) 也可以当成「给 await 添加超时功能」，但是 async with.
Python 3.7/3.10 试了下，发现 asyncio 并没有这个 API，莫非要 3.11？
async with asyncio.timout(5):
    await ready_to_battle()
    # 运行任务、阻塞等待（限制超时）、获取结果








process: asyncio.subprocess.Process = await asyncio.create_subprocess_shell(
    'ls -al',
    stdout=asyncio.subprocess.PIPE,
    stderr=asyncio.subprocess.PIPE,
)  # 创建任务

process: asyncio.subprocess.Process = await asyncio.create_subprocess_exec(
    '/path/to/notepad2.txt', 'a.txt', 'b.txt',
    stdout=asyncio.subprocess.PIPE,
    stderr=asyncio.subprocess.PIPE,
)  # 创建任务

exit_code: int = await process.wait()  # （方法一）运行任务、阻塞等待、获取结果 process.returncode
stdout, stderr = await process.communicate()  # （方法二）运行任务、阻塞等待、获取结果



- asyncio 的 API 分为高层级 API、低层级 API.
- 开发 App，高层级 API 完全够用（确实如此）.
- 低层级 API 是给框架作者用的.
- 有了 await，为何还会有 asyncio.create_task() 和 asyncio.Task？因为 await 是「运行任务」「阻塞等待」「获取结果」三合一，显然不够灵活，例如我们无法通过 await 同时并发多个可等待对象.
- asyncio.create_task() 将「可等待对象a01」封装为 asyncio.Task，而 asyncio.Task 也是「可等待对象b01」，这么做的意义？直接用 a01 不行吗，并发完全可以 asyncio.gather(a01, a02, a03, ...) 啊？我能想到的：只「运行任务」，不阻塞，然后做其他事，需要的时候再主动阻塞等待，需要的时候再「获取结果」；第二，「运行任务」之后，可以利用 asyncio.Task 对象「强行取消任务」，即便任务还没结束。单论并发，a01 a02 a03 那样确实足够了，没区别，但是论灵活性，还得是 asyncio.Task。也就是说，asyncio.Task 就是用来「管理」可等待对象的。而且我怀疑，await 其实会自动将 a01 封装为 asyncio.Task 来运行，证据就是 asyncio.current_task() 和 asyncio.all_task() 的返回值类型为 asyncio.Task，如果 await 没隐式生成 asyncio.Task，哪来的任务。
- coroutine 指「协程函数」，而不是「协程函数的调用」.
- 「协程函数的调用」返回的是「可等待对象」.
- asyncio.Queue 我猜测类似于 Go 的 channel

asyncio 有很多功能。

0. 提供装饰器 @asyncio.coroutine 来定义协程函数（不再推荐，请用 "async def" 定义协程函数）
1. 获取 even loop
2. 构建 task by `asyncio.create_task() - python 3.7+` `loop.create_task()` `asyncio.ensure_future() - python 3.7 之前推荐用这个`
3. push task to even loop
4. pull task from even loop
5. 获取 queue
6. push task to queue
7. pull task from queue


import asyncio

# 1. 协程函数
async def func01():
    print('线程开始运行我了')
    url = 'https://www.baidu.com'
    resp = await request(url)  # 这里的 await 相当于 resp = yield request(url)，线程执行到这里会将 task（本函数）挂起，然后无缝切换到下一个 task 继续执行，直到返回了对象（事件循环会自动回调，然后实时监视是否有响应，效果相当于使用 yield 时会自动迭代，无需显式使用 for 或 __next__() 来迭代）
    print(resp)
    print(结束)
    return resp  # 这里没有黑魔法，就是普通的 return


async def func02():
    print(999)
    await asyncio.sleep(2)  # asyncio.sleep(2) 相当于 time.sleep(2)
    return 0

# 2. 协程对象
result = func01()  # 目测也是个迭代器

# 3.1 Push Coroutine Object 方法一
loop = asyncio.get_event_loop()  # 获取一个事件循环
loop.run_until_complete(result)  # 将任务 push 到队列

# 3.2 Push Coroutine Object 方法二（Python 3.7+）
asyncio.run(result)  # 目测 push 到默认队列

# 3.3 Push Coroutine Object
done_set, pending = asyncio.run()

# 4 Push Task Object
def main():
    task01 = asyncio.create_task(result, name='task01')
    task_list = []
    task_list.append(task01)
    done_set, pending = await asyncio.wait(task_list, timeout=None)
    # await task？
    # 关键词 awaitable

loop = asyncio.get_event_loop()  # 获取一个事件循环
loop.run_until_complete(main())  # 将任务 push 到队列


Future 类是 Task 的基类，Future() is awaitable

asyncio: 管理coroutine的Python库
Coroutines, 是Python生成器（generator）的一种,coroutine是一种在最后返回前可以暂停其执行过程的函数，它 可以间接的把CPU让渡给其它coruotine运行。
我们后面会深入了解传统的生成器函数是如何演进成coroutine。


"async def" 产生一个原生的coroutine对象或一个异步生成器对象。
async for 和 async with 也是合法的表达式，后面你会看到它们的使用。
coroutine函数里可以包含有关键字await的表达式。当执行到它时，会暂停这个coroutine的执行，将控制返回给事件循环。比如在g()里包含了'await f()',
那么g()必须是一个coroutine, 也就是由'async def'来定义的。

可以看出 yield 与 async/await 有微妙差别。yield 其实有 2 个基本作用，第一，声明该函数是生成器函数；第二，该函数应在 yield 处暂停。为了更细微的控制，第一点由 async 负责，即 "async def"；第二点由 await 负责，即 yield from。

从技术上来看，‘await’更像是’yiled from’ 而不是 'yield'
    ‘await’ 是对‘yield from’ 的一种模仿

由 "async def" 定义的函数执行后返回一个coroutine对象。在coroutine函数里可以有 await, return或yield, 但它们都不是必须的。couroutine 里不能使用 yield from。

在同一个 coroutine 中调用 ‘await’ 和 ‘yield’ 就会变成一个异步生成器

无论是异步生成器还是异步解析式都不会使迭代调用并发，而是当循环遇到异步的点时暂时放弃 CPU 的所有权好让其它 coroutine 能够运行。这本质上是一个大大的语法糖

之所以要设计 ‘async for’ 和 ‘async with’ 这时因为如果使用同步的 ‘for’ 和 ‘with’ 会破坏对包含它们的 coroutine 的 ‘await’ 调用。对异步和并发区别的理解是掌握这个不同的关键。

注意：你可能会奇怪为什么Python的request库不兼容异步IO。这是因为Python 的request库是实现在urllib3之上的，而urllib3又是利用的Python的http和socket模块。

缺省情况下，socket 操作都是阻塞的。这意味着不应该使用 ‘await requests.get(url)’ 因为 ‘.reqeusts.get()’ 不是一个 awaitable 对象。相反，aiohttp 库里的几乎所有成员都是 awaitable 对象， 比如 session.request() 和 response.text()。所以请不要用 request 库来写异步代码。




当你使用 await f() 时，要求 f() 必须是一个 awaitable 的对象。

- coroutine协程对象
- 一个定义了一个返回值是一个迭代器，名字是 .__await()的成员函数的对象

基本上你在写代码时，只需要关注第一种。第二种类似于自定义迭代器。

之所以引入 async/await 语法，目的是使 coroutine 成为 Python 中单独的一个特性，而不要和生成器混淆起来。

coroutine是一个awaitable对象，可以被另一个coroutine通过await调用：coroutine -> await -> coroutine。通过这种方式我们可以把程序分解成多个串联 的小的，可管理的，能循环调用的调用链。



协程函数：`async def` の函数
协程对象：协程函数被调用时返回的对象。也就是说，直接像普通函数一样调用协程函数，函数是不会被执行的，而是返回一个协程对象。就好比生成器函数 yield 返回的对象是一个迭代器（生成器），而不是直接的值，要想得到具体的值，需要手动迭代。想要得到协程对象真正的值，需要 push 到事件循环的队列。


```
