---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/DTO_Model
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[attrs 22.2.0 documentation](https://www.attrs.org/en/stable/)

[python-attrs/attrs: Python Classes Without Boilerplate](https://github.com/python-attrs/attrs)

[attrs强大的类装饰器 | Escape](https://www.escapelife.site/posts/c4bddc48.html)

[Extensions to attrs · python-attrs/attrs Wiki](https://github.com/python-attrs/attrs/wiki/Extensions-to-attrs)

[bogdandm/json2python-models: Generate Python model classes (pydantic, attrs, dataclasses) based on JSON datasets with typing module support](https://github.com/bogdandm/json2python-models)

[toumorokoshi/jsonschema-extractor: Extract jsonschema from various Python objects](https://github.com/toumorokoshi/jsonschema-extractor)

[genomoncology/related: Nested Object Models in Python with dictionary, YAML, and JSON transformation support](https://github.com/genomoncology/related)

[dataclasses vs attrs vs pydantic - 知乎](https://zhuanlan.zhihu.com/p/410399922)


```python
attrs standard library
Installation:
    * pip install attrs

Description:
    * 很多人提议将 attrs 纳入标准库，最后被 Python 之父拒绝了.
    * attrs 比 pydantic 更灵活、更规范.
    * attrs 不能直接上手，需要看文档.
    * pip install attrs 带有幽灵依赖 attr.
    * attrs 包是新版，attr 包是旧版，但官方说旧版会永久保留.
    * attrs 模块更现代，尽量使用.
    * attr 模块是旧版用法，你仍然可以使用.
    * MIT license.

API:
    from attr import dataclass
    @dataclass()
        * 用 dataclass 的写法定义 attrs 类.
        * 依旧有 必要参数、默认参数 の顺序问题，尽量别用.


    import attrs
    from attrs import field, define, frozen, mutable, asdict, astuple

    .field()
        *,  # keyword-only
        init: bool = True
            * 是否作为 __init__ 的形参.
        kw_only: bool = False
            * field 在 __init__ 的默认位置，是否为 keyword-only.
        default = NOTHING
            * 默认值.
        alias: str
            * field 别名，会创建同名实例属性.
        validator
        repr: bool = True
            * 人类可读的 __repr__.
        factory
        * 定义 Schema 的字段.
        * 完全等价于 attr.attrib

    .asdict()
    .astuple()

    @attrs.define()
        kw_only: bool = False
            * field 在 __init__ 的默认位置，是否为 keyword-only.
            * keyword-only 代表实参必须指定参数名，这是函数签名的知识.
        frozen: bool = False
        slots: bool = True
        == another_instance -> bool
        * 修饰一个类.
        * 定义 attrs 类.
        * 相当于 attr.attrs

    @mutable()
        * alias for define.

    @frozen()
        * alias for define(frozen=True, on_setattr=None)
        * functools.partial(define, frozen=True, on_setattr=None)

```