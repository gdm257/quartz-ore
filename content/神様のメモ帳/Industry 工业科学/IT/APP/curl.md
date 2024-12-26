---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

- References
    - [Everything curl | 项目作者写的书](https://everything.curl.dev/)
    - [bagder/everything-curl: The book documenting the curl project, the curl tool, libcurl and more. Simply put: everything curl.](https://github.com/bagder/everything-curl)

```bash
curl command
Usage:
    curl [options] <urls>

URL:
    http://domain.com
    http://{blog,www}.domain.{com,org,xyz}
    http://domain.com/article/[1-100]
    http://domain.com/article/[0-100:10]
    http://domain.com/article/[001-100]
    http://domain.com/archive/[a-z]
    http://domain.com/archive/[a-z:2]

Options:
    # Output
    -o --output <file>    写入文件而不是 stdout
                          可用 #n 表示第 n 组 `{}` 或 `[]` 的值
                          #1 为第一组 `{}` 或 `[]` 的值
                          #2 为第二组 `{}` 或 `[]` 的值
                          E.g.
                              curl http://{site,host}.host[1-5].com\
                                  -o "#1_#2"
                              #1 依次为 site, host
                              #2 依次为 1-5
        --create-dirs    --output 时自动创建不存在的目录
    -D --dump-header <file>    将响应头写入文件
    -I --head    fetch headers ONLY
    -f --fail    Fail silently (no output at all)

    # Input
    -K --config <file>
    --cacert <file>    使用该CA证书来验证网站的证书，必须是 PEM 格式
    --capath <dir1[:dir2:dir3:...]>   相当于批量 --cacert
    --cert-status    验证证书的状态 through aka. OCSP
    --doh-url <url>    DoH server url
    --dns-servers "ip1:port,ip2,domain1:port,domain2"
    -k --insecure    允许不安全的证书 (如自签名证书)
    --cert <file>    服务器证书
                     must be in PKCS#12 format for Secure Transport
                     PEM for any other engine
        --cert-type {PEM,DER,ENG,P12}    服务器证书类型
    --key <file>    SSH 私钥
        --key-type {PEM,DER,ENG}    私钥类型
    -b --cookie "NAME01=value; NAME02=value"
    -b --cookie <file>
    -c --cookie-jar
    -H --header "X-First-Name: Joe"    可多次指定
    -H --header <@file>
    -F --form "name=content"
    --form-string "name=string"
    --data-urlencode <data>
    --data-ascii <data>
    --data-raw <data>
    --data-binary <data>
    -d --data <data>    data for POST request
    -G --get    GET method
    --anyauth    智能判断认证方式
    --basic    HTTP Basic authentication (默认)
    --digest    Enables HTTP Digest authentication
    --ntlm
    --negotiate
    --http0.9
    --http1.0 -0
    --http1.1
    --http2
    --http3
    -L --location    跟随重定向
    --keepalive-time 60    seconds
    --no-keepalive
    --compressed    Request a compressed response
                    if server sends an unsupported encoding,
                    curl will report an error
    --connect-timeout <seconds>    连接超时
    -m --max-time <senconds>    限制总用时
    --max-filesize <bytes>    default unit to bytes, you can specify
                              k/K    4K
                              m/M    100M
                              g/G    2G
    --limit-rate <speed>    限速，默认单位 bytes，可指定 k/K m/M g/G
    -x --proxy http://localhost:1080
        http://
        https://
        socks5://
        socks4://
        socks4a://
        socks5h://


sudo apt install curl

```