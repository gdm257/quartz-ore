---
tags:
  - flag/License/Proprietary
  - flag/Platform/Windows独占
  - flag/APP/File/Cryption
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
---

## Brief

- References
    - [双引导系统下的 VeraCrypt 配置 · LinuxTOY](https://linuxtoy.org/archives/veracrypt-configuration-tips-for-dualboot-system.html)

- Installation

- Dependencies

- Edition

- Idea
    - 系统级分区加密方案，也就是常说的全盘加密
    - 关机、注销、锁定后无法暴力破解

- Configuration

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Ecosystem

- Philosophy

- Objects

- Fundamentals
    - 加密整个分区，意味着转换了分区的文件系统
    - 注意，是加密整个分区，而不是只加密分区里的文件，前者是后者的超集
    - 加密后的分区的 FS 类型不再是原来的 FS（NTFS etc），而是一种新的 FS，因此需要 Driver 来提供访问支持。Windows 系统默认就集成了相关 Driver，因此 Windows 可以直接挂载 BitLocker 分区。Linux/MacOS 则需要手动安装 Driver，不仅功能有限，而且性能较差
    - Windows 虽然原生支持 BitLocker，但读写性能会有所下降，慢个几成这样，如果是 SSD 那基本无所谓，再怎么也比 HDD 快
    - BitLocker 加密 Windows 系统盘后还能正常开机，是因为 Windows 的 Boot Loader 支持 BitLocker，用户无需考虑 Boot Loader 的事，非常方便。而 [[VeraCrypt]] 加密系统盘后，必须修改启动分区、安装专用的 Boot Loader，否则无法正常开机，哪怕是有密钥

- Architecture

- Pro

- Con

- Test
    - 似乎Bitlocker仅对系统分区调用TPM(表现为Bitlocker管理页面中仅有系统盘加密时不用设置密码)，其它分区以及给移动硬盘用的Bitlocker To Go不用担心外置TPM被中间人攻击

- Alternatives

- Description
