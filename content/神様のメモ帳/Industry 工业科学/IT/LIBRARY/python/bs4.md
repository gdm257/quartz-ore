---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/Logger
  - flag/Library/DataAccessLayer/Implement__/IO/DeSerialization
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## bs4.BeautifulSoup.prettify()

```python
# pip install beautifulsoup4

解析 xml/html 请用 lxml。bs4 只是用来打印 html 的。

BeautifulSoup 中有内置的方法 prettfy() 来实现格式化输出 HTML

from bs4 import BeautifulSoup

html_string = resp.content

soup = BeautifulSoup(html_string, 'lxml')
print(soup.prettify())


```
