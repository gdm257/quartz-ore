---
tags:
  - Label/Article/Industry-工业科学/IT/LANGUAGE
---

# Part 0x01. Teamwork

## Tool 1. Git

### 1. Why git?

- Why git?
    - What if not git?
        - 设想一个最原始的团队协作场景
            1. A 写了一份 通用算法 `common.py`
            2. B 写了一份 债券代码 `bonds.py`
            3. C 写了一份 股票代码 `stocks.py`
            4. A 改进了 自己的 通用算法 `common.py`
            5. B 改进了 其他人的 通用算法 `common.py`
            6. C 改进了 其他人的 通用算法 `common.py`
            7. C 改进了 自己的 股票代码 `stocks.py`
            8. C 回滚了 自己的 股票代码 `stocks.py`
            9. A 对 B 提出了 改进建议 `common.py`
        - 遇到的问题
            1. sync 问题
            2. diff 问题
            3. merge 问题
            4. rollback 问题

### 2. What is git?

- What is [[git]]?
    - History
        - Linux & Git
            - [[Linux]] is the most popular open-source operating system in the world, with billions of lines of code
            - To manager source code of Linux and collaborate with developers from around the world, Linus Torvalds the creator of [[Linux]] developed a version control tool
    - Concepts
        - repo (仓库)
            - A repository is a folder with `.git` folder
            - All files in this folder will be tracked by git
        - commit (提交)
            - A commit is a history version of repo
            - A commit only records changes relative to last version
            - You should create commit manually
        - pointer (指针)
            - tag (标签)
                - Mark special commits
            - local branch (本地分支)
                - Local branch is only on your computer, others cannot see
            - remote branch (远程分支)
                - Remote branch is in remote repository, and is  usually shared with team members
                - To collaborate with others, you should **upload commits to remote branch** for others to download
                - Remote Repo
                    1. Local Protocol
                    2. HTTP Protocol
                        1. Dumb HTTP
                        2. **Smart HTTP**
                    3. SSH Protocol
                    4. Git Protocol
                - And **download commits from remote branch**
            - HEAD
                - Current version

