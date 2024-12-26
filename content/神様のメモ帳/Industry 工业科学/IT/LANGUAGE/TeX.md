---
aliases:
  - Tex
  - Tex Specification
tags:
  - flag/MachineLanguage/Markup
  - Label/Industry-工业科学/IT/Language
---

[TeX Users Group (TUG)](https://tug.org/)

[CTAN: Comprehensive TeX Archive Network](https://ctan.org/)

[LaTeX - A document preparation system](https://www.latex-project.org//)

[LyX wiki | FAQ / Pronunciation](https://wiki.lyx.org/FAQ/Pronunciation)

[Documentation - Overleaf, Online LaTeX Editor](https://www.overleaf.com/learn)

[慕子 专栏文章目录 - 知乎](https://zhuanlan.zhihu.com/p/42278823)

[CTeX-org/tex-by-topic-cn: Chinese translation of the book "TeX by Topic"](https://github.com/CTeX-org/tex-by-topic-cn)

[CTeX-org/lshort-zh-cn: A Chi­nese edi­tion of the Not So Short Introduction to LaTeX2ε](https://github.com/CTeX-org/lshort-zh-cn)

[一份（不太）简短的 LATEX2ε 介绍](https://texdoc.org/serve/lshort-zh-cn.pdf/0)

[一份其实很短的 LaTeX 入门文档 | 始终](https://liam.page/2014/09/08/latex-introduction/)

[一份不太简短的LaTeX简介 | Just for Life.](https://muyuuuu.github.io/2018/11/07/Brief-introduction-to-LaTex/)

[一份勉强简短的LaTeX3编程介绍 - 知乎](https://zhuanlan.zhihu.com/p/408331900)

[Overleaf 指南：30 分钟 LaTeX 入门 – 章天杰. 16A086.](https://imztj.cn/?p=3073)

[LaTeX科技排版工作室](https://wenda.latexstudio.net/)

[还在手动输入复杂的公式？7 款 LaTeX 实用工具帮你省下时间 - 少数派](https://sspai.com/post/54283)

[Cambridge Notes](http://dec41.user.srcf.net/notes/)

[lvjr.bitbucket.io](https://lvjr.bitbucket.io/index.html)


## Toolchain

[Levels of TeX - TeX Users Group](https://tug.org/levels.html)

[latex - TeX 家族（TeX, XeTeX, LuaTeX,XeLaTeX …看完这篇就懂了）_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000038145401)

[LaTeX3 教程（一）——背景知识 - 知乎](https://zhuanlan.zhihu.com/p/92851140)

[文献管理软件比较 - 维基百科，自由的百科全书](https://zh.m.wikipedia.org/wiki/%E6%96%87%E7%8C%AE%E7%AE%A1%E7%90%86%E8%BD%AF%E4%BB%B6%E6%AF%94%E8%BE%83)

[big list - LaTeX Editors/IDEs - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/339/latex-editors-ides)

[Comparison of TeX editors - Wikipedia](https://en.m.wikipedia.org/wiki/Comparison_of_TeX_editors)

[A Guide to the Many Flavours of TeX - Overleaf, Online LaTeX Editor](https://www.overleaf.com/learn/latex/Articles/What%27s_in_a_Name%3A_A_Guide_to_the_Many_Flavours_of_TeX)

[国外教授的讲义都是自己用 LaTeX 打出来的吗？ - 知乎](https://www.zhihu.com/question/29227449)

[LaTeX Programming Done Wrong | Sharzy](https://sharzy.in/posts/2021-02-16-latex-done-wrong/)

[一份其实好吃的 LaTeX 入门餐](https://blog.joway.io/posts/latex/)

[9102年的LyX ⇠ LaTeX ⇠ TeX | satgo1546's ocean](https://satgo1546.mist.so/archives/289)

[LaTeX 编译器与编译链 | All2Doc](https://all2doc.com/latex/docs/recipes/)


    编辑环境要舒适易用、排版环境要灵活强大

    LaTeX 的烂超出我的想象。烂到我不得不考虑用 WYSIWSG 的 TeXmacs


TeX

- Info:
    * Specification: TeX
    * Macros: LaTeX
    * Version: LaTeX2ε
    * Engine: XeTeX
    * Distribution: MiKTeX
    * Dependency Manager: mpm
    * Run: src -(Engine)-> DVI/PDF/OpenDocument/XHTML
    * .tex Editor: TeXstudio
    * .tex Generator: LyX
    * Formatter: 
    * Checker: 
    * Unit Testing: 
    * Tag: Meta Programming, Macro, Markup Language, Typesetting
    * Windows Environment: `scoop install miktex lyx`
    * Linux Environment: 

- Main:
    * xelatex xxx.tex

- TeX Engines:
    * TeX (Knuth's Original)
    * pdfTeX
    * XeTeX
    * LuaTeX
    * pTeX
    - 原版用的人不多.
    - pdfTeX/XeTeX 才是广泛使用的.
    - TeX pdfTeX XeTeX LuaTeX 的区别远比你想象的大得多得多.
    - 首选 XeTeX.
    - 首选 XeTeX.
    - 首选 XeTeX.
    - 次选 LuaTeX，实在不行再 pdfTeX.
    - 做好只有 XeTeX 能用的准备，因为 XeTeX 的问题最少.
    - 不同引擎其实就是不同的编译器，就好比 gcc 和 clang.
    - 但不同 TeX 引擎的兼容性问题比你想象的还要严重.
    - XeTeX/LuaTeX 原生支持 UTF-8 编码的 .tex 文件.
    - XeTeX/LuaTeX 支持 TrueType/OpenType 格式的字体，即支持系统字体.

- TeX Distribution:
    * TeXLive
    * MiKTeX
    * CTeX（已过时，不推荐）
    * W32TeX（已过时，不推荐）
    - TeX Distribution 不是 TeX Engine，TeX 发行版集成了多个 TeX 引擎及其辅助工具，所谓集成，就是指这些 TeX 引擎共享同一份宏包目录，类似 Node.js 共用全局 node_modules.

- TeX-based Macro Language:
    * LaTeX
    * plain TeX
    * OpTeX
    * ConTeXt
    - 就只有 LaTeX 活了下来.

- Word Processer:
    * .tex Editor
        * TeX Engine (Compiler)
            - ~~Knuth's TeX~~    不推荐
            - ~~pdfTeX~~    不推荐
            - XeTeX    首选
            - LuaTeX    次选
            - MathJax    特殊，用于 Markdown/Web
        * TeX Distribution
            - MikTeX    推荐
            - TeXLive
        * TeX/LaTeX Editor
            - ~~VNote~~    多此一举
            - ~~VSCode~~    不方便
            - ~~TeXworks~~    简陋
            - ~~TeXmaker~~    请用 fork TeXstudio
            - **TeXstudio**
            - Overleaf    web。debug 功能不错，可自建
        * TeX Maker
            - **LyX**    WYSIWYM 非常棒的掌控感！
            - ~~TeXmacs~~    请用 fork Mogan 墨干编辑器
            - ~~Mogan~~    WYSIWYG 实在没什么欲望
    * Word
        - UnicodeMath
        - ~~MathType~~
    * 手写


文本流哲学

- WYSIWYG 所见即所得
- WYSIWYM 所见即所想
    - **实时半渲染**
    - Source 高亮


Paper

- Word
    - 内置引用
    - EndNote
    - TeX
- LaTeX




> [!question]
> > TeX 是一门标记语言吗？
> 
> [[ChatGPT]]
> 是的，TeX 是一种标记语言，主要用于排版科技文档和数学公式。其语法由一系列命令和特殊字符组成，这些命令用于控制文本的格式和排版风格，这使得 TeX 可以精确地控制输出结果。 TeX与HTML等标记语言不同之处在于它是一种编程语言，具有条件语句、循环语句等控制结构，这使得其可以编写更复杂的文档。



> [!question]
> > TeX 是图灵完备的语言吗？
> 
> [[ChatGPT]]
> 是的，TeX是图灵完备的语言。这意味着它可以用来模拟任何其他的图灵机，包括其他的编程语言。实际上，因为TeX具有非常强大的宏（macro）功能，它被广泛用于生成复杂的文档和排版，其中包括数学公式、图表、目录等等。因此，TeX被广泛认为是计算机编程和排版领域的重要工具之一。



> [!question]
> > LaTeX 宏包都是 TeX 包吗？
> 
> [[ChatGPT]]
> 大多数 LaTeX 宏包实际上是 TeX 包，但并非所有的 TeX 包都是 LaTeX 宏包。TeX 是一种排版语言，通常用于制作书籍、期刊和科技文档等，而 LaTeX 是建立在 TeX 基础上的一种格式，它提供了一些方便的命令和工具，使得排版更加简单。通常情况下，LaTeX 宏包被存储为 .sty 文件，而 TeX 宏包则通常存储为 .tex 文件。大多数 LaTeX 宏包旨在帮助用户在 LaTeX 格式下更轻松地进行排版工作，而 TeX 宏包则主要用于修改底层的排版引擎。



> [!question]
> > LaTeX 是对 TeX 的封装吗？
> 
> [[ChatGPT]]
> 是的，LaTeX 是对 TeX 的封装。TeX 是一种排版系统，可以用于生成高质量的文档，但它对于不熟悉 TeX 命令的用户而言学习曲线较陡峭。LaTeX 为 TeX 提供了一系列的封装和扩展，使得使用者可以更加方便和灵活地排版文档，同时也可以在排版中应用一些常见的排版规则和格式，使得文档的格式更加统一和美观。因此，LaTeX 确实可以被视作是对 TeX 的封装。



> [!question]
> > 如何自己用 TeX 实现一个 LaTeX？
> 
> [[ChatGPT]]
> LaTeX 是一种基于 TeX 的排版系统，它为 TeX 提供了一些宏包和命令，使得排版更加便利和高效。如果你想自己实现一个类似于 LaTeX 的排版系统，可以按照以下步骤进行：
> 
> 1. 学习 TeX 的基础知识，包括命令、宏包、盒子等概念以及 TeX 的基本语法。
> 
> 2. 了解 LaTeX 的基本结构和命令，这包括文档类、宏包、环境、命令等。
> 
> 3. 根据自己的需求和理解，在 TeX 的基础上实现一些新的宏包和命令，以实现更加便捷和高效的排版。
> 
> 4. 设计一种文档类，定义文档的结构和格式，使得用户可以根据自己的需要进行文档的排版。
> 
> 5. 测试和完善自己的实现，确保它能够正确地处理各种情况和不同的输入。
> 
> 需要注意的是，开发一个类似 LaTeX 的排版系统需要耗费大量的时间和精力，因此在实践之前需要做好充分的准备和计划。另外，TeX 和 LaTeX 的许多技术细节和技巧需要长期的学习和实践才能掌握，因此建议先熟练掌握 TeX 和 LaTeX 的基本用法，再考虑实现自己的类似 LaTeX 的排版系统。



> [!question]
> > TeX 语言与 TeX 引擎的关系？
> 
> [[ChatGPT]]
> TeX 语言是由Donald Knuth所开发的一种排版语言，用于书籍、论文、报纸等文档的排版。TeX 引擎是用于解释和处理TeX语言的软件程序。TeX 引擎执行TeX代码，并生成所需的输出，例如PDF文档或打印版面。TeX引擎通常也被称为“TeX系统”，因为它们通常包括许多附加的程序和工具，用于管理和处理文档。常见的TeX引擎包括Knuth开发的原始TeX引擎，以及更现代的引擎，例如pdfTeX、XeTeX和LuaTeX。




TeX 本身并没有直接提供丰富的语义化标签，也就是说 TeX 本身并不能被称为标记语言。但 TeX 提供了强大的宏编程，具有很强的扩展性。LaTeX 就是一个 TeX 宏集，提供了一些语义化的标签（命令），让 TeX 变为了半门标记语言。是的，宏让 TeX 拥有了无限可能，不光是标记语言，只要有心，你可以用宏把 TeX 扩展成 Lisp 方言、面向对象语言、面向过程语言。

LaTeX 最底层只不过是一小个 TeX 宏集（一个几千行的文件），添加的指令并不多。

但就如同用初版编译器编译出第二版编译器一样，一些宏集以 TeX 和 LaTeX 最底层的指令为基础开发出更多指令，之后又有很多宏集用这些新指令开发出更多指令……于是社区涌现出数不胜数的指令，即无数宏包，这就是 LaTeX 社区。

狭义的 LaTeX 指的是那个仅仅几千行的文件。

广义的 LaTeX 指的是社区的无数宏包及其派生宏包。

大多数 LaTeX 宏包是基于 TeX 的。

小部分宏包可能会少量使用某个 TeX 引擎的私有 primitive。这种情况下原版 TeX 会编译失败，需要使用特定的引擎才行例如 LuaTeX。




TeX 对标 纯HTML，LaTeX/XeTeX etc 对标 带有 Web Components 的 HTML

TeXworks 十分简洁，除了最基本的功能之外，没有其他复杂的东西，能使你将注意力集中在 TeX 的学习上。好，TeXworks 淘汰。我能感觉出，这不是我想要的。





LaTeX 与 TeX 讲的那么复杂，我还以为是什么呢。

TeX 有歧义，一个是 TeX 语言，一个是 TeX 引擎。前者是语言规范，后者是编译器。

TeX 语言可看作特殊的 Lisp 方言。基本上可等价于加强版 XML，真正实现了 Lisp 推崇的元编程那套，这就是所谓的「宏」，其实就是 XML 自解释，说白了就是字符串替换。比起叫宏，不如直接说「命令即（XML）数据」

在元编程看来，代码本质可以转化为 XML 树，但单有 XML 数据没有意义，必须要进行解析才有意义，所谓的运行，就是解析过程本身，至于运行结果，那只是解析过程的副产品。

虽然 XML 能够自解释，但自解释到极致，还是有一小部分标签无法进一步展开。我们需要一个可执行的解析器完成这最底层的解析。缺少最后的解析器，那么单纯的 XML 就变的没有意义。

这个完成最底层解析的存在，就是所谓的编译器，即 TeX Compiler，也被称为 TeX Engine。

TeX 语言对标 XML，LaTeX 对标 XHTML。

TeX 引擎有很多个实现，就如同 Markdown 有很多个解析器实现一样。与混乱的 Markdown 解析器不同，TeX 引擎被要求必须能解析所有版本的 TeX 语言，并产生一模一样的编译结果（单元测试），如此才能被称为 TeX 引擎。

MathJax 是 TeX 引擎的 JS 实现，即一个 JS 库。MathJax 不单能解析 TeX 语法，还能解析 MathML、AsciiMath，可以说是多个语言解析器的集合。

TeX 的可玩性确实高。说起来，我还是第一次感受到元编程的魅力。







## Namespace

[TeX 主题选讲：TeX 处理器的结构 | 始终](https://liam.page/2018/01/31/TeX-by-Topic-the-Structure-of-the-TeX-processor/)

[开发一个 LaTeX 宏包需要多少知识？ - 知乎](https://www.zhihu.com/question/27017364)


宏展开
primitive 原语


花括号位置参数
方括号可选参数
`\usepackage{xxx}`    相当于 `from xxx import *`
`input{xxx}`    相当于 `include xxx.tex`
宏包里的指令相当于 class/function
文章内容相当于入参
指令的嵌套相当于洋葱函数（FP 函数式编程）
写 .tex 时不是在写文章，而是在编程，写的是代码。文章内容作为硬编码的参数，最终写成这个类似一次性脚本的程序。


## 注释

```tex
% 单行注释
xxx % 行尾注释

```


## 全局字体

[XeLaTeX: Unicode font fallback for unsupported characters - Michael Franzl](https://blog.michael.franzl.name/2014/12/10/xelatex-unicode-font-fallback-unsupported-characters/)

[LaTeX 黑魔法（五）：在 LaTeX 中输出多国语言 | 始终](https://liam.page/2017/09/17/LaTeX-multi-lingual/)

[Chinese - Overleaf, Online LaTeX Editor](https://www.overleaf.com/learn/latex/Chinese)

[全面总结如何在 LaTeX 中使用中文 (2020 最新版) - jdhao's digital space](https://jdhao.github.io/2018/03/29/latex-chinese.zh/)

[languages - How does one type Chinese in LaTeX? - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/17611/how-does-one-type-chinese-in-latex)


    经过测试，TeX 引擎中只有 XeTeX 才能处理 Unicode 字符混排 + 使用系统字体。LuaTeX 一直玄学报错，输出的 pdf 各种不正常。pdfTeX 根本不支持系统字体。

    终于整完 LaTeX 中文排版了。但是，依旧 bug 一堆。可见 TeX 排版到底有多操蛋。反正我是不敢用。


1. 设置 .tex 文件的编码
    * 读取 utf8 编码的 .tex
        - XeTeX: 原生支持，无需额外处理.
        - LuaTeX: 原生支持，无需额外处理.
        - pdfTex
            - `\usepackage[utf8]{inputenc}`（推荐）
2. 设置字体
    * 使用 系统字体 来渲染字符
        - XeTeX
            - **`\usepackage{fontspec}`（强烈推荐）**
            - `\usepackage{ctex}` + `\setCJKmainfont{SimSun}`（推荐）
            - `\usepackage{xeCJK}` + `\setCJKmainfont{SimSun}`（不推荐）
            - `\documentclass{ctexart}` + `\setCJKmainfont{SimSun}`
        - LuaTeX
            - `\usepackage{fontspec}`（推荐）
            - `\usepackage{ctex}` + `\setCJKmainfont{SimSun}`
            - `\documentclass{ctexart}` + `\setCJKmainfont{SimSun}`
        - pdfTeX
            - `\documentclass[UTF8]{ctexart}` + `\setCJKmainfont{SimSun}`
            - `\usepackage{CJKutf8}` + `\AtBeginDvi{\input{zhwinfonts}}` & `\begin{CJK*}{UTF8}{zhsong}`（不推荐）
        - 准确来说是 TrueType/OpenType 格式的字体.
    * 使用 TeX字体 来渲染字符
        - XeTeX
            - `\usepackage[UTF8]{ctex}`（推荐）
            - `\usepackage{xeCJK}`
            - `\documentclass{ctexart}`
        - LuaTeX
            - `\usepackage[UTF8]{ctex}`（推荐）
            - `\documentclass{ctexart}`
        - pdfTeX
            - `\usepackage[UTF8]{ctex}`（推荐）
            - `\documentclass[UTF8]{ctexart}`
            - `\usepackage{CJKutf8}` & `\begin{CJK*}{UTF8}{gbsn}`（不推荐）
3. 设置 fallback font 来渲染字体文件未覆盖的字符


ctex 文档类：效果好，灵活性差。推荐。
**ctex 宏包**：正确性与灵活性之间权衡的选择。推荐。
fontspec 指定中文字体 + 设置中文断行：其实就是超级简陋版 ctex 宏包，能不用尽量不用。TeX 原生不支持 non-ASCII 字符及其排版，中文排版想要正常的效果，一切都要手动实现。与其你自己在导言区调一大堆参数，不如交给 ctex 自动调，觉得效果不好或有 bug，再去看看 ctex 文档进行微调。总比你自己从头实现要好。
天元、CCT、CJK 这些早过时的就不多说了。
xeCJK 没必要手动调用，因为 ctex 在 XeTeX 编译环境会自动调用 xeCJK。
一句话，ctex 是唯一选择，要么 ctex 文档类，要么 ctex 包。

既然决定了用 ctex，接下来是引擎。pdfTeX 无法使用系统字体、可能的玄学报错，不考虑。LuaTeX 理论上能用，但实际上各种玄学报错，搞得我怀疑人生，珍爱生命，远离 LuaTeX。XeTeX 是唯一选择，包括 ctex 在内的常用包对 XeTex 的支持是最好的。



```tex
% Render ASCII characters
\usepackage{fontspec}
\setromanfont{LXGW WenKai Mono}

% Render CJK characters
\usepackage[UTF8]{ctex}

% CJK typesetting for XeTeX
\usepackage{ifxetex}
\ifxetex
    % Specify CJK font by xeCJK
    \setCJKmainfont{SimSun}
    % Please select a font installed in system that you want to use,
    % and font name can contain ascii characters only.
    % E.g.
    %     \setCJKmainfont{SimSun}
    %     \setCJKmainfont{Microsoft YaHei}
    %     \setCJKmainfont{Microsoft YaHei Mono}
    %     \setCJKmainfont{LXGW WenKai Mono}
    % If not font to be set, there is a TeX font to be used automatically.
\fi

```



```tex
% Engine: XeTeX/LuaTeX
% .tex encoding: utf-8

% Render characters by specific system font
\usepackage{fontspec}
\setmainfont[Mapping=tex-text]{Microsoft YaHei Mono}
\setsansfont[Mapping=tex-text]{Microsoft YaHei Mono}
\setmonofont{Microsoft YaHei Mono}

% Chinese line break
\XeTeXlinebreaklocale "zh"
\XeTeXlinebreakskip = 0pt plus 1pt

```




## 行内字体

[在LaTex中使用自定义字体 | Hummer's Blog](https://moeext.github.io/2019/02/22/2019-2-22-customize-font-in-latex/)


LaTeX 中可以使用宏包来精准控制字符串的字体，类似于 Markdown 直接写 HTML。


## TeX primitive

[TeX primitives listed by TeX engine - Overleaf, Online LaTeX Editor](https://www.overleaf.com/learn/latex/TeX_primitives_listed_by_TeX_engine)


```latex
\document
\input


```




# 技术栈

[LaTeX 功能性宏包推荐 - 知乎](https://zhuanlan.zhihu.com/p/43981639)

[CTEX - 在线文档 - TeX/LaTeX 常用宏包](https://ctex.org/documents/packages/)

[LaTeX 编辑部 - 常用宏包 - 字体](https://www.latexstudio.net/hulatex/package/font.htm)

## ctex

根据 ctex 文档，ctex 会根据 TeX 引擎的不同，自动选择合适的底层实现方式。

- (pdf)LaTeX: CJK
- XeLaTeX: xeCJK
- LuaLaTeX: LuaTeX-ja
- upLaTeX: 原生

因此，我们不应该直接使用 `CJK` `xeCJK`，直接用 `ctex` 就好，它会自动切换底层实现，这令 .tex 文件更具兼容性。

引入 ctex 包后，XeTeX/LuaTeX 可以执行 `\setCJKmainfont{LXGW WenKai Mono}` 调用系统字体来渲染（默认是 ctex 自动选择 TeX 字体）。注意 (pdf)TeX 不支持该功能。坑爹的是，pdfTeX 编译 `setCJKmainfont` 会直接报错，而 XeTeX/LuaTeX 不会，这种做法毫无疑问是有损兼容性的，ctex 包理应处理该指令，哪怕仅仅是直接跳过，而不是放任令编译器报错。可见 ctex 包，或者说整个 LaTeX 社区的不规范，这种在程序员眼里的低级错误，在整个 LaTeX 社区比比皆是，这也就能理解 .tex 的兼容性为什么这么差了，也能理解为什么几十年来 TeX 都没能实现完备的编程语言特性——整个社区就是个大型屎山，根本无法规范化，如果那样做，只不过是重蹈 XHTML 1.1/2.0 的覆辙罢了。


## documentclass

[如何写一个LaTeX类文件，并设计你自己的简历 - SuperZhang828 - 博客园](https://www.cnblogs.com/super-zhang-828/p/7450133.html)



## fontspec

[XeLaTeX - Overleaf, Online LaTeX Editor](https://www.overleaf.com/learn/latex/XeLaTeX)


## makeatletter

[macros - What do \makeatletter and \makeatother do? - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/8351/what-do-makeatletter-and-makeatother-do)


## makeatother

[macros - What do \makeatletter and \makeatother do? - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/8351/what-do-makeatletter-and-makeatother-do)


## newcommand

[自定义宏包 - Pinvon's Blog](https://pinvondev.github.io/blog/2018/11/21/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%8F%E5%8C%85/%20Or%20/blog/%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%8F%E5%8C%85/)

[LaTeX 术语 LaTeX 里的控制序列（Control Sequence） - 知乎](https://zhuanlan.zhihu.com/p/62272230)



## tikz

[LaTeX 作图工具介绍 | logiclife](https://logiclife.wordpress.com/2011/03/28/latex-%E4%BD%9C%E5%9B%BE%E5%B7%A5%E5%85%B7%E4%BB%8B%E7%BB%8D/)



# 语言之外

## Glossary

控制序列（或称命令/标记）。所谓控制序列，是以反斜杠 \ 开头，以第一个空格或非字母 的字符结束的一串文字。


## MiKTeX

```bash
mpm [--admin] --install=ctex
mpm --admin --update
便携版 miktex 不需要 --admin 参数
安装版 miktex 加上 --admin 参数，安装为全局宏包，否则安装到用户目录


```


## TeXmacs

[TeXmacs：一个真正“所见即所得”的排版系统](http://www.yinwang.org/blog-cn/2012/09/18/texmacs)


$
\
Tab
Shorcuts
Button
Menu


## LyX

[LyX wiki | LyX / LyX](https://wiki.lyx.org/)

[LyX wiki | FAQ / Pronunciation](https://wiki.lyx.org/FAQ/Pronunciation)


LyX 导入中文 .tex 全是乱码。

我仔细想了想，终于想通了。我没猜错的话，`.lyx` 是庞大的 LaTeX 宏社区的真子集。`.lyx` 之于 LaTeX，即 Markdown 之于 HTML。`.lyx` 的全部功能一开始就是朝着精选 LaTeX 包去设计的——`.lyx` 可以说就是为了生成 `.tex` 而设计的。设计好后，然后自己全部从头实现一遍，实现的结果就是 LyX 这个软件。所以我之前说的「LyX 是 `.lyx` 编辑器」可以说是触及了本质。那么，`.lyx` 没有覆盖的 LaTeX (TeX) 宏包怎么办？答案是无解。所以我们导入 `.tex` 文件可能出现一堆乱码，根本原因就在于 `.lyx` 是 `.tex`（LaTeX）的真子集，LyX 只能处理集合内的东西（所以 LyX 自己导出的 `.tex` 能够再次导入），集合外的完全无法处理。就好比，一个 `.md` 能转成 `.html` 并很可能再次转回为 `.md`，但 `.html` 不能百分百转成 `.md`（博客文章之类的简单 HTML 有很大概率能转化成 Markdown，但像微博这种复杂 HTML 就不行）。TeXmacs 同理。

LyX 导出的 .tex 文件，无论目标引擎是哪个（原版、pdfTeX、XeTeX、LuaTeX、pTeX），其 `{document}` 环境的内容是一模一样的（除了开头的四五行可能有点不一样）。

LyX 导出的不同目标 TeX 引擎的 .tex，差别仅在于 preamble（导言），以及 body 开头几行可能有点不一样（目测是跟 LyX 文档设置里的语言设置、编码设置、字体设置有关）。

代码预览窗口的当前段落、代码预览的全部源代码（中的 `{document}` 环境）、导出的 .tex 的 `{document}` 环境，一模一样，一字不差。

于是，问题的关键就变成了「要想使用某个 TeX 引擎进行编译，.tex 的 preamble 怎么写？」

看 .lyx 导言，这个才是最直接的方式，能看出，全都是 LyX 的文档设置.


~~LyX 支持完整的 LaTeX（包括整个社区的宏包）。~~`.lyx` 是 为了生成 `.tex` 而生，而不是反过来。复杂的 `.tex` 根本没法导入到 `.lyx`。

.lyx 可以完美转成 .tex，毕竟它就是这么设计的。

LyX 本质是 .lyx 编辑器。

LyX 不是 WSYIWSG，而是 WYSIWYM。再说一遍，LyX 本质是 .lyx 编辑器。在 LyX 看到的效果完全不是最终效果，而是类似 VNote 的半渲染，本质是为了更好地展现源代码、编辑源代码。所以你能看到，编辑器字体与文档字体是分开的。


### 多语言混排

[LyX中文配置 Tips | 与非小站](https://andnot.github.io/LyX%E4%B8%AD%E6%96%87%E9%85%8D%E7%BD%AETips)

[LaTeX排版软件札记 Win10 LyX+TeXLive - 知乎](https://zhuanlan.zhihu.com/p/43347487)


### 特殊插入

[LyX wiki | FAQ / ERT](https://wiki.lyx.org/FAQ/ERT)

[LyX wiki | Tips / CommandSequences](https://wiki.lyx.org/Tips/CommandSequences)

[9102年的LyX ⇠ LaTeX ⇠ TeX | satgo1546's ocean](https://satgo1546.mist.so/archives/289)

[在 LyX 中定义和管理宏 - 知乎](https://zhuanlan.zhihu.com/p/570488092)


Evil Red Text 就是菜单里的插入 TeX 代码。

Command Sequences 类似 excel 的宏录制，没卵用。

Markdown
Formula
Typesetting
TeX 代码
预览


### 快速输入

[LyX wiki | Tips / FrequentlyUsedShortcuts](https://wiki.lyx.org/Tips/FrequentlyUsedShortcuts)


**结论：LyX 快速书写只能靠快捷键。**




## TeXstudio

[TeXstudio 4.4.0 documentation](https://texstudio-org.github.io/)



## LilyPond

[Lilypond+TexLive（LuaLatex+lyluatex）+VS Code实现谱文混排 - 啊噗得网](https://www.apude.com/blog/6148.html)

[lilypond for mac--用代码打谱！ - 邓邓的流水账](https://xhhdd.cc/index.php/archives/147/)
