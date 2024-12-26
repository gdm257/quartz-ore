---
tags:
  - flag/Library/DataAccessLayer/Implement__/IO/DeSerialization
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: PyYAML
---

[Python 项目工程化最佳实践指南](https://www.qin.news/python/)

[配置 - Python 项目工程化开发指南](https://pyloong.github.io/pythonic-project-guidelines/guidelines/advanced/exception/)


配置管理

建议将配置放在 {project_name}/{project_name} 文件夹中，使用 yaml 格式进行保存。之所以不用 toml 之类的格式是因为如果用 k8s 之类的配置映射功能的话就没法使用了，yaml 则可以很好的与其它系统保持兼容。

你可以将配置所在的 yaml 文件读取出来并且反序列化成一个配置对象。这个配置对象可以是 python 中的 dataclass 也可以就是一个普通的类，并且上面声明配置的每个字段。

配置是一种可能经常会增删字段的东西，我们不应该通过类似 dict 的方式进行操作。


```python
# pip install PyYAML

import yaml

# 读取 yaml
with open('test.yaml', encofing='utf-8') as f:
    dict = yaml.load(f, Loader=yaml.CLoader)
    # 旧版为 Fullloader，新版为 CLoader

string = yaml.dump(dict, allow_unicode=True)  #转换，非必要

# 写入 yaml
with open('export.yaml', 'w', encofing='utf-8') as f:
    data = yaml.dump(dict, f)


dct_arr = [
  {'Name': 'John', 'Age': '23', 'Country': 'USA'},
  {'Name': 'Jose', 'Age': '44', 'Country': 'Spain'},
  {'Name': 'Anne', 'Age': '29', 'Country': 'UK'},
  {'Name': 'Lee', 'Age': '35', 'Country': 'Japan'}
]

print(yaml.dump(dct_arr, sort_keys=False, default_flow_style=False))
# Output
# - Name: John
#   Age: '23'
#   Residence:
#     Country: USA
#     City: New York
# - Name: Jose
#   Age: '44'
#   Residence:
#     Country: Spain
#     City: Madrid
# - Name: Anne
#   Age: '29'
#   Residence:
#     Country: UK
#     City: England
# - Name: Lee
#   Age: '35'
#   Residence:
#     Country: Japan
#     City: Osaka

```
