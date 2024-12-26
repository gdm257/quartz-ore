---
aliases:
- 面具
tags:
- flag/License/GPL
- flag/Platform/Android独占
- Label/Industry-工业科学/IT/APP/GUI/Mobile
- flag/APP/Kernel
---

[topjohnwu/Magisk: The Magic Mask for Android](https://github.com/topjohnwu/Magisk)

[Magisk Documentation | Magisk](https://topjohnwu.github.io/Magisk/)

[Magisk and MagiskHide Installation and Troubleshooting guide](https://www.didgeridoohan.com/magisk/HomePage)

[Magisk模块常用功能编写](https://blog.mythsman.com/post/6093946a0527a03be7e559ca/)

[Magisk | 开启Android玩机世界 - 知乎](https://zhuanlan.zhihu.com/p/455107261)

[通过 TWRP + adb sideload 安装 Magisk 操作指南 – MIUI历史版本](https://miuiver.com/install-magisk-via-twrp/)

## 自定义模块

```bash
/data/adb/modules/$MODID/
    # 入口
    module.prop    # 元数据声明，可以 JSON（兼容性未知）
    system/    # Main Contents
    zygisk/    # 新版 Magisk 才支持 Zygisk，能 hook 每个 App 进程

    # 可选
    post-fs-data.sh
    service.sh
    uninstall.sh
    system.prop
    sepolicy.rule
    skip_mount

    # 下次开机时禁用、卸载模块
    disable
    remove

    # 自动生成，别动
    vendor/
    product/
    system_ext/

    # Magisk Module Installer (Optional)
    META-INF/
        com/google/android/
            update-binary    安装脚本
            update-script    Should only contain the string "#MAGISK"
    customize.sh    可选

```


## Zygisk

Zygisk 是 Magisk 24.0 引入的一项新特性，简单来说就是用来 hook App 的。

一个简单的应用场景就是「某 App 运行前自动调用 Magisk 模块，以此达到注入、修改等目的」。
