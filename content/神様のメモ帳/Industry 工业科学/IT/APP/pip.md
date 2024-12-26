---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/Python
frontmatter-as-page:
  - pip
  - pip-extra-deps
files:
  - pyproject.toml
---

## Fundamentals

- Idea
    - 别看 pip 安装方式五花八门，最底层就 3 种安装方法：sdist、wheel、egg

- Objects
    - wheel/egg 本质是 sdist 的 pre-build
    - egg 已淘汰，仅留作向下兼容
    - sdist 自动被 pip 编译为 wheel 才能成功安装

## Examples

### 离线部署

- CLI
    - `pip install -r requirements.txt --no-index --find-links ./packages/`

- Dependencies
    - [[pdm-wheel]]
    - [[pdm-download]]

- References
    - [已完成的python项目-环境离线部署 - 坦先生的AI资料室 - 博客园](https://www.cnblogs.com/yushengchn/p/15886828.html)

## CLI

```bash
pip command
Usage:
    pip <subcommand> [options]

Examples:
    pip install loguru==2.5.7 nuitka>=1.0.0
    pip install --upgrade loguru nuitka
    pip uninstall pkg
    pip list
    pip list --outdated 列出可升级的包
    pip search pipx
    pip show pipx
    pip check pipx

Subcommands:
    help [subcommand]
    debug
    list
    check    Verify installed packages have compatible dependencies
    install [options] <package[{==|>=|<=}<version>]>...
        --dry-run
        --user    用户级安装（默认为全局安装），推荐在 Linux 使用
        -U --upgrade    更新指定包
        --force-reinstall
        -I --ignore-installed
        -i <镜像源url>
        -r --requirement "requirements.txt"
        --no-deps    Don''t install package dependencies
    uninstall
    search
    	* 已失效，由于 PyPi 禁用了 XML 搜索的 API，请用 pdm show 代替
    show

General Options:
    -h --help
    -V --version
    -v --verbose
    -q --quiet
    --log <path>
    --proxy <ip>:<port>
        * pip 会自动读取 http_proxy https_proxy 环境变量.
        * 也可以使用 --proxy 强制指定代理.
        * export http_proxy='http://127.0.0.1:1080'
        * export https_proxy='http://127.0.0.1:1080'
```

## Data

- `requirements.in`
    - 纯显式依赖
- `requirements.txt`
    - 所有依赖
