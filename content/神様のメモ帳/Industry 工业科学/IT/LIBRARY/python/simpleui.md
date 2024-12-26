---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/Plugin/Django/app/urls
github: newpanjing/simpleui
pip: django-simpleui
---

## Brief

- References
    - [快速上手指南 | Django SimpleUI](https://newpanjing.github.io/simpleui_docs/config.html)

- Installation
    - `pip install django-simpleui`
    - `settings:INSTALLED_APPS` - `simpleui` before `django.contrib.admin`

- Dependencies
    - [python版本支持文档更新 · Issue #403 · newpanjing/simpleui](https://github.com/newpanjing/simpleui/issues/403)

- Edition

- Idea
    - A modern [[Django]] admin theme

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

- Objects

- Fundamentals

- Architecture

- Pro

- Con

- Test
    - [[Django]] 4.2 实测没法用
    - [[Django]] 3.2 实测二级菜单没法用
        - 网上也有人说 bug 一堆，看来不是我的问题
    - ~~……终于发现问题所在，static files 问题！~~
        - 1
            - simpleui 的 static 跟别的 app 不太一样，它把 static 放进了 `<static_root>/admin/simpleui-x`
            - 一般 app static 请求为 `host:port/static/app/...`
            - simpleui static 请求为 `host:port/admin/simpleui-x/...`（还不确定是不是全部 static）
                - 我认为 `http://host:port/admin/simpleui-x/...` 是错误的 URL。因为 django admin 原版的 static 请求为 `host:port/static/admin/...`。很明显，simpleui 的 static 请求漏掉了 `/static`
            - 但 urlpatterns 又注册了 `/admin`，就导致 [[caddy]] etc 反代不能直接静态 `/admin`。即 `host:port/admin/...` 一部分是 static，一部分是 django
            - 然后，官方又没有文档，issue 也没有类似情况
        - 2
            - 仔细思考后发现跟 static 无关，DEBUG 模式和反代 static 后的表现是一样的，网络请求并无错误，Django logs 也无失败请求
            - 进一步发现，admin 页面的 *二级菜单* 无法正常工作，但 `http://host:port/admin/auth/user/` 是可以正常工作的（已确认用到了 simpleui）
            - 总结，就是 simpleui 的 bug，不是 static 问题

- Alternatives
    - [[django-admin-interface]]

- Description
