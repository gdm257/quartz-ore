---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/CI
github: casey/just
commands:
  - just
scoop: just
brew: just
cargo: just
port: just
pacman: just
eopkg: just
xbps-install: just
apk: just
dnf: just
conda: just
choco: just
apt: just
nix-env: nixpkgs.just
recipe-properties:
  - windows
  - unix
  - macos
  - no-cd
  - no-exit-message
  - private
recipe-functions:
  - arch()
  - os_family()
  - os()
  - env_var()
  - env_var_or_default()
  - invocation_directory()
  - justfile()
  - justfile_directory()
  - just_executable()
  - join()
  - clean()
  - path_exists()
  - absolute_path()
  - without_extension()
  - parent_directory()
  - file_name()
  - file_stem()
  - extension()
  - uppercase()
  - lowercase()
  - uppercamelcase()
  - lowercamelcase()
  - snakecase()
  - kebabcase()
  - shoutykebabcase()
  - shoutysnakecase()
  - titlecase()
  - capitalize()
  - replace()
  - replace_regex()
  - trim()
  - trim_start()
  - trim_start_match()
  - trim_start_matches()
  - trim_end()
  - trim_end_match()
  - trim_end_matches()
  - sha256()
  - sha256_file()
  - uuid()
  - error()
settings:
  - dotenv-load
  - dotenv-required
  - dotenv-path
  - dotenv-filename
  - export
  - shell
  - windows-shell
  - tempdir
  - allow-duplicate-recipes
  - allow-duplicate-variables
  - ignore-comments
  - fallback
  - positional-arguments
files:
  - .justfile
  - justfile
---

- Data
    - `.justfile`
    - `justfile`
    - 当前目录没有则递归向父目录查找

- Objects
    - Recipe 配方

- Con
    - NOT Support loop
        - 可用 shell 自己的循环语法，但 shell 本身不一定跨平台

- Pro
    - Support variable
    - Support if-else
    - Support shebang script
        - 配方不仅限于命令行，也能直接运行 [[Python]] [[JavaScript|JS]] etc 脚本，而且还不用外部文件，直接写在 `justfile`
    - Support comment
        - `#` 单行注释、行尾注释
        - comment 不仅仅用于 description，更重要的是能够快速让「任意一行」失效，方便 debug 与修改，甚至可把 comment 当作 switch 开关
        - 注释功能看着简单，其实是个能大幅提升体验的功能，当你真正写 tasks 就懂了，有的 task runner 缺少该功能，根本写不下去

- Philosophy
    - [[make]] style syntax

- Alternatives
    - [[go-task]]
