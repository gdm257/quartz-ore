---
tags:
  - flag/License/Apache
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/Python
  - flag/APP/DevOps/Git
  - flag/APP/DevOps/Linter
  - flag/APP/DevOps/Formatter
pip: pre-commit
files:
  - .pre-commit-config.yaml
---

[pre-commit](https://pre-commit.com/)

[pre-commit Supported hooks](https://pre-commit.com/hooks.html)

[Git - githooks Documentation](https://git-scm.com/docs/githooks)

[Git项目管理，代码规范pre-commit使用详解 | 夏冬](https://amos-x.com/index.php/amos/archives/pre-commit/)

[git pre-commit workflow - 世界的过客](https://laujay.com/posts/git-pre-commit/)

[Using Black with other tools - Black 22.12.0 documentation](https://black.readthedocs.io/en/stable/guides/using_black_with_other_tools.html)

[Pre Commit - isort](https://pycqa.github.io/isort/docs/configuration/pre-commit.html)

[Using Version Control Hooks — flake8 6.0.0 documentation](https://flake8.pycqa.org/en/latest/user/using-hooks.html)

[Allow specifying environment variables for hook installation? · Issue #758 · pre-commit/pre-commit](https://github.com/pre-commit/pre-commit/issues/758#issuecomment-404554291)


## Brief

- Installation
    * `pip install pre-commit`

- Idea
    - [[git|Git Hooks]] 的前端
    - [[git|git commit]] 之前进行某些测试，只有通过测试才能 commit
    - [[git|git commit]] 之前进行代码格式化，保证 git 仓库里的代码风格统一
    - 避免了手写祖传 git hooks 脚本

- Test
    - [[pdm]] 创建的虚拟环境无法运行 [[pre-commit]]，几乎可以肯定是 [[pdm]] 的锅
        - [[pdm]] 创建的 virtualenv 环境无法正常运行 [[pre-commit]]
        - [[pipx]] 创建的 virtualenv 环境能正常运行 [[pre-commit]]
    - `pre-commit` 官方的 [[mypy]] 配置默认带有 `--ignore-missing-imports`。此时，如果 mypy 的解释器环境没有安装项目所需的第三方库，那么 mypy 将无法导入缺少的第三方库，然后忽略它们，最终的结果是，无法进行有关第三方库的类型检测，从而提交了可能有明显错误的代码
        - 第一种解决办法，确保执行 pre-commit 的 python 解释器环境安装了第三方依赖，即通过 [[pdm]] [[poetry]] 来执行 [[pre-commit]]
        - 第二种（推荐），在安装了第三方依赖的 python 环境中手动执行 [[mypy]]，而不是通过 [[pre-commit]] 来执行
    - [[conda]] 环境问题
        - 用 [[conda]] 安装的 [[pre-commit]] 在创建某些 repos 环境时失败
        - 一开始以为是 repo 问题，一查 issue 发现是 [[conda]] 的 AutoRun 问题
        - 换了 virtualenv，发现还是失败，还是那些 node repos……猜测是 [[conda]] 安装到注册表的启动脚本影响了 virtualenv……我查了注册表，没看见异样……最后可能还是 repo 本身的问题……艹，是本地 npm 环境的问题
        - [Node/Npm hooks still fails in Windows · Issue #2402 · pre-commit/pre-commit](https://github.com/pre-commit/pre-commit/issues/2402)
        - [Windows es-lint not installable with generic error · Issue #2982 · pre-commit/pre-commit](https://github.com/pre-commit/pre-commit/issues/2982)

- Examples
    * `touch .pre-commit-config.yaml`
        - 在项目根目录创建配置文件.
    * `vim .pre-commit-config.yaml`
        * 编写配置文件.
        * 配置文件の意义是「从多个 repos 里挑选出多个 hooks」.
        * 所谓 hook（钩子）就是一个命令行脚本.
        - 例如 black 钩子，跟手动运行 black 命令没区别.
        - repos 和 hooks 有先后顺序，这决定了 hooks 的执行顺序.
        - repo（仓库）是钩子的集合，一个 repo 包含若干个 hooks.
        - 每个 hook 的 id 在仓库里唯一，挑选 hooks 就靠 id.
        - 可以利用 "local" 仓库，临时创建自定义 hooks.
    * `pre-commit install` `pre-commit install --hook-type commig-msg`
        * 将挑选的 hooks 写入 git hooks 钩子脚本.
        - ~~git hooks 钩子脚本不依赖 pre-commit 命令.~~
        - git hooks 还是依赖于 pre-commit 命令的
        - 看看 .git/hooks/pre-commit 就懂
        - git hooks 钩子脚本仅依赖 hook 需要用的命令.
        - E.g.「black 钩子」需要使用 black 命令.
        - pre-commit 的作用仅限于根据配置生成钩子脚本.
        - pre-commit 并不直接参与 git 命令的执行.
    * `git commit -m 'xxx'`
        * 执行 git 命令时相应钩子生效.
    * `SKIP=gitleaks,commitlink git commit -m "skip specific hooks"`
        * skip running specific hook(s)

- Fundamentals
    - `pre-commit run` 会将 [[git]] 暂存区（index）的文件（即 staged files）作为参数传入给 hook。这其实很好理解，你在执行 `git commit` 命令时，提交的就是 staged files
    - `pre-commit` 这个词其实来源于  的 hook 机制的其中 `pre-commit` 阶段
    - `pre-commit` 这个工具的名字源自 [[git]] hooks 的 pre-commit 阶段.
    - `pre-commit` 命令不是 git 的一部分，而是一个与其 hook 同名的第三方工具.
    - `pre-commit` 命令默认安装到 [[git]] hooks 的 `pre-commit` 阶段，但其实也可以安装到其他 [[git]] hooks 阶段，例如 `pre-merge-commit` `post-update`

- Alternatives
    - [[husky]]
    - [lefthook](https://github.com/evilmartians/lefthook)

## CLI

```bash
pre-commit command
Usage:
    pre-commit <subcommand> [args]

Options:
    -h --help
    -v --version

Subcommands:
    help [subcommand]
    sample-config    打印样本配置
    install    安装到 git hooks
    run
        * 安装的 hook 只在运行 git 命令时才会运行.
        * run 子命令能让我们直接运行指定 hook.
    clean    Clean out cached pre-commit files 无副作用
    gc    Remove unused cached repos

Examples:
    mkdir demo
    cd demo
    git init
    pre-commit sample-config > .pre-commit-config.yaml
    vim .pre-commit-config.yaml
    pre-commit install
```


## Configuration

- Configuration
    - `.pre-commit-config.yaml`

```yaml
[.pre-commit-config.yaml]
repos
    * <必选>
    * List[Repo]
fail_fast: false
    * true 一旦运行失败，立即停止 hooks.
exclude: '^$'
    * 排除文件，全局的.
files: ''
    * include 文件，全局的.
default_install_hook_types: [pre-commit]
    * List[str]
    * pre-commit install 安装钩子到指定 git hooks 钩子脚本，默认的.
default_language_version: {}
    * Dict[str, str]
    * E.g. {python: python3.7}
default_stages
    * List[str]
    * E.g. [commit, push]
    * 指定哪些 hooks 阶段能生效，全局的、默认的.
    * 默认所有阶段都能生效.
minimum_pre_commit_version: '0'
    * 该配置要求的 pre-commit 最低版本.


<class Repo>
repo
    * <必选>
    * E.g. https://github.com/pre-commit/pre-commit-hooks
    * the repository url to git clone from.
    * git 支持的 URL 类型都能用.
    * "local" 是个特殊 repo，可理解为临时创建了个匿名 repo.
    * 临时创建的匿名 repo 一片空白，所以 hooks 是在创建自定义钩子.
    * 自定义 hooks 里全是 NewHook 而不是 Hook.
    * 我将 class Hook 定义为「根据已有 hook 改出的一个新 hook」.
    * 我将 class NewHook 定义为「我要创建一个自定义 hook」.
    * NewHook 见 .pre-commit-hooks.yaml 相关笔记.
rev:
    * <必选>
    * E.g. v2.1.0
    * 目测 rev 用于在 git repo 里指定一个 commit.
    * 毕竟不同的 commit 可能提供不同的 hooks.
    * the revision or tag to clone at.
hooks
    * <必选>
    * List[Hook]


<class Hook>
id
    * <必选>
    * unique hook id in repo.
alias
    * 别名 id.
    * 可用于 pre-commit run <hookid>
name
    * 起个用来看的名字.
    * override the name of the hook, shown during hook execution.
args
    * 传递给 entry 的参数，相当于 Docker 的 command.
exclude
files
types
types_or
exclude_types
verbose
log_file
language_version
stages
always_run
additional_dependncies



Custome Hooks Repo:

    [.pre-commit-hooks.yaml]
    List[NewHook]


    <class NewHook>
    id
        * <必选>
    name
        * <必选>
    description
    entry
        * <必选>
        * E.g. isort
        * E.g. "black -S"
        * 命令行入口，类似 Docker 的 entrypoint
    args
        * 传递给 entry 的参数，相当于 Docker 的 command.
    pass_filenames
    language
        * <必选>
    language_version
    minimum_pre_commit_version
    exclude
    files
    types
    types_or
    exclude_types
    stages
    require_serial
    always_run
    fail_fast
    verbose

```


## hook

- `language`
    - 这是个极其重要的参数
    - pre-commit 会自动从 `repo` 读取依赖并安装，根据`language` 的不同，安装方式也不同
        - `language: python`: pre-commit 拉取 `repo` 并切换目录到仓库，执行 `pip install .` 来安装 hook 所需依赖（`pyproject.toml` or `setup.py`）
        - `language: node`: 类似的，node 使用的是 `npm install .` 来安装 hook 运行所需依赖

    - `pre-commit` runs `mypy` from an isolated virtualenv (without your dependencies) you may also find it useful to add the typed dependencies to `additional_dependencies`
    - 一个 `hook` 的退出状态码不为 0，即为失败（failed）。failed 会取消 [[git|git commit]]，但不会立即停止 [[pre-commit]] 的运行，而是会继续执行剩余 hooks
