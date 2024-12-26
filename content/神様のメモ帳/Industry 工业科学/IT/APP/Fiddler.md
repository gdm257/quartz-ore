---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## Fiddler

03:44:51:3647 fiddler.network.gateway> Unable to resolve upstream proxy 'http://192.168.1.11'... ignoring.

我吐了，原来真的是 fiddler 没转发给 clash，这个 bug 巨坑。我是说明明配置一点错也没有，怎么 clash 就是没接收到请求。

之前 fiddler 指定 gateway 为系统代理，转发失败。现在弄了几次，这次居然成功转发给 clash 了……除了玄学，我没有任何话想说……

`http=127.0.0.1:7890;https=127.0.0.1:7890;ftp=127.0.0.1:7890`

我懂了！原来这个 gateway 指定的不是与代理的协议，而是指定不同协议的目标代理。即不同协议不同代理，所以 http https ftp 三个协议都要填写。我之前只填写了 http，所以 https 请求就没发送到 clash。