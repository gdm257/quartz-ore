---
aliases:
  - json
  - Python json
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/DeSerialization
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

- Alternatives
    - [ijl/orjson](https://github.com/ijl/orjson?tab=readme-ov-file#dataclass)

- References
    - [Python Read, Write, Parse JSON (with examples) | JSONFormatter](https://www.jsonformatter.io/python-json-parse-read-write-load-dump/)


```python
import json

# load file to dict
with open('E:\[Note]\db-unicode.json', 'r') as f:
    data = json.load(f)

# save dict to file
with open('E:\[Note]\db.json', 'w', encoding='utf-8') as f:  # 不加 encoding 会使用 windows 默认编码如 gbk，容易报错
    json.dump(data, f, ensure_ascii=False)  # ensure_ascii=False 可以将 \uFFFF 转换为正确字符

data = {
    'name' : 'ACME',
    'shares' : 100,
    'price' : 542.23
}

# str vs dict
string = json.dumps(data)
string = json.dumps(data, ensure_ascii=False, encoding='utf-8')
data = json.loads(string)

# save str to file
with open('a.json', 'w', encoding='utf-8') as f:
    json.dump(string, f, ensure_ascii=False, indent=4)

# 格式化打印 json
dct_arr = [
  {'Name': 'John', 'Age': '23', 'Country': 'USA'},
  {'Name': 'Jose', 'Age': '44', 'Country': 'Spain'},
  {'Name': 'Anne', 'Age': '29', 'Country': 'UK'},
  {'Name': 'Lee', 'Age': '35', 'Country': 'Japan'}
]

print(json.dumps(dct_arr, sort_keys=False, indent=2, ensure_ascii=False))
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


UnicodeEncodeError: 'gbk' codec can't encode character '\xe5' in position 2: illegal multibyte sequence


```
