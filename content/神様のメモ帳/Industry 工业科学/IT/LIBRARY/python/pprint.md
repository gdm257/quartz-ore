---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/DataAccessLayer/Implement__/IO/Logger
---

[Python 2 别再使用 pprint 打印字典了 - 王一白 - 博客园](https://www.cnblogs.com/wongbingming/p/13790044.html)


```python
# pprint 标准库
import pprint
import json
import yaml

dct_arr = [
  {'Name': 'John', 'Age': '23', 'Country': 'USA'},
  {'Name': 'Jose', 'Age': '44', 'Country': 'Spain'},
  {'Name': 'Anne', 'Age': '29', 'Country': 'UK'},
  {'Name': 'Lee', 'Age': '35', 'Country': 'Japan'}
]

pprint.pprint(dct_arr, indent=2, width=80, depth=None)
print(json.dumps(dct_arr, sort_keys=False, indent=4))
print(yaml.dump(dct_arr, sort_keys=False, default_flow_style=False))

pprint.pprint(dct_arr)
# Output
# [{'Age': '23', 'Country': 'USA', 'Name': 'John'},
#  {'Age': '44', 'Country': 'Spain', 'Name': 'Jose'},
#  {'Age': '29', 'Country': 'UK', 'Name': 'Anne'},
#  {'Age': '35', 'Country': 'Japan', 'Name': 'Lee'}]
print(json.dumps(dct_arr, sort_keys=False, indent=4))
# Output
# [
#     {
#         "Age": "23",
#         "Country": "USA",
#         "Name": "John"
#     },
#     {
#         "Age": "44",
#         "Country": "Spain",
#         "Name": "Jose"
#     },
#     {
#         "Age": "29",
#         "Country": "UK",
#         "Name": "Anne"
#     },
#     {
#         "Age": "35",
#         "Country": "Japan",
#         "Name": "Lee"
#     }
# ]

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
