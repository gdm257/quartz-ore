---
aliases:
  - IDEA
  - IntelliJ IDEA
tags:
  - flag/License/Proprietary
  - flag/License/Freeware
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/DevOps/IDE
---

[JetBrains Product Documentation](https://www.jetbrains.com/help/)

[judasn/IntelliJ-IDEA-Tutorial: IntelliJ IDEA 简体中文专题教程](https://github.com/judasn/IntelliJ-IDEA-Tutorial)

[When pip installing library in an virtualenv an error message is shown · Issue #14 · komoot/staticmap](https://github.com/komoot/staticmap/issues/14)

[IntelliJ IDEA 设置代码自动补全不区分大小写 - 楼兰胡杨 - 博客园](https://www.cnblogs.com/east7/p/15565729.html)

[Intellij doesn't show .git directory - Stack Overflow](https://stackoverflow.com/questions/35784352/intellij-doesnt-show-git-directory)


### Plugins

[硬核，这 3 款 IDE 插件让你的代码牢不可破 - 沉默王二博客](https://www.itwanger.com/java/2021/01/25/idea-plugin.html)

[JetBrains 全家桶，是每种语言分别安装一个 IDE 好，还是只用 Idea 好 - V2EX](https://hk.v2ex.com/t/772380)

[Jetbrains 出了那么多 IDE，为什么不整合成一个 IDE + 语言支持功能包，类似 VS？ - 知乎](https://www.zhihu.com/question/40613665)

[「IDEA插件精选」安利一个IDEA骚操作:一键生成方法的序列图 - 掘金](https://juejin.cn/post/6887719053931053064)


The Doki Theme
~~Theme Randomizer~~
Anime Memes
Nyan Progress Bar
Key Promoter X
Grep Console
Ideolog
Jump to Line
BetterIntelliJ
IDE Eval Reset

Json Helper
Toml
Ini
.env files support
.ignore
ReStructuredText
Rainbow CSV
Protobuf

SonarLint
Alibaba Java Coding Guidelines
CheckStyle-IDEA
Selenium UI Testing
~~Compose Multiplatform IDE Support~~    直接把我 IDEA 搞不能用了
xmake
reloadium
SequenceDiagram

Python    千万不要让编译安装 pydev，debug 时断点直接无效了了。我费了九牛二虎之力手动把 profile/config 和 profile/system 删了一遍再试，断点才又能用了
Kotlin
Go
Go Template
EmmyLua
PHP
Ruby
Rust
Perl



CheckStyle、Alibaba Java 代码规范、SonarLint 这三个插件是一定要装的，可以极大程度上保证代码质量

此外，还可以有

Grep Console：控制台输出处理
Rainbow Brackets：彩虹括号
Save Actions：优化保存操作
SequenceDiagram：一键生成时序图
Maven Helper：分析Maven项目的相关依赖
EasyCode：一键帮你生成所需代码
Lombok：帮你简化代码
CodeGlance：代码微型地图
Java Stream Debugger:Java8Stream调试器
Git Commit Template：使用模板创建commit信息


doki-theme 推荐

Chuunibyou: Rikka
DDLC: Sayori Dark
DTWMMN
Gate: Rory
Kakegurui: Yumeko
KillLaKill: Satsuki Dark



### Q&A

[IDEA的查询引用、调用关系图的功能 - 蝈蝈俊 - 博客园](https://www.cnblogs.com/ghj1976/p/5382455.html)


取消所有断点？
Debug 界面 - 左侧栏两个圆点的图标（ctrl shift F8）- 点击图标，弹出断点窗口 - 选择要取消的断点 - 上方有个加号和减号，点击减号图标即可删除

鼠标悬浮快速提示？
Settings - Editor → Code Editing → Quick Documentation - Show quick documentation on mouse move
Settings - Editor → Code Editing → Editor Tooltips - Tooltip delay
Settings - Editor → General → Code Completion - Parameter Info


### Doki-theme

【字体太小且一直固定的问题】

Settings - Apparence - Doki Theme Settings - Fonts - 勾选 Ovrride Editor

如果还是不行，那就

Settings - Editor - Color Scheme - Color Scheme Font - 取消勾选「Use color scheme font instead of the default」




### Remote Development

推荐使用 Gateway 去连接 SSH Server.
jb 全家桶的 Remote Development 类似 vscode-server，只基于 SSH，但至少要 2021 版本才有

Settings 的 On Host 表示是目标服务器的 IDE 的设置.



### Installation

1. 通过二进制分发包安装
    * Linux IDEA
    * https://download.jetbrains.com/idea/ideaIU-2022.2.2.tar.gz
2. 通过 toolbox 安装（原理同 1）
3. 通过 gateway 安装（原理同 1）
4. 通过包管理器安装

配置好 X Server，在命令行运行 bin 目录的 idea.sh 即可启动，WSL 1 亲测。



### Eval Reset

此种方法仅适用于 IDEA 2021.2.2 (包含 2021.2.2 版本) 以下版本

### Shortcut Key

[Create documentation comments | PyCharm Documentation](https://www.jetbrains.com/help/pycharm/creating-documentation-comments.html#create_pydoc)


Ctrl + / 注释(取消注释)选择的行
Ctrl + Shift + / 块注释
Ctrl + D 复制当前行、或者选择的块
Ctrl + W 选中增加的代码块
Ctrl + P 入参提示
Ctrl + R 替换
Ctrl + E 当前文件弹出
Ctrl + 鼠标 简介
Ctrl + Alt + L 代码格式化
Ctrl + Alt + I 自动缩进行
Ctrl + Alt + Right 跳转
Ctrl + Alt + Left 回退
Ctrl + Alt + O 优化导入
Ctrl + Alt + H    Call Hierarchy 调用关系图
Ctrl + Shift + F10 运行
Ctrl + Shift + [ 选定代码块开始
Ctrl + Shift + ] 选定代码块结束
Ctrl + Shift + N 跳转到文件
Alt+Enter 自动添加包
Shift + F9 调试
Shift + Esc 隐藏运行的、最近运行的窗口

4、调试(Debugging)
F5 debug
F8 跳过
F7 进入
Shift + F8 退出
Alt + F9 运行游标
Alt + F8 验证表达式
Ctrl + Alt + F8 快速验证表达式
F9 恢复程序
Ctrl + F8 断点开关
Ctrl + Shift + F8 查看断点

F3    在查找模式下，定位到下一个匹配处
a Enter    根据光标所在问题，提供快速修复选择
s Esc    隐藏当前面板
s s    Search Everywhere
c /    注释光标所在行代码
c s /    代码块注释
c [    移动光标到当前所在代码的花括号开始位置
c ]    移动光标到当前所在代码的花括号结束位置
c F4    关闭当前编辑文件
c D    重复行
c W    扩散选中
c P    方法参数提示显示
c Q / 鼠标停留    显示 变量/类名/方法 的文档内容
c F    查找
c R    替换
c H    显示当前类的层次结构
c +    展开代码
c -    折叠代码
c s +    展开所有代码
c s -    折叠所有代码
c s ←    返回上一级跳转处
c s N    跳转到文件
c s Z    取消撤销
c s F    根据输入内容查找整个项目 或 指定目录内文件
c s R    根据输入内容替换对应内容，范围为整个项目 或 指定目录内文件
c a O    优化导入的类，可以对当前文件和整个包目录使用
c a I    光标所在行 or 选中部分 进行自动代码缩进
c a L    格式化代码（自动排版）



【Python】

输入三引号然后回车，自动生成 docstring



### workspace

`.idea` 对于大部分语言的大部分项目都不是必须的，或者说是不推荐的，所以，默认应该加入 `.gitignore`。用户需要的是简单易懂的文档，而非一个看不懂的 `.idea` 文件夹。

`*.iml` 同理。

### Gradle

[2021年，如何优雅的使用idea+Gradle？_idea2021 默认gradle使用本地_Ordinary_SF的博客-CSDN博客](https://blog.csdn.net/Holmes_shuai/article/details/119665758)

- 全局 Settings - Build - Build Tools - Gradle
    - 只能配置 `Gradle User Home`
- 项目 Settings - Build - Build Tools - Gradle
    - `Gradle User Home`
    - `Use Gradle from` gradle 
