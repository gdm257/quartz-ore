---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Text/Implement__/Docs
---

[man 查看帮助手册 — Linux latest 文档](https://gnu-linux.readthedocs.io/zh/latest/Chapter01/00_man.html)

[4.3 Linux系统的线上求助man page与info page | 鸟哥的 Linux 私房菜：基础学习篇 第四版](https://wizardforcel.gitbooks.io/vbird-linux-basic-4e/content/35.html)

- RTFM 是 "Read The Fucking Manual" 的缩写
- 掌握一个命令的最佳方式：实践、RTFM
- RTFM 是掌握 [[tar]] [[awk]] [[sed]] [[mount]] [[bash command|bash]] 这类复杂命令的最佳方式，没有之一（本人深有体会）

```bash
man ls
man <program>

大多数供命令行使用的可执行文件，提供一个称之为 manual 或者是 man
page 的正式文档。该文档可以用一种称为 man 的特殊分页程序来查看，用法如下。在大多数Linux：系统中，man命令调用less命令来显示手册文档。所以，当显示手册文档时，你熟悉的所有Less命令都能奏效。

基本上，info与man的用途其实差不多，都是用来查询指令的用法或者是文件的格式。但是与man page一口气输出一堆信息不同的是，info page则是将文件数据拆成一个一个的段落，每个段落用自己的页面来撰写， 并且在各个页面中还有类似网页的“超链接”来跳到各不同的页面中，每个独立的页面也被称为一个节点（node）。 所以，你可以将info page想成是文字模式的网页显示数据啦！

man 文件通常是放在/usr/share/man这个目录里

info指令的文件默认是放置在/usr/share/info/这个目录当中的

此外的很多说明文件放在 /usr/share/doc


```