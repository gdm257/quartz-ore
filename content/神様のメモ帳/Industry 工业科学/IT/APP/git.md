---
tags:
  - flag/License/GPL
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/Git
frontmatter-as-page:
  - git-branch
  - git-commit
scoop: git
ugly-cli: yes
files:
  - .gitignore
  - .git/
---

## Brief

- References
    - [Pro Git 中文版（第二版）](https://www.progit.cn/#_git_internals)
    - [progit/progit2: Pro Git 2nd Edition](https://github.com/progit/progit2)
    - [bingohuang/progit2-gitbook: Pro Gi­t 第二版 ­简体中文](https://github.com/bingohuang/progit2-gitbook)
    - [initialcommit-com/git-sim](https://github.com/initialcommit-com/git-sim)

    - [Git - Reference](https://git-scm.com/docs)

    - [521xueweihan/git-tips: :trollface:Git的奇技淫巧](https://github.com/521xueweihan/git-tips)

- Fundamentals
    - [Inside .git](https://jvns.ca/blog/2024/01/26/inside-git/)

- Version
    - Git 从 2.34 开始支持使用 SSH 签名
        - [Windows 上使用 SSH 签名 Git 提交记录](https://dev.tobychung.com/signing-git-commits-with-ssh-keys)

- Alternatives
    - 推荐使用 [[bit]] 全面代替 `git` 命令
    - `git log` [[git-branchless]] [[lazygit]]
    - `git reflog` [[git-branchless]] [[lazygit]]

## Configuration

- References
    - [Popular git config options](https://jvns.ca/blog/2024/02/16/popular-git-config-options/)

- Configuration
    * `~/.gitconfig` 用户级 Git 配置
    * `.git/config` 仓库级 Git 配置
    - Git 配置是 [[INI]] 文件

### `.git/config`

```ini
[user]
name = name
email = user@domain.com
signingKey = XXXXXX
editor = micro

[init]
defaultBranch = main
    * 新仓库的默认分支名

[core]
longpath = true
quotepath = false
autocrlf = input
    * false 允许添加 CRLF
safecrlf = true

[commit]
gpgsign = true

[alias]
st = status
co = commit
br = branch
sw = switch
re = reset
ck = checkout

```

### `git config`

[Git - git-config Documentation](https://git-scm.com/docs/git-config)

[linux - git submodule update failed with 'fatal: detected dubious ownership in repository at' - Stack Overflow](https://stackoverflow.com/questions/72978485/git-submodule-update-failed-with-fatal-detected-dubious-ownership-in-repositor)

[git status 显示中文和解决中文乱码](https://blog.csdn.net/u012145252/article/details/81775362)

[8.1.3. 换行符问题 — GotGit](https://www.worldhello.net/gotgit/08-git-misc/040-eol.html)

[Git多个用户ID适配 | Escape](https://www.escapelife.site/posts/5ef7b337.html)

[Git - 配置 Git](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git)

[amgit/01-chapter7.markdown at master · AllenDowney/amgit](https://github.com/AllenDowney/amgit/blob/master/zh/07-customizing-git/01-chapter7.markdown)

[Git - 签署工作](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E7%AD%BE%E7%BD%B2%E5%B7%A5%E4%BD%9C)

[Git - 凭证存储](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%87%AD%E8%AF%81%E5%AD%98%E5%82%A8)

[Git - Git 钩子](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)

- 尽量不要使用真实邮箱，如果你的 GitHub 账号设置了邮箱隐私保护，那么所有 GitHub 账号相关邮箱的 commits 都无法 push 到 GitHub
- 只要你PGP的uid包含 git config 中的邮箱并在 git commit 命令添加 flag `-S` ，即可签名 commit。如果 commit 报错 gpg 密钥不存在，大概率是指定错了密钥 id，请手动指定 `user.signingkey`

```git

git config --local user.name "gdm257"
git config --local user.email "257@gdm.anonaddy.com"

git config commit.gpgsign true
git config user.signingkey 323FE4792C0B2033 # 使用哪个公钥进行签名
git config gpg.program "c:\\path\\to\\gpg" # 默认为 gpg


// 全局配置
git config --global -e
git config --global -e    # 编辑 ~/.gitconfig
git config --global user.name "gdm257"
git config --global user.email "gdm257@gdm257"
#以上信息纯粹用来做标记，与 GitHub 账号半毛钱关系也没有

git config --global init.defaultBranch main    # 默认分支名
git config --global core.autocrlf input    # 拒绝 CRLF 的前提
git config --global core.safecrlf true    # 拒绝 CRLF
git config --global core.quotepath false
git config --global gui.encoding utf-8            # 图形界面编码
git config --global i18n.commit.encoding utf-8    # 提交信息编码
git config --global i18n.logoutputencoding utf-8    # 输出 log 编码
$ export LESSCHARSET=utf-8

git config --global alias.st status #git st，配置别名
git config --global alias.ck checkout #git ck
git config --global alias.re reset #git re
git config --global alias.co commit #git co
git config --global alias.sw switch
git config --global alias.br="branch" #git br
git config --global alias.count2="rev-list --all --count"
git config --global alias.count="log | grep "^Author: " | awk '{print $2}' | sort | uniq -c | sort -k1,1nr"




// 中文乱码

1. 「git bash」：Options->Text->Locale改为zh_CN，Character set改为UTF-8
2. 「git bash」：
git config --global core.quotepath false
git config --global gui.encoding utf-8            # 图形界面编码
git config --global i18n.commit.encoding utf-8    # 提交信息编码
git config --global i18n.logoutputencoding utf-8    # 输出 log 编码
$ export LESSCHARSET=utf-8
最后一条命令是因为 git log 默认使用 less 分页，所以需要 bash 对 less 命令进行 utf-8 编码。
或者第 2 步直接修改 ~/.gitconfig 文件也可以达到效果



//  换行符我选 LF

git config --global core.autocrlf {input,true,false}
input: 提交时转换为LF，检出时不转换
true: 提交时转换为LF，检出时（checkout）转换为CRLF
false: 提交检出均不转换

#在 windows 操作系统中默认在检出代码时将 LF 转换为 CRLF,而在提交的时候再转换为 LF，但是看似完美的解决方案在 中文环境 中却失效了
#局部 --local



git config --global core.safecrlf {true,false,warn}
true: 拒绝提交包含混合换行符的文件
false: 允许提交包含混合换行符的文件
warn: 提交包含混合换行符的文件时给出警告

Git版本2.15.1，如果设置core.autocrlf=false，那么core.safecrlf设置不起任何作用，官方文档说明，safecrlf也是只在autocrlf激活时才起作用（core.safecrlf： If true, makes Git check if converting CRLF is reversible when end-of-line conversion is active）。经过验证，在windows上创建LF和CRLF混合的文本文件，提交和签出时设置safecrlf=true都无任何提示



git config --global core.eol native
# eol: 设置工作目录中文件的统一换行符，有三个值 lf, crlf 和 native（默认，同操作系统）

问题具体表现在，如果你手头的这个文件是一个 包含中文字符的 UTF-8 文件，那么这个“换行符自动转换”功能 在提交时是不工作的（但签出时的转换处理没有问题）。我猜测可能这个功能模块在处理中文字符 + CRLF 这对组合时直接崩溃返回了。这可能还不是唯一的触发场景（毕竟我没有太多精力陪它玩），但光这一个坑就已经足够了。这是一个相当大的坑，Windows 下的中文开发者几乎都会中招。


```

## Data

### `.git/COMMIT_EDITMSG`

- References
    - [【Git】.git 文件夹探秘，理解 git 运作机制 - 掘金](https://juejin.cn/post/7021879992548065294)

- Idea
    - 文件是一个临时文件，**存储最后一次提交的信息内容**，`git commit -e` 命令之后打开的编辑器就是在编辑此文件，而你退出编辑器后，`git` 会把此文件内容写入 commit 记录

### `.git/HEAD`

- References
    - [【Git】.git 文件夹探秘，理解 git 运作机制 - 掘金](https://juejin.cn/post/7021879992548065294)

- Idea
    - HEAD 存储一个分支的 **ref**，可通过 [[cat]] 查看

- Data
    - the name of a branch
    - a commit id (detached HEAD state)

### `.gitignore`

[gitignore文件匹配规则_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000019725760)

- DSL
    - Patterns
        - `foo`
            - `/` not in pattern
            - end with
            - match files path and directory path end with `dist`
        - `/foo/bar` `foo/bar`
            - `/` in pattern
            - start with + end with
            - match the file path and directory path relative to `.gitignore`'s directory
        - `pattern/`
            - match directory instead of file
        - `!pattern` include files/directorys again that are ignored by preview patterns
        - `#` comment
    - Special characters
        - `*` match any length of characters except `/`
        - `**` match any length of characters
        - `?` match one character except `/`
        - `[a-zA-Z0-9_]` `[^foo]` similar to [[神様のメモ帳/Industry 工业科学/IT/LANGUAGE/RegExp|RegExp]]
        - case insensetive
        - `\!` `\#` escape to literal

### `.gitkeep`

- Fundamentals
    - `!.gitkeep` in `.gitignore`

- Examples
```ignore
!.gitkeep
!*/
!.gitignore
*
```

- Idea
    - `.gitignore` 过滤之后的空目录无法提交，用一个不忽略的空文件解决
    - `.gitkeep` 约定俗成的文件名，无特别之处，可改为其他

### `.gitattributes`

### Repo aka remote

[Git - 协议](https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E5%8D%8F%E8%AE%AE)

[Git远程操作详解 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2014/06/git_remote.html)


clone/fetch/pull/push etc 操作需要与远程仓库通信，git 支持的协议有 4 种：

1. Local Protocol `file://`
2. HTTP Protocol `http://`
    1. Dumb HTTP
    2. **Smart HTTP**
3. SSH Protocol `ssh://`
4. Git Protocol `git://`

```
本地 repo 根目录下免输入密码，
touch .git-credentials
vim .git-credentials
https://<username>:<password>@github.com
再
git config --local credential.helper store
```


一看就懂，`touch ~/.ssh/config`

测试是否成功 `ssh -T git@luo [-i ~/.ssh/id_rsa_arliya]`
Gitlab 为 `ssh -T git@gitlib.com`
局域网 `ssh -T git@192.168.1.222`

如果已经使用https协议克隆了，那么按照如下方法更改协议：
`git remote set-url origin git@github.com:yourusername/yourrepositoryname.git`

config 内容：

```ini
Host luo
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/luoyemengchen
Host github-arliya
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/arliya

Host github.com #主机别名，在本文件中、唯一、唯一！！！
    HostName github.com #服务器真实地址
    User smallajax@foxmail.com #用户名，本行可以省略
    PreferredAuthentications publickey
    IdentityFile /home/Workspace/ssh/id_rsa_github
Host gitlib.com
    HostName gitlib.com
    User smallajax@foxmail.com
    PreferredAuthentications publickey
    IdentityFile id_rsa_gitlib
Host oschina.com
    HostName oschina.com
    User smallajax@foxmail.com
    PreferredAuthentications publickey
    IdentityFile /D/Workspace/ssh/id_rsa_oschina
Host 192.168.1.222
    HostName 192.168.1.222
    User smallajax@foxmail.com
    PreferredAuthentications publickey
    IdentityFile /D/Workspace/ssh/id_rsa_oschina
```

### remote - git push always asks credentials

> [!tldr]
> `.git/config` -> `remote` -> `url` 由 `https://github.com/user/repo.git` 形式，改写为 `ssh://git@custom_name/user/repo.git` 形式
> `~/.ssh/config` 配置名为 `custom_name` 的 `Host`

```ini
Host custom_name
    HostName github.com
    User git
    IdentityFile /path/to/your/private/key
    IdentitiesOnly yes
```

- Fundamentals
    - 本质是因为 remote url 是 https 形式，push 走的 GitHub 网页 API，因此每次 push 都要求认证。
    - 将 `.git/config`-`remote`-`url` 改写成 ssh 格式，并在 `~/.ssh/config` 配置同名 `Host`，即可走 ssh 协议，自动完成认证。


## Fundamentals

[Git存储结构与实现 | 止息'幻想乡](https://zhangjk98.xyz/git-structure/)

[Git 内部原理 - Pro Git 中文版（第二版）](https://www.progit.cn/#_git_internals)

[amgit/01-chapter9.markdown at master · AllenDowney/amgit](https://github.com/AllenDowney/amgit/blob/master/zh/09-git-internals/01-chapter9.markdown)

[Git - 底层命令与上层命令](https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-Git-%E5%AF%B9%E8%B1%A1)

[Git基本原理介绍 | Escape](https://www.escapelife.site/posts/da89563c.html)

[深入理解 Git 底层实现原理 | 楚权的世界](http://chuquan.me/2022/05/21/understand-principle-of-git/)

[带你全面了解 Git 系列 01 - 深入 Git 原理_git_淼💦 淼_InfoQ写作社区](https://xie.infoq.cn/article/308a9fe53f0d7dc51283e4347)

[Git 基本原理介绍-爱代码爱编程](https://icode.best/i/10970043322045)

- Fundamentals
    - 「可操作对象」详见 Objects 小节
        - 各种「操作」，通常通过 git 的子命令实现
        - 「可操作对象」是「数据」，核心所在
        - 「操作」是「算法」，千变万化，以用为主
    - `Working Tree` `Stage` `HEAD` 可看作三个指针（或是 Branch），它们分别指向匿名的动态 commit
    - [图解Git](https://marklodato.github.io/visual-git-guide/index-zh-cn.html)

## CLI

### Brief

[图解Git - 神级教程！](http://marklodato.github.io/visual-git-guide/index-zh-cn.html)

[Git - 子模块](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%AD%90%E6%A8%A1%E5%9D%97)

[Git - 打包](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E6%89%93%E5%8C%85)

[Git - 底层命令与上层命令](https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-Git-%E5%AF%B9%E8%B1%A1)

[常用 Git 命令清单 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

[Git - Reference](https://git-scm.com/docs)

[我的Git学习笔记 | Escape](https://www.escapelife.site/posts/8f4661c4.html)

- CLI
    - `git [options] <subcommand> [args]`

初始化 用 init
下载 用 clone
配置 用 config
移动或重命名 用 mv
添加 用 add
提交 用 commit
贮藏 用 stash
恢复文件 用 restore
创建标签 用 tag
创建分支 用 branch
切换分支 用 switch
移动本地分支 用 reset
回滚上游分支 用 revert/reset
移动 HEAD 用 checkout
领先公共分支 用 rebase
修改公共分支 用 merge/cherry-pick
解决冲突 用 IDE/BeyondCompare
比较文件 用 BeyondCompare
添加远程仓库 用 remote
关联上游分支 用 branch
拉取上游分支更新 用 fetch/pull --rebase
推送 用 push
贡献代码到公共仓库 用 PR
领先公共分支 用 rebase
修改公共分支 用 merge/cherry-pick
查看历史 用 VSCode/SourceTree/IDE
搜索历史 用 grep
修改历史 用 rebase/filter-branch
推荐 checkout 只用来移动 HEAD；
推荐 reset 只用来移动分支；

tag 创建标签
branch 创建分支
switch 切换分支
reset 移动分支
checkout 移动 HEAD
merge 合并分支
cherry-pick 摘取分支
rebase 领先分支
note 注释补丁
worktree
prune
clean

- Fundamentals
    - 「子命令」可以「操作（CRUD）」「可操作实体」
        - E.g. `add` 实际是修改 Stage 这个实体，如果你把 Stage 当成一个指向匿名 commit 的 Branch 来看待的话

- 可操作实体
    - Files
        - Working Tree (Working Directory)
            - `init`
            - `submodule`
            - `status`
            - `diff`
            - `restore`
        - Stage (Index)
            - `init`
            - `add`
            - `rm`
            - `mv`
            - `status`
        - HEAD
            - `commit`
            - `status`
            - `init`
        - Stash
            - `stash`
            - `apply`
    - Snapshots
        - Commit
            - Create
                - `commit`
                - `revert`
                - `cherry-pick`
                - `reset`
                - `rebase`
                - `merge`
            - Read
                - `log`
                - `reflog`
                - `shortlog`
                - `whatchanged`
                - `show`
                - `ls-files`
                - `grep`
                - `archive`
                - `blame`
            - Update
                - `notes`
                - `filter-branch`
            - `fetch`
            - `pull`
            - `push`
            - Delete
                - `reset`
                - `checkout`
        - Branch
            - `reset`
            - `fetch`
            - `pull`
            - `push`
        - Tag
            - `tag`
            - `fetch`
            - `pull`
            - `push`
        - HEAD
            - `checkout`
            - `switch`
        - Remote
            - `remote`
            - `clone`
    - Tree
        - `worktree`
    - Config
        - `config`
    - 非实体
        - `help`


### clone

[git clone specific commit Code Example](https://iqcode.com/code/shell/git-clone-specific-commit)


`git clone xxx` 默认只克隆 HEAD 所在分支，即便用 `-b` 参数指定了其他分支，最终的本地仓库也只有 1 个分支。


```bash
大体积没什么好办法，下面的操作无法满足需求，那就没办法了

方法 1.
git clone --depth 1 URL    # 只 clone 最新 1 个 commit

方法 2.
git clone --shallow-since


```

#### 克隆or拉取 多个远程分支

[如何使用Git克隆GitHub仓库的所有分支_git 克隆所有分支_秦时明月之君临天下的博客-CSDN博客](https://blog.csdn.net/weixin_41287260/article/details/98987135)

[git 从远程仓库获取所有分支_git 获取远程仓库所有分支_红红火火恍恍惚惚会后悔的博客-CSDN博客](https://blog.csdn.net/wu1169668869/article/details/83345633)


> [!question]
> `git clone url` 只会拉取远程仓库的 `HEAD` 所在分支，但远程仓库通常会有多个分支，如果想拉取多个远程分支到本地仓库，该怎么办呢？

git 没有直接提供这项功能，只能自己想办法实现。写脚本吧。

- 思路
    1. `git branch -r` 获取所有远程分支名
    2. `git branch ` 在本地仓库批量创建同名分支
    3. `git branch` 指定新建分支的上游为远程仓库的同名分支

假设远程仓库名为 `origin`

```bash

echo "请手动执行生成的命令"

git branch -r \
| grep -v -- '->' \
| grep -v -- 'HEAD' \
| grep -v '^\s*$' \
| awk '{
        remote_name = "origin";
        remote_branch = gensub(/\s/, "", "g", $0);
        local_branch = gensub(remote_name "/", "", "g", $0);
        local_branch = gensub(/\s/, "", "g", local_branch);
        print "git", "branch", "--track", local_branch, remote_branch;
    }'

```


### commit

[Git - 签署工作](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E7%AD%BE%E7%BD%B2%E5%B7%A5%E4%BD%9C)

[Git签署工具使用 | Escape](https://www.escapelife.site/posts/d08d0a6f.html)

```
git commit
    -v --verbose
    -q --quiet

    -m --message <message>
    -S --gpg-sign[=<key_id>]
        * GPG 签名 commit
        * 可使用 git 配置来自动签名
            - [user] signingkey = <key_id>
            - [commit] gpg-sign = true
```

#### 1 次提交

[Git - 交互式暂存](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E8%B4%AE%E8%97%8F%E4%B8%8E%E6%B8%85%E7%90%86)

[Introduction to Test Driven Development (TDD)](http://agiledata.org/essays/tdd.html#:~:text=Test%2Ddriven%20development%20(TDD),Agile%20DBAs%20for%20database%20development.)


```git
// dir2index
git add <dir>
git add <file> [file] ... # dir to index
git add * #添加所有文件
git add . #添加所有文件
git rm <file> ...
git mv <file-oringin> <file-renamed>
#非法删除后可以用 git rm <file> 把删除弄进 index

// index2head
git commit -m "explain" # index to head
git commit --amend [-m "explain"] #修改最后一次提交の说明

// head2index
git reset #head2index（清空 index）
git reset -- files

// index2dir
git restore -- . #index2dir（智能覆盖）

// head 2 index&dir
git reset --hard <id> #移动当前 branch 到指定 commit，head 2 index&dir（回滚到指定 commit，智能覆盖）
git checkout <id> -- . #指定commit 2 dir&index（智能覆盖）
git checkout <id> -- files

// tag
git tag <tag>
git tag <tag> <id>
git tag -d <tag> #删除标签

// branch
git branch <name> #新建分支
git branch <name> <id> #在指定 commit 新建分支
git branch -m old new #重命名分支
git branch -d test #删除test分支
git branch -D test #强制删除test分支
git checkout -b <branch> #新建分支 + checkout 到分支

// move branch
git branch -f <branch> <id> #强制移动指定 branch 到指定 commit（head 没有指向指定 branch 时才能执行）
git reset --soft <id> #移动当前 branch 到指定 commit，无副作用
git reset --hard <id> #移动当前 branch 到指定 commit，head 2 index&dir（回滚到指定 commit，智能覆盖）
--mixed：reset HEAD and inde x。
--soft：reset o nly HEAD。
--hard：reset HEAD, index an d working tree。
--merge：reset HEAD, index an d working tree。
--keep：reset HEAD but keep local changes。

// move head
git branch -f <branch> HEAD && git checkout <branch> && git reset --soft <id> #单纯移动 head 而尽量少修改 dir（更智能）。需要借助 branch 间接实现，研究了老半天才弄出来
git checkout [--detach] <id> #移动 head，head 2 dir&index（智能覆盖）（慎用，最好只在 dir 干净时使用）

```

### cherry-pick

[我用Git摘樱桃 | Escape](https://www.escapelife.site/posts/e78c91ae.html)


### filter-branch

E.g. 历史 commit 有很多敏感信息，如密码，需要删除这些文件；
~~E.g. 想要修改历史 commit 的作者、message；~~（请用 rebase -i）



### restore

原来是git中的checkout命令承载了分支操作和文件恢复的部分功能，有点复杂，并且难以使用和学习，所以社区解决将这两部分功能拆分开，在git 2.23.0中引入了两个新的命令switch和restore用来取代checkout

可以看到restore提供checkout和reset两个命令才能提供的文件恢复能力，也提供了更好的语义

### stash

[Git - 贮藏与清理](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E8%B4%AE%E8%97%8F%E4%B8%8E%E6%B8%85%E7%90%86)


```bash

落：stash 可以看作用另类 branch。

总的来说，git stash命令的作用就是将目前还不想提交的但是已经修改的内容进行保存至堆栈中，后续可以在任意某个分支上恢复出堆栈中的内容。

git stash作用的范围包括工作区（dir）和暂存区（staged）中的内容，也就是说没有 commit 的内容都会保存至堆栈中。

由于疏忽，本应该在dev分支开发的内容，却在master上进行了开发，需要重新切回到dev分支上进行开发，可以用git stash将内容保存至堆栈中，切回到dev分支后，再次恢复内容即可。

正在dev分支上开发某个项目，这时项目中出现一个bug，需要紧急修复，但是正在开发的内容只是完成一半，还不想提交，这时可以用git stash命令将修改的内容保存至堆栈区，然后顺利切换到hotfix分支进行bug修复，修复完成后，再次切回到dev分支，从堆栈中恢复刚刚保存的内容。




```

### checkout

### sparse-checkout

### reset

#### 1 次回滚

```
只有 git reset 和 git checkout 命令才是真回滚。

git revert 的本质是「创建一个新 commit，但新 commit 的内容其实是取消以前的 commits」

git revert HEAD HEAD~1 HEAD~2    回滚最近 3 次 commits


```

### tag

- References
    - [语义化版本 2.0.0 | Semantic Versioning](https://semver.org/lang/zh-CN/)
    - [googleapis/release-please: generate release PRs based on the conventionalcommits.org spec](https://github.com/googleapis/release-please)


### worktree

大部分情况下，我们都只在 1 棵 worktree 工作，惟有 fetch pull push 才是在不同 worktree 之间工作

`git remote add origin luoyemengchen/rime257.git`
`git remote add <remote-name> git@<domain>:<username>/<project-name>.git`
添加远程仓库是为了添加远程仓库的（所有）分支；
实质上，会创建多个名为 `remotes/origin/xxx` 的本地分支；
这些 `remotes/origin/xxx` 和普通的本地分支差别不大，我们甚至可以 checkout/switch 到这些分支，然后修改、commit，不过我们不推荐这么做。因为这些分支的意义在于同步远程仓库的对应分支的 commits，`remotes/origin/xxx` 分支的一切修改应该由 git 自动完成，而非手动操作。
`origin` 可以自定义成其他名称，跟 branch tag 一样。但业界约定俗成将 `origin` 作为默认的远程仓库名。此外，我们可以添加多个远程仓库，`upstream` 也是个常用的远程仓库名；


`git branch --set-upstream-to origin/master master`
`git branch -u <remote-name>/<branch> [<local-branch>]`
简单说，设置本地 master 分支的上游分支为 origin 远程仓库中的 master 分支。
`master` 的真正的上游分支是名为 `remotes/origin/master` 的本地分支；
`fetch` 更新本地分支 `remotes/origin/master`；
`pull` 不光更新本地分支 `remotes/origin/master`，还将 `remotes/origin/master` 合并进 `master`。即 pull == fetch + merge/rebase；
`push` 将 `master` 合并进 `remotes/origin/master`，然后上传 `remotes/origin/master` 的修改；
不指定本地分支，则默认使用当前分支；



### rebase/merge

[Git变基使用方式 | Escape](https://www.escapelife.site/posts/d671d072.html)

[使用新 GPG 密钥重新签名所有 Git commits - Steven's Blog](https://blog.hly0928.com/post/sign-old-git-commits-using-new-gpg-key/)


我不喜欢用 rebase。

1. rebase 破坏了提交日期.
2. rebase 破坏了历史记录.
3. 万一手误（谁敢保证不呢）在 上游分支/公共分支 使用 rebase 就完了.
4. 单看合并，cherry-pick 就能达到 rebase 的效果.


```bash
git rebase --abort

```

#### 修改 commit 作者

- References
    - [Git - 重写历史](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2)

- Idea
    - 修改最后一个 commit 用 `git commit --amend`
    - 修改历史 commit 用 `git rebase`/`git cherry-pick`
    - 强行覆盖历史 commit 用 `git filter-branch`

```bash
# 推荐方法
（为保险起见，最好拉一个新分支然后 cherry-pick，再慢慢修改）

修改最后一次 commit 的作者
git commit --amend --author "luoyemengchen <luoyemengchen@gmail.com>"


大量修改 commit

0. 新建临时 branch，所有工作在临时分支完成，以防万一
1. git rebase -i <最早需要修改的commit的前一个commit>    # 重新设置基准线
2. 进入了交互模式，此时会打开一个文本，操作方式同 vim
3. 复制文本内容
3. 按 vim 的操作，将 `pick` 替换成 `edit`，即 `:%s/^pick/edit/gi`
4. `:wq` 退出交互模式
5. git commit --amend --author "Author Name <email@address.com>"
6. git rebase --continue    # 移动到下个commit作为基准线
7. 重复执行 5、6 步直至修改完所有 commit
8. 如果中间哪步搞错了，可以 `git rebase --abort` 取消 rebase，从头再来一次

PS：git rebase -i [--root] [start_commit] [end_commit]
    --root 可以修改第一个在内的所有 commit，即整个 branch 全部 rebase

git rebase --edit-todo

PS：如果想要自动提交，那就在第 3 步在 vim 里时复制所有的内容，从中提取出所有的 commit message，然后第 5、6 步可以写成脚本：


git commit --amend \
    --author "luoyemengchen <luoyemengchen@gmail.com>" \
    -m <提取的第1条msg> && \
git rebase --continue

git commit --amend \
    --author "luoyemengchen <luoyemengchen@gmail.com>" \
    -m <提取的第2条msg> && \
git rebase --continue

git commit --amend \
    --author "luoyemengchen <luoyemengchen@gmail.com>" \
    -m <提取的第3条msg> && \
git rebase --continue
...
...



# 危险方法，不推荐
git filter-branch --env-filter '

OLD_EMAIL="luoyemengchen@gmail.com"
CORRECT_NAME="LoliNeko"
CORRECT_EMAIL="loli@lolineko.com"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_COMMITTER_NAME="$CORRECT_NAME"
export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
export GIT_AUTHOR_NAME="$CORRECT_NAME"
export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

```

#### 修改 commit message

[Git - 重写历史](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2)

[Git - 替换](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E6%9B%BF%E6%8D%A2)

[如何撤销 Git 操作？ - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2019/12/git-undo.html)

[Git 修改已提交的 commit 信息，包括作者、邮箱-陈斯林的个人网站-学习、记录、研究、分享](https://www.silinchen.com/post/git-amend-commit-info-author-email)


```bash
修改最后一次 commit 的 message，跟修改作者差不多
git commit --amend # 进入交互模式
git commit --amend -m "xxx"





```

#### 1 次合并

[Git - 高级合并](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%AB%98%E7%BA%A7%E5%90%88%E5%B9%B6)

[Git - 选择修订版本](https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%80%89%E6%8B%A9%E4%BF%AE%E8%AE%A2%E7%89%88%E6%9C%AC)

```git
git checkout master && git merge
git checkout master && git merge --no-ff
git checkout master&& git cherry-pick feture-branch
git checkout feature-branch && git pull --rebase master；
解决冲突：大部分情况下二选一即可（Yours vs Theirs），SourceTree Beyomdcompare JetBrains 可以一键完成。如果将两边合并，建议使用 JetBrains


一句话，
上游分支接受 PR ，使用 merge/cherry-pick 命令；（git checkout master && git merge）
pull 拉取上游分支（如公共分支）的更新到下游分支时，使用 pull --rebase；（git checkout feature-branch && git pull --rebase master）


千万不要在上游分支使用 rebase 命令！
千万不要这么做：
git checkout master、
git rebase feature-branch    # 这样会修改 master 的已有 commits


如何处理多个 PR？
处理 PR 之前，应该确保项目结构足够合理，即大部分 PR 之间应该是无冲突的。如果 PR 之间冲突过多（多人同时修改同一个文件），说明有文件太大，应该拆分成多个小文件。
快速多次合并的诀窍在于，优先合并无冲突的。不仅是 feature 分支和上游分支无冲突，feature 分支之间的冲突越少越优先合并，例如一个 PR 改了几十个文件，那么这个 PR 应该最后再处理~~（这样的 PR 就该回炉重造）~~。

所谓的 rebase 合并方式，其实是：
checkout 到 dev 分支；
rebase，使 dev 分支领先于 master；
checkout 到 master分支；
fast-foward 合并 master分支到 dev 分支所在 commit;





Rebase 命令
git rebase [options] <root-commit> [end-commit]
对于 root-commit 和 end-commit 向上追溯祖先 commit，至少有一个共同祖先 commit，姑且称之为 last-ancestor-commit；
rebase 命令将 last-ancestor-commit 与 end-commit 之间的所有 commits（包括 end-commit 但不包括 last-ancestor-commit），以 root-commit 为起点依次提交；
如果 end-commit 是 HEAD 或 hash，提交完后会将 HEAD 移动到生成的新 commit；
如果 end-commit 是 branch，则移动 branch；
如果不指定 end-commit，默认使用 HEAD；
一句话 rebase命令 == 多次cherry-pick命令 + reset/checkout


cherry-pick 命令
git cherry-pick <commits>
将指定的一个或多个 commits 合并，以 HEAD 为起点，生成 1 个新的 commit。









> "No one shall rebase a shared branch" — Everyone about rebase

上游分支合并下游分支内容的时候使用 merge
下游分支更新上游分支内容的时候使用 rebase
更新当前分支的内容时一定要使用 --rebase 参数

例如现有上游分支 master，基于 master 分支拉出来一个开发分支 dev，在 dev 上开发了一段时间后要把 master 分支提交的新内容更新到 dev 分支，此时切换到 dev 分支，使用 git rebase master

更新代码我使用的是 git pull origin B1 --rebase 而不是 git pull origin B1 这也是平时使用 rebase 注意的一点，git pull 这条命令默认使用了 --merge 的方式更新代码，如果你不指定用 --rebase，有的时候就会发现日志里有这样的一次提交 Merge branch 'dev' of gitlab.xpaas.lenovo.com:liuyy23/lenovo-mbg into dev 什么？自己分支合并到了自己分支，显然这个没有什么必要，而且在时间轴上也不好看，平白无故多了一条线出来，对于强迫症的我来说看着就难受。。。

使用 merge 的场景就一个原则，必须让下游分支领先于上游分支，所以在下游分支完成开发之后、PR 之前，记得先 pull --rebase，使下游分支 ahead。

dev 分支开发完成了之后，要合并到上游分支 master 上的时候，切换到 master 分支，使用 git merge dev




在公共分支上使用 merge。
永远都不要在公共分支上使用 rebase。如果在 master 分支上使用 rebase，会导致提交历史变得非常混乱。因为其他人本地的 master 分支还是原来的，由于 rebase 导致全新的提交，Git 会认为你的 master 分支的历史与其他人的历史不同。所以公共分支上应该使用 merge，来保证提交历史的清晰。
rebase 的实质是丢弃一些现有的提交，然后相应地新建一些内容一样但实际上不同的提交。 如果其他人已经在这些提交上做出过大量修改、冲突合并等工作，那么你的rebase将成为他们的恶梦。

对于使用rebase还是merge来合并代码，实际并没有什么固定的模式，取决于开发者如何看待仓库的历史记录。一些人认为历史记录应该反映全部真实变更细节，而另一些人认为历史记录应该是精心维护的变更目录。具体如何使用取决于项目合作者的一致共识。无论是merge还是rebase，都应该了解其中原理，避免危险操作，才能享受到Git诸多特性带来的便利。

通常我们会在基于一个过时的版本进行了本地修改的情况下使用rebase，在实际开发中经常会出现这种情况，当你在本地分支上工作了几天，突然想起应该push到远程仓库时，远程分支已经被别人更新过了。此时你会得到一个reject信息。
有些人会选择用pull命令合并远程和本地的同名分支，但pull实际执行了fetch和merge两个操作，会生成复杂的分支历史和一个多余的merge提交。你也可以选择用fetch和rebase代替pull，始终生成一个美观的提交链。

```

### worktree

[使用worktree来维护多分支 | Escape](https://www.escapelife.site/posts/108b302e.html)


### submodule

[熟悉使用Git子模块 | Escape](https://www.escapelife.site/posts/5aa532e.html)

[Git子模块提交冲突问题 | Escape](https://www.escapelife.site/posts/fc9065e6.html)

### lfs

[使用Git进行大文件存储 | Escape](https://www.escapelife.site/posts/92ef32ff.html)

[Tutorial · git-lfs/git-lfs Wiki](https://github.com/git-lfs/git-lfs/wiki/Tutorial)


```bash
git-lfs command
Usage:
    git-lfs <subcommand> [args]
    git lfs <subcommand> [args]

Installation:
    - scoop install -g git-lfs
      sudo apt install git-lfs
      sudo yum install git-lfs
    - git lfs install    全局启用 git-lfs
    - git lfs uninstall    全局关闭 git-lfs
    - git lfs install --local    项目级启用 git-lfs
        - 本质是在 .git/config 添加 filter，并配置
          .git/hooks/post-checkout
          .git/hooks/post-commit
          .git/hooks/post-merge
          .git/hooks/pre-push
    - git lfs uninstall --local    项目级关闭 git-lfs

Commands:
    track [args]
        - 本质是修改 .gitattributes
    untrack
    env


    pre-push
    post-commit
    post-checkout
    post-merge

```

### push

#### 1 次推送

[将已有项目推到Github仓库 | Escape](https://www.escapelife.site/posts/7e6459ba.html)

[Git远程操作详解 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2014/06/git_remote.html)

[Git - 远程仓库的使用](https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE)

[Git - The Protocols](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols)

[Git : SSH 协议服务器 - sparkdev - 博客园](https://www.cnblogs.com/sparkdev/p/6071533.html)

[Git 分支-远程分支 | Jamey's](https://www.aligoogle.net/pages/f8229d/#%E4%B8%80-%E6%9F%A5%E7%9C%8B%E8%BF%9C%E7%A8%8B%E5%BC%95%E7%94%A8%E5%88%97%E8%A1%A8%E4%B8%8E%E4%BF%A1%E6%81%AF)


```bash
一个「远超主机（远程仓库）」可看作一棵 worktree。


分支名规范：字母、数字、减号「-」


凡是涉及远程仓库（git server）的操作，例如 clone/fetch/pull/push，都要完成 git server 的认证才能成功执行。我们平时 clone/fetch 各种 GitHub 仓库不需要认证，是因为远超仓库是公开仓库，git server（GitHub）不限制公开仓库的 clone/fetch。但如果我们 clone/fetch 一个 GitHub 私有仓库，git server 会要求认证，于是 git 会弹出 git-gui--askpass 之类的工具（取决于你的 git config 配置），按要求输入用户名、密码、密钥等信息，才能成功 clone/fetch。至于 push 更不用说了，除了本地，都要认证。

不同协议的 URL 有着不同的认证方式。

$ git clone http[s]://example.com/path/to/repo.git/
$ git clone ssh://example.com/path/to/repo.git/
$ git clone git://example.com/path/to/repo.git/
$ git clone /opt/git/project.git
$ git clone file:///opt/git/project.git
$ git clone ftp[s]://example.com/path/to/repo.git/
$ git clone rsync://example.com/path/to/repo.git/

手动填写 git-gui--askpass 能让我们更好地理解和远超仓库交互的原理，但每次 fetch/pull/push 都填写实属麻烦，我们可以配置远超主机的 fetch-url 和 push-url 来自动完成认证（本质是修改 `.git/config` 文件）。

关于协议的选择，Git 官方首推 HTTPS。我个人的习惯是，对于公开仓库，fetch-url 使用 HTTPS 协议，push-url 使用 SSH 协议；对于私有仓库，一律 SSH 协议。

顺便一提，「commit 签名」和「git server 认证」不是一回事，签不签名跟是否认证无关。即便你的 commits 已签名，也仍需完成 git server 的认证。




SSH 协议 URL 格式

1. ssh://[<username>@]<ip>[:port]/path/to/repo.git
2. [<username>@]<ip>:path/to/repo.git

对 GitHub 项目使用 SSH 协议，用户名必须为「git」，IP（严格来说是主机）必须为「github.com」，端口为「443」，认证方式为公钥认证「publickey」。




git push <远程主机名> <本地分支名>:<远程分支名>     # push 指定本地分支到远程仓库的分支
git push <远程主机名> <本地分支名>    # push 指定本地分支到远程仓库的分支。若未绑定设定上游分支则 push 到远程仓库的同名分支，同名分支不存在则创建。第一次 push 可以使用 -u 参数将远程分支绑定为上游分支
git push    # push 当前分支到上游分支
git push --all    # push all refs

git branch --set-upstream-to origin/develop develop
git branch --set-upstream-to <远程主机名>/<已存在の远程分支名> <本地分支名>









// 1. remote add
git remote add <源别名> git@<远程仓库主机名>:<GitHub 的用户名>/<repo>.git
git remote add origin233 git@love-233.github.com:arliya/repo.git
「源别名」其实是特殊的本地分支名，用于 fetch/pull。源别名只用于本地，用来辨别 push 时是 push 到哪个源（remote，又称远程仓库），怎么取都无所谓，对远端毫无影响。为啥要用源别名？远程仓库链接太长，所以取个名代替。
「远程仓库主机名」可以是 git server 的域名 E.g. github.com，也可以是本地的主机别名（不推荐使用）。本地主机别名在 ~/.ssh/config 中指定，该文件同时用来辨别 push 时使用哪个 SSH 私钥。在 ~/.ssh/config 文件中可以配置多个主机别名，从而实现配置多个 SSH 私钥。怎么取都无所谓，对远程仓库毫无影响，但依旧推荐与远程仓库保持一直。
「GitHub 的用户名」是你自己注册 GitHub 时填写的，唯一、无法更改，例如 luoyemengchen
「repo」指定 push 到远程仓库中的哪个 repo
PS：插一句，用户名、用户邮箱这两个东西，与 push 时使用哪个 SSH Key 完全无关，用哪个 SSH Key 只由你 remote add 时设置的主机别名有关

// 2. push
git push <源别名> <branch>
git push origin233 master；
git push -u origin master； #首次 push 用 -u|--set-upstream 来指定 origin 为默认主机
git push origin 2dc2b7e:master； #push 某个 commit
一次 git push 会自动把从上次 push 到这次 push 之间的所有 commit 全部提交了，不用担心缺失
git push <远程主机名> <本地分支名>:<远程分支名>
git push <远程主机名> <本地commit id>:<远程分支名>
git push origin master； #如果省略远程分支名，则表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），如果该远程分支不存在，则会被新建。
$ git push origin :master；
# 等同于
$ git push origin --delete master；
$ git push origin #如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略。
如果当前分支与多个主机存在追踪关系，则可以使用-u选项指定一个默认主机，以后就可以不加任何参数使用 git push。
不带任何参数的git push，默认只推送当前分支
--tags 连标签也一起推送


// 3. clone；
git clone https://xxx ./folder # clone 到指定文件夹
$ git clone http[s]://example.com/path/to/repo.git/
$ git clone ssh://example.com/path/to/repo.git/
git clone [user@]example.com:path/to/repo.git/ #ssh 另一种写法
$ git clone git://example.com/path/to/repo.git/
$ git clone /opt/git/project.git
$ git clone file:///opt/git/project.git
$ git clone ftp[s]://example.com/path/to/repo.git/
$ git clone rsync://example.com/path/to/repo.git/

```

## Philosophy

1. 「三棵树」：工作目录，它持有实际文件，下文简写为 dir；Index，它是个缓存区域；HEAD（
它指向你最后一次提交の结果，不移动的话）。它们 3 个本质就是 3 个高亮的文件夹，站在一个很长的版本链上看，就是闭着眼选中了链上的 1 - 3 个节点（文件夹），分别叫做 dir、Index、HEAD，即所谓高亮，可以看出来它们本质没有区别，只是名字不同。不过我们人为规定了，敲代码的时候编辑的只能是 dir 里的文件，所以就有了不同。再说一遍，没什么本质不同，只不过是 3 个名字不一样的文件夹，并规定只能编写特定的 1 个而已。
2. 「命令」：之所以有那么多命令，用数学思考就懂了，即：dir、Index、HEAD、版本链、指针，要进行覆盖或移动的交互，它们进行排列组合，所以知道那么多命令是如何产生的了吗。你还觉得，命令这么重要吗？重要的是理解这几个对象，理解之后，再高大上的命令也吓不倒你，不就是排列组合中的一种情况么，和最简单的命令没什么高低不同。
18. 文件状态：modified、staged、committed，相同的树鸟都不用鸟，我们只关注不同的树。
19. modified（已修改）：index & dir 不同。
20. staged（已暂存）：index & HEAD 不同、且 index 和 dir 相同。
21. committed（已提交）：index & HEAD 相同。
22. 「HEAD」：HEAD 本质是个指针，如果 HEAD 不移动，「HEAD」&「HEAD 所在的快照」同义，HEAD 移动时只是个指针，后文就是这么用的，请仔细体会。
23. add：没啥好说的，dir 覆盖添加到 index。
16. commit 简洁版：以 HEAD 为父快照，用 index 生成一个新快照，然后 HEAD 移动到新快照。
15. commit 完整 2 种模式：非分离 HEAD 提交，用 index 生成快照，HEAD 和分支指向新快照；分离 HEAD 提交，不过是以 HEAD 所在的快照作为父快照，还是用 index 生成新快照，然后只有 HEAD 指向新快照，这 TM 不就是「匿名提交」么！
16. 「快照」：「1 个快照」&「1 个提交」&「1 个版本」同义。注意，除了 commit 命令可以生成快照，其他命令如 merge、rebase、cherry-pick 也可以生成快照。
17.「快照链」：与「仓库」「提交链」、「版本链」同义，「快照链」= 所有快照 + 快照之间的指向关系。新快照在生成时，必须有父快照并指向父快照（只有第一个快照没有父快照），画出来就像一条条链子。
19. 「commit id」：快照生成时产生的 SHA-1 值，即每个快照独有的身份证号码。因为唯一，所以 id 和快照可以同义。
18. 「标签」：commit id 是算法生成的 SHA-1 值，不好记，标签就是你给这个快照起的唯一名字（不可重复），便于记忆。
16. checkout 本质：第一步找到对象快照确定对象快照，一般 HEAD 移动到此快照 ；第二步将对象快照回滚 index 或 dir。分支指针一定不移动。适用于分离 HEAD、非分离 HEAD。（猜测）HEAD 分不分离，只影响用相对引用找对象快照时，对象的位置。
17. reset 本质：第一步找到对象快照确定对象快照，分支移动；第二步将对象快照回滚 index 或 dir。适用于分离 HEAD、非分离 HEAD。（猜测）HEAD 分不分离，只影响用相对引用找对象快照时，对象的位置。区别：checkout 主要操作对象是 HEAD，而 reset 主要操作对象是分支。
18. 「分支」：分支本质是个指针，除了匿名分支，每次快照链子分流都需要一个「分支」。
1. 你写的永远是 Dir 里的文件，实际上 Index、Repo 从来都没被你写过。
2. 如果用 detached HEAD提交，那么最后一次提交会被the reflog for HEAD引用。但是过一段时间就失效，最终被回收，与git commit --amend或者git rebase很像。
21. git bash + sourcetree + vscode，其他任何都不推荐
23. git 的本质，有 3 个文件夹 dir index head，我们只对 dir 进行编写，为了记录各个版本我们将 dir 内容复制进 index head，并且每一次 head 产生变化，我们就生成出一份完整的 head 并称为 1 个快照，很多个快照依据逻辑关系形成链状，称为版本链，也叫仓库，然后我们拿出几个指针钉在版本链的几个节点上，并分别给指针起名，这就是分支
