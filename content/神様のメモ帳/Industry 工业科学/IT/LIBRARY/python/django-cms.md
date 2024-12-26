---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
- flag/Library/APILayer/Implement__/Web/CMS_Framework
pip: django-cms
---

## Brief

- References

- Installation
    - [How to install django CMS by hand - django cms 3.11.4 documentation](https://docs.django-cms.org/en/latest/how_to/install.html)

- Dependencies

- Edition

- Idea
    - [[django-cms]] == [[wagtail]]
    - [[django-cms]] 核心功能、总体架构与 [[wagtail]] 一模一样，不如说 Headless CMS 基本都长这样，前者跟简单易用、后者全栈相关功能更全

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Ecosystem

- Philosophy
    - 跟 [[ESG]] 最初版 demo 的思路如出一辙

- Objects
    - [[django-cms]] == [[wagtail]]
        - page == page
        - placeholder == page field == streamfield
            - 一个 page 可以有多个命名的 placeholders，但哪些 placeholders 会被渲染取决于 template 是否渲染该名称的 placeholder
            - placeholder 作用和用法等价于 StreamField，但不需要绑定 Plugins，它天生支持所有 plugins
        - plugin == field
        - alias == snippet
        - apphooks == 将普通 Django app  的 urls 交给 CMS 来注册，并且可以将 app 创建为 CMS 的一个 page，简单说就是集成进导航

- Fundamentals
    - wagtail 后台更美观些，技术栈也更现代，CMS 貌似用的是 bootstrap 5

- Architecture

- Pro
    - page 与 template 解耦
        - [[wagtail]] 就做不到这点
        - CMS page 与 template 是解耦的，page 可以自由选择 template，哪怕可能不兼容（部分 fields 没被渲染）
    - [[django-cms]] 完全当普通的 [[Django]] app 来使
        - [How to install django CMS by hand - django cms 3.11.4 documentation](https://docs.django-cms.org/en/latest/how_to/install.html)
    - [[django-cms]] 提供了一些模板标签，一键实现前台的导航栏。CMS 自带一个前台的模板。从这个角度来说要比 wagtail 易用一些，稍微减轻前台的工作

- Con
    - 不支持 migration
        - 好在 template 是一个纯 HTML 文件
        - 而 page content 是可以修改所用 template 的
        - 因此问题不严重，只不过是 placeholder 无法重命名了而已

- Test
    - 文档质量也是 CMS 可读性更强，简单易懂却非常实用，不像 wagtail 文档比较抽象

- Alternatives
    - [[wagtail]]
        - ~~上限更高~~
        - [[Flask]] vs [[Django]]
        - [[django-cms]] vs [[wagtail]]
        - 几乎没区别，除了 [[wagtail]] 多几个 API 相关 utility

- Description
