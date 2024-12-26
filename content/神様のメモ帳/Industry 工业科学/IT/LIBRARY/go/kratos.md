---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Go
  - flag/Library/APILayer/Implement__/Web/Microservice_Framework
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: go-kratos/kratos
go: github.com/go-kratos/kratos/cmd/kratos/v2@latest
---

- Idea
    - MICROSERVICES Framework
    - MICROSERVICES Framework
    - MICROSERVICES Framework
    - 单体 web 请绕道
    - 单体 web 请绕道
    - 单体 web 请绕道

- Pro
    - 自带 Swagger API 及其 UI
    - 像 [[go-zero]] 一样生成 [[Protobuf]]
    - Support [[Dependency Inject|DI]]
        - [Wire 依赖注入 | Kratos](https://go-kratos.dev/docs/guide/wire)
    - Support [[WebSocket]]

- Con
    - 全面使用 [[Dependency Inject|DI]]、[[IoC]]
        - 依赖注入
            - server/api/service/biz(logic)/data 部分解耦，由第三方依赖注入库 wire 来管理与调用
        - 控制反转
            - api/handler 不显式调用 service，而是 service 反向引入 api/handler 中的 interface
            - 这要求你完全掌握 [[Dependency Inject|DI]] 及其实现，否则根本看不懂代码、不会写代码
        - 如果你喜欢 [[Dependency Inject|DI]]，[[kratos]] 就是简单的
        - 如果你讨厌 [[Dependency Inject|DI]]，[[kratos]] 就是复杂的
    - Microservice
        - [[kratos]] 自我定位是 microservice framework，就是为了复杂的微服务项目而生的，用来做 web 不是不行，会很复杂、抽象，而且只是简单的前后端分离 web，这些成本都是不必要的
