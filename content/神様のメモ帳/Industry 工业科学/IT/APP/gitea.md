---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/DevOps/Git
---

## Brief

- References
    - [横向对比 Gitea 与其它 Git 托管工具 - Docs](https://docs.gitea.io/zh-cn/comparison/)
    - [Register as a Windows Service | Gitea Documentation](https://docs.gitea.com/installation/windows-service)

- Pro
    - 自建 git 托管服务器，只考虑 Gitea/GitLab。~~GitLab 相比 Gitea 最大的优势就是支持 CI/CD~~，Gitea 已兼容 GitHub CI 的配置文件，能直接跑。但 GitLab 资源占用大的恐怖，十几G起步，别说服务器，跑在我的笔记本上都嫌重。

- Test
    - ~~搭建起来非常省心，没什么需要配置的。~~
    - gitea 内存最少也有 150 MB，至少在我的服务器算是最高的了，足足是第二占内存的 mysql5 的两倍。
    - gitea 对 MySQL 的支持太操蛋了，用 MySQL 5.7 跑了一段时间，跑着跑着就再也无法连上数据库了，有 issue 说是 MySQL 版本问题……反正我是不敢再用 MySQL 了，直接 SQLite 一把梭。
    - 更新后 SSH 不能用了，弄了几小时，发现是内置的 SSH Server 变成默认关闭了，应该 `[server] - START_SSH_SERVER = true`
    - SSH/GPG Key Verify 失败
        - 大概率是 [[PowerShell|PowerShell]] [[cmd|cmd.exe]] 管道有问题，不是 as-is 字节流
        - 请用 [[Bash|Bash]]
        - [Gitea unable to remember or use ssh keys. · Issue #20078 · go-gitea/gitea](https://github.com/go-gitea/gitea/issues/20078)
    - PR 算法有问题
        - 强烈推荐使用 `fast-forward` 来处理 PR，否则 merge commit 会反复在原分支与 fork 分支来回刷

## Fundamentals

- Architecture
    - Model
        - [[xorm]]
    - View
        - ~~Pure SPA~~
        - ~~SPA + SSR~~
        - SSR
            - [[HTML]] by [[Go http|http/template]] in `templates/`
                - JS
                    - [[Vanilla JS]] by [[webpack]] in `web_src/js/`
                    - [[jQuery]] in [[Fomantic-UI]]
                    - 不同 templates 可能引入不同 JS
                - SSR Components
                    - [[htmx]] in `templates/`
                - CSR Components
                    - [[Fomantic-UI]]
                    - [[vue]] in `web_src/js/components/`
                    - 不同 templates 可能引入不同 JS
                - CSS
                    - [[CSS]] by [[webpack]] in `web_src/css/`
                    - [[Tailwind CSS]]
                    - 不同 templates 可能引入不同 CSS

- Philosophy
    - [[vue]] + [[Vanilla JS]]
    - [[Fomantic-UI]] with [[jQuery]]
    - [[htmx]] without `hx-on` for simple component
    - [[Vanilla JS]]
    - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
    - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
