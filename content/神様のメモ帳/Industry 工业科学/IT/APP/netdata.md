---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## netdata

[Netdata Docs | Learn Netdata](https://learn.netdata.cloud/docs/)


```bash
netdata command
Installation:
    * 包管理器安装
          apt install -y netdata
          yum install -y netdata
    * 官方脚本安装
          wget -O /tmp/netdata-kickstart.sh  \
            https://my-netdata.io/kickstart.sh  \
            &&  \
            sh /tmp/netdata-kickstart.sh  \
                --stable-channel  \
                --disable-telemetry  \
                --no-updates  \

/etc/netdata/:
    * netdata.conf
        [web]
            default port = 19999
            bind to = *    default to `localhost`

Description:
    * netdata 没有任何账户体系，我们需要用 Nginx 来认证.

```