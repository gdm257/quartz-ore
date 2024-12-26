---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Layer
---

## Vagrant

[Vagrant从使用到放弃再到掌握完全指南 · Jimmy Song](https://jimmysong.io/blog/vagrant-intro/)

[虚拟化容器云计算系列文章 | 骏马金龙](https://www.junmajinlong.com/virtual/index/)


> Vagrant是用来管理虚拟机的，如VirtualBox、VMware、AWS等，主要好处是可以提供一个可配置、可移植和复用的软件环境，可以使用shell、chef、puppet等工具部署。所以vagrant不能单独使用，如果你用它来管理自己的开发环境的话，必须在自己的电脑里安装了虚拟机软件，我使用的是virtualbox。
>
> Vagrant提供一个命令行工具`vagrant`，通过这个命令行工具可以直接启动一个虚拟机，当然你需要提前定义一个Vagrantfile文件，这有点类似Dockerfile之于docker了。
>
> 跟docker类比这来看vagrant就比较好理解了，vagrant也是用来提供一致性环境的，vagrant本身也提供一个镜像源，使用`vagrant init hashicorp/precise64`就可以初始化一个Ubuntu 12.04的镜像。

看上去像是「Vagrant 把 VB/VM 里的 Guest OS 当作的 Image（类似 Docker Image），Vagrant 自己则负责管理这些 Image，类似 Docker」