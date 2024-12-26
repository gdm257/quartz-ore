---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Text
---

## pandoc

[Pandoc - Pandoc用户手册](https://xy2401.com/web-get/www.pandoc.org.zh/MANUAL.html)

[Pandoc笔记(一)——转化Markdown为PDF | Shigaro](http://shigaro.org/2019/01/02/pandoc-md-to-pdf/)

[docx 文件定制指南 - Andor Chen](https://about.ac/2015/06/docx-hack-guide.html)

```bash
// 1、帮助

--help
--list-input-formats
--list-output-formats
--list-extensions[=FORMAT]
--list-highlight-languages
--list-highlight-styles
--print-default-template=FORMAT
--print-default-data-file=FILE
--print-highlight-style=STYLE|FILE

默认的 word 模板可以通过命令来查看
pandoc --print-default-data-file reference.docx > custom-reference.docx
pandoc --print-default-template=html > template.html



// 2、转换

pandoc <src_file> -o <FILE.xxx>

--verbose
--log=FILE
--eol=crlf|lf|native
--wrap=auto|none|preserve

input format 相关 -f FORMAT, -r FORMAT, --from=FORMAT, --read=FORMAT
output format 相关 -t FORMAT, -w FORMAT, --to=FORMAT, --write=FORMAT
每行的几个参数应该是相同的意思，指定输入文件的格式

--pdf-engine=pdflatex, lualatex, xelatex, latexmk, tectonic, wkhtmltopdf, weasyprint, prince, context, pdfroff
Pandoc本身是无法直接将文件转成PDF的，需要LaTeX的支持。为了实现这个功能我们需要安装LaTeX，大概需要 5G，因此不建议使用 pandoc 转 pdf。

--latex-engine=xelatex
-–latex-engine=pdflatex|lualatex|xelatex
-V mainfont="<中文字体>" 对中文的支持
-V fontsize="12pt"
其他 LaTex 变量：mainfont, sansfont, monofont, mathfont, CJKmainfont

-V KEY[=VAL]
Set the template variable *KEY* to the value *VAL* when rendering the document in standalone mode. If no *VAL* is specified, the key will be given the value `true`.


--data-dir=DIRECTORY 工作目录
--shift-heading-level-by=NUMBER 移动标题层级，值为 -1，3 级标题会变为 2 级
--filter=PROGRAM
-p 不把 tab 转换为空格
--tab-stop=NUMBER 默认为 4，tab 等于 4 空格


-s / --standalone 输出适当的页眉和页脚
输出为 epub, epub3, fb2, docx, and odt 时，会自动加上 -s / --standalone

--toc 只有在 --standalone 时才有效
--toc-depth=NUMBER



--template=FILE|URL
--reference-doc=FILE #Use the specified file as a style reference in producing a docx or ODT file.
--css=file


--self-contained # 内嵌资源，不产生任何外部依赖


Pandoc对输入和输出使用UTF-8字符编码。如果你的本地字符编码不是UTF-8，你应该通过iconv输入输出：
iconv -t utf-8 input.txt | pandoc | iconv -f utf-8

默认情况下，pandoc将使用LaTeX创建PDF，这需要安装LaTeX引擎（请参阅--pdf-engine ）。


// 3、元数据

--metadata-file=FILE # 读取 FILE 中的内容作为 metadata
--metadata=KEY[:VAL] # 将 KEY 的内容设置为 VAL

也可以在文件中顶部对 metadata 进行声明，使用 YAML 语法：

---
# 该部分必须在文档的顶部
# 顶部和底部的 三个横线必须保留
title: 标题
author:
- 作者 1
- 作者 2
date: 日期
keywords: [关键词 1, 关键词 2]
abstract: |
  第一段

  第二段
---




```

