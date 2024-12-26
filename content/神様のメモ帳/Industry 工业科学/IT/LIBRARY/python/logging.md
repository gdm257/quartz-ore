---
tags:
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/Library/StandardLibrary
- flag/Library/DataAccessLayer/Implement__/IO/Logger
---

- Alternatives
    - [[loguru]]

- Pro
    - 兼容性强。主流 Python 框架的日志系统都基于 logging

- Configuration
    - `dictConfig()` Schema
        - `version: int`
            - `1` 目前唯一有效值
            - All other keys are optional
        - `loggers: Dict[str, dict]`
            - Logger dict
                - `level: str`
                - `propagate: bool`
                - `filters: List[str | Filter]`
                - `handlers: List[str]`
        - `root`
            - root logger
        - `filters`
        - `handlers: Dict[str, dict]`
            - Handler dict
                - `level: str`
                    - 如果缺失则默认使用 logger 的 level
                - `class: str`
                - `formatter: str`
                - `filters: List[str | Filter]`
                - other `**kwargs` passed to handler’s constructor
                    - *file*
                    - `filename`
                    - `maxBytes`
                    - `backupCount`
                    - *stream*
                    - `stream`
        - `formatters： Dict[str, dict]`
            - Formatter dict
                - `format`
                - `datefmt`
                - `style`
                - `validate` for [[Python]] 3.8+
                - `defaults` for [[Python]] 3.12+
                - `class: str` dotted module and class name of formatter class
        - `incremental: bool = False`
        - `disable_existing_loggers: bool = True`
    - [logging.config — Logging configuration — Python 3.12.2 documentation](https://docs.python.org/3/library/logging.config.html#logging-config-dictschema)


[SOC 的美学 —— logging 模块 | SinHub's Blog](https://sinhub.cn/2018/02/logging-the-aesthetics-of-soc/)

[使用Mixin模式配置Scrapy日志输出 - Joker-desire's Blog](https://joker-desire.github.io/2023/03/4/)

```python
import logging.config
# 读取日志配置
with open(file='./log.yaml', mode='r', encoding='utf-8') as f:
    log_yaml = yaml.load(stream=f, Loader=yaml.FullLoader)
    logging.config.dictConfig(log_yaml)  # 读取配置
root = logging.getLogger()  # root logger
yidm_logger = logging.getLogger('yidm')  # yidm logger



logger应该是参数还是全局变量？
都行。如果需要固定记录器，请使用全局变量；如果要更改记录器，请使用记录器参数。

DEBUG 	最详细的日志信息，典型应用场景是 问题诊断
INFO 	信息详细程度仅次于DEBUG，通常只记录关键节点信息，用于确认一切都是按照我们预期的那样进行工作
WARNING 	当某些不期望的事情发生时记录的信息（如，磁盘可用空间较低），但是此时应用程序还是正常运行的
ERROR 	由于一个更严重的问题导致某些功能不能正常运行时记录的信息
CRITICAL 	当发生严重错误，导致应用程序不能继续运行时记录的信息
默认只输出 warning error critical

logging.debug(msg, *args, **kwargs) 	创建一条严重级别为DEBUG的日志记录
logging.info(msg, *args, **kwargs) 	创建一条严重级别为INFO的日志记录
logging.warning(msg, *args, **kwargs) 	创建一条严重级别为WARNING的日志记录
logging.error(msg, *args, **kwargs) 	创建一条严重级别为ERROR的日志记录
logging.critical(msg, *args, **kwargs) 	创建一条严重级别为CRITICAL的日志记录
logging.log(level, *args, **kwargs) 	创建一条严重级别为level的日志记录
logging.basicConfig(**kwargs) 	对root logger进行一次性配置
logging.basicConfig(filename='yidm.log', filemode='[a|w]',level=logging.DEBUG, fomat='%(asctime)s|%(levelname)s|%(message)s', datefmt='%Y-%m-%d %H:%M:%S')    保存日志文件[追加|清空写入]
logging.debug('响应码：%s 总数：%d' %(r.json()['status'], r.json()['total']))
logging.debug(f'响应码：{r.json()['status']} 总数：{r.json()['total']}')

logging模块的四大组件
组件 	说明
loggers 	提供应用程序代码直接使用的接口
handlers 	用于将日志记录发送到指定的目的位置
filters 	提供更细粒度的日志过滤功能，用于决定哪些日志记录将会被输出（其它的日志记录将会被忽略）
formatters 	用于控制日志信息的最终输出格式

formatters 格式
%(asctime)s    # 日志产生的时间
%(created)f    # 时间戳
%(filename)s    # 生成日志的程序名
%(funcName)s    # 调用日志的函数名
%(levelname)s    # 日志级别
%(levelno)s    # 日志级别对应数值
%(lineno)d    # 日志所针对的代码行号
%(module)s    # 生成日志的模块名
%(msecs)d    # 日志生成时间的毫秒部分
%(message)s    # 具体的日志信息
%(name)s    # 日志调用者
%(pathname)s    # 生成日志的完整路径
%(process)d    # 生成日志的进程 ID
%(processName)s    # 生成日志的进程名
%(thread)s    # 生成日志的线程 ID
%(threadName)s    # 生成日志的线程名

```
