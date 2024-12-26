---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Layer/PaaS
github: tsuru/tsuru
commands:
  - tsuru
version-k8s:
  - "1.20"
files:
  - tsuru.yaml
  - tsuru.yml
  - requirements.apt
  - requirements.txt
  - Procfile
  - .tsuruignore
---

- Alternatives
    - [[tsuru]] is similar to [[dokku]]

- Objects
    - Platforms
        - Platforms are [[Docker]] images that are used to deploy your application code on [[tsuru]]
            - the [deploy-agent](http://github.com/tsuru/deploy-agent) to be installed
            - tsuru requires only a single executable for platforms: `/var/lib/tsuru/deploy` in image
                - This script will receive two parameters
                - the deployment type (which is always "archive" in latest release)
                - the URL for the archive
            - [base-platform](https://github.com/tsuru/base-platform). This platform provides a base deployment script, which handles package downloading and extraction in proper path, along with operating system package management. For more details, check the README of base-platform.
        - [[tsuru]] does not come with any platform, so you should use `tsuru` cli to add some platforms
        - [tsuru/platforms](https://github.com/tsuru/platforms)
    - App
        - An app is an usage instance of a platform
    - Units
        - An app can *deploy* multiple units. Imagine that a [[k8s]] `Pod` contains many containers
        - An unit can be a [[Docker]] image [[URI]], file or directory that follows specific structure supported by platform([[Python]]/[[Node.js]]/[[Java]]/Heroku Buildpacks/External Service etc)
    - Pool
        - Pool is used by provisioners to group nodes
        - default pool
        - public pool
        - team pool
    - Volumes
        - Volumes allow applications running on tsuru to use external storage volumes mounted on their filesystem
    - Deps
        - In tsuru, an application can have two kinds of dependencies
        - Operating system dependencies e.g. [[apt-get]]/[[yum]]
        - Platform dependencies e.g. [[npm]]/[[pip]]

- Con
    - Language-based deployment
        - [[tsuru]] doesn't focus on [[k8s]] objects
        - [[tsuru]] supports language environment with dependencies of application
    - 侵入式
        - [[tsuru]] 缺少 [[rainbond]] plugins / [[kubevela]] traits 的那种非侵入式设计
    - Old
        - 事实上 [[tsuru]] 是个超过十年的开源项目，2016 年就发布了 1.0 版本，目前最新 1.23 虽然还在更，但已经几年什么功能变化了。加上零生态，事实上已经没有了实际使用价值
    - 玩具
        - 只具备最基本的 PaaS 设计，不适合生产环境，个人站长用着也不顺手
        - 只适合开发者快速测试代码，platform 说白了就是个 `Dockerfile`，可以快速在 [[k8s]] 集群生成 [[Docker]] image 来运行代码

- Pro
    - Simple
        - 简单易懂，懂 `Dockerfile` 就能用，适合开发者，还附赠 PaaS 功能（路由、存储）
    - No [[Dockerfile]]/[[k8s]] manifests
        - [[tsuru]] integrates many languages' envoronment

- Dependencies
    - [[Docker]] or Podman
    - [[minikube]]
    - [[Go]]
    - [[yq]]
    - `PVC`
        - required by a [[MongoDB]] server

- Fundamentals
    - [[k8s]] based
