---
aliases:
  - Mambaforge
  - Miniforge
  - Micromamba
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/LANGUAGE/Python
commands:
  - micromamba
scoop: micromamba
brew: micromamba
---

## Brief

- Edition
    - Micromamba
        - `Micromamba` 对标 [[conda|Miniconda]]，没有预装非必要包
        - `micromamba` 命令是用 [[C++|C++]] 写的，就一个独立的二进制可执行文件，不但启动速度快，而且根本就不依赖 `base` 环境，总共只占 10 MB 不到
        - 没有 `base` 环境，所以没有 `conda` 命令
    - Miniforge
        - Miniforge == `mamba` + `conda`
        - `Miniforge` 对标 [[conda|Miniconda]]，没有预装非必要包
        - `Miniforge` 自带一个 `base` 环境（几百 MB），内有 `conda` 和 `mamba` 命令，因为二者都是用 [[Python|Python]] 写的
        - `Miniforge` 即 `Mambaforge`，只是名字不一样
        - `Miniforge` 和 `Mambaforge` 各有一个安装包，唯一的区别就是默认路径不一样，其实就是名字不一样
        - 官方更推荐 `Miniforge` 安装包

- Idea
    - [[mamba]] 平替 [[conda]] ，且功能更多
    - `mamba` `micromamba` 命令完全兼容 `conda` CLI 的用法

- Configuration

- Data
    - `~/micromamba`

- Test
    - `HKEY_CURRENT_USER\Software\Microsoft\Command Processor`
        - 非常坑，mamba 更新后安装文件夹变了，导致注册表里的 `mamba_hook.bat` 脚本路径失效，报废整个系统
