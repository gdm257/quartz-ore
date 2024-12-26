---
tags:
- Label/Industry-工业科学/IT/APP/BootLoader
- flag/APP/Layer
---

## Brief

- References
    - 

- Installation
    - 无损安装
        - 磁盘有至少一个分区
        - 第一个分区的起始扇区必须为 2048（用 DG 创建分区时候选择扇区对齐 2048 扇区）
        - 第一个分区之后要有至少 32 MB 的空闲空间（未格式化），或者第一个分区有足够的剩余空间
        - [[Ventoy]] 会在第一个分区之后创建一个 FAT16 格式、卷标为 `VTOYEFI`、内有 EFI 固件的新分区
        - [[Ventoy]] 会修改分区表（MBR 到 2048 扇区之间的部分）
        - 禁止对第一个分区、`VTOYEFI` 分区的位置、大小进行修改，相关信息已在上一步写死
        - [Non-destructive . Ventoy](https://www.ventoy.net/cn/doc_non_destructive.html)
        - [FAQ . Ventoy](https://www.ventoy.net/cn/faq.html)
        - [无损制作 Ventoy 启动盘 - 蜻蜓的窝](https://dragonfly.fun/tips/ventoy.html)

- Version
    - 

- Idea
    - 

- Configuration
    - 

- Data
    - 

- Examples
    - 

- Users
    - 

- UI
    - 

- CLI
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
    - 问题一，Ventoy兼容性差原因是因为它并不支持UD方案三分区方式安装，只能以双分区方案安装，意味着兼容性较差。UD分区主要也是存储MBR启动引导文件，某些老电脑需要它
    - 问题二，由于Ventoy基于GRUB引导程序，不是Microsoft引导程序。在大多数支持UEFI启动的机型中，是有安全启动的，但是安全启动仅仅只支持Microsoft引导，其他引导程序会无法启动，虽然Ventoy支持安全行动，但是要是初始启动有安全启动的机器，要临时导入安全启动证书。并且就算支持安全启动，并非支持所有。甚至部分机器就算关闭安全启动也无法启动
    - 问题三，启动每个镜像的PE时，是需要临时导入，挂载外置镜像的脚本文件至PE内核， Win7以下不支持。所以使用部分PE时， PE所有的功能是无法所有正常使用的

- Test
    - 

- Alternatives
    - 

- Description
    - 
