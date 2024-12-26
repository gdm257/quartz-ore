---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Web/SSR-Stateful-Framework
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: bottlepy/bottle
pip: bottle
---

- Pro
    - 适合做压力测试

- Description
    - Bottle 是一个快速、简单、轻量级的 Python web 框架
    - Bottle 短小精悍，仅包含一个文件，4400 行代码，适合阅读
    - Bottle 只依赖标准库，并没有使用任何第三方库
    - 读了下源码，非常适合学习，麻雀虽小，五脏俱全，代码风格简明朴素，新手也能看懂。当然，用就算了，看着都简陋
    - 学习 标准库 的用法
    - 学习 WSGI 的原理
    - 学习 App 的架构设计
    - 学习 函数 的参数设计
    - 学习 docstring 写法
    - 学习 变量 命名
    - 学习 config 设计
    - 学习 cli options 设计
    - 学习 插件系统

- Toolchain
    - Packing: `setuptools`
    - Test: `unittest` + [[tox]]

- Main
    - 总体思路清晰，都写在 `_main()` 里了
    - 解析 cli i.e. `sys.argv`
    - 初始化配置
    - 运行 `run()`
        - `subprocess.Popen` 运行真正的用户提供的后端 app

- Objects
    - `server`
    - `app`
    - `config`
    - `plugin`

- metadata
    - `__version__` 全局变量作模块版本号，非常朴素

- python 2
    - 利用 `sys.version_info.major > 2` 来区分 python 2/3
    - 利用 `if` 语句对 python 2/3 分别进行额外处理

- CLI
    - 用了 [[argparse]]
    - 没必要学，看看就好，[[plumbum]] [[Python click]] 已经够强大了

- config
    - 配置文件支持 [[JSON]] 或 [[INI]]
    - 无论哪种格式，都会解析到 `ConfigDict`（基于 `dict`）
    - `.json` 用 [[Python json]] load 后并没有直接放进 `ConfigDict`，而是解析成了单层级字典。什么意思呢？直接 load json 的话，访问 value 应该是 `config['key']['subkey']['subkey']`，可以看到，`[]` 中括号索引次数是不固定的，这样不利于通用的读取。为了固定索引次数，作者用一个 for 循环配合递归，将其解析为 `config['key.subkey.subkey']` 这样的形式
    - `.ini` 也差不多，对 [[configparser]] 的解析结果封装为 `config['key.skey.skey']` 的形式
    - 如此一来，无论是哪种格式的配置文件，在内部看起来都一样。又是万能的 [[中间层|中间层思想]]

- Web
    - `run()`
        - tl;dr
            - 初始化 `server` `app` `plugin`
            - 运行用户 app **`server.run(app)`**，根据具体 `ServerAdapter.run()` 的实现
            - 支持的 XxxAdapter 详见 `server_names` 变量（为了兼容 python 2.7，作者没使用枚举类型）
        - 有点绕，看了半天才看懂
        - 如果不自动重载，server app plugins 初始化完毕后，直接 `server.run(app)` 运行用户的 app
        - `if reloader and not os.environ.get('BOTTLE_CHILD')`
            - 如果自动重载，`subprocess.Popen` 开一个子进程，再次运行本模块，除了改个 `BOTTLE_CHILD` 环境变量，其余不变
            - `BOTTLE_CHILD` 用于判断是否为子进程
            - 子进程就直接按照上面「不自动重载」的流程运行用户 app
            - 子进程退出后，在 `while` + `time.sleep()` 的循环中判断是要重载，亦或是真正的退出程序
