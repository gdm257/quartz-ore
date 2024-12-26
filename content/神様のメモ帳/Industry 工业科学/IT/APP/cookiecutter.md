---
tags:
- flag/License/BSD
- flag/LANGUAGE/Python
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/DevOps/Scaffold_Boilerplate
---

## Brief

- References
    - [用cookiecutter来创建新项目 · 零壹軒·笔记](https://note.qidong.name/2018/10/cookiecutter/)

    - [A Pantry Full of Cookiecutters](https://github.com/cookiecutter/cookiecutter/tree/db14e06a1dcc0187beeafde72685c3acef93eb68#a-pantry-full-of-cookiecutters)

    - [cookiecutter/cookiecutter: A cross-platform command-line utility that creates projects from cookiecutters (project templates), e.g. Python package projects, C projects.](https://github.com/cookiecutter/cookiecutter)

- Test
    * 我其实不喜欢用模板，手动初始化更有掌控感.
    - 可玩性差，用用别人写的模版就好
    - 适合学习 [[Django]] [[Flask]] etc 框架的目录结构

- Installation
    * `pip install cookiecutter`

- Idea
    * cookiecutter 用项目模板来创建一个新项目

- Fundamentals
    - 先下载一个模板项目，然后替换模板项目的某些内容，生成新的项目

- Description
    * cookiecutter 适用于任何语言的项目.

- Configuration
    - `~/.cookiecutterrc`
        - `default_context: dict`
            - 用户级预应答
    - `abbreviations:`
        - `gh: https://github.com/{0}.git`
        - `gl: ...`
        - `bb: ...`
        - 模版 URL 缩写


## CLI

- References
    - [Organizing cookiecutters in directories — cookiecutter documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/directories.html)

- Test
    - 命令行的使用非常简单，而且形式非常固定，毫无难度，真正难的是自定义 template

```bash
cookiecutter command
Usage:
    cookiecutter [options] [template] [context]...

Template:
    * git: "<git支持的URL>"
    * Mercurial: "hg+<Mercurial支持的URL>"
    * GitHub 简写: "gh:<user>/<repo>"
    * GitLab 简写: "gl:<user>/<repo>"
    * BitBucket 简写: "bb:<user>/<repo>"
    * 本地: "file://server/folder/repo.git"
    * 压缩文件: "/path/to/template.zip"
    * ~/.cookiecutters 里的缓存: "<repo>"

Context:
    * Context 用于自动应答.
    * Context 书写格式为 `"<key>=<value>"`

Options:
    -h --help
    -V --version
    -l --list-installed
        - List installed templates in ~/.cookiecutters
    -v --verbose
    -o --output-dir <dir>
    -f --overwrite-if-exists
    -s --skip-if-file-exists
    -c --checkout <specific_commit>
        - branch, tag or commit
    --no-input
        - 不询问，用模板 cookiecutter.json 默认值创建项目
    --directory <dir-in-repo>
        * 如果一个 repo 包含多个 templates，需要使用该参数指定要用哪个模板.

Examples:
    cookiecutter https://github.com/audreyr/cookiecutter-pypackage
    cookiecutter gh:audreyr/cookiecutter-pypackage
    cookiecutter cookiecutter-pypackage
    cookiecutter cookiecutter-pypackage  \
        use_black=y  \
        use_pytest=y  \
        use_pypi_deployment_with_travis=n  \

```

## Custom

- References
    - [自定义模板相关文档 Advanced Usage — cookiecutter 2.1.1 documentation](https://cookiecutter.readthedocs.io/en/stable/advanced/index.html)
    - [Calling Cookiecutter Functions From Python — cookiecutter 2.1.2.dev0 documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/calling_from_python.html)

- Test
    * cookiecutter 自定义模版真折磨，特性太绕了，很难上手.
    - 研究完文档，确实没有可玩性，真不如手动

```bash
cookiecutter-something/
├── {{cookiecutter.project_slug}}/
├── hooks
│   ├── pre_gen_project.py
│   ├── pre_gen_project.sh
│   ├── pre_gen_project.bat
│   ├── post_gen_project.py
│   ├── post_gen_project.sh
│   └── post_gen_project.bat
└── cookiecutter.json
```

- Repo
    - 一个 [[git]] 直接就是一个模板，没啥好说的
    - 一个 [[git]] 包含多个模板，使用时通过上下文 `--directory <dir_name>` 来指定用哪个模板
    - [Organizing cookiecutters in directories — cookiecutter documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/directories.html)

- Template Directory
    - `hooks/`
        - script running cwd is the root of the generated project
        - Template variables are rendered in the script
        - If script finishes with non-zero exit status, the project generation will stop and the generated directory will be cleaned up
    - `cookiecutter.json`
        - `Dict[str, value]`
        - 能通过 Jinja2 语法引用 Context
            - `{{ cookiecutter.project_name|lower|replace(' ', '-') }}`
            - [Templates in Context Values — cookiecutter 2.1.2.dev0 documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/templates_in_context.html)
        - Context
            - project_name
                - 项目名，好看即可
            - project_slug
                - 包名，严谨，要求方便导入
            - project_short_description
            - version
            - full_name
            - email
            - github_username
            - pypi_username
            - use_black
            - use_isort
            - use_flake8
            - use_pytest
            - use_precommit
            - use_tox
        - [Choice Variables — cookiecutter 2.1.2.dev0 documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/choice_variables.html)
        - [Boolean Variables — cookiecutter 2.1.2.dev0 documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/boolean_variables.html)
        - [Dictionary Variables — cookiecutter 2.1.2.dev0 documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/dict_variables.html)
        - [Private Variables — cookiecutter 2.1.2.dev0 documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/private_variables.html)
        - [Copy without Render — cookiecutter 2.1.2.dev0 documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/copy_without_render.html)
        - [Template Extensions — cookiecutter 2.1.2.dev0 documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/template_extensions.html)
        - [Local Extensions — cookiecutter 2.1.2.dev0 documentation](https://cookiecutter.readthedocs.io/en/latest/advanced/local_extensions.html)

- 元数据

- 条件分支
    - 是否 Python 项目

- 独立分支
    - 包管理器
        - pdm
        - poetry
        - pip
    - build backend
        - pdm-backend
        - setuptools
        - poetry
    - cli
        - plumbum
        - click
        - argparse
