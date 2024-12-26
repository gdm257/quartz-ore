---
tags:
  - flag/MachineLanguage/Query
  - Label/Industry-工业科学/IT/Language
---

## Brief

- References
    - [JSONPath - XPath for JSON](https://goessner.net/articles/JsonPath/)

- Installation

- Dependencies

- Edition

- Idea
    - [[JSONPath]] aka [[XPath]] for [[JSON]]

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

- Philosophy
    - 为什么不用 [[XPath]]？
        - 实际上用 XPath/CSS 提取 JSON 是个不错的选择。XPath 可以直接解析 JSON，因为 JSON 可以转换为无属性的 XML。但这在各个语言里实现起来比较麻烦，尤其是强类型语言，需要先将 JSON 转换为 XML/HTML 才能用 XPath，不嫌麻烦可以这么做。
        - 很多 XPath 语法就用不上了，例如 `@`、各种节点类型，于是有了 JSONPath aka XPath for JSON。JSONPath 对于 JSON，相当于 XPath 对于 XML。
    - 为什么不用 Python 字典？
        1. 兼容性差。只能在 Python 用，JSONPath 在各个语言都有实现库，表达式能够跨语言。
        2. 不够灵活。无论是 Java 的 json 对象还是 Python 字典，每次索引只能索引一层，如果连续索引都快成硬编码了，看着都丑；而 JSONPath 表达式一次能索引到任何地方。
        3. 语法简洁，容易上手。如果过滤条件稍微复杂一点，直接用 Python 字典可能需要很多 for if 嵌套，稍微熟练点的可能会用 推导式 map() reduce() filter() any() all()，但都没有 JSONPath 表达式来的简单由雅。

- Objects

- Fundamentals

- Architecture

- Pro

- Con

- Test
    - Library 不少，但 CLI 基本没有，所以还是不用了，反正也不比 [[XPath]] 好多少

- Alternatives

- Description
