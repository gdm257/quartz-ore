---
tags:
- flag/Platform/Linux独占
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/File/FS
apt: bindfs
---

- References
    - 

- Installation
    - `sudo apt install -y bindfs`

- Configuration
    - 

- Data
    - 

- Usage
    - 

- Examples
    - 

- UI
    - 

- Idea
    - [[mount]] 挂载时不支持 uid/gid etc 选项，文件的默认拥有者为 root，普通用户不方便用。于是就用 [[bindfs]] 新建一个基于 FUSE 的 fs，完成 uid/gid 映射

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 

- Pro
    - 

- Con
    - 基于 FUSE，毕竟是用户层，性能差

- Test
    - 

- Alternatives
    - 

- Description
    - 
