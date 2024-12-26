---
tags:
  - flag/License/Freeware
  - flag/Platform/Windows独占
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/File/CRUD/Read
protocol-scheme:
  - es
---

[Everything必知必会搜索教程 - xiake001的专栏 - CSDN博客](https://blog.csdn.net/xiake001/article/details/76094559)


1. 语法

【一、条件】
任意「*」
任何一个字符「?」
空格：仅将条件写成「"条件"」

【二、逻辑操作符】
与：空格
或「|」
非「!」
< >    分组
" "    搜索引号内的词组.

【三、修饰符】
修饰符可以看作条件的一部分

【四、函数】
函数可以看作条件的一部分

2. 实例

```
【一、文件类型】

搜索特定文件类型：
*.doc|*.docx
你还可以这么写：
ext:doc;docx

「*.*」与「*」相同
「*.」表示无扩展名的文件

「file:」只匹配文件
「folder:」只匹配文件夹
「empty:」只匹配空文件夹
「dupe:」匹配同名的文件、文件夹

【二、位置】

在特定位置搜索，在关键词后面加“\”，表示在特定目录下搜索。或者通过菜单栏 搜索 - 匹配路径
封面\ *.jpg      在所有名为的「封面」文件夹中匹配 jpg 后缀的文件
F:\封面\ abc     「F:\封面\」目录下匹配包含 abc 的东西

【三、容量】

问：我想搜索电脑中大小超过1GB的文件，该怎么做？
答：很简单，只要输入「:size」「:>=1gb」
单位除了gb，还有mb，kb
关系操作符除了>=，还有>,<,<=。
如果想要搜索文件大小在10MB和100MB之间的，可以这么写：size:10mb..100mb

【四、时间】

问：我要搜索昨天修改过的文件，该怎么做？
答：很简单，只要输入：dm:yesterday
dm是datemodified的缩写，表示修改日期。还有另外两个命令：dc和da，分别是datecreated和dateaccessed的缩写，表示创建日期和访问日期。yesterday是昨天的英文，你也可以用常量来表示，比如“dm:2014/6/17”，就今天来讲，搜索结果是一样的。
```