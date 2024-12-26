---
tags:
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Network
---

- References
    - [Container Deployment — pgAdmin 4 7.0 documentation](https://www.pgadmin.org/docs/pgadmin4/latest/container_deployment.html)

- Idea
    - 基于 Web 的 [[PostgreSQL]] 客户端

- Pro
    - web 体验极好

- Con
    - 性能极差
        - [[Python]] 写的，[[gunicorn]] 部署，单单打开网页都得跑满 1C CPU。2C 服务器分分钟跑崩

- Alternatives
    - pgweb
