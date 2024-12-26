---
tags:
- flag/License/AGPL
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/DevOps/Monitoring
---

## Brief

- Idea
    - Like Prometheus, but for logs
    - [[Prometheus]] 采集数据针对的是 Process/Application/OS
    - [[Loki]] 采集数据针对的是 logs

- Authors
    - [[Grafana]] team

- Pro
    - 支持 轻量，可独立部署无依赖

- Alternatives
    - ELK == [[Loki]] + [[Grafana]]

## Architecture

- Objects
    - Promtail
        - [[Prometheus]] 使用 Exporters 来采集指标
        - [[Loki]] 使用 Promtail 来采集日志
