---
tags:
  - flag/Library/DataAccessLayer/Implement__/IO/DeSerialization
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: lxml
---

## Brief

- References
    - [Parsing XML and HTML with lxml](https://lxml.de/parsing.html)
    - [Validation with lxml](https://lxml.de/validation.html)
    - [The lxml.etree Tutorial](https://lxml.de/tutorial.html)

- Installation
    - `pip install lxml`

- Version
    - 

- Idea
    - 

- Configuration
    - 

- Data
    - 

- Examples
    - 

- Users
    - 

- GUI
    - 

- CLI
    - 

- DSL
    - 

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 

- Architecture
    - 

- Pro
    - 

- Con
    - 

- Test
    - 

- Alternatives
    - 

- Description
    - 


```python
import requests
from lxml import etree
from io import StringIO


url = 'https://book.douban.com/'
resp = requests.get(url, timeout=10)
resp.encoding = 'utf-8'
html = resp.content.decode('utf-8')
selenium...
html = resp.text
page = etree.HTML(html)
page = etree.parse('/path/to/xxx.html')
page = etree.parse(StringIO(html))

print(page.xpath('/html/head/a'))  # 打印 html - head 下所有的 a 标签

# 解析所有属性 class 值为 info 的 div 标签（xml 里也叫 div「元素」）
for book in page.xpath('//div[@class="info"]'):

    # 获取标签の属性
    print(book.attrib)  # 类似这样 {'target': '_blank', 'rel': 'nofollow', 'href': 'http://www.cydf.org.cn/'}

    # 获取标签の属性的值
    print(book.get('href'))  # 'http://www.cydf.org.cn/'

    # 获取标签包裹的值
    print(book.text)

    # 利用属性筛选标签
    title = book.xpath('.//a[@title]')[0].text.strip()
    author = book.xpath('.//div[@class="author"]')[0].text.strip()

    print(title.values())
    print(author.values())  # ['author']

print('《' + title + '》——' + author)


"""
xpath 获取：浏览器 - 开发者工具箱 - 查看器 - 元素 - 右键 - 复制 - xpath

对于/html/body/a：“/”分隔上下级，最开始是文件本身（而不是html），文件下一级才是html
另外，使用//a效果等价于“html下的所有 a 标签”：
因为：中间的“/”等于“descendant::”
descendant:: 前缀可以指代任意多层的中间节点，它也可以被省略成一个“/”
/descendant::a 等价于 //a


没有属性可以用文本或者位置来筛选：
文本用 text()：hs = page.xpath('/html/body/h1[text()="Top News"]')
位置用 position()：hs = page.xpath('//h1[position()=1]')
对于位置筛选，常常省略，直接用：hs = page.xpath('//h1[1]')
*表示任意标签 '/html/*'
div[2]  # 第 2 个 div 标签（从 1 开始索引，而不是 0）

/html/body/div[2]/form/div[2]  # 本页全部画廊
/html/body/div[2]/form/div[2]/div[i]  # 第 i 本画廊
/html/body/div[2]/form/div[2]/div[i]/div[2]/a - 属性 href  # URL
/html/body/div[2]/form/div[2]/div[i]/div[2]/a/img - 属性 title
/html/body/div[2]/form/div[2]/div[i]/div[2]/a/img - 属性 src  # 封面 URL
/html/body/div[2]/form/div[2]/div[i]/div[5]/div[1]/div[2] - 属性 title  # 收藏夹名称「短篇」

改进:
/html/body/div[@class='ido']/form/div[@class='itg gld']  # 本页全部画廊
/html/body/div[@class='ido']/form/div[@class='itg gld']/div[i]  # 第 i 本画廊，从 1 开始索引

/html/body/div[@class='ido']/div[@class='nosel']/div[1]




"""


```
