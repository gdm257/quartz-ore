---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Layer/k8s/Operator/DB
github: cloudnative-pg/cloudnative-pg
apiVersions:
  - postgresql.cnpg.io/v1
CRD:
  - Cluster
  - ImageCatalog
  - ClusterImageCatalog
  - Pooler
  - Backup
  - ScheduledBackup
k8s-node-labels:
  - node-role.kubernetes.io/postgres
namespaces:
  - cnpg-system
services:
  - cnpg-webhook-service
pg-extensions:
  - pgaudit
  - auto_explain
  - pg_stat_statements
  - pg_failover_slots
---

- Examples
    - [Examples - CloudNativePG v1.24](https://cloudnative-pg.io/documentation/current/samples/)

- Alternatives
    - [zalando/postgres-operator](https://github.com/zalando/postgres-operator)
        - Support Web UI
    - [CrunchyData/postgres-operator](https://github.com/CrunchyData/postgres-operator)
        - 性能要求较高，集成许多第三方应用，例如 [[pgAdmin]]
        - 这两个方案架构、原理、效果几乎一模一样
