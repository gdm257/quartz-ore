---
tags:
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - flag/APP/File/Cryption
extensions:
  - .hc
choco: veracrypt
---

- References
    - [隐私保护工具之磁盘加密软件 VeraCrypt - 🔰雨苁ℒ🔰](https://www.ddosi.org/veracrypt/)

- Fundamentals
    - 密钥
        - 不同「加密卷」的密钥不同（因为会读取鼠标轨迹作为盐）
        - 「加密卷」的「加密密钥」一旦生成无法改变！
        - 「密钥」本身需要被加密，支持 multi-factor 加密，包括「密码（手动输入的密码，也称为口令）」「Keyfiles」「PIM」「哈希算法」「盐随机数（鼠标轨迹）」
        - 警告：如果您已经创建了 TrueCrypt 应急盘，它将不能再用于系统分区/驱动器，这是因为您**每次加密系统分区/驱动器时都会使用不同的主密钥，尽管您使用的是同样的密码，您也必须创建一个新的 TrueCrypt 应急盘。**
        - 加密卷的加密密钥存储在卷的头部与尾部，即 header keys，大小一般在 1 KB 左右。如果损坏，整个加密卷无法使用
    - 系统收藏加密卷
        - 本质是「普通加密卷、系统加密卷使用相同的口令」
        - 系统收藏加密卷 不支持 Keyfiles（会导致无法自动挂载）
        - 「启动验证密码（口令）」相同才能保证在 bootloader 阶段统一挂载
        - 口令基于美国键盘布局，因此尽量只用 ASCII

- Dependencies
    - OpenSC
        - 如果 Keyfiles 保存在 Smart Card 硬件上 e.g. Yubikey
        - [[原]Veracrypt使用Yubikey作为安全令牌 - 月渊 - 博客园](https://www.cnblogs.com/yzpopulation/p/10657657.html)
    - Multi-factor Authentication
        1. password
        2. keyfiles
            1. Files
            2. Smart Card / EMV
            - NOT Support system partition
        3. PIM
        4. algorithm
        5. bootloader/应急盘
            - ONLY Support system partition
        6. salt
            - 每次修改加密设置，都会在加密卷中内置一个随机数作为加密因子，防止有人拿旧 bootloader 来攻击加密卷（亲测无用）
            - salt/bootloader 的随机数，应该就是根据鼠标轨迹生成的

- Pro
    - Support 隐藏的加密卷（双层加密卷）
        - 外层加密卷 用于 大记忆恢复术
        - 内层加密卷 用于 暗格
        - Support 在已有加密卷里创建「内层加密卷」。即「原加密卷」被当作「外层加密卷」
        - 外层加密卷容量 必须大于 内层加密卷
        - 毕竟外层加密卷太小一眼就不正常
        - 因此外层卷尽量不去动，伪装好即可

- Con
    - NOT Support [[Windows]] FS permissions
        - 权限设置无效
    - NOT Support 调整磁盘分区大小 if crypt partition in place
    - 隐藏的加密卷
        - 外层加密卷容量 必须大于 内层加密卷
        - 毕竟外层加密卷太小一眼就不正常
        - 但也因此浪费空间，不够实用
        - System Partition 不支持 隐藏的加密卷
    - Performance
        - 目前没有遇见性能问题，就是开机速度慢了点
    - NOT Support decrypt system partition directly
        - 系统盘是无法直接解密的，有密码也不行
        - 只有 bootloader 或 应急盘 才能解密，可理解为里面内置了一个 keyfile（随机数），具体来说，这个随机数存储在 EFI 分区的文件里
        - `EFI/`
            - `Microsoft/`
                - `Boot/`
                    - `BCD`
                    - `BCD.LOG`
                    - `BOOTSTAT.DAT`
    - NOT Support [[WSL]]
        - 不知为何 [[WSL]] 用不了了，不知道是不是 [[VeraCrypt]] 搞崩的

- Configuration
    - PIM
        - default to 98 or 485, which requires 500,000 iterations
        - PIM 3,000 == 6x of 485
        - It is fast to change PIM for encrypted volume
        - PIM 不影响 mount 完成之后的性能
    - 擦除
        - N次擦除 == N次全盘写入 == N倍耗时
        - 物理磁盘删除数据，通常都是打标记，而非真正写零，除非手动 Trim，否则完全由磁盘主控自行控制。这也是数据恢复的原理

- Dependencies
    - Bootloader for System Partition
        - 「加密系统分区」与「加密非系统分区」应该是没有本质区别
        - 只不过「加密系统分区」会生成 EFI 启动固件，并自动写入 EFI 分区。
        - [[rEFInd]] 在加密系统分区后依旧能够使用，亲测。这点比较奇怪，因为 UEFI 固件入口固定为 `EFI/BOOT/uefix64.efi`，没对此进行覆盖，是没法运行 [[VeraCrypt]] 的 bootloader 的，好在 [[rEFInd]] 本来就是用来启动其他 EFI 固件的，反而是好事
        - 测试了下，VeraCrypt 貌似修改了 [[Windows]] bootloader 固件，直接启动它会显示 VeraCrypt 挂载验证界面。此外 VerayCrypt 本身也有个 Bootloader，放在单独的文件夹里。二者功能完全相同
        - 开机时，该 bootloader（EFI firmware）需要在 [[Windows]] bootloader 之前运行，用来解密并挂载系统分区（需要输入密码、PIM，但不包括 keyfiles，因为系统分区加密不允许使用 keyfiles）
        - 生成的「应急救援镜像」应该保密，里面有敏感信息。尽管依旧处于加密状态，但只需要「密码」「PIM」「算法名」就能破解
        - 此外，System Partition 不支持「隐藏的加密卷」
    - 应急盘
        - 「应急盘」仅针对「系统分区加密卷」，为的是系统 bootloader 损坏时，作为备用启动方案
        - 简单来说，应急盘里有那个从始至终不会变的「加密密钥」，不过该密钥本身是被加密的，使用当前「口令」进行加密。因此修改「口令」后应该重新创建应急盘、销毁旧应急盘。由于只用「口令」加密，不包括「Keyfiles」etc，因此安全性是下降的，必须确保应急盘不会泄露
        - **注意：即使你丢失了你的 TrueCrypt 应急盘并且被攻击者发现了，他们没有正确的密码也无法解密已经加密了的系统分区或驱动器。**
        - **如果 TrueCrypt 启动管理器、主密钥、或其它关键数据损坏了，可以使用应急盘修复它们（当然你必须输入正确的密码）。**
        - 每当您更改密码时，您都应销毁 VeraCrypt 救援盘并创建一个新密码（选择系统 -> 创建救援盘）。否则，如果攻击者知道您的旧密码（例如，被击键记录器捕获），并且如果他找到您的旧 VeraCrypt 救援盘，他可以使用它来恢复密钥数据（用旧密码加密的主密钥），从而解密您的系统分区驱动器
        - 如果 Windows 系统损坏了并且无法启动，你可以在 Windows 启动前使用应急盘永久解密这个分区/驱动器。
        - 应急盘包含第一个柱面当前内容的备份（通常包含系统引导器或者启动管理器），在必要的时候你可以恢复它们。
        - [TrueCrypt 的一个[可能]的缺陷，如果密码恢复光盘被发现会怎么样？ - Nuclear'Atk（核攻击）网络安全实验室](https://lcx.cc/post/4282/)

- Objects
    - Encrypted Volume File
        - 几乎就是个加密的「虚拟磁盘 VHD」文件
