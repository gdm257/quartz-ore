---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- Label/Industry-工业科学/IT/APP/Command/TUI
- flag/APP/Text
---

## Brief

- References
    - [GoAccessWeb日志分析工具 | Escape](https://www.escapelife.site/posts/df48f637.html)

- Installation

- Dependencies

- Edition

- Idea
    - Web logs 统计报告生成器

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI
    - [[caddy]]
        - `cat *.log | docker run --rm -i allinurl/goaccess -a -o html --tz Asia/Shanghai --double-decode --log-format CADDY - > report.html`
        - `unix_seconds_float` (default)
        - `unix_milli_float`
            - `--time-format %*`
        - `unix_nano`
            - `--time-format %n`
        - `time_format iso8601`
            - `--time-format %Y-%m-%dT%H:%M:%S`
            - `--time-format %Y-%m-%dT%H:%M:%S%z`
            - 可多次指定，先命中先生效
    

- Web

- API

- Mobile

- DSL

- Shortcuts

- Philosophy
    * GoAccess 其实已完全体现出了 ELK 的核心，完全可看作轻量的 ELK.
    * GoAccess 功能和灵活性不如 ELK，但胜在开箱即用.
    - [日志分析方法概述 - 知乎](https://zhuanlan.zhihu.com/p/140080619)
    - [日志分析系列(一):介绍篇 - 知乎](https://zhuanlan.zhihu.com/p/98809991)
    - [日志，Agent,网络流量分析-性能监控的三大流派详解 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000022907012)

- Objects

- Fundamentals

- Architecture

- Pro

- Con

- Test

- Alternatives

- Description

