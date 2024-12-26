---
tags:
    - Label/Industry-工业科学/IT/APP/Server/Self-hosted
    - flag/APP/Network
---

[基于Docker和MongoDB部署NodeBB论坛系统_nodebb docker_杨浦老苏的博客-CSDN博客](https://blog.csdn.net/wbsu2004/article/details/127841094)

[NodeBB/NodeBB: Node.js based forum software built for the modern web](https://github.com/NodeBB/NodeBB)

[Home | NodeBB | Your Community Forum Platform](https://nodebb.org/)

[Upgrading - NodeBB Documentation](https://docs.nodebb.org/configuring/upgrade/)



- Error
    - `There was an error connecting to your database. Please try again.`
        - 请提前创建好 MongoDB 数据库
        - [There was an error connecting to your database. Please try again. | NodeBB Community](https://community.nodebb.org/topic/14007/there-was-an-error-connecting-to-your-database-please-try-again/3)
    - `docker-compose restart nodebb` 要求重新安装
        - 官方看上去是把 `./config.json` 当临时文件了，有些字段如 `secret` 无法在下次启动时使用，非常操蛋
        - 好在重新 install 页面进行后，不会覆盖已有数据，就是每次启动容器都要重新安装（初始用户随便填，因为已经有了所以不会生效），非常麻烦
