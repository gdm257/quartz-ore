---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Web/Crawler
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: scrapy
---

[Scrapy 2.8 documentation — Scrapy 2.8.0 documentation](https://docs.scrapy.org/en/latest/)

[AccordBox/awesome-scrapy: A curated list of awesome packages, articles, and other cool resources from the Scrapy community.](https://github.com/AccordBox/awesome-scrapy)

[browserless/browserless: Deploy headless browsers in Docker. Run on our cloud or bring your own. Free for non-commercial uses.](https://github.com/browserless/browserless)

[SeleniumHQ/docker-selenium: Provides a simple way to run Selenium Grid with Chrome, Firefox, and Edge using Docker, making it easier to perform browser automation](https://github.com/SeleniumHQ/docker-selenium)

- Extend
    - 自带 JS 解析
    - 去重
    - 入库
    - 校验
    - 重试
        - 默认中间件会自动重试 2 次
    - 分布式
    - 周期
    - 警报
    - UA
    - ip pool

- Con
    - 我终于找到一个 scrapy 的设计缺陷：start_requests 没有与 spider 解耦

## architecture

[Scrapy 源码剖析（一）架构概览 - 掘金](https://juejin.cn/post/6897773305399509006)

[Scrapy 源码剖析（二）Scrapy 是如何运行起来的？ - 掘金](https://juejin.cn/post/6897776530295324679)

[Scrapy 源码剖析（三）Scrapy 有哪些核心组件？ - 掘金](https://juejin.cn/post/6897779127814717454)

[Scrapy 源码剖析（四）Scrapy 如何完成抓取任务？ - 掘金](https://juejin.cn/post/6897780747390697479)

- IDEA
    - ![Scrapy 架构](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/64390aab9379475da0966deb468c5dc9~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)
    - ![模块的协作](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3a05dcda74aa4f8c9c6bed3365770dd6~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)


## run spider

[Common Practices — Scrapy 2.6.1 documentation](https://docs.scrapy.org/en/latest/topics/practices.html#run-from-script)

- 异步N步曲
	- 获取事件循环——实例化 CrawlerProcess
	- 封装任务——自定义 Spider 类
	- 执行任务——CrawlerProcess.crawl()
	- 等待任务完成——CrawlerProcess.start()
	- 获取计算结果——实现 Spider.parser() 方法
	- CLI `scrapy crawl` 其实就是对以上步骤的封装

- Test
    - 请用 多进程 来运行多个 scrapy projects 最为保险
        - 每个 scrapy project 默认使用的是当前进程的全局事件循环（由于 twisted 框架），而不会自动创建一个事件循环 [[ChatGPT]]
    - 运行多个 spider 可在一个进程，本身就是这么设计的

```python
import scrapy
from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings


def main():
	"""等价于 scrapy crawl"""
    settings = get_project_settings()  # load `settings.py`
    process = CrawlerProcess(settings=settings) # 启动事件循环

    process.crawl(XSpider)  # run spider（执行任务）。直接返回，不等待
    process.crawl(YSpider)  # 并发执行任务
    process.crawl(ZSpider)
    process.crawl(YcySpider, depth=0, url=None, urls=None, proxy='')
    process.crawl(ExSpider, depth=0, url=None, urls=None, proxy='')
    process.start()  # 阻塞，等待所有爬虫运行完毕，相当于 join()
```


## cli

[Command line tool — Scrapy 1.8.3 documentation](https://docs.scrapy.org/en/1.8/topics/commands.html)

```python
scrapy command
Usage:
    scrapy <subcommands> [options] [args]

Description:
	* scrapy /ˈskreɪpaɪ/ 是一个爬虫框架
	* scrapy 1.x 支持 Python 2/3
	* scrapy 2.x 只支持 Python 3
	* scrapy v1 v2 目测 API 差别不大，用哪个都行，我选了 v2
	* scrapy 本身是个 cli，我们写的爬虫项目可看作 scrapy 的一种插件
	* scrapy/flask/django 都利用了插件机制，cli 反而成了插件的启动器
	* scrapy/flask/django 因此被称作 application framework
    * scrapy-redis 可以将多台主机组合起来，共同完成一个爬取任务
    * gerapy 相当于 Web UI 版 Scrapyd
    * Scrapyd 一份爬虫，多个主机，经典主从架构？
    * Scrapyd 如果我们有很多主机，那就要逐个登录部署，万一代码有所改动……
    * Scrapyd 专门用于分布式部署 scrapy，避免繁琐的部署操作
    * spider、project 的颗粒度？
    * 一个 spider 负责一个域名
    * 一个 spider 可包含多个 parser
    * 多个 spider 是否要放进一个 project？主要是考虑代码复用，其次是直觉
    * 多个 project 是共享还是独占一个 pyproject.toml？都行，但最好独占
    * 一个 project，用 Visual Studio 的话来说，应该算作一个 solution


Subcommands:
	version
	shell
    startproject <project_name> [project_dir]
   		* 用于创建新的爬虫项目
   		* 相当于 project wizard
    genspider --dump
    	-l --list
    		* 查看可用模板
   		-d --dump <template>
   			* 导出模板到 stdout
    genspider [options] <spider_name> [domain]
   		-t --template "basic"
   			* 指定爬虫模板
   			* 默认使用 basic 模板
    	--force
    		* 覆盖已存在的同名 spider
    	-e --edit
    		* 创建爬虫后进行编辑
    	* 根据模板生成一个爬虫文件
    settings
    	* 查看项目设置
    crawl
    	* 项目文件夹必须能直接导入，即添加进 sys.path
    runspider
    	* 项目文件夹必须能直接导入，即添加进 sys.path
    fetch
    parse
        --spider <spider_name>    指定爬虫
        -c <url>
	view
	bench

	# Project only commands
	list
	check
	edit

Options:
   	-h --help
   	--nolog
   	--logfile <file>
   	-L --loglevel "DEBUG"
   	--pidfile <file>
   		* write process ID to FILE
   	--profile <file>
   		* write python cProfile stats to FILE
   	--pdb
   		* enable pdb on failure
   	-s --set <name>=<value> ...
   		* scrapy 设置
   		* 可多次指定

Examples:
    scrapy startproject <name>  # 创建名为 name 的文件夹
    cd <name>
    scrapy genspider abooky "abooky.com"
        # 会创建 <name>/<name>/abooky 文件夹
    scrapy parse  \
        --spider=abooky  \
        -c parse 'https://exhentai.org/favorites.php?favcat=0'
        # debug 爬虫
    scrapy crawl abooky -O data.json
        # 跑爬虫
        # spider 中的第三方库需要安装到 scrapy 所在的 python 环境
	1. scrapy startproject 创建项目文件夹
	2. scrapy genspider 生成爬虫文件
		* 本质是定义一个继承 scrapy.Spider 的爬虫类
	3. IDE 中修改爬虫类，例如覆写 parse 方法、解析等
	4. scrapy runspider <spider_file.py> 运行这个爬虫

Configuration:
	* 全局配置 /etc/scrapy.cfg
	* 用户级配置
	- ~/.config/scrapy/scrapy.cfg
	- ($XDG_CONFIG_HOME/scrapy/scrapy.cfg)
	- (~/.scrapy.cfg)
	* 项目级配置
	- <project_name>/scrapy.cfg
	- 项目级 > 用户级 > 全局

```


## project structure

```csharp
> scrapy startproject <project_name>
/<project_name>
├── <project_name>             项目名/包名
│   ├── __init__.py
│   ├── items.py               Item
│   ├── middlewares.py         中间件
│   ├── pipelines.py           管道
│   ├── settings.py            项目设置
│   └── spiders                爬虫存放目录
│       └── __init__.py
└── scrapy.cfg                 项目级 scrapy 配置
```

- `project_name`
    * 项目名
    * Python 包名
    * Python 字符串（用于反射）
    * INI 字符串
    * 一旦确定，千万别改，到处都是反射、硬编码，比全局变量还可怕


## `spiders/`

- References
    - [爬虫（三）scrapy的去重与过滤器的使用 - 知乎](https://zhuanlan.zhihu.com/p/79120407)

    - [使用Mixin模式配置Scrapy日志输出 - Joker-desire's Blog](https://joker-desire.github.io/2023/03/4/)

- Idea
    - 

- Usage
    - `parse(self, response: scrapy.http.TextResponse)`
        - yield item to pipeline queue
        - yield request to pipeline queue

- Description
    - 

- Test
    - 文件名和路径随意，类名随意，反正最后要的是一个类，详见 run spider 小节……理论上是这样，但 `settings.py` 里的 `SPIDER_MODULES` 和 `NEWSPIDER_MODULE` 硬编码了 spiders 导入路径，目测是给命令行 scrapy crawl 用的

这使 [[sqlmodel]] 入库成为可能

[[ChatGPT]] **在Scrapy的解析函数中，如果yield一个非请求、非响应对象，Scrapy将会将其视为一个Item对象，并将其传递给Item Pipeline进行进一步处理**。Item对象是用于存储和传递数据的容器，它可以是自定义的数据类型，如字典、命名元组或Scrapy中定义的Item类。

当您在解析函数中yield一个非请求、非响应对象时，Scrapy会将其发送到已配置的Item Pipeline进行处理。Item Pipeline可用于执行各种操作，例如数据清洗、验证、持久化到数据库等。您可以编写自定义的Item Pipeline来处理接收到的Item对象，并根据您的需求执行相应的操作。

请注意，为了使Item Pipeline正确地处理Item对象，您需要在Spider的settings.py文件中正确配置ITEM_PIPELINES设置，以指定要应用的Item Pipeline类及其顺序。

总结起来，当在Scrapy的解析函数中yield一个非请求、非响应对象时，它将被传递给Item Pipeline进行处理，以便在后续处理过程中对数据进行进一步操作。


```python
"""
    scrapy.Spider
"""

import spider
class BangumiSpider(scrapy.Spider):
    # Overwrite
    name = 'bangumi'
    custom_settings = {}
    allowed_domains = ['mikanani.me',]
    start_urls = ['https://mikanani.me',]
    def start_requests(self): pass

    # 自定义
    def __init__(self): pass
    def parse_bangumi(self, response): pass
    def parse_subgroup(self, response): pass
    def parse_rss(self, response): pass
    def get_proxy(self): pass

普通爬虫。所有 spider 必须直接或间接继承自 scrapy.spiders.spider




"""
    scrapy.spiders.CrawlSpider
"""

import spider
class BangumiSpider(scrapy.spiders.CrawlSpider):
    # Overwrite
    name = 'bangumi'
    custom_settings = {}
    allowed_domains = ['mikanani.me',]
    start_urls = ['https://mikanani.me',]
    def start_requests(self): pass

    rules = ()

    # 自定义
    def __init__(self): pass
    def parse_bangumi(self, response): pass
    def parse_subgroup(self, response): pass
    def parse_rss(self, response): pass
    def get_proxy(self): pass


`scrapy.spiders.CrawlSpider` 可以说是为全站爬取而生。

除了从`scrapy.Spider`类继承的属性外，还有一个新的属性`rules`,它是一个`Rule`对象列表，每个`Rule`对象定义了某个规则，如果多个`Rule`匹配一个连接，那么使用第一个，根据定义的顺序

CrawlSpider的rules属性是直接从response对象的文本中提取url，然后自动创建新的请求。与Spider不同的是，CrawlSpider已经重写了parse函数，因此我们可以看到，scrapy的官网文档的例子中并没有重写parse。

这一切是scrapy自动实现的，具体过程是：

scrapy crawl spidername开始运行，程序自动使用start_urls构造Request并发送请求，然后调用parse函数对其进行解析，在这个解析过程中使用rules中的规则从html（或xml）文本中提取匹配的链接，通过这个链接再次生成Request，如此不断循环，直到返回的文本中再也没有匹配的链接，或调度器中的Request对象用尽，程序才停止。

rules中的规则如果callback没有指定，则使用默认的parse函数进行解析，如果指定了，那么使用自定义的解析函数。

如果起始的url解析方式有所不同，那么可以重写CrawlSpider中的另一个函数parse_start_url(self, response)用来解析第一个url返回的Response，但这不是必须的。

Rule对象的follow参数的作用是：指定了根据该规则从response提取的链接是否需要跟进。

`LinkExtractor`在`CrawlSpider`类(在`Scrapy`可用)中使用, 通过一套规则,但你也可以用它在你的`Spider`中,即使你不是从`CrawlSpider`继承的子类, **因为它的目的很简单: 提取链接**｡

每个LinkExtractor有唯一的公共方法是 extract_links()，它接收一个 scrapy.http.Response 对象，并返回一个 scrapy.link.Link 对象。

Link Extractors要实例化一次，并且 extract_links 方法会根据不同的 response 调用多次提取链接


```

## `items.py`

- Description
	* Item 类随便放哪叫啥都行，不一定要放在 `items.py`，你新建个 `items` 文件夹都行，只要在 spider/pipeline/middleware 手动导入即可，在 `settings.py` 中注册，则是使用能被 `__import__()` 导入的字符串即可
	* Item 等价于 Schema/Model/json/Pydantic/Attrs/datablass
	* Item 零依赖，与 project name、spider、middlewire 完全解耦
	* Item 可以不修改直接复制到另一项目使用


## `pipelines.py`

- References
    - [scrapy中pipeline获取settings参数的方法\_pipeline from\_settins\_亮剑2018的博客-CSDN博客](https://blog.csdn.net/u011490194/article/details/123382400)

    - [python - Bulk insert scrapy pipeline using sqlalchemy - Stack Overflow](https://stackoverflow.com/questions/72912744/bulk-insert-scrapy-pipeline-using-sqlalchemy)


- Idea
    - Hook after spider yields **item**
    - Hook item

- Fundamentals
    - 工作流程详见 scrapy architecture 小节
    - 反射来调用

- Usage
    - 自定义管道类
        - 无需继承，只需要实现特定方法
        - 管道类就像个鸭子类型，或者说是 Protocol（协议）
        - `__init__(self[, ...]) -> None:`
        - `process_item(self, item, spider) -> any_item:`
            - 必须实现
            - 返回一个字典或Item，或者抛出`DropItem`异常丢弃这个Item
        - `open_spider(self, spider) -> None:`
        - `close_spider(self, spider) -> None:`
        - `from_crawler(cls, crawler)`
            - 可访问核心组件比如配置和信号，并注册钩子函数到Scrapy中
    - 注册
        - 在 `settings.py` 的 `ITEM_PIPELINES` 添加这个 Pipeline 类
        - 存在多个 Pipelines，按顺序链式处理 Item
    - 配置
        - 

- Examples
    - 布隆过滤器去重

```python
class XxxPipeline:
	def __init__(self[, ...]):
    	pass

	def process_item(self, item, spider) -> any_item:
		"""Called when yield item"""
		pass

	def open_spider(self, spider) -> None:
		"""Called when the spider is opened"""
		pass

	def close_spider(self, spider) -> None:
		"""Called when the spider is closed"""
		pass

    @classmethod
	def from_crawler(cls, crawler):
		pass

```


### `MySQLPipeline`

- References
    - [IaroslavR/scrapy-mysql-pipeline: scrapy mysql pipeline](https://github.com/IaroslavR/scrapy-mysql-pipeline)

- Installation
    - `pip install scrapy-mysql-pipeline`

- Idea
    - yield item 自动入库 [[mysqld|MySQL Server]]

- Test
    - 设计的不好，不如自己重写
    - 尤其是 table name，在 settings.py 就被固定死了，根本无法处理不同 item 类

- Usage

```python settings.py
ITEM_PIPELINES = {
    'scrapy_mysql_pipeline.MySQLPipeline': 300,
}

#######################################
#
# scrapy_mysql_pipeline.MySQLPipeline
#
#######################################

MYSQL_HOST = 'localhost'
MYSQL_PORT = 3306
MYSQL_USER = None
MYSQL_PASSWORD = ''
MYSQL_DB = None
MYSQL_TABLE = None
MYSQL_UPSERT = False
MYSQL_RETRIES = 3
MYSQL_CLOSE_ON_ERROR = True
MYSQL_CHARSET = 'utf8'
```


## `middlewares.py`

- Idea
    - Hook request
    - Hook response

- Types
    - 下载中间件
        - [内置下载中间件](bookxnotepro://opennote/?nb={3160d5a4-47b5-4d73-a735-264e8e17bace}&book=6175514765ab7972ede9048a9b2bbc6d&page=239&x=195&y=216&id=9&uuid=7826baed0a6adcbb5f9b71826140e773)
    - 爬虫中间件
        - [内置爬虫中间件](bookxnotepro://opennote/?nb={3160d5a4-47b5-4d73-a735-264e8e17bace}&book=6175514765ab7972ede9048a9b2bbc6d&page=257&x=179&y=336&id=11&uuid=9935d912927d2d59c6d22ec90ff55b85)

- Usage
    - 自定义 中间件
        - 下载中间件一般叫 `XxxDownloaderMiddleware`
        - 爬虫中间件一般叫 `XxxSpiderMiddleware`
        - 要做的就是定义一个普通的类，无需继承，但要实现特定方法，即 Protocol（协议），或者说是真正的鸭子类型
        - 类名、模块路径可以随意定义，只需要保证 settings 里的字符串能用 `__import__()` 正确导入即可
    - 注册 中间件
        - Settings
            - `SPIDER_MIDDLEWARES: Dict[str, Optional[int]]`
            - `DOWNLOADER_MIDDLEWARES: Dict[str, Optional[int]]`
            - 禁用中间件，只需将值设为 `None`
            - 数字越小，越靠近引擎，数字越大越靠近 下载器/Spider
        - [默认启用的下载中间件](bookxnotepro://opennote/?nb={3160d5a4-47b5-4d73-a735-264e8e17bace}&book=6175514765ab7972ede9048a9b2bbc6d&page=139&x=165&y=584&id=7&uuid=5c3dcc235f6e23c00b978dbdedc8b326)
        - [默认启用的爬虫中间件](bookxnotepro://opennote/?nb={3160d5a4-47b5-4d73-a735-264e8e17bace}&book=6175514765ab7972ede9048a9b2bbc6d&page=152&x=147&y=527&id=10&uuid=e223e3b9bc9a3e6a23b819f645a2b8cb)

- Fundamentals
    - 工作流程详见 scrapy architecture 小节
    - 通过 settings 给的字符串，反射调用

### Downloader Middlewares

#### `scrapy_proxies`

- References
    - [aivarsk/scrapy-proxies: Random proxy middleware for Scrapy](https://github.com/aivarsk/scrapy-proxies)

- Installation
    - `pip install scrapy_proxies`

- Test
    - TMD 根本用不了！
    - 根本就是废的，测试了所有情况，连代理都连不上，笑死，数据包根本就没发给代理

- Usage

```python settings.py
DOWNLOADER_MIDDLEWARES = {
   'scrapy_proxies.RandomProxy': 749,
}

#######################################
#
# scrapy_proxies.RandomProxy
#
#######################################

# Proxy mode
# 0 = Every requests have different proxy
# 1 = Take only one proxy from the list and assign it to every requests
# 2 = Put a custom proxy to use in the settings
PROXY_MODE = 2

# Proxy list containing entries like
# http://host1:port
# http://username:password@host2:port
# http://host3:port
# ...
PROXY_LIST = '/path/to/proxy/list.txt'

# If proxy mode is 2 uncomment this sentence :
CUSTOM_PROXY = "http://host:port"
```

#### `scrapy-rotating-proxies`

- References
    - [TeamHG-Memex/scrapy-rotating-proxies: use multiple proxies with Scrapy](https://github.com/TeamHG-Memex/scrapy-rotating-proxies)

- Installation
    - `pip install scrapy-rotating-proxies`


#### `HttpProxyMiddleware`

- `scrapy.downloadermiddlewares.httpproxy.HttpProxyMiddleware`
    - Usage
        1. `http_proxy` `https_proxy` `no_proxy`
        2. `Request(..., meta = {'proxy'='http://host:port'})`
        - 二选一，`meta` 优先级比环境变量高
    - ~~自带中间件，不够灵活，不推荐使用~~
    - 不好用也得用，目前就这个能用了


#### `UserAgentMiddleware`

- Settings
    - `USER_AGENT: str`
        - 官方文档并没写清楚，但目测是这个

- Usage

```python settings.py

#######################################
#
# scrapy.downloadermiddlewares.useragent.UserAgentMiddleware
#
#######################################

# Crawl responsibly by identifying yourself (and your website) on the user-agent
USER_AGENT = "Scrapy/VERSION (+https://scrapy.org)"
USER_AGENT = "exhentai (+http://www.yourdomain.com)"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36"
```


#### `scrapy-fake-useragent`

- References
    - [alecxe/scrapy-fake-useragent: Random User-Agent middleware based on fake-useragent](https://github.com/alecxe/scrapy-fake-useragent)

- Installation
    - `pip install scrapy-fake-useragent`

- Usage

```python settings.py
DOWNLOADER_MIDDLEWARES = {
    'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware': None,
    'scrapy.downloadermiddlewares.retry.RetryMiddleware': None,
    'scrapy_fake_useragent.middleware.RandomUserAgentMiddleware': 400,
    'scrapy_fake_useragent.middleware.RetryUserAgentMiddleware': 401,
}


#######################################
#
# scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware
#
#######################################


```


#### `DefaultHeadersMiddleware`

- References
    - [Scrapy添加请求头、添加cookie、多个spider顺序运行、pipelines管道\_是小菜欸的博客-CSDN博客](https://blog.csdn.net/weixin_45081575/article/details/103793985)

- Idea
    - set value of **non-existing** headers
    - ~~设置 **初始 cookies**~~亲测有问题

- Test
    - 根本无法影响 cookies，不能用，别想了，乖乖自定义中间件

- Fundamentals
    - 虽然 [官方文档](bookxnotepro://opennote/?nb={3160d5a4-47b5-4d73-a735-264e8e17bace}&book=6175514765ab7972ede9048a9b2bbc6d&page=136&x=306&y=592&id=13&uuid=f69c84b6b7a612aadc3b5cf9ec4207b6) 不推荐通过 headers 中间件来设置 cookies，但我研究源码后发现，其实这么做是没问题的
        1. headers 中间件权重值小于 `CookiesMiddleware` 中间件
        2. headers 中间件只修改 request，不修改 response，并且只会在 request headers 的对应 key 不存在时才会修改 headers。也就是说，headers 中间件不会修改被 `CookiesMiddleware` 更新过 cookies 的 request
        3. 综上，headers 中间件与 cookies 中间件完全不冲突。因此，**headers 中间件用来设置初始 cookies，完全不会有问题**

- Usage

```python settings.py
#######################################
#
# scrapy.downloadermiddlewares.defaultheaders.DefaultHeadersMiddleware
#
#######################################

# Override the default request headers:
DEFAULT_REQUEST_HEADERS = {
   "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
   "Accept-Language": "en",
   "Cookie": "foo=bar; foo2=bar"
}
```


#### `CookiesMiddleware`

- Idea
    - 启用 cookies
    - multiple cookies session by passing `meta={"cookiejar": any_int}` to `Request()`

- Settings
    - `COOKIES_ENABLED: bool = True`
    - `COOKIES_DEBUG: bool = False`

- Usage

```python

#######################################
#
# scrapy.downloadermiddlewares.cookies.CookiesMiddleware
#
#######################################

# Disable cookies (enabled by default)
COOKIES_ENABLED = True

# Log all cookies of requests and responses
COOKIES_DEBUG = True

```


#### `RobotsTxtMiddleware`

- Idea
    - 自动遵守网站的 `robot.txt`

```python settings.py

#######################################
#
# scrapy.downloadermiddlewares.robotstxt.RobotsTxtMiddleware
#
#######################################

# Obey robots.txt rules
ROBOTSTXT_OBEY = False
```

- Settings
    - `ROBOTSTXT_OBEY`
        - `True` (default)
        - `False`


#### custom downloader middleware

```python
class XxxDownloaderMiddleware:
	@classmethod
	def from_crawler(cls: T, crawler) -> T:
	def process_spider_input(self, request, spider) -> Union[None, Response, Request]:
	def process_spider_output(self, request, response, spider) -> Response | Request:
	def process_spider_exception(self, request, exception, spider) -> None | Response | Request:
	def process_start_requests(self, start_requests, spider): yield from start_requests
	def spider_opened(self, sipder) -> None:
```


### Spider Middlewares



## `settings.py`

- References
    - [【scrapy小知识】获取settings.py的配置内容\_scrapy 获取settings\_myt2000的博客-CSDN博客](https://blog.csdn.net/myt2000/article/details/122473278)

- Configuration
    - `<project_name>.settings` (default)
    - `$env:SCRAPY_SETTINGS_MODULE`

- Idea
    - 为 Spiders 提供通用设置（可被覆盖）
    - 为 Middlewares 提供自定义变量，以增强灵活性
    - 为 Pipelines 提供自定义变量，以增强灵活性
        - `settings.py` 之于 Middleware，`pyproject.toml` 之于 [[isort]]
        - `settings.py` 之于 Pipeline，`pyproject.toml` 之于 [[isort]]
        - 为了避免硬编码，可在 `settings.py` 定义一些变量。在 Pipeline 中，通过 `scrapy.utils.project.get_project_settings()['VAR_NAME']` 来使用变量
    - > customize the behaviour of all Scrapy components, including the core, extensions, pipelines and spiders themselves.

- Test
    - 我不喜欢利用 `settings.py` 来修改 Spider 设置，而是使用每个 Spider 的 `custom_settings` 来配置。就第一次写的时候麻烦点，要复制粘贴，但可读性强，不会因为忘记而出错


## `scrapy.cfg`

- Idea
	* 项目级 scrapy 配置
	* 常给第三方工具使用
	* `scrapy.cfg` 之于 [[scrapyd]]；`pyproject.toml` 之于 [[isort]]

- Examples
    * [[scrapyd]]

- API
    - [[INI|INI format]]
    - `[settings]`
        - `default = <project_name>.settings`
            - 指定默认设置文件（模块）
