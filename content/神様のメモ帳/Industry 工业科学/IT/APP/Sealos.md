---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - Label/Industry-工业科学/IT/APP/Server/Service
  - flag/APP/Layer/PaaS
---

- Idea
    - [[Sealos]] 与其说是 [[k8s]] 集群创建工具、管理工具，不如说是基于 [[k8s]] 的 PaaS
    - [[Sealos]] 对标的是 KubeSphere/[[dokku]]/[[coolify]]，而不是 [[k3s]]/kind

- Con
    - ONLY Support [[docker-compose]] style
        - [[Sealos]] 本质上是照搬 [[docker-compose]] 的思维，无非就是 database、reverse proxy、volume、deploy 高度模板化、集成化、可视化
        - 但这完全无法灵活运用 [[k8s]] 数十种 kinds，[[Sealos]] webui 与 [[docker-compose|Compose file]] 也无力管理如此多变的场景，不然也不会出现 Kustomize/Helm/flux/argocd 这些模板化工具
        - [[Sealos]] webui 对清单文件的管理几乎没有额外设计，场景稍微复杂，还是得回归自定义模板的方式
