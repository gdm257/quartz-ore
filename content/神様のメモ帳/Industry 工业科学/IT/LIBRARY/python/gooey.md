---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/GUI
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: Gooey
---

## ~~gooey~~

[python打包中文报错,解决python3+Gooey使用pyinstaller打包时无法输出中文的问题_wesinnn的博客-CSDN博客](https://blog.csdn.net/weixin_34835470/article/details/116185154)

[用Gooey GUI生成界面避坑记 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1981252)

[Gooey——把 CLI 程序变成 GUI · Python One to Million](https://wizardforcel.gitbooks.io/python-one-to-million/content/console/gooey.html)


```python
Gooey 函数装饰器将 argparse CLI 程序变成 GUI.
有无解的编码 bug，用不了.
试了下有 bug，能跑 GUI 但运行子命令失败，跟子命令的函数没关系。仔细排查，确认是 gooey 自己的锅，编码有严重错误，影响所有非英文用户，除了改 gooey 源码，无解。


from gooey import Gooey, GooeyParser, Events


# 手动处理闭包
gui_func = Gooey(
    cmd_argparse,
    program_name='迷糊轻小说',
    default_size=(800, 600),
    encoding='cp1251',  # 必须设置编码才能成功运行，目测作者是俄罗斯人，编码处理有很多问题，无解
)
gui_func()


```

