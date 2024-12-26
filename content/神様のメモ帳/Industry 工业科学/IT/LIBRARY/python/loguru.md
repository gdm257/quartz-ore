---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/Logger
  - flag/Library/BusinessLogicLayer/Implement__/Exception
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

## loguru

[日志 - Python 项目工程化开发指南](https://pyloong.github.io/pythonic-project-guidelines/guidelines/advanced/logging/#11)

[使用loguru优雅的输出日志 | Escape](https://www.escapelife.site/posts/d4521b7.html)

[Overview — loguru documentation](https://loguru.readthedocs.io/en/stable/overview.html#entirely-compatible-with-standard-logging)


```python
loguru library
Installation:
    * pip install loguru

Description:
    * loguru 是 logging 的封装.
    * loguru 的哲学是（每个模块）有且仅有一个 logger，极度 Pythonic.
    * from loguru import logger 将 logger 作为模块变量，直接用就行.
    * 不同模块导入的 loguru.logger 是同一个对象.
    * 如需定制，可通过 logger 的 API，生成一个新的 logger 对象.
    * 定制后返回的 logger，与 loguru.logger 不是同一个对象.
    * 如果不返回，说明是修改该 logger 对象.
    * loguru.logger 自动根据 __name__ 来区分不同模块，一般不用管.
    * loguru 在 VSCode 会报错，看了下，是扩展的锅，把 __name__ 改了.

Examples:
    from loguru import
    logger = logger.bind(name='main')


API:
    from loguru import logger, Logger, Level
    from pathlib import Path

    logger: Logger
        * 线程安全.
        * 进程不安全.
        * 协程不安全.

    @overload
    logger.debug(__message)
        __message: str
        *args
        **kwargs
    @overload
    logger.debug(__message,/)
        __mesage: Any
        /,
    logger.debug('DEBUG')
    logger.info('INFO')
    logger.warning('WARNING')
    logger.error('ERROR')
    logger.critical('CRITICAL')
    logger.exception('Exception')
        * 会打印异常的调用链、变量值 etc 有用信息，一般在 except 里使用.
    logger.log(__level, __message)
        __level: str | int
            * level name.
        __message: str


    logger.bind() -> loguru.Logger
        **kw
        name: str
            - 'foo'
        -> new_logger: loguru.Logger
        * 按照配置创建一个新 logger.
    logger.patch() -> loguru.Logger
        -> new_logger: loguru.Logger
        * 将动态值附加到每个新消息的记录 dict 上.
        - E.g.
        - logger.add(sys.stderr, format="{extra[utc]} {message}")
        - logger = logger.patch(lambda record: record["extra"].update(utc=datetime.utcnow()))


    logger.configure()
        *,
        handlers
        levels
        patcher
    logger.level(name) -> loguru.Level
        name: str
            * name of new level.
        -> new_level: loguru.Level
        * 创建一个新的日志等级.
    logger.add(sink) -> int
        sink
            - 'file_{time}.log'
                * 支持 二次格式化
                * time
            - Path(r'run.log')
            - open('run.log', 'w')
            - logging 模块的 Handler
            - 自定义函数
            - 自定义类
        *,
        level: str | int
            - 'INFO'
        format
            - '{time} {level} {message}'
        filter
        rotation
            - '500 MB'
            - '12:00'
            - '1 week'
            - '2 days'
        enqueue: bool = False
            * 是否启用 进程安全、协程安全.
            * 多协程需要使用 complete() 来等待.
        -> handler_id: int
        * 添加 handler，返回 handler id.
        * 修改的是 loguru.logger 对象本身，所有模块都会生效.
        * 线程安全.
    logger.remove(handler_id)
        handler_id: int
            - Path('run.log')
        * 移除 handler.
    logger.disable()
    logger.enable()

    logger.parse()
        * 日志解析器，解析已有日志.

```


## loguru.catch()

```python
from loguru import logger

@logger.catch()
    * 优化 线程调用栈打印 when 抛出异常.
    * 对标 better-exceptions、PrettyErrors.


```