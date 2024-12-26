---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/Web/Crawler
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: feapder[all]
---

## Brief

- References
    - [feapder官方文档|feapder-document](https://feapder.com/#/)
    - [Boris-code/feapder: 🚀🚀🚀feapder is an easy to use, powerful crawler framework | feapder是一款上手简单，功能强大的Python爬虫框架。内置AirSpider、Spider、TaskSpider、BatchSpider四种爬虫解决不同场景的需求。且支持断点续爬、监控报警、浏览器渲染、海量数据去重等功能。更有功能强大的爬虫管理系统feaplat为其提供方便的部署及调度](https://github.com/Boris-code/feapder)

- Installation
    * `pip install feapder`
        * 不支持浏览器渲染、不支持基于内存去重、不支持入库mongo
    * `pip install "feapder[render]"`
        * 不支持基于内存去重、不支持入库mongo
    * `pip install feapder[all]`

- Idea
    - 爬虫框架，但自带 JS 解析、去重、入库、校验、重试、分布式、周期、警报

- Pro
    - 懒人福音，换 [[scrapy]] 一套下来非常繁琐
    - `UpdateItem` 概念很棒，现成的设计方案

- Con
    - **不支持 类似 [[scrapy]] 的 CrawlSPider**，需要自己实现 Links Extractor、Rules
    - 亲测发现，灵活性、扩展性都远不如 [[scrapy]]
    - web 管理系统免费版只能 20 任务，付费价格非常美丽。好在 lib/cli 可以随便跑
    - 唯有 `AirSpider` 不强制要求数据库，其他几个内置爬虫都要 redis 或其他数据库
    - ~~`AirSpider` 不支持去重。~~已支持

- Fundamentals
    - 

- Architecture
    - ![architecture](http://markdown-media.oss-cn-beijing.aliyuncs.com/2020/06/08/borisspider-1.png)


## CLI

```bash
feapder command
Usage:
    feapder <subcommand> [args]

Subcommands
    create

```


## Spider

### AirSpider

- Usage
    - `parse()`
        - 默认 callback 的解析函数，同 [[scrapy]]
        - parser 中支持下发新任务，写法与start_requests一致，只需要`yield feapder.Request`
