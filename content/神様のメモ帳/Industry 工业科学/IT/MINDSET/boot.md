---
tags:
    - Label/Article/Industry-工业科学/IT/APP/OS/BootLoader
---

# boot

开机:
    - 0. 硬件通电
    - 1. 主板固件
        - Legacy BIOS 固件
        - UEFI 固件
    - 2. bootloader
        - Legacy BIOS
            * DBR (DOS Boot Record 分区引导扇区)
                * EBR
                * VBR
            * NTLDR
            * Windows Boot Manager
            * syslinux
                * syslinux
                * isolinux
                * pexlinux
                * extlinux
                * MEMDISK
            * LILO
            * grub (传统 grub)
            * grub4dos (grub 分支)
            * Ventoy
        - UEFI
            * grub2
            * Windows Boot Manager
            * Ventoy
    - 3. Kernal

MBR: 我们的最终目的，本质是一块硬盘，一块有着 MBR、MBR 指向的 bootloader、bootloader 能引导的 OS の硬盘.
UEFI: 我们的最终目的，本质是一块硬盘.


## 系统镜像

[如何制作 Windows Server 2019 的 DD 镜像 | 秋水逸冰](https://teddysun.com/544.html)

[制作适用于 WSL 的任意 Linux 镜像 | 秋水逸冰](https://teddysun.com/646.html)

[适用于 UEFI 启动的多个 Windows 系统 DD 镜像 | 秋水逸冰](https://teddysun.com/656.html)

[Windows Server 2019/2016/2012R2 Datacenter DD 镜像 | 秋水逸冰](https://teddysun.com/545.html)

[Windows Server 2022 Datacenter DD 镜像 | 秋水逸冰](https://teddysun.com/629.html)

[一键安装KMS服务脚本 | 秋水逸冰](https://teddysun.com/530.html)

系统镜像:
    * .iso 微软官方镜像
    * .wim
    * .esd
    * .gho

Windows Preinstallation Environment:
    * [Hikari PE](https://hikaricalyx.com/hikaripe/)
    * [Edgeless](https://home.edgeless.top/)
    * [FirPE](https://firpe.cn/page-247)
    * [微PE](https://www.wepe.com.cn/)
    * 特点: 无广告、无捆绑、无后门、由雅、热爱开源、热爱分享、用爱发电.

File System:
    * exFAT    跨平台，兼容性较好
    * FAT



裸机部署：
其实还有一种方法，硬盘拷贝法，制作一个装好系统的硬盘，直接格式化、拷贝到其他硬盘，然后将硬盘一个个插回主机即可，bios 会自动启动系统

看了文章才发现，这就是 dd 镜像的原理，只不过从物理硬盘变成了虚拟硬盘，dd 镜像就是个 VHD 虚拟硬盘文件。这块硬盘已经装好了系统，就这么简单



特殊分区？
ESP 分区非常有必要，无论是 Legacy BIOS 还是 UEFI。我没记错的话，Legacy BIOS 方案下的 WindowsBootManager/BCD 相关文件都是放在 ESP 分区的。ESP 对 UEFI 的重要性就更不必说了，UEFI 规范可是强制要求系统所在硬盘至少要有一个 EFI System Partition.
ESPの备份分区：启动用不到它。新建一个分区，用来备份 ESP 分区的文件。
MSR 分区是微软保留分区，纯粹的保留分区，一片空白，也不会有程序去读取它。已成为历史遗物，现在连 win10 安装都不再创建 MSR 分区。直接删掉这个分区就好。


「虚拟硬盘/分区备份」vs「系统备份」vs「文件备份」？
「虚拟硬盘/分区备份」本质是「扇区备份」，因此恢复时也是扇区级恢复，所以恢复前要格式化分区/格式化硬盘。
「文件备份」的恢复则不要求格式化，这就是最大的区别。
「系统备份」本质是「文件备份」+「少量的扇区备份（MBR/PBR）」，只不过恢复之前可能会格式化分区。
所以严格来说只有「磁盘备份/分区备份」vs「文件备份」这两种。
我很不喜欢「系统备份」。本来 分区表、ESP (bootloader)、Kernal 是解耦的，系统备份软件把它们整合到了一起，一方面不够灵活、一方面浪费空间。
分区表可以单独备份，出了问题，还原即可；
ESP 出了问题……只要备份好 efi 相关文件，ESP 最不怕出问题，实在不行进 WinPE 配置个 WindowsBootManager/grub2，给 UEFI 添加个启动项就搞定；
Kernal 出了问题，文件级恢复即可；
系统备份软件每次恢复相当于把上面 3 个操作都做了一遍。
论简单，不如磁盘备份来的直接；
论效率，不如分别操作灵活。
唯一的优点就是对小白友好，但对懂技术的人来说，很少能用到。
运维都是 PXE 或 vhd，用得着你系统备份？
开发直接 restic 或 rsync 或软件级 dump，再加上 docker/k8s，轮得到你笨重的系统备份？




来源请求？
install.wim 和 install.esd 本身是不可引导的，无法启动的。
其实他们和一个压缩包  rar/zip/7z  等没什么区别。
目测一下，拆包 WinPE 的 iso 会发现里边有 wim，所以 wim 单纯是压缩包、本身不可引导的真实性很高.



## Legacy BIOS

[CentOS 6开机流程(MBR+SysV) | 骏马金龙](https://www.junmajinlong.com/linux/boot_process_bios_mbr/)

[Windows系统开机引导顺序简述及运维小结 - 知乎](https://zhuanlan.zhihu.com/p/355526135)

[Legacy BIOS 访问范围限制 | Ventoy](https://www.ventoy.net/cn/doc_legacy_limit.html)


BIOS Type:
    * x86 Legacy BIOS
    * IA32 UEFI
    * x86_64 UEFI
    * ARM64 UEFI
    * MIPS64EL UEFI
    - P.S. Legacy BIOS 只启动 MBR 分区的磁盘
    - P.S. 其实就 2 种，Legacy 和 UEFI


## UEFI

[Specifications | Unified Extensible Firmware Interface Forum](https://uefi.org/specifications)

[（译）UEFI 启动：实际工作原理](https://izhaojie.com/2019/01/02/uefi-boot-principle.html)

[（译）UEFI 启动：实际工作原理 - mahocon - 博客园](https://www.cnblogs.com/mahocon/p/5691348.html)

[UEFI boot: how does that actually work, then? | AdamW on Linux and more](https://www.happyassassin.net/posts/2014/01/25/uefi-boot-how-does-that-actually-work-then/)

[systemd时代的开机启动流程(UEFI+systemd) | 骏马金龙](https://www.junmajinlong.com/linux/systemd/systemd_bootup/)

[dmverify-analysis/uefi-boot-process.md at master · openthos/dmverify-analysis](https://github.com/openthos/dmverify-analysis/blob/master/report/uefi-boot-process.md)

[启动和 UEFI - Windows drivers | Microsoft Docs](https://docs.microsoft.com/zh-cn/windows-hardware/drivers/bringup/boot-and-uefi)

[Windows系统开机引导顺序简述及运维小结 - 知乎](https://zhuanlan.zhihu.com/p/355526135)

[shim启动流程分析 - 知乎](https://zhuanlan.zhihu.com/p/436456032)

[11. UEFI | OpenCore 简体中文参考手册(非官方)](https://oc.skk.moe/11-uefi.html)

[一个好用又好看的UEFI启动管理器rEFInd- Community - Deepin Technology](https://bbs.deepin.org/en/post/221068)



[[ChatGPT]]
EFI启动项的名称是存储在主板固件的存储器里，而不是存储在硬盘上。在传统的BIOS系统中，启动信息通常存储在硬盘的引导扇区中，但在EFI系统中，启动项信息存储在主板的固件中，这些信息通常以NVRAM（非易失性随机存储器）的形式保存在主板上。这样做的好处是，EFI启动项的管理更加灵活和简便，并且可以支持多个操作系统的启动选择。

[[ChatGPT]]
NVRAM 的容量因主板而异，大多数主板的 NVRAM 容量为 64KB 或 128KB，有一些高端主板的 NVRAM 容量则更大。通常情况下，每个 EFI 启动项需要占用 1KB 左右的空间，因此，一般的主板可以保存 60 至 120 个不同的 EFI 启动项。但需要注意的是，具体数量还可能受到其他因素的影响，例如原来的 EFI 启动项删除后留下的空白空间大小。同时，在更新主板 BIOS 或更换主板时，NVRAM 中存储的 EFI 启动项也可能被清空。因此，定期备份 EFI 启动项信息是一项必要的操作。






原生 UEFI 使用 efi 文件，对标 Legacy BIOS 使用 bootloader。

「UEFI 启动管理器」负责提供交互界面，让用户选择到底使用哪个 UEFI 启动管理器项（包括引导某个系统的 efi 项、MBR 项），这些启动项是 UEFI 固件自动扫描并生成的。

「UEFI 启动管理器」到底属不属于属于主板上的 UEFI 固件？

如果属于，那为什么可以使用 efibootmgr 这样的命令进行配置？不同主板的固件是不同的，兼容性有这么好？

如果不属于，那怎么保证 UEFI 固件一定会运行 UEFI 启动管理器？

二选一，有一个是对的，但每个都有疑点。

找到答案了，真是出人意料，两个都对。UEFI 固件自带 UEFI 启动管理器，但也可以通过该管理器启动存放在硬盘上的 UEFI 启动管理器。

关于疑问，也有了答案：如果没配置固件里的 UEFI 启动管理器项，那么默认运行 <EFI Partition>/efi/boot/boot{x64,arm,a64,...}.efi

UEFI 规范下，bootloader 的安装异常简单，本质就是把 .efi 及其需要的文件放在 EFI 分区的某个目录下，然后添加对应的 UEFI 启动管理器项。



UEFI模式下必须要有一个EFI系统分区才可以启动，而且这个分区必须是FAT格式的文件系统。这个是UEFI规范的强制性要求，必须遵守。
EFI系统分区，用来保存UEFI模式下的启动文件以及Ventoy的其他文件。这些文件都比较小，所以这个分区只分配了32MB的空间就够了。 其实，这个EFI系统分区可以是第一个分区，也可以是第二个分区。这里把它放在第二个分区，纯粹是因为在某些早期版本的Windows系统中，只有U盘的第一个分区才能挂载使用， 后面的分区是看不到的。当然，第二个分区不可见对于Ventoy来说也是件好事，可以防止用户误操作。
这个分区很小，是用来保存Ventoy的核心文件的，所以用户最好不要对其做改动。 


UEFI 目前还有一些缺点，由于安装 bootloader 的的本质就是拷贝进 EFI 分区，该分区文件组织可能一团乱麻，虽然有规范在，但启动项的存在可能致使很多 .efi 开发者不遵守（不知道）规范。最终的结果就是，想要卸载、更新 efi，不知道该动哪些文件

理解了 UEFI，我现在知道安装系统，到底 /boot 要不要分区。结论，UEFI 方案必须单独一个 FAT 分区用来挂载 /boot，因为这是 UEFI 规范。分区 1G 大小完全足够折腾很多启动方案了，如果强迫症觉得不保险可以分配 2G。

Legacy BIOS 不一定，跟随 bootloader 安装教程就好


## MBR

[CentOS 6开机流程(MBR+SysV) | 骏马金龙](https://www.junmajinlong.com/linux/boot_process_bios_mbr/)

[Ventoy MBR格式U盘分区布局 | Ventoy](https://www.ventoy.net/cn/doc_disk_layout.html)


MBR 首先是一种分区格式，即「MBR 分区（格式）」。
MBR 也是「Master Boot Record」的缩写，主引导记录是一段 512 bytes 的数据，刚好一个扇区大小，存储在磁盘的第一个扇区里。因此这个扇区也叫「MBR 扇区」。如果 Master Boot Record 的最后 2 bytes 为 `0x55 0xAA`，表示这块磁盘的 MBR 是合理有效的 MBR，反之无效。


Ventoy MBR Disk:
    * 磁盘头部    1MB    未分配    存放Legacy BIOS模式下的启动文件
    * 第1个分区    剩余全部    exFAT...    正常存放文件
    * 第2个分区    32MB    FAT    EFI分区
    * 磁盘尾部    自定义大小    未分配    保留空间，Ventoy不会用，用户可瞎整    v1.0.14
    - 少量机器的 UEFI 固件只支持 GPT，不支持 MBR.

Ventoy GPT Disk:
    * 磁盘头部    1MB    未分配    Protect MBR + GPT Part Table + GAP
    * 第1个分区    剩余全部    exFAT...    正常存放文件
    * 第2个分区    32MB    FAT    EFI分区
    * 紧挨磁盘尾部    自定义大小    未分配    保留空间，Ventoy不会用，用户可瞎整    v1.0.14
    * 磁盘尾部    32MB    FAT    EFI
    - Legacy BIOS 可能不支持 GPT，因此U盘优先使用 MBR.



许多年前硬盘的每个物理扇区 physical setctor 大小为 512 bytes，现在硬盘的物理扇区大小基本都是 4096 bytes。很多软件不支持大扇区，为了兼容性，硬盘对外报告的是「逻辑扇区」而非物理扇区，逻辑扇区也是硬盘的最小读写单元，硬盘内部自己唯一一张表，使逻辑扇区与物理扇区一一对应。
软件并不关系数据如何存储，只关心读写，虚拟的「逻辑扇区」做到了这点。但「逻辑扇区」容量太小，使用起来不够方便，于是进一步虚拟出「block」、「簇」。


0xHH == 2 个十六进制 == 1 bytes
每 1 个 八进制数 等价于 3 个 二进制数，因为 log(2)8 = 3
每 1 个 十六进制 等价于 4 个 二进制数，因为 log(2)16 = 4
1 bytes == 8 bits == 8 位二进制数 == 8 个二进制数 == 2 个十六进制数 == 2 位十六进制数 == 0xHH
八进制其实用的不多，我老是想到八进制是因为 1 bytes 等于 8 bits，但这根本不是一个概念。




## GPT

[GPT 分区详解 金步国](http://www.jinbuguo.com/storage/gpt.html)

[MBR vs GPT | Ventoy](https://www.ventoy.net/cn/doc_mbr_vs_gpt.html)

[Ventoy GPT格式U盘分区布局 | Ventoy](https://www.ventoy.net/cn/doc_disk_layout_gpt.html)


GPT:
    * Protect MBR
    * EFI信息区(GPT头)
    * 分区表
    * Partition 1
    * Partition 2
    * Partition n
    * 分区表备份
    * GPT头备份

磁盘头部
根据GPT格式规范，第一个扇区(LBA0)是一个 Protect MBR, LBA1 ~ LBA33 是GPT分区表信息。LBA34 ~ LBA2047用来保存Ventoy Legacy BIOS模式的启动文件 (和MBR格式保持一致)



## unattend

[Ventoy 直接启动 VHD(x) 文件 . Ventoy](https://www.ventoy.net/cn/plugin_vhdboot.html#local_vhd_boot)

[高通用性的自动应答安装配置文件 - 综合讨论区 - 无忧启动论坛 - Powered by Discuz!](http://bbs.wuyou.net/forum.php?mod=viewthread&tid=414837)

[Ventoy 无人值守 | Ventoy](https://www.ventoy.net/cn/plugin_autoinstall.html)

[Ventoy 文件注入ISO插件 | Ventoy](https://www.ventoy.net/cn/plugin_injection.html)

[如何往 Linux Live 系统中注入文件 | Ventoy](https://www.ventoy.net/cn/doc_live_injection.html)

[替换ISO文件启动菜单背景图片 | Ventoy](https://www.ventoy.net/cn/doc_boot_background.html)

[Ventoy 数据持久化插件 | Ventoy](https://www.ventoy.net/cn/plugin_persistence.html)



## bootloader

[翻译wiki(一)：Bios boot partition - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7084627.html)

[CentOS 6开机流程(MBR+SysV) | 骏马金龙](https://www.junmajinlong.com/linux/boot_process_bios_mbr/)

[Ventoy 启动本地硬盘中的镜像文件 | Ventoy](https://www.ventoy.net/cn/doc_vlnk.html)

[Ventoy Plugin.wimboot . Ventoy](https://www.ventoy.net/cn/plugin_wimboot.html)

[Ventoy WIMBOOT 模式说明](https://www.ventoy.net/cn/doc_wimboot.html)

[Syslinux (简体中文) - ArchWiki](https://wiki.archlinux.org/title/Syslinux_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

bootloaderの作用:
    * 加载 Kernal
    * 让用户从多系统中选择想要启动的系统
    * 启动其他 bootloader

grub2 configuration:
    /boot/grub/grub.cfg
    /EFI/BOOT/grub.cfg
    /EFI/boot/grub.cfg
    /efi/boot/grub.cfg
    /grub/grub.cfg
    /EFI/BOOT/BOOTX64.conf
    /EFI/debian/grub.cfg
    一般情况下 grub2 配置文件路径是上述的某一种


GNU GRUB 主要用来引导 *nix 系统。
GRUB2的版本号为0.98或更高。
旧的GRUB的版本号则为0.97或更低，也被称为“GRUB Legacy”或“GRUB1”等。
grub4dos 是 GNU GRUB 的分支，额外支持引导 DOS 和 Windows 系统。
CentOS 6使用的是传统grub
CentOS 7使用的是grub2


在创建文件系统时，是否还记得有些分区的第一个block是boot sector？这个启动扇区中也放了boot loader，大小也很有限。如果是主分区上的boot sector，则该段boot loader所在扇区称为VBR(volumn boot record)，如果是逻辑分区上的boot sector，则该段boot loader所在扇区称为EBR(Extended boot sector)。但很不幸，这两种方式的boot loader都很少被使用上了，因为它们很不方便，加上后面出现了启动管理器(LILO和GRUB)，它们就被遗忘了。但即使如此，在分区中还是存在boot sector。
使用grub管理引导菜单时，VBR/EBR就毫无用处了，具体的见下文。


## grub 2

[grub2详解(翻译和整理官方手册) - 骏马金龙 - 博客园](https://www.cnblogs.com/f-ck-need-u/p/7094693.html)

[GNU GRUB Manual 2.06: Top](https://www.gnu.org/software/grub/manual/grub/html_node/index.html)

[GRUB 2 中文手册 | a1ive@github](https://a1ive.github.io/grub2_zh.html)

[GRUB2配置文件"grub.cfg"详解(GRUB2实战手册) 金步国](http://www.jinbuguo.com/linux/grub.cfg.html)

[CentOS 6开机流程(MBR+SysV) | 骏马金龙](https://www.junmajinlong.com/linux/boot_process_bios_mbr/)

[Grub2的简单使用 - GRUB2 - 无忧启动论坛 - Powered by Discuz!](http://bbs.wuyou.net/forum.php?mod=viewthread&tid=418147&extra=page%3D1%26filter%3Ddigest%26digest%3D1)

[grub2boot | Ventoy](https://www.ventoy.net/cn/doc_grub2boot.html)

[GNU GRUB - 维基百科，自由的百科全书](https://zh.m.wikipedia.org/wiki/GNU_GRUB)

[GRUB 2 直接从硬盘运行 ISO 文件](https://linux.cn/article-6424-1.html)
[grub2各种手动命令引导教程（引导Ubuntu及安装镜像，arch Linux及安装镜像，Windows及winPE）](https://blog.csdn.net/qq_42748849/article/details/81273703)
[GRUB 引导 Linux 与 Windows 10](https://blog.itswincer.com/posts/ad42f575/)


目前大部分桌面发行版都使用 grub 2.


## Windows Boot Manager

[Windows启动管理器 - 维基百科，自由的百科全书](https://zh.wikipedia.org/zh-cn/Windows%E9%96%8B%E6%A9%9F%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BC%8F)


## OpenCore

[OpenCore 简体中文参考手册 | OpenCore 简体中文参考手册(非官方)](https://oc.skk.moe/)

[精解OpenCore | 黑果小兵的部落阁](https://blog.daliansky.net/OpenCore-BootLoader.html)

[完全面向萌新的黑苹果安装教学：黑苹果安装从入门到入白-黑苹果动力](https://www.mfpud.com/topics/10263/)



## ~~Esay2Boot~~

[Easy2Boot 启动U盘的制作与使用](http://bbs.wuyou.net/forum.php?mod=viewthread&tid=386566)

[Easy2Boot v1.A9 + RMPrepUSB v2.1.741a](https://blog.wongcw.com/2019/02/21/easy2boot-v1-a9-rmprepusb-v2-1-741a/)


启动盘制作工具，基于 grub4dos，因此不推荐使用.



## 注销、重启、关机

重启相当于 boot loader 之后的流程再来一遍。

注销只不过是关闭了一个 GUI shell 及其开启的进程罢了。

