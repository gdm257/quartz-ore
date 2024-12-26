---
tags:
  - flag/License/BSD
  - flag/LANGUAGE/Go
  - flag/Library/APILayer/Implement__/Web/SSR-Stateful-Framework
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: kataras/iris
---

- Alternatives
    - [[Fiber]]

- Idea
    - 最朴实、最全功能的 web framework

- Pro
    - 最朴实 web framework
        - [[kratos]] 能把一个 callback 抽象为 service + usecase + repo interface + repo impl，之间的调用还要通过 [[Dependency Inject|DI]] 框架 wire 完成
        - [[iris]] 只有最最原始的的 callback function，不进行任何抽象，相当于 [[Django]] FBV（Function-Based View）
    - 功能最全 web framework
        - 看看官方的 feature list，绝对是 web frameworks 里最全的
        - H2/SSR Template/CSR/WS/Auto-HTTPS/i18n/Validation/DI/gRPC/WebDAV/Middlewares/Session/JWT/CORS/Auth/Ratelimit/Cache/...
        - 功能堆砌，但用法简单直接

- Con
    - 没有任何抽象，和不用框架差不多，有的只是非常多实用功能
