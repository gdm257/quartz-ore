---
tags:
- Label/Industry-工业科学/IT/APP/DockerBuilder
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Layer
- Label/Industry-工业科学/IT/APP/Plugin/Docker
---

[krallin/tini: A tiny but valid `init` for containers](https://github.com/krallin/tini)

[dolt/docker at main · dolthub/dolt](https://github.com/dolthub/dolt/blob/main/docker/Dockerfile)

[What is advantage of Tini? · Issue #8 · krallin/tini](https://github.com/krallin/tini/issues/8)


- Description
    - 为什么不直接运行可执行文件，而是用 Tini 来运行？
    - Tini 能避免僵尸进程，因为避免了直接将真正要运行的进程作为 PID 1
    - Tini 支持 Docker 信号处理
    - `dolt` 的 Docker 镜像使用 `tini` 作为 `entrypoint`

- Usage
    - `tini [--] <command> [args]`
