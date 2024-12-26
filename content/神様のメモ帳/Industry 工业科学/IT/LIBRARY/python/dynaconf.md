---
tags:
  - flag/LANGUAGE/Python
  - flag/Library/DataAccessLayer/Implement__/IO/DeSerialization
  - Label/Industry-工业科学/IT/Library/3rdLibrary
pip: dynaconf
---

## Brief

- Con
    - [[Django]] settings 有 bug！
        - 别用！
        - web 显示不正常，debug 半天，折磨死了，最后发现是看似完全无关的 [[dynaconf]] 导致的

- Configuration
    - `.env`
        - `load_env = True` 入参
            - 默认为 `False`
        - `.env` 优先级较高，会覆盖 `settings_files` 的同名配置项
        - `${ENVVAR_PREFIX}_${VARIABLE}__${NESTED_ITEM}__${NESTED_ITEM}`
            - 支持 自适应 environment
                - 无需使用 `default` `development` `production` etc 环境名称，所有环境变量设置项会自动 switch 到运行时的 environment，无需主动指定，也无法主动指定
    - `settings_files: List[str]`
        - Specified
            1. `settings_files` 入参
            2. `SETTINGS_FILES_FOR_DYNACONF` 环境变量
            - 支持 绝对路径
            - 支持 相对路径 relative to `root_path`
            - 支持 在路径中使用 [[Glob|Glob Pattern]]
        - Not specified
            1. `settings.[local.]{py|toml|tml|yaml|yml|ini|conf|properties|json}`
            2. `.secrets.[local.]{py|toml|tml|yaml|yml|ini|conf|properties|json}`
            - 按顺序读取，后面的覆盖前面的同名配置项
            - `.local` 无需显式指定，dynaconf 会自动添加
    - `root_path: str`
        - Specified
            1. `root_path` 入参
            2. `ROOT_PATH_FOR_DYNACONF` 环境变量
            - 支持 绝对路径
            - 支持 相对路径 relative to `cwd`
            - 建议手动指定 `root_path`，官方文档有点语焉不详
        - Not specified
            1. latest path of loading setting file
            2. `cwd`
            3. `cwd/config`
            4. recursive parent folder of `cwd` and its `config`
            - 使用 第一个能用的
                - 成功读取到配置文件后，`root_path` 便设为该目录（仅限于未指定 `root_path` 时），这就是 latest path
    - [Settings files - Dynaconf - 3.2.3](https://www.dynaconf.com/settings_files/)

- Data
    - 

- Examples
    - 

- Users
    - 

- Author
    - 

- GUI
    - 

- CLI

- API
    - 

- Mobile
    - 

- DSL
    - 

- Shortcuts
    - 

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 

- Architecture
    - 

- Pro
    - 

- Con
    - 不支持 type annotation，访问设置时都是硬编码
    - 不支持 validation by [[pydantic]] [[dataclasses]] [[attrs]] etc schema
        - 作者说 4.0.0 打算做，但遥遥无期
        - [Dynaconf 4.0 changes and ideas · dynaconf/dynaconf · Discussion #608](https://github.com/dynaconf/dynaconf/discussions/608)
        - [RFC: dynaconf-schema plugin - Rename \`validator\` to \`Schema\` adopt a good schema lib and generate docs. · Issue #153 · dynaconf/dynaconf](https://github.com/dynaconf/dynaconf/issues/153)
        - [RFC: Plugin System · Issue #146 · dynaconf/dynaconf](https://github.com/dynaconf/dynaconf/issues/146)

- Test
    - [[Django]]
        - 扩展设置后，environment 默认为 `development`，而非 `default`
    - Freeze
        - Not sure what the proper "fix" would be, but the work around of specifying the root path(s) for any file passed to `settings_files` works well
        - [Deal with file search on Pyinstaller frozen programs · Issue #902 · dynaconf/dynaconf](https://github.com/dynaconf/dynaconf/issues/902)
        - [[pdm-packer]]
        - [[pyinstaller]]

- Alternatives
    - [[pydantic-settings]]
