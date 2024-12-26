---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinLibrary
- flag/Library/DataAccessLayer/Implement__/OOP/DTO_Model
---

[PEP 557 – Data Classes | peps.python.org](https://peps.python.org/pep-0557/)

[PEP 681 – Data Class Transforms | peps.python.org](https://peps.python.org/pep-0681/)

[dataclasses --- 数据类 — Python 3.10.6 文档](https://docs.python.org/zh-cn/3/library/dataclasses.html)

[bogdandm/json2python-models: Generate Python model classes (pydantic, attrs, dataclasses) based on JSON datasets with typing module support](https://github.com/bogdandm/json2python-models)

[konradhalas/dacite: Simple creation of data classes from dictionaries.](https://github.com/konradhalas/dacite)

[lidatong/dataclasses-json: Easily serialize Data Classes to and from JSON](https://github.com/lidatong/dataclasses-json)

[s-knibbs/dataclasses-jsonschema: JSON schema generation from dataclasses](https://github.com/s-knibbs/dataclasses-jsonschema)

[eigenein/protobuf: Python implementation of Protocol Buffers with dataclass-based schemaʼs](https://github.com/eigenein/protobuf)

[ijl/orjson: Fast, correct Python JSON library supporting dataclasses, datetimes, and numpy](https://github.com/ijl/orjson)

[starlite-api/pydantic-factories: Simple and powerful mock data generation using pydantic or dataclasses](https://github.com/starlite-api/pydantic-factories)

[dataclasses vs attrs vs pydantic - 知乎](https://zhuanlan.zhihu.com/p/410399922)


```python
from dataclasses import dataclass, asdict, astuple, field


@dataclass
class Model:
    p01: int = 257
    p02: str = 'gdm'


dict01 = {...}
model01 = Model(...)
assert asdict(model01) == dict01  # dataclass obj to dict


dataclasses 不具备验证功能，所以推荐 pydantic/attrs


```
