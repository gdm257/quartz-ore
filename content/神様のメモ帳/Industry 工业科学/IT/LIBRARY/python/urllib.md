---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/BuiltinLibrary
- flag/Library/BusinessLogicLayer/Implement__/FeatureScaling
---

[urllib.parse — Parse URLs into components — Python 3.11.2 documentation](https://docs.python.org/3/library/urllib.parse.html#module-urllib.parse)

[How to encode URLs in Python | URLEncoder](https://www.urlencoder.io/python/)

[URL Decoding query strings or form parameters in Python | URLDecoder](https://www.urldecoder.io/python/)

[urllib.parse — Parse URLs into components — Python 3.10.8 documentation](https://docs.python.org/3/library/urllib.parse.html)

[♢ urllib | LeoHsiao's Notes](https://leohsiao.com/Python/%E7%BD%91%E7%BB%9C%E9%80%9A%E4%BF%A1/urllib.html)


- Description
    - urllib 是一个 [[Python]] 标准库

```python
urllib standard library
API:
    urllib.request
    urllib.error
    urllib.parse  # 唯一有用的模块
    urllib.robotparser

    from urllib.parse import quote_plus, unquote_plus
    from urllib.parse import quote, unquote
    urllib.parse.quote()
        - URL 编码（空格编码为百分号 '%20'）
    urllib.parse.quote_plus()
        - URL 编码（空格编码为加号 '+'）
    urllib.parse.unquote()
        - quote() 的逆过程
    urllib.parse.unquote_plus()
        - URL 解码
        - quote_plus() 的逆过程

```
