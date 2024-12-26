---
tags:
- flag/License/Apache
- flag/LANGUAGE/PromQL
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/DevOps/Monitoring
github: prometheus/prometheus
docker: prom/prometheus
scoop: prometheus
---

## Brief

- Idea
    - 监控系统

- Users
    - 最流行的开源监控系统

- Con
    - 不支持 处理日志
        - [[Prometheus]] 通过 Exporters 收集数据，而绝大多数 Exporters 针对的是 Process（Application/System），做的工作都是 Integration（集成），而不是 Log File
        - 日志监控方案一般是 ELK，或者 [[Loki]] + [[Grafana]]

- Philosophy
    - Prometheus 是一个时序数据库
        - 从 Jobs/Exports 那里 pull 数据，保存为时序数据库。很像爬虫
        - Query by [[PromQL]]
    - Operational simplicity
        - No dependency on distributed storage; **single server nodes are autonomous**
    - Pull model for time series collection
    - **Multi-dimensional** data model
        - time series defined by metric name and set of key/value dimensions
    - Cloud Native
        - support [[k8s|Kubernetes]] service discovery
    - Operator Mode
        - e.g. CloudNative-pg

- References
    - [实战 Prometheus 搭建监控系统 - aneasystone's blog](https://www.aneasystone.com/archives/2018/11/prometheus-in-action.html)
    - [korfuri/django-prometheus: Export Django monitoring metrics for Prometheus.io](https://github.com/korfuri/django-prometheus)
    - [adinhodovic/django-mixin: Monitoring mixin for Django-prometheus. A set of Grafana dashboards and Prometheus rules for Django.](https://github.com/adinhodovic/django-mixin)
    - [OpenObserve | Open Source Observability Platform for Logs, Metrics, Traces, and More – Your Ultimate Dashboard for Alerts and Insights](https://openobserve.ai/)
    - [cloudnative-pg/docs/src/quickstart.md at main · cloudnative-pg/cloudnative-pg](https://github.com/cloudnative-pg/cloudnative-pg/blob/main/docs/src/quickstart.md)
    - [Prometheus | OpenCost — open source cost monitoring for cloud native environments](https://www.opencost.io/docs/installation/prometheus)
    - [prometheus-community/helm-charts: Prometheus community Helm charts](https://github.com/prometheus-community/helm-charts)
    - [prometheus-operator/kube-prometheus: Use Prometheus to monitor Kubernetes and applications running on Kubernetes](https://github.com/prometheus-operator/kube-prometheus)
        - ServiceMonitorSpec 下的 namespaceSelector 可以现在允许发现 Endpoints 对象的命名空间。要发现所有命名空间下的目标，namespaceSelector 必须为空。

## Configuration

- Architecture
    - `global`
        - Misc global configs
    - `scrape_configs`
        - specify targets
    - `altering`
        - configure Alertmanager
    - `rule_files`
        - 告警规则

## Architecture

## Web

- Graph Page
    - 使用 [[PromQL]] 来查询时序数据库
    - 一般用于简单调试，真正查看推荐用 [[Grafana]]

- Status Page
    - configuration viewer
