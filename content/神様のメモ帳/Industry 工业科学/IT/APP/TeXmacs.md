---
tags:
  - flag/License/GPL
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/LANGUAGE/TeX
extensions:
  - .tm
---

## Brief

- References
    - [ ] [《The Jolly Writer》PDF版可免费下载了 - 知乎](https://zhuanlan.zhihu.com/p/594780274)

    - [TeXmacs：一个真正“所见即所得”的排版系统](http://www.yinwang.org/blog-cn/2012/09/18/texmacs)

    - [TeXmacs 使用入门 - 知乎](https://zhuanlan.zhihu.com/p/556849536)
    
    - [学术文章写作利器: TeXmacs介绍 - mx's blog](https://x-wei.github.io/TeXmacs_intro.html)

    - [一份其实很短的 LaTeX 入门文档 | 始终](https://liam.page/2014/09/08/latex-introduction/)

    - [ ] [TeXmacs 官方 - 收藏夹 - 知乎](https://www.zhihu.com/collection/851339945)

    - [ ] [TeXmacs 实例 - 收藏夹 - 知乎](https://www.zhihu.com/collection/800105560)

- Installation
    - 分支：[XmacsLabs/mogan: Mogan Editor / 墨干编辑器](https://github.com/XmacsLabs/mogan)

- Data
    - Style
        - 类似 [[TeX|Tex]] 的 preamble（导言）
        - 类似 [[pwsh#启动脚本|PowerShell]] 的 `$PROFILE`

- GUI
    - Status Bar
        - Left side: 文档的样式、当前光标处的文本属性
            - E.g. `generic text roman 10` 意味着您是在文本模式工作，所用的roman字体大小为10，所用文档的样式为generic
        - Right side: 光标前字符或者对象的属性，即 tag name

- Description
    - TeXmacs 实现了一个真・所见即所得（WYSIWYG）的排版系统
    - TeXmacs == [[Word]] 的易用性 + [[TeX|Tex]] 的灵活性 + [[PDF]] 的可靠性
    - 编辑体验几乎零门槛，跟 [[Word]] 一样工具栏点点点就能完成所有输入
    - 所见即所得（WYSIWYG），输入后看到的就是最终效果
    - 底层文件格式只有一套标准，不存在方言，这点跟 [[PDF]] [[AsciiDoc]] [[reStructured Text]] 一样
    - 渲染是保持一致性的关键，比较黑科技，你就当你在编辑 [[PDF]] 吧

- Objects
    - 对于理解，请想象成 [[HTML|HTML]] 标签
    - 对于使用，请想象成 [[Markdown]] 语法
    1. 字面量字符（Unicode）
    2. WYSIWYG 富文本（structure/symbol）
        - TeXmacs 自带数百种 tags
        - TeXmacs 自带绘图功能比较简陋，看需求吧
    3. `\TeXLike`
        - 其实就是内置 Macro
        - E.g. `\TeXmacs` 就是一个 Macro
        - 兼容部分 [[TeX|Tex]] 指令，这就是在 TeXmacs 使用 [[TeX|Tex]] 代码的原理，其实不是 TeXmacs 支持渲染 [[TeX|Tex]]，而是 TeXmacs 的语法故意设计为跟 [[TeX|Tex]] 一样
        - 目测，「反斜杠命令」并不是「快捷输入」，而是「方言渲染」，只需通过 `.tm` 源码文件即可验证
    4. `\macro`
        - 自定义宏
        - 宏肯定不是「快捷输入」，而是真正的「宏展开」
        - 对 Macro 定义的修改，会自动同步修改效果到 `\macro` 引用处
        - 但是重命名 Macro 无法自动同步，Style 只是单纯导入，可见 Macro 还不像编程语言的 Variables（变量）那样自由
    5. TeX 效果
        - TeXmacs 支持使用 Python etc 语言进行扩展
        - 返回值会被显示为「TeX 效果」

- Fundamentals
    - `.tm` == [[HTML|HTML]] == `Dict[tag_name, value]`
    - `.tm` 是纯文本文件
    - `.tm` 采用 UTF-8 编码
    - `.tm` 底层其实是一门长的很像 [[XML]] 和 [[TeX|Tex]] 的标记语言。从这个角度而言，TeXmacs 只不过是 Yet Another Markup Language like [[HTML|HTML]] [[TeX|Tex]]
    - TeXmacs 真正与众不同的地方是其「渲染」的一致性
        - `.tm` 无论用哪台电脑、哪个 TeXmacs 版本打开，渲染结果一模一样，不像 [[Word]] 文件换台电脑可能就打不开或效果不一致
        - WYSIWYG，编辑器里效果是什么样，导出（打印）出来就是什么样，不像 [[Word]] 打印结果跟编辑界面经常不一致
    - 插入图片会内嵌进 `.tm` 文件。其实是把图片序列化为一个很长的字符串，盲猜是 base64

- Test
    - Copy as [[LaTeX]]
        1. 选中要复制的内容（鼠标连按或者 Shift 拖选，选中容会有淡红色高亮与边框）
        2. 鼠标右键 - `Copy to` - `HTML` 或 `LaTeX`
        3. `LaTeX` 导出有奇怪的点字符，而 `HTML` 是 [[MathJax]] 代码，把 HTML 删掉就是 [[LaTeX]]
    - 默认的全局文本属性在文档菜单中更改
        - 较长的单词在行边界处会自动使用连字符连接，对于中文，您需要在 `菜单 - 文档 - 语言`中指定语言，以正确换行
        - 字号：字号信息会写在 `.tm` 里，保证异机同效
    - 中文日文支持：只要字体支持就没问题
    - 选择好文档→样式后，TeXmacs会依照样式为文本排版，比如节、页、定理的编号，又如引用和脚注的排版等等
    - 用熟TeXmacs后，您可在自己的样式文件中添加环境。假设您经常做引用，且您希望引用文本是斜体的，且左右边距皆为1cm。最好的方法是制作一个引用环境，而不是一次次手动的改变文本和段落的属性。

- Limitation
    1. 交叉引用
        - 公式引用
        - 文献引用
    2. 页眉页脚
        - 可在菜单栏→文档→页面→headers中统一调整，但可调整的内容丰富度着实有限
    3. 全局排版
        - 段落缩进的全文设置可以在菜单栏→文档→段落的首行缩进中将“0fn”修改为“2fn”来实现
    4. 模板
    - 从TeXmacs对输入公式等内容的便捷性以及交叉引用和页眉页脚等地方的支持不完善能看出，TeXmacs的使用场景比较适合用于
        - 自用的笔记排版；
        - 对排版元素要求不高的电子版作业；
        - 工具人角色，配合LaTeX使用，TeXmacs仅用来输入公式并给LaTeX输出TeX代码。



## 缩进

Q：如何设置段首缩进？（2014/06/21）

一般情况下，选择 Document->Paragraph... 将弹出对话框，设置段首缩进即更改First indentation的数值。例如，对于中文，习惯使用两字缩进，可将默认的 0fn 改为 2fn，注意要在编辑框里回车一下进行确定，点击apply即可看到效果。
即使如上设置，也有反映在\section，\subsection，\paragraph等标题后缩进无效。对于此类问题，可参考“IC卡”同学的解决办法：http://www.douban.com/group/topic/54291883/

Q：段首空格设置？ （2014/04/12）

举一个例子。根据中文排版规范，每段首应自动空两格，如何设置？
从菜单栏找 Document -> Paragrahp...，打开后找到 Basic 面板中的 First indentation，把原来数字删掉，填入数字 2fn 回车，点击应用确定。2fn就是两个字的间距。还可以设置其他数字和单位，可根据测试结果进行自定义。



## 字体

Linux下，在目录 ~/.fonts 下放置想用的 .ttf 文件即可，TeXmacs 会搜索到它们。
例如，您想使用 Windows 下的“仿宋”字体或“Times New Roman”，在 c:/windows/fonts 下找到相应的.ttc或.ttf文件，复制到 ~/.fonts 即可。这时，菜单 Document->Font... 下应该能找到

自 v1.0.7.21 开始，TeXmacs大幅改善CJK排版，中文文档进入实用阶段。配合排版方面的进步，默认中文字库开始使用Fandol系列，因此文档中的衬线字/无衬线字/强调/斜体已经可以清楚地被宋体/仿宋/黑体/楷体所区别，此外中英文混排也得到较好改善。

GNU TeXmacs默认的中文字体是Fandol，所以我们需要从Fandol字体的主页[2]下载，并将字体放在 C:\Users\username\AppData\Roaming\TeXmacs\fonts\truetype 下面。


## Shortcuts

- Shortcuts
    - Input
        - Shortcuts
            - 全靠肌肉记忆
            - 不能贪多，反正多了记不住
        - `Tab` 切换「拓扑相同」的选择
            - 最重要的快速输入手段
    - Navigation
        - Shortcuts
            - `Ctrl + ↑` `Ctrl + ↓` 标题跳转
    - Create Structures
        - Shortcuts
        - Menu Bar（菜单栏）
            - 类似 [[Word|Word 2003]] 工具栏
        - Main Toolbar
            - 类似 [[Word]] 的工具栏
        - Mode-dependent Toolbar
        - `\backslash` command（反斜杠命令）
    - Delete Structures
        - `Ctrl + Backspace`
        - `X` button in context toolbox
    - Switch Structures
        - `Ctrl + Tab`
        - context toolbox

- Configuration
    - `<texmacs>/share/TeXmacs/progs/*-kbd.scm`
        - 自定义快捷键の本质
        - [[Emacs]] 风格的 keymap
            - C- 代表物理的 Ctrl 键
            - A- 代表 Alt 键
            - M-（meta键）代表 Win 键
C- => emacs
C-x => emacs x => emacs:prefix
C-y => emacs y => pastefrom

快捷键的映射原则上分两步：首先从物理按键 映射到 风格前缀（例如Emacs，MacOS，Windows）+ 某按键的组合，然后这一组合映射到特定功能。这些都是通过Scheme脚本实现的。

具体来说，比如你在使用Emacs风格，想通过标准的C-x C-s 保存文件。

i) 则按下Ctrl 之后(C-)，这对按键被自动映射为前缀“emacs”，C- => emacs，在第一个文件中可找到   ("emacs" "C-" \#t)。

ii) 下一个按键按下x，emacs x => emacs:prefix，在第一个文件中可找到   ("emacs:prefix" "emacs x")

iii) 接着按下Ctrl+s，组合键被映射到save-buffer函数上，emacs:prefix C-s => save-buffer，于是当前文档被保存。在第二个文件中，可找到   ("emacs:prefix C-s" (save-buffer))。

而通过修改上面两个文件的脚本，改变映射关系，我们就可以自定义快捷键了。
