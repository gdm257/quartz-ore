---
tags:
- flag/License/Proprietary
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- flag/Platform/Windows独占
- flag/APP/File/FileManager
---

[在 Directory Opus 中添加自定义的工具栏按钮提升效率 - walterlv](https://blog.walterlv.com/post/directory-opus-custom-toolbar-buttons.html)

[分享一个 Directory Opus 查看文件哈希值的脚本 – 小恐龙工作坊](https://xkonglong.com/dopus-hash-script/)

[【首发+原创教程】XYplorer日常使用完美代替Win10原生文件管理 - 『精品软件区』 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|破解软件|www.52pojie.cn](https://www.52pojie.cn/thread-843769-1-1.html)

[MMengyiyu/XYplorer_Help: XYplorer使用教程-原创](https://github.com/MMengyiyu/XYplorer_Help)

[Total Commander系列教程：TC学堂 | 善用佳软 xbeta.info](http://xbeta.info/studytc/index.htm)

[Total Commander使用教程 - 知乎](https://zhuanlan.zhihu.com/p/24873312)

[Total Commander（TC）完整教程 – AutoAHK](https://www.autoahk.com/archives/9013)

[插件 - Total Commander](http://xbeta.info/tc/plugins.htm)

[total commander到底如何调用fastcopy和everything，给个具体的说明，谢谢了_解疑答难区_软件区 卡饭论坛 - 互助分享 - 大气谦和!](https://bbs.kafan.cn/thread-1273897-1-1.html)

[将复制文件ExtremeCopy整合到TC(Total commander)中_brian0031的专栏-CSDN博客](https://blog.csdn.net/brian0031/article/details/34092187)


1. **默认查看方式**隐藏的超级深，在这「**设置 - 文件夹 - 文件夹格式 - 默认格式 - 使用默认值 - 右键 编辑 - 显示 - 查看方式**」。。。。草泥马的有毒啊，真心制杖！

2. 全世界都把「**Ctrl + Tab**」用作「**下个标签页**」，就你不这么做，甚至自定义快捷键的时候都无法输入「Ctrl + Tab」这种组合。。。谷歌一圈，才在英文论坛上发现了一帖：按住 Ctrl 不松手、再用鼠标那个小箭头选择 标签（也就是 Tab），才能打出「Ctrl + Tab」。「Ctrl + Shift + Tab」同理。顺便，**自定义快捷键的方法**是「工具栏空白处右键 - 自定义 - 快捷键」

3. 文件收集 功能，貌似就是「库」

4. **创建工具栏按钮的方法**是「**工具栏空白处右键 - 自定义 - 鼠标移到工具栏并右键 - 新建 - 新建按钮**」。如果需要传递一些参数，「随便选个按钮 - 右键 - 编辑 - 高级 - 参数」

4.1 **在当前目录打开 cmder**方法为「编辑按钮 - 高级 - 函数 - 标准功能（DOpus 或外部程序）- D:\Portable\Figure\cmder\Cmder.exe {sourcepath}」，可以换行，当脚本来写，不懂用哪个 flags 就可以先 cd 到目录，换行再打开应用