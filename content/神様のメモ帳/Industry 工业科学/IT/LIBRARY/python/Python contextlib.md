---
aliases:
- Python contextlib
- contextlib
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/BusinessLogicLayer/Implement__/FP
---

## Brief

- References
    - [Python进阶——什么是上下文管理器？ - 掘金](https://juejin.cn/post/6900029472926334983)

- Installation

- Dependencies

- Edition

- Idea

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Ecosystem

- Philosophy

- Objects

- Fundamentals

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description
 
## API

```python
API:
    .closing(T()) -> ContextManager
        * 适用于不需要 __enter__，只需要 __exit__ 的类.
        * 类 T 必须实现 close(self) 方法.
        * ContextManager 的 __exit__ 会调用 close 方法.
    .aclosing(T())
    @contextmanager()
        * 装饰器 装饰一个生成器函数.
        * 装饰器 使函数调用返回上下文管理器.
        * 生成器函数 只能 yield 一次.
        * 生成器函数 yield 之前 相当于 __enter__.
        * 生成器函数 yield 返回 相当于 __enter__ 的返回值.
        * 生成器函数 yield 之后 相当于 __exit__.
        * 生成器函数 内部发生异常，需在函数内部处理，否则不会继续执行.
    @asynccontextmanager()

```