- References
    - [图解Git](https://marklodato.github.io/visual-git-guide/index-zh-cn.html)

### 3. How to use git?

- Congiguration
    - `git config --global user.name "Jorge Connelly"`
    - `git config --global user.email "abc@qq.com"`

- How to Git?
    - Git Platform
        - Public repo
        - Issue
        - PR
        - GitHub Workflow
    - GUI
        - [[VSCode]] + git extensions
        - PyCharm comes with git plugin
        - Sourcetree
    - CLI
        - `init`
            - tell git to manage this directory
        - `clone`
            - download existing project to specified directory, and tell git to manage it
        - `add`
            - *stashed* files' modification will be recorded to commit
            - *unstashed* files' modification will be ignore
        - `commit`
            - create a new version
        - `checkout`
            - switch to different version
        - `merge`
            - merge two version
        - `push`
            - upload moddification to public repo
        - `pull`
            - download moddification from public repo

### 4. Summary

1. Version control is necessary for collaboration. We use [[git]]
2. We specify a folder as *repo* and use [[git]] to track everything in it
3. In repo, we fixes modification as a *commit* with some infomation like message and *tag*. And *checkout* between different versions
4. For teamwork, we *push* (upload) commits to *remote branch*, and *pull* (download) commits to *local branch*

## Tool 2. Package Manager

### 1. Why Package Manager?

- Package manager allows to use 3rd library
- Modulization
- Module Path

```python
from datatime import datetime

dt = datetime.now()
print(dt)
print('========')
```

```python
import requests  # ModuleNotFoundError

print(requests.get('https://baidu.com'))
```

### 2. Why pdm? Why not pip?

- Why `pdm`/`poetry`? Why not `pip`?
    - [[pdm]] is a perfact alternative to [[pip]]
    - PDM can create an isolated virtual environment to ensure *consistent environment*
    - PDM can auto check *version compatibility* of all packages
        - E.g. [[numpy]] `1.*` `2.*`
        - E.g. [[Django]] `3.2` `4.*`

### 3. How to use?

| pip                             | pdm                    |
| ------------------------------- | ---------------------- |
| -                               | pdm venv create        |
| -                               | pdm use                |
| pip install requests            | pdm add requests       |
| pip install -r requirements.txt | pdm sync               |
| python main.py                  | pdm run python main.py |

- References
    - [PDM Official Documentation](https://pdm-project.org/zh-cn/latest/)

### 4. Summary

1. Package manager downloads 3rd libraries to Python module path, so we can use 3rd librabies for coding
2. PDM help us to manage package version automatically, and create a virtual environment to run Python script

# Part 0x02. OOP

## 1. Paradigm

- What is OOP?
    - [[OOP]] is a **promgramming paradigm** of *high-level* programming languages, which emphasizes using the interaction of multiple objects to programming

- What is programming paradiam (编程范式)?
    - In mathematics, some subjects are basic:
        1. Number System (数字系统)
        2. Calculus (微积分)
        3. Algebra (代数)
    - For programming, there are also some *unavoidable* subjects:
        1. **Structured Programming** (结构化编程)
        2. **Object-Oriented Programming** (面向对象编程)
        3. **Functional Programming** (函数式编程)
        - They are so important that collectively referred to as "Programming Paradigm"
    - FAQ: What is different between OOP and AOP/IOP etc?
        - "XX-Oriented Programming" means programming around it.
        1. "Procedure-Oriented Programming" (面向过程编程) requires programming step-by-step and everything seem like function body. You can find a [[Bash]] script to feel it.
        2. "Interface-Oriented Programming" (面向接口编程) is a branch of OOP
        3. "Aspect-Oriented Programming" (面向切面编程) is an application of OOP

## 2. Object

- What is [[OOP|OOP]]?
    - Axiom
        1. No _**Attribute**_, No **Object**
            - Object MUST contain attribute(s)
            - Atrribute is natural (linguistic "possessive")
        2. No _**Type**_, No **Abstract**
    - Languages
        - Supported languages: [[C]], [[C++]], [[C-Sharp|C#]], [[Go]], [[Java]], [[JavaScript]], [[Kotlin]], [[Lua]], [[Matlab]], [[Python]], [[PHP]], [[PowerShell]], [[Perl]], [[Rust]], [[TypeScript]]
        - Unsupported languages: [[Bash]], [[cmd]], [[TeX]]

## 3. Features

- Outcomes
    1. Learn relationship between attribute and object
    2. Learn how to CRUD attributes (Python syntax)
    3. Learn why we need type system
    4. Learn how to create a type (Python syntax)
    5. Learn different types such as duck type, goose type, class
    6. Learn polymorphism (Python function)
    7. Learn type annotation (Python syntax)

- Python
    1. Attribute Access
        - `object()`
        - `.` and `dir()`
        - `del`
        - `has-a`
            - `Person` has a int named `age`
            - `Person` has a `age` typed int
    1. Type definition
        - `class`
            - On the other hand, if one thing has many attributes, it can be abstracted as a *TYPE*
            - E.g. Human: height, weight, name, age, gender
            - E.g. Stock: price, id, company
        - `isinstance()`
        - `type()`
    2. Type System
        - duck type
        - goose type
        - class (inheritance) in [[Java]], [[Python]]
        - interface in [[Go]]
        - struct in [[C]]
        - enum in [[C-Sharp|C#]]
        - delegate in [[C-Sharp|C#]]
    3. `is-a`
        - `obj: TypeAnnotation`
        - [[typing]] library e.g. `Union`, `Dict[]`, `List[]`
    4. Everything is an object in Python
        - `object`
        - `class` is also an `object` E.g. `type('MyClass', (), {})`
        - `type`
            - `type` is a constitution
            - `class` follows `type`
            - meta class is customized constitution

- Features
    1. **Encapsulation**
        - Define a `class` when many functions use the same variables (global variables)
    1. **Inheritance**
        - Use inheritance *ONLY* when necessary
    2. **Polymorphism**
        - Add *type annotations* for *function*, which is very useful

- How to design and use attributes?
    - SOLID
    - GoF: 23 design patterns

- Reuse Solutions
    - Variable
        - Constant
        - Variable
    - Structured Programming
        - Repitition e.g. `for` `while`
    - FP
        - **Function**
    - Modularization
        - Module
        - Package
        - Library
    - Type System (OOP)
        - **Field**
        - **Method**
        - Class **Inheritance**
            - Single Inhenritance
            - Multiple Inheritance
        - Object Composition
        - Generic Type
    - Lisp
        - Macro
        - Mixin
    - Decorator

## 4. Summary

1. **OOP** is a programming paradigm that requires encapsulating variables as **attribute**; Abstracting the same objects as a **type**
4. **Python** provides `.` to access attributes, `class` to define a type, `()` to create an instance, `type()` to get object's type
5. **Polymorphism** means `is-a` relationship, used for **type annotation**, checked by `isinstance()`

# Part 0x03. Web

## 1. Why Web?

- Why Web?
    - CLI vs GUI
        1. `print()` vs Image/Video
        2. `input()` vs Interaction
        3. `vim` vs PyCharm: Learning curve
    - Native (desktop/mobile) vs Web
        1. All platform
            - Windows
            - Linux
            - macOS
            - Android
            - iOS
            - E.g. `baidu.com`
        2. Learning curve
            - Web is the most popular UI solution

## 2. What is HTML?

- What is HTML?
    - [[HTML]] is the *most popular* hyper media
    - [[HTML]] is a *Markup Language*
    - [[Markdown]] is a *Markup Language*
    - [[HTML]] == [[Markdown]] Plus Pro Max

- HTML Structure
    - `<!doctype html>`
    - `<html>`
        - `<head>`
            - `<title>`
            - `<link>`
            - `<script>`
            - ...
        - `<body>`
            - ...

### 2.1 HTML Tags

- References
    - [Common Markdown 简明教程 9053](http://www.telihai.com/archives/9053/)
    - ![Content categories](https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories/content_categories_venn.png)

1. Meta content
    - `<base>` `<link>` `<meta>` `<noscript>` `<script>` `<style>` `<template>` `<title>`
2. Flow content
    - > *Most elements that can go inside the `<body>` element*
    1. Sectioning content
        - > *that defines the scope of `<header>` and `<footer>` elements*
        - `<article>` `<aside>` `<nav>` `<section>`
    2. Heading content
        - > *defines the heading of a section*
        - `<h1>` `<h2>` `<h3>` `<h4>` `<h5>` `<h6>`
        - ~~`<hgroup>`~~ (deprecated)
    3. Phrasing content
        - > *elements that mark up that text at the intra-paragraph level*
        - `<abbr>` `<audio>` `<b>` `<bdi>` `<bdo>` `<br>` `<button>` `<canvas>` `<cite>` `<code>` `<data>` `<datalist>` `<dfn>` `<em>` `<embed>` `<i>` `<iframe>` `<img>` `<input>` `<dbd>` `<label>` `<mark>` `<math>` `<meter>` `<noscript>` `<object>` `<output>` `<picture>` `<progress>` `<q>` `<ruby>` `<s>` `<samp>` `<script>` `<select>` `<slot>` `<small>` `<span>` `<strong>` `<sub>` `<sup>` `<svg>` `<template>` `<textarea>` `<time>` `<u>` `<var>` `<video>` `<wbr>`
        - Embeded content
            - `<audio>` `<canvas>` `<embed>` `<iframe>` `<img>` `<math>` `<object>` `<picture>` `<svg>` `<video>`
    4. Interactive content
        - `<button>` `<details>` `<embed>` `<iframe>` `<label>` `<select>` `<textarea>`
        - `<a>` with `href` attribute
        - `<audio>` with `controls` attribute
        - `<img>` with `usemap` attribute
        - `<input>` with not hidden `type` attribute
        - `<object>` with `usemap` attribute
        - `<video>` with `controls` attribute
    5. Form-related content
        - `<buton>` `<fieldset>` `<input>` `<label>` `<meter>` `<object>` `<output>` `<progress>` `<select>` `<textarea>`
        - listed
            - `<button>` `<fieldset>` `<input>` `<object>` `<output>` `<select>` `<textarea>`
        - labelable
            - `<button>` `<input>`  `<meter>` `<output>` `<progress>` `<select>` `<textarea>`
        - submittable
            - `<button>` `<input>` `<object>` `<select>` `<textarea>`
        - resettable
            - `<input>` `<output>` `<select>` `<textarea>`


## 3. HTML Rendering

5. Fundamentals of Browser
    1. Client/Server Architecture
        - ![](https://img-blog.csdnimg.cn/eda18db1172b411582083c655f933926.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5a-C5a-e5Lik5p2h6bG8,size_20,color_FFFFFF,t_70,g_se,x_16)
    2. HTTP(S)
        - ![C/S Cache](https://static001.geekbang.org/resource/image/16/02/1670e353bf6cccc096e63e0f102ed502.png)
    3. HTML

- What is Web?
    - **Web** is the rendering result of [[HTML]]
    - [[HTML]], [[CSS]], [[JavaScript]] [[Chrome|渲染流水线]]
    - What is "rendering"?
        - text -> graph
        - e.g. [[Markdown]]

- How to create web?
    - [[HTTP]]
    - SSR vs CSR
        - CSR == Client Side Rendering (template text -> html text)
        - SSR == Server Side Rendering (template text -> html text)
        - CSR is privilege of [[JavaScript]]
    - [[Django]]
        - MVT architecture
            - URLs (C/S arch) e.g. `https://baidu.com`
            - View (html template)
            - ORM (database)
                - altinative: CSV
                - ![MVX](https://gss0.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/574e9258d109b3dec90d9286c2bf6c81810a4ca9.jpg)

## 4. Image in HTML

- How to show image in HTML?
    1. _**`<img>`**_ `.gif .jpg .png .svg`
    3. `<svg>`
    4. `<canvas>`
    2. CSS
    5. WebAssembly

- Generate image by Matplotlib
    - `figure.savefig(buffer, format='jpg')`

```python
import matplotlib.pyplot as plt
import io
import base64

# 创建一个简单的图形
fig, ax = plt.subplots()
ax.plot([1, 2, 3, 4], [1, 4, 2, 3])

# 将图形数据写入 IO 对象
buffer = io.BytesIO()
plt.savefig(buffer, format='png')

# 单独保存图片
buffer.seek(0)
with open('a.png', 'wb') as f:
    f.write()

# 图形数据转换为 base64 字符串
buffer.seek(0)
base64_image = base64.b64encode(buffer.read()).decode('utf-8')

# base64 嵌入 <img>
image_format = 'png'
img_tag = f'<img src="data:image/{image_format};base64,{base64_image}">'
print(img_tag)
```

- Django
    - Block
    - `<img src="https://.../path/to.jpg">` + View
    - Fault tolerance

- How to use `<img>`?
    - Format
        - `image/jpg`
        - `image/png`
        - `image/svg`
    - Data
        1. Embed base64
        2. Link `<img src="https://pic1.zhimg.com/80/v2-e8f899cd32dd8aebcfc5179c0a03e6cc_720w.webp">

## 5. Web 1.0 and 2.0

- Web 1.0 vs Web 2.0
    1. SSR DOM (HTMX) based on [[Django]]
    2. CSR DOM (jQuery) == Web 1.0
    3. CSR Component (React/AlpineJS) == Web 2.0 based on [[vue]]
    4. SRR Component (django-unicorn/streamlit) == Web 2.0 but SSR

- SSR == Web Framework
    - Data
        - Embed
            - base64
            - JSON in `<script>`
    - Router
        - Endpoint Id
    - BIL
        - Server
    - Interactivity
        - DOM/CSOM
            - Selector
        - SSR Component (django-unicorn/streamlit)
            - *Embed Elements*
            - Lifecycle
            - Properties (Internal State)
            - Calling JS
            - Data Responsive (Auto AJAX)
            - Nested Components
            - Reusable
            - 剩余功能还没有框架能实现

- CSR == Web Framwork
    - Data
        - AJAX
            - JSON
            - gRPC
            - graphQL
            - protobuf
            - XML
    - Router
        - Hardcode Data API Endpoint
        - Endpoint Id
    - BIL
        - Server
        - Client
    - Interactivity
        - CSR Component (vue/alpinejs)
            - Lifecycle
            - *AJAX Data*
            - Properties (Internal State)
            - Calling JS
            - Data Responsive (Auto AJAX)
            - Nested Components
            - Reusable
            - State Management
            - Slot
            - Circular Reference Component
            - Self-Reference Component
            - Shadow DOM
                - Private Style
                - Private Script
            - WebSockets
