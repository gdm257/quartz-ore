---
tags:
- flag/License/Freeware
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- Label/Industry-工业科学/IT/APP/GUI/Mobile
- flag/APP/Network/Implement__/RemoteControl
---

- Installation
    - `scoop install todesk`

- Description
    - ToDesk 是一款远程控制软件
    - ToDesk 支持 自动建立局域网连接
    - ToDesk 不支持 自定义监听端口
    - ToDesk 建议开启「高性能模式」，以关闭画面锐化、开启原画、帧率固定 60、H.264 硬编解码
    - RP - RUDP P2P（其实就是局域网连接）：画面无延迟、操作无延迟、网络稳定，但是音频有延迟，约 250 ms
    - ToDesk 声音方案比较奇葩，是获取真实音频输出，而不是 hook 系统音频输入。也就是说，如果 Host 静音，那 Client 就没有声音。最重要的是，这种实现方案，音频无论如何都有延迟
