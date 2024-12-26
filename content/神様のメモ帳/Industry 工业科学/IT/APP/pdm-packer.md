---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - Label/Industry-工业科学/IT/APP/Plugin/PDM
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/PackingTool/PrivateFormatPackingTool
pip: pdm-packer
github: frostming/pdm-packer
---

## Brief

- References

- Installation

- Dependencies

- Version

- Idea
    - A PDM plugin that packs your packages into a zipapp

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI
    - `pdm pack [options]`

- API

- Mobile

- DSL

- Shortcuts

- Philosophy

- Objects

- Fundamentals

- Architecture

- Pro

- Con
    - 兼容性极差
        - zipapp 原理跟 [[pyinstaller]] 差不多
        - zipapp 零生态，意味着缺少补丁，例如 [PIL](https://stackoverflow.com/questions/32760048/pyinstaller-with-pil-importerror-cannot-import-name-imaging)，这正是 [[pyinstaller]] 主要的工作之一
    - 不支持 C extention
        - C扩展甚至得手动打包
        - 跟 [[Java]] 的 `jar` 根本没法比，差远了

- Test
    - 

- Alternatives

- Description
