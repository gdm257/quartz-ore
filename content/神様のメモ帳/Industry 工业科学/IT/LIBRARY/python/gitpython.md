---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/MultiMedia
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

[用GitPython操作Git库 · 零壹軒·笔记](https://note.qidong.name/2018/01/gitpython/)

[GitPython Documentation — GitPython 3.1.30 documentation](https://gitpython.readthedocs.io/en/stable/)

[gitpython-developers/GitPython: GitPython is a python library used to interact with Git repositories.](https://github.com/gitpython-developers/GitPython)

> [!tldr]
> 隔靴搔痒，食之无味


```python
gitpython library
Installation:
    * pip install GitPython

Description:
    * GitPython 只负责调用 git 命令，本身并没有实现 git 的功能.
    * GitPython 用的很不顺手，API 很乱、文档流水帐.
    * 不如 subprocess 或 git.cmd.Git 直接执行.
    * 代码质量也不太行，虽然肯定比我写的好，但跟简洁、由雅不沾边.
    * 我的评价是，我宁愿 git 命令行.
    * git 1.7.0+ 需要手动安装.
    * BDS 3 License.

API:
    from git imoprt Repo
    from git.cmd import Git

    git.__version__
        * Current GitPython version

    git.cmd.Git
    git.config.GitConfigParser
    git.refs.head.HEAD
        .is_detached
    git.Repo
        .close()
            * 只是一些清理操作，关闭的必要性不高.
        .__enter__()
        .__exit__()

        .git: git.cmd.Git
            .__getattr__
                ()    Using git subcommand directly.
                * 用于运行 git 的同名子命令.
            * 推荐使用，类似 plumbum.

        .__init__()
            path: str | Path = None
            odbt
            search_parent_diirectories: bool = False
            expand_vars: bool = True
                * Variable Expansion 变量扩展（二次解析）
            * 打开已有仓库.
        .init(cls, ) -> Repo
            path: PathLike = None
            mkdir: bool = True
            expand_vars: bool = True
                * Variable Expansion 变量扩展（二次解析）
            * 初始化一个仓库并打开.
            * 等价于 git init
        .clone_from(cls, url, to_path) -> Repo
            url: Union[str, Path]
            to_path: Union[str, Path]
            * clone 一个仓库并打开.
            * 等价于 git clone <url> <dir>
        .clone(path) -> Repo
            path: Union[str, Path]
            * 把 repo 给 clone 到另一个位置.
        .archive(ostream) -> Repo
            * Archive the repository contents to a tar file.

        .config_reader() -> GitConofigParser
        .config_writer()

        .is_dirty() -> bool
            * GitPython 并未实现原版 git status，这是替代品.
        .untracked_files: List[str]
        .tags
        .index
            .add()
            .commit()
            .checkout()
                force: bool
        .head: HEAD
        .heads: Iterable[HEAD]
        .submodules
        .create_head() -> <new head>
            name
            commit = 'HEAD'
            force: bool = False
            * 新建分支.
        .working_tree_dir

# CLI
git: Git = repo.git
git.status()
git.checkout('HEAD', b="my_new_branch")
git.branch('another-new-one')
git.branch('-D', 'another-new-one')


# API
repo = Repo(r'E:/folder')
repo.is_dirty()

index = repo.index
head = repo.head
tags = repo.tags
remotes = repo.remotes
untracked_files = repo.untracked_files
working_tree_dir = repo.working_tree_dir

repo.index.add(items=['test.file'])  # dir to index
repo.index.commit('write a line into test.file')  # index to head



```
