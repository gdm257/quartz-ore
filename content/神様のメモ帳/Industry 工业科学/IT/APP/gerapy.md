---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Network/Implement__/CrawlerPlatform
github: Gerapy/Gerapy
pip: gerapy
---

- Idea
    - A web-based [[scrapy]] crawler platform

- Architecture
    - [[gerapy]]
        - Manage projects, clients, tasks etc
    - Projects
        - Every project is a [[scrapy]] project
        - Project will be packing as Egg file and upload to client
    - Clients
        - Every client is a [[scrapyd]] server
        - Client is the worker to run [[scrapy]] spiders
    - Tasks
        - A task is the way to run project(s) by client(s) with trigger such as [[cron|crontab]]

- Test
    - Projects
        - Python 依赖问题？
            - 在 Docker Hub 看了 scrapyd 的镜像，发现需要挂载 python dist-packages 到 container 里
            - 也就是说，Python 依赖必须在 [[scrapyd]] 中安装
            - 问题来了，[[gerapy]] 环境需要安装 Python 依赖吗？
            - [[gerapy]] 使用 Scrapyd-client 来打包为 Egg 包，其底层是 [[setuptools]]
        - 如何调用 splash？
            - JS 解析显然是在 [[scrapyd]] 执行时发生，[[gerapy]] 只负责发送任务
            - 安装 splash 库就好
