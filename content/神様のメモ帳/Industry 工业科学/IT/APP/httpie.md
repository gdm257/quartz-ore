---
aliases:
  - http command
  - https command
tags:
  - flag/License/BSD
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Network
  - flag/Protocol/HTTP
commands:
  - http
  - https
pip: httpie
apt: httpie
choco: httpie
snap: httpie
yum: httpie
dnf: httpie
brew: httpie
pacman: httpie
bsd-pkg: www/py-httpie
---

- References
    - [HTTPie 中文文档 (v1.0.3)](https://httpie.cn/doc/)
    - [HTTPie使用详解 - 知乎](https://zhuanlan.zhihu.com/p/45093545)

```bash
http command
Examples:
    http post httpbin.org myinfo=@e:/r.json

Usage:
    http[s] \
        [options]  \
        [method]  \
        <[http[s]://]URL>  \
        [header:"value"]...  \
        [param=="value"]...  \
        [field="value"]  \
        [field="@f.txt"]  \
        [field:="@f.json"]  \
        [field:='{"json": true}']  \
        [field@/dir/file]  \  # 必须配合 --form flag 才能用

Options:
    -f --form    提交表单
    -h --headers    只打印响应头
    -b --body    只打印响应体
    -v --verbose    打印 请求&响应 交互内容
    -p --print {H,B,h,b}    打印指定内容，可多选
        H 请求头
        B 请求体
        h 响应头
        b 响应体
    --proxy=http:http://<ip:port>    支持 HTTP_PROXY 环境变量
    --proxy=https:https://<ip:port>    支持 HTTPS_PROXY 环境变量
    --proxy=http:socks5://<ip:port>    pip install -U requests[socks]
    --proxy=https:socks5://<ip:port>
    --default-scheme={https,http}
    --follow -F    自动重定向（默认不开启）
    -d --download    下载，类似 wget 模式
    -o --output <file>    下载文件路径

Request:
    @    读取文件内容
    :=    原生json
    \    转义符

Description:
    GET 是默认方法
    http:// 是默认协议
    自动重定向默认关闭
    alias https='http --default-scheme=https'
```
