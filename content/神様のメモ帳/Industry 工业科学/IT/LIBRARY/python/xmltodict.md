---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/DeSerialization
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[martinblech/xmltodict: Python module that makes working with XML feel like you are working with JSON](https://github.com/martinblech/xmltodict)

[Python XML to JSON, XML to Dict | DigitalOcean](https://www.digitalocean.com/community/tutorials/python-xml-to-json-dict)


```python
# pip install xmltodict

xml 字符串反序列化为 python 字典


import xmltodict
import typing


xml_string = """
    <audience>
      <id what="attribute">123</id>
      <name>Shubham</name>
    </audience>
"""

xml_dict: typing.OrderedDict = xmltodict.parse(xml_string)
xmltodict.unparse(xml_dict, pretty=True)


```

