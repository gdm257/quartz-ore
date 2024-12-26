---
tags:
  - flag/Library/DataAccessLayer/Implement__/IO/DeSerialization
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: jsonschema-extractor
---

[toumorokoshi/jsonschema-extractor: Extract jsonschema from various Python objects](https://github.com/toumorokoshi/jsonschema-extractor)


```python
jsonschema-extractor library
Installation:
    * pip install jsonschema-extractor

Description:
    * Convert「typing 抽象基类（嵌套）」to「json schema 格式的 dict」.
    * Convert「attrs 类」to「json schema 格式的 dict」.

API:
    from jsonschema_extractor import extract

    .extract(cls) -> dict
        attr_cls: type
            * typing abstract base class
        -> json_schema: dict
            * json.dump() 就成了 json schema 文件.

```
