---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/CLI/env
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## environs

[sloria/environs: simplified environment variable parsing](https://github.com/sloria/environs)

[The Twelve-Factor App](https://12factor.net/config)


```python
environs library
Installation:
    * pip install environs

Description:
    * environs 是一个环境变量解析库.
    * environs 很简单，读取 .env、读取环境变量、解析环境变量，没了.
    * environs 不支持修改环境变量，最多只能将 .env 写进 os.environ
    * MIT License.

API:
    from environs import Env
    from typing import Any, List, Dict, Callable, Type

    .EnvError

    .Env
        .__init__()
            eager: bool = False
                * 是否 请求解析环境变量时进行「验证」，即验证异步化.
                * 默认是在请求环境变量时立即「验证」，有错立即抛出.
                * Env.seal() 集中进行验证，阻塞，有错就抛出.
            expand_vars: bool = False
                * 是否开启 Variable Expansion 变量扩展（二次解析）.

        .read_env()
            path: AnyStr = None
                * 默认读取 .env
            recurse: bool = True
                * 没找到 .env 文件，递归上级目录，找到为止.
            verbose: bool = False
            override: bool = False
                * 是否写进 os.environ
            * 读取 .env 文件.
            * 找不到文件则抛出 OSError.

        .dump() -> Dict[str, Any]


        .__call__(env_variable: str)
            * 读取指定环境变量.

        .str(env_variable: str) -> str
        .int(env_variable: str) -> int
            validate: Union[function, Callable, List[Callable]]
                * 验证器.
                * E.g.
                * lambda x: x > 0
                * [lambda x: x > 0, lambda x: x in (200, 418)]
                * single validator / multiple validators
            * type-casting.
            * 读取指定环境变量、强制类型转换.
        .float() -> float
        .decimal()
        .bool()
        .list()
        .dict()
        .json()
        .enum()
        .path() -> pathlib.Path
        .date()
        .time()
        .timedelta()
        .url()
        .uuid()
        .log_level()
        @parser_for(name: str)
        def my_func(): pass
            name: str
                * 解析器の路由名.
                * E.g.
                * @env.parser_for(name='my_int')
                * def int_parser(x, y): pass
                * env.my_int(x=0, y=0)    通过 'my_int' 属性调用解析器
            * 自定义解析器.
            * 可以自己实现 type-casting.
            * 当然也可以用作其他操作.
            * 函数签名随意写，调用也是自己调用，没有任何隐式传参/调用.
            * 装饰器只是把解析器函数路由为 Env 对象的属性.

```