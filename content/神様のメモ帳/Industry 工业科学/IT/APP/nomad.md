---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/DevOps/CD
github: hashicorp/nomad
scoop: nomad
brew: nomad
envvars:
  - NOMAD_ADDR
commands:
  - nomad
---

- Alternatives
    - [[k8s]]
    - [[Docker Swarm]]
        - [[nomad]] 总体而言跟 Docker Swarm 其实差不多
        - [[nomad]] 拥有更多的更新策略，而不是简单的 run
        - [[nomad]] 对 stateful 本质跟 Docker Swarm 一样
        - [[nomad]] 不仅支持 container，还支持 binary/cron

- Ecosystem
    - [multani/docker-nomad](https://github.com/multani/docker-nomad)
    - [ansible-community/ansible-nomad](https://github.com/ansible-community/ansible-nomad)

- Pro
    - Support easy to deploy
        - 搭建难度相当低，装个 command，运行个 subcommand 就完事
    - Support dynamic persistent data by volume plugin
    - Support [[GPU]]
    - Support legacy applications (e.g. PHP, Python)
    - Support [[Windows]] installation

- Con
    - NOT Support Stateful
        - 有状态数据的一致性、扩展性、延迟、冗余之间的冲突，这是个世界性难题，并非某个软件/框架能解决的
        - 目前无解，世界加钱可及
        - [[nomad]] 还是提供了 Ephemeral disks，目标是让小容量数据自动在 hosts 之间迁移。但缺少冗余，单节点故障会导致数据丢失，并且仍不支持水平扩展
        - [Considerations for Stateful Workloads | Nomad | HashiCorp Developer](https://developer.hashicorp.com/nomad/docs/operations/stateful-workloads)
    - 资源占用高
        - 最小 2C8G
        - [Nomad reference architecture | Nomad | HashiCorp Developer](https://developer.hashicorp.com/nomad/tutorials/enterprise/production-reference-architecture-vm-with-consul#nomad-servers)
