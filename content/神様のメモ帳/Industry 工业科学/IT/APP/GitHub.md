---
tags:
  - flag/License/Freeware
  - Label/Industry-工业科学/IT/APP/Server/Service
frontmatter-as-page:
  - github
  - github-action
  - github-topics
homepage: https://github.com
---

## Brief

- References
    - [git - GitHub 的分支保护一般要做哪些处理？ - SegmentFault 思否](https://segmentfault.com/q/1010000043536709)
    - [优雅地修改他人贡献的 Pull Request | Liuyib's Blog](https://liuyib.github.io/2020/09/19/add-commits-to-others-pr/)
    - [Git 如何同步上游分支代码? - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000023643843)
    - [Naereen/badges: :pencil: Markdown code for lots of small badges :pushpin: (shields.io, forthebadge.com etc) :sunglasses:. Contributions are welcome! Please add yours!](https://github.com/Naereen/badges)
    - [anuraghazra/github-readme-stats: :zap: Dynamically generated stats for your github readmes](https://github.com/anuraghazra/github-readme-stats)
    - [lowlighter/metrics: 📊 An infographics generator with 30+ plugins and 300+ options to display stats about your GitHub account and render them as SVG, Markdown, PDF or JSON!](https://github.com/lowlighter/metrics)
    - [在 GitHub 上玩转开源项目的 Code Review - DevStream Blog](https://blog.devstream.io/posts/how-to-code-review-zh/)
    - [如何参与开源项目 - 细说 GitHub 上的 PR 全过程 - DevStream Blog](https://blog.devstream.io/posts/open-a-pr-in-github/)
    - [Deploy your Astro Site | Docs](https://docs.astro.build/en/guides/deploy/)

- Web
    - `https://raw.githubusercontent.com/<user>/<repo>/<branch>/<README.md>`
    - `https://github.com/<user>/<repo>/blob/<commit>/<package.json>#L<321>`

- Limits
    - 100 MB/file
    - 5 GB/repo
    - 1 GB/mo for [[git]] LFS
    - [About storage and bandwidth usage - GitHub Docs](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-storage-and-bandwidth-usage)

## Syntax

- Issue
    - Close issues/PRs by "commit message" or PR
        - 参考 PR 创建界面上的 Development 说明，使用 keyword 来关联 issues/PRs，并在 Push/Merge 后触发关闭对应 issues/PRs
        - 也可以先创建 PR，然后再手动关联
        - `fix #123`
        - `fixes #123`
        - `fixed #123`
        - `close #123`
        - `closes #123`
        - `closed #123`
        - `resolve #123`
        - `resolves #123`
        - `resolved #123`
        - `Resolves #10, resolves #123, resolves octo-org/octo-repo#100`
        - [Linking a pull request to an issue - GitHub Docs](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
        - [【04】在 PR 中关闭 issue - 魔芋铃 - 博客园](https://www.cnblogs.com/moyuling/p/8963025.html)

## Configuration

### GitHub Actions

- Configuration
    - [Workflow syntax for GitHub Actions - GitHub Docs](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

- Ecosystem
    - [GitHub Marketplace · Actions to improve your workflow](https://github.com/marketplace?type=actions)

- Layout
    - DEFAULT branch
        - `.github/`
            - `workflows/`
                - `<foo_bar>.yml`
            - `ISSUE_TEMPLATE/`
                - `<foo-bar>.yml`
            - `pull_request_template.md`
        - In general, Github Actions are repo-scoped, not branch-scoped. So the best practice is saving action files in default branch

### GitHub 签名认证

1. 生成 GPG 密钥对（主密钥对），邮箱必须与 GitHub 账号的邮箱一致
2. 如果用主密钥进行签名，则无需生成子密钥。如果要用子密钥进行签名，则需要生成子密钥
3. 上传主公钥+子公钥到 GitHub
4. commit 时，使用主密钥或子密钥签名，并且指定 commiter email 为 GitHub 账号的邮箱
5. git push
6. GitHub 查看提交记录，会显示 Verified 标识

「邮箱保护」与「commit 认证」相冲突，这也太恶心了吧。理论上完全没必要暴露邮箱，签名是否可信，完全取决于 commit 的 GPG 公钥是否与用户上传的公钥一致，关邮箱什么事？

所以，请用 SSH 签名，而不是 GPG 签名。
