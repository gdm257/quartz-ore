---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Network/Implement__/DB/Client
  - flag/LANGUAGE/PostgreSQL
---

- Idea
    - Web-based [[PostgreSQL]] client

- Pro
    - Lightweight
        - [[Go]] backend
    - Fast
        - [[pgAdmin]] 很吃性能，不适合在服务器运行
        - [[pgweb]] 弥补了该空缺

- Con
    - Less features
        - 功能比不过 [[pgAdmin]]，只能说勉强用用
    - Unsafe
        - pgweb server 自身其实会作为 [[PostgreSQL]] client 去连接数据库，然后将 seesion 可视化到 web
        - Session 存在于 pgweb 与 [[PostgreSQL|postgres]] 之间，而非浏览器与 pgweb 之间。因此换个浏览器也能操作这个 session
        - pgweb 默认没有认证，因此千万别向公网开放 pgweb
