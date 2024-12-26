---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Network
commands:
  - whois
apt: whois
yum: whois
---

## whois

```bash
apt install -y whois
sudo yum install -y whois
代理 whois -socks5 127.0.0.1:1080 xxxxx.chrome

// windows
whois.exe 同目录下新建 whois-servers.txt，可以添加 whois server，从而查询不支持的后缀：
android domain-registry-whois.l.google.com
google domain-registry-whois.l.google.com
xyz whois.nic.xyz
tokyo whois.nic.tokyo



// linux
https://teddysun.com/415.html
https://github.com/jonasob/jwhois
```