---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Kernel
---

## lsmod

```bash
lsmod command
Usage:
    lsmod    没有选项，这就是唯一用法

Description:
    * 显示已经由核心装载的内核模块
    * 打印的内容解析自 /proc/modules

Examples:
    lsmod | grep -i veth    是否装载了 veth 模块
    $ lsmod
    Module                  Size  Used by
    xt_nat                 16384  125
    xt_tcpudp              16384  279
    veth                   24576  0
    xt_conntrack           16384  2
    ipt_MASQUERADE         16384  79
    nf_conntrack_netlink    49152  0
    xfrm_user              40960  1
    xfrm_algo              16384  1 xfrm_user
    nft_counter            16384  326
    ......

```