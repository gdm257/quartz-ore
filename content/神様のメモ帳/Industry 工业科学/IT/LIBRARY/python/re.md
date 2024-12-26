---
aliases:
- Python re
tags:
- flag/LANGUAGE/RegExp
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/BusinessLogicLayer/Implement__/FeatureScaling
---

## API

[正则表达式HOWTO — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/howto/regex.html)

[rflynn/regroup: Generate a regular expression that describes a set of strings.](https://github.com/rflynn/regroup)

[译 Python正则表达式拾珠 | Frost's Blog](https://frostming.com/2018/02-06/python-hidden-regexp/)


```python
re standard library
API:
    import re

    re.match(pattern, s) -> re.Match | None
        - 前缀匹配
    re.search(pattern, s) -> re.Match | None
        - 部分匹配
    re.fullmatch(pattern, s) -> re.Match | None
        - 完全匹配
    re.Match
        - bool(re.Match) == True
    re.sub(pattern, repl, s)
        flags
            - E.g. flags=re.I|re.M|re.S
        - 部分替换
    re.I    大小写不敏感
    re.M    使 ^ $ 能够匹配每行的 开头 结尾
    re.S    使 . 能够匹配任意字符，包括换行符

```


## 正则表达式风味

- 命名分组
    - `(?P<custom_name>regexp)`
- 捕获分组
    - `(regexp)`
- 反向引用
    - `\g<N>` 捕获分组
    - `\g<name>` 命名分组
    - E.g.
    - `\g<0>` 整个字符串
    - `\g<1>` 第 1 个未命名分组
    - `\g<2>` 第 2 个未命名分组
    - `\g<3>` 第 3 个未命名分组
    - ……
    - `\g<N>` 第 N 个未命名分组
    - `\g<schema>` 名为 schema 的分组
    - `\g<domain>` 名为 domain 的分组
    - `\g<port>` 名为 port 的分组
    - `\g<uri>` 名为 uri 的分组
