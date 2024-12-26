---
aliases:
  - iter()
tags:
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/BuiltinFunction
  - flag/Library/BusinessLogicLayer/Implement__/FP
---

## Brief

- References

- Installation

- Dependencies

- Edition

- Idea
    - Get a [[typing#Iterator|Iterator]]
    - Implement [[Python#`for`|for]] loop

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API
    - `iterator: Iterator = iter(obj)`

- Mobile

- DSL

- Shortcuts

- Ecosystem

- Philosophy

- Objects

- Fundamentals
    - 首先调用对象的 `__iter__()` 方法
    - 如果 `__iter__()` 方法不存在则调用对象的 `__getitem__()` 方法，想办法构造一个生成器（有可能失败）

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description
