---
tags:
- Label/Industry-工业科学/IT/APP/BootLoader
- flag/APP/Kernel
---

- References
    - [UEFI/GPT 模式下使用 rEFInd 引导 Win10 & Linux 双系统的方案](https://altairwei.github.io/2018/10/31/win-linux-dual-system/)

- Installation
    - EFI 分区直装
        1. 下载并解压 `refind-bin-x.x.x.zip`
            - [The rEFInd Boot Manager: Getting rEFInd](http://www.rodsbooks.com/refind/getting.html)
        2. 重命名 `refind-bin-x.x.x/refind/` 为 `Z:/EFI/refind/`
            1. `cmd` -> `diskpart`
            2. `list disk`
            3. `select disk 数字`
            4. `list volume`
            5. `select volume 数字`
            6. `assign letter=Z` 挂载 EFI 分区为 Z 盘
        3. 重命名 `refind/refind_x64.efi` 为 `Z:/EFI/BOOT/bootx64.efi`
    - [The rEFInd Boot Manager: Installing and Uninstalling rEFInd](http://www.rodsbooks.com/refind/installing.html)
