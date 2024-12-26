---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/OOP/DTO_Model
  - flag/Library/BusinessLogicLayer/Implement__/Exception
  - Label/Industry-工业科学/IT/Library/3rdLibrary
homepage: https://pydantic.dev
github: pydantic/pydantic
pip: pydantic
---

[友好的 Python：面向对象接口 | Frost's Blog](https://frostming.com/2022/friendly-python-oop/)

[浅谈Python鸭子类型 - SSgeek - 博客园](https://www.cnblogs.com/ssgeek/p/14720426.html)

[dataclasses vs attrs vs pydantic - 知乎](https://zhuanlan.zhihu.com/p/410399922)

[python库pydantic简易教程 - 掘金](https://juejin.cn/post/7079027549896081421)

[Python笔记：Pydantic库简介_Espresso Macchiato的博客-CSDN博客_pydantic](https://blog.csdn.net/codename_cys/article/details/107675748)

[Pydantic官方文档_bossenc的博客-CSDN博客_pydantic](https://blog.csdn.net/swinfans/article/details/89629641)

[bogdandm/json2python-models: Generate Python model classes (pydantic, attrs, dataclasses) based on JSON datasets with typing module support](https://github.com/bogdandm/json2python-models)

[koxudaxi/datamodel-code-generator: Pydantic model generator for easy conversion of JSON, OpenAPI, JSON Schema, and YAML data sources.](https://github.com/koxudaxi/datamodel-code-generator)

[Schema - pydantic](https://docs.pydantic.dev/usage/schema/)

[Code Generation - pydantic](https://docs.pydantic.dev/datamodel_code_generator/)

[starlite-api/pydantic-factories: Simple and powerful mock data generation using pydantic or dataclasses](https://github.com/starlite-api/pydantic-factories)

[Validation Decorator - Pydantic](https://docs.pydantic.dev/latest/concepts/validation_decorator/)


```python
# pip install pydantic
# pip install pydantic[email,dotenv]

Pydantic 用于定义 schema model 之类的，参考 scrapy 的 item，一个字，由雅.
FastAPI 就使用了 Pydantic.


from pydantic import BaseModel, Field, ValidationError


class User(BaseModel):
    id: int
    name = 'Jane Doe'
    description: Optional[str] = None
    password: str = Field(alias='passwd')


class Group(BaseModel):
    users: List[User]


my_data = {
    'id' = 11,
    'name' = '11',
    'description' = '11',
    'password' = '',
}

try:
    user01 = User(id='123')
    user02 = User(**my_data)
    print(user01.dict())
    print(user01.json())
except ValidationError as e:
    print(e)


```
