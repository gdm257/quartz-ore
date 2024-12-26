---
tags:
- flag/License/GPL
- flag/Platform/Linux独占
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
---

## Brief

- References
    - [最新1Panel话题 - 社区论坛 - FIT2CLOUD 飞致云](https://bbs.fit2cloud.com/c/1p/7)

- Installation
    - [okxlin/docker-1panel: Docker方式运行的1Panel；1Panel running in Docker](https://github.com/okxlin/docker-1panel)

- Dependencies

- Edition

- Idea

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API
    - 非常标准的 [[Java|Java]] 那一套分层架构，但是简洁易懂
        - frontend
            - 
        - backend
            - cli
            - global init
            - router
            - dto
            - service
            - repo
            - model
    - Main
        1. cobra cli handler
        2. server entry function
        3. routers function
        4. url handler
            - 接收 `gin.Context`
            - 唯一目的是完成 Context 的响应
                - 流程如下
                - 声明 dto 对象
                - 将 dto 传递给 service 实例，让其完成 dto 填充
                    - 1panel 的处理：service 的实例是在 cli handler 阶段就统一初始化了，毕竟 [[Go|Go]] 是静态语言，跟 [[Java|Java]] beans 同理。[[Python|Python]] 就没必要
                - 使用通用工具函数，将 dto 封装（或处理）为最终响应 `dto.Response`
            - `dto.Response`
                - 所有业务 dto（JSON）最终会被封装为 `dto.Response`，然后响应给对应 Context
                - 简单的 Context 可能不需要专门的业务 dto，那就别强行 dto，例如单个变量值直接封装进 `dto.Response`，就可以了
            - `dto.XxxBase`
                - i.e. dataclass/JSON
                - handler 专用，handler 拿到就能直接用，一个通用方法完成响应，不需要做任何额外处理，或者只进行最简单的处理
        5. service interface
            - **想方设法创建 dto 对象并填充字段**
            - BLL 的对外接口
            - service interface 方法的骨架
            - 方法不接收 `ctx` (context)，`ctx` 不应该传入 BLL
                - 当然也不绝对，1panel 也经常传 `ctx` 给 service
            - 形参不用搞抽象，缺什么直接签名里加个参数

- Mobile

- DSL

- Shortcuts

- Philosophy

- Objects

- Fundamentals

- Architecture

- Pro

- Con

- Test
    - 如果只是将 [[1Panel]] 用作一个 [[Docker]] 镜像，大部分功能其实对我并无大用，唯一有用的是「定时任务」，一定程度上代替「青龙」，且资源占用低，对低配机器友好
    - 如果 [[1Panel]] 安装在宿主机，就相当于一个开源版「宝塔」，且扩展性更高，简单的可以配置 [[Docker]]、数据库、网站、证书、终端这些 Client 性质的，高级的可以配置 Service、iptables/ufw、fail2ban。对于熟练的运维来说，后者的灵活性更具吸引力。但我是个容器一把梭的人，对于 Host，最好除了 [[SSH]]、[[Docker]]、Agent 什么都别装，甚至 Agent 都最好用 [[ansible]] 来消除并统一调配

- Alternatives

- Description
