---
tags:
  - Label/Industry-工业科学/IT/APP/Plugin/Docker
  - flag/APP/Layer
docker: containrrr/watchtower
github: containrrr/watchtower
docker-labels:
- com.centurylinklabs.watchtower.enable
---

- References
    - [Arguments - Watchtower](https://containrrr.dev/watchtower/arguments/)

- Examples
    - `com.centurylinklabs.watchtower.enable=true`

- Idea
    - 自动更新 [[Docker|Docker]] 镜像并重启容器

- Description
    - watchtower 默认 只检查运行的容器
    - watchtower 默认 24h (86400s) 检查一次
    - watchtower 支持 自动自我更新（self update）
        - [Is there way to update watchtower container itself? · containrrr/watchtower · Discussion #1157](https://github.com/containrrr/watchtower/discussions/1157)
