---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Web/SSR-Stateful-Framework
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: flask
---

## Brief

- References
    - 

- Installation
    - 

- Version
    - 

- Idea
    - 

- Configuration
    - 

- Data
    - 

- Examples
    - 

- Users
    - 

- UI
    - 

- CLI
    - 

- DSL
    - 

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 

- Architecture
    - 

- Pro
    - 

- Con
    - 

- Test
    - 

- Alternatives
    - 

- Description
    - 


## API

- API
    - `flask.request`
        - 代表当前请求
        - 黑魔法
        - 支持 自动加载上下文
        - 如果用在 路由函数 中，就相当于当前请求对象
    - `flask.session: Dict[Any, session]`
        - flask 自带的一套的会话的实现
        - 基于 cookies
        - 开箱即用
    - `flask.render_template()`
        - 渲染 [[jinja2]] 模板
        - 支持 automatic escaping，可以简单防范 URL 注入
    - `flask.Flask`
        - `__init__()`
            - A WSGI Application
        - `run()`
            - 启动 server，等价于 `flask run` 命令
            - 阻塞
        - `@route('/')`
            - 返回值
                - `flask.abort(401)`
                - `flask.redirect()`
                    - E.g. `redirect(url_for('login'))`
                - `str`
                    - 直接用作 [[HTML]] body
                - `dict`
                    - 直接用作 JSON API
                - `flask.render_template()`
                    - 渲染 [[jinja2]] 模板
                - `Flask().response_class()`
                    - Streaming Contents
            - 一个函数可装上多个 `@route()` 装饰器，即不同 URL 共用一个回调函数
            - Flask 内置了 `static` 路由函数，一般用于返回静态 `.css` `.js` 文件，文件需要放在（app）模块所在目录的 `static/` 文件夹里。可用 `Flask.url_for('static', filename='style.css')` 方法来看看 URL
        - `@errorhandler(404)`
            - 返回 错误页
            - 装饰给 错误码回调函数，该函数写法同 `@route()` 所装饰的回调函数
            - 会被 `flask.abort(404)` 所触发
        - `register_blueprint()`
            - Idea: 让 router 与 app 分离，从而复用 router，毕竟 `@route()` 还是与 Flask instance 绑定的
            - 有点类似 [[plumbum|plumbum.cli.Application.subcommand]] 复用子命令的感觉
        - `@endpoint()`
            - 作用跟 `@route()` 基本一样，我是没看出什么区别，据说是为了增强灵活性，但我已经有了 `url_for()`，感觉没必要
        - `url_for()`
            - Debug 利器
            - 生成 [[URL]] 的后半部分（port 之后的部分），根据你给的 route callback function 及其实参
        - `test_request_context()`
            - Debug 利器
            - 创建 request context
        - `request_context()`
            - Debug 利器
        - `logger: logging.Logger`
            - 基于标准库 [[logging|logging.Logger]]
    - `flask.views.View`
        - `__init__()`
            - `flask.Flask.route()` 太原始了，不方便复用。现在用 `View` 就可以像 [[JSX]] 那样直接复用
