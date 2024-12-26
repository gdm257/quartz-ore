---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Network
ugly-cli: yes
commands:
  - acme.sh
---

- Alternative
    - [[lego]]

```bash
// 安装

curl  https://get.acme.sh | sh
wget -O -  https://get.acme.sh | sh
alias acme.sh=~/.acme.sh/acme.sh
acme.sh  --upgrade  --auto-upgrade
acme.sh  --uninstall
~/.acme.sh/ 迁移到新服务器

acme.sh --set-default-ca --server letsencrypt # 首选、不解释
acme.sh --set-default-ca --server zerossl # 需要绑定 zerossl 账号，暴露持有域名，安全堪忧，没事找事
```




```bash
// CloudFlare
# 环境参数
export CF_Token="73fOFt5YsZo37d1UhH8nJ2HXo2_SjQmfvfmRIp0e" && \
export CF_Account_ID="8970c93cc7a055003901b45ecf3c2660" && \
export CF_Zone_ID="" && \ #可选，续期别用，域名不匹配会报错，导致无法自动续期，所以记得去 vim ~/.acme.sh/account.conf 删掉 SAVED_CF_Zone_ID
export CF_Zone_ID="8d8b664d1da0d670824c7bcffd2b5d02" && \ #acgmn.pw
export CF_Zone_ID="bea56fa69f304c341a5c30d0b6d3c4d3" && \ #hentailoli.xyz
export CF_Zone_ID="579be937f188eb4ba8aea18bcd614c37" && \ #lolineko.com
或
export CF_Email="luoyemengchen@gmail.com" && \
export CF_Key="76deee3d6445451293d0feb6a49ad2ad3c068" && \
export CF_Key="K2GNmpi-4_RlUcpOQa1K_JEA7jkf4ZpJyMdd3my1" && \ #旧的
清除
unset CF_Account_ID && \
unset CF_Token && \
unset CF_Zone_ID && \
unset CF_Email && \
unset CF_Key && \

# 申请
acme.sh --issue --dns dns_cf -d lolineko.com    -d *.lolineko.com
acme.sh --issue --dns dns_cf -d ku-korose.xyz  -d *.ku-korose.xyz
acme.sh --issue --dns dns_cf -d hentailoli.xyz  -d *.hentailoli.xyz
acme.sh --issue --dns dns_cf -d acgmn.pw        -d *.acgmn.pw

注意，Key 和 Token 不是一个东西。Key 是账号的全局 API Key，是旧方法。Token 本质是第三方应用密码。现在更推荐使用 API Token

# 续期
acme.sh --list
acme.sh --renew-all
acme.sh --renew-all -f
acme.sh --renew -d lolineko.com --force
acme.sh --renew -d ku-korose.xyz --force
acme.sh --renew -d hentailoli.xyz --force
acme.sh --renew -d acgmn.pw --force
acme.sh --renew -d hacg.monster --force
acme.sh --remove -d acgmn.pw #移出列表

~/.acme.sh/account.conf
SAVED_CF_Token=''
SAVED_CF_Account_ID=''
或
SAVED_CF_Email=''
SAVED_CF_Key=''

申请时 CF_Key CF_Email 或 CF_Token CF_Account_ID 等变量会保存在 ~/.acme.sh/account.conf

强烈建议删去 SAVED_CF_Zone_ID，不影响续期。CF_Zone_ID 必须与域名对应，不匹配则会报错，导致续期失败



// Namesilo

export Namesilo_Key="5f5f2203b4566be9e2cff768"
unset Namesilo_Key

acme.sh --issue --dns dns_namesilo --dnssleep 900 -d hacg.monster -d *.hacg.monster

如果失败，可以卸载 acme.sh，再重新安装，有时候自动更新真是摆来看的，血的教训
```




```bash
// 部署

acme.sh --install-cert \
    -d lolineko.moe \
    --key-file /root/test/x-monster/services/nginx/ssl/lolineko/lolineko.key \
    --fullchain-file /root/test/x-monster/services/nginx/ssl/lolineko/fullchain.cer \
    --reloadcmd "cd /root/test/x-monster && docker-compose exec nginx nginx -s reload"

acme.sh --install-cert \
    -d lolineko.com \
    --key-file /root/test/x-monster/services/nginx/ssl/lolineko.com/lolineko.com.key \
    --fullchain-file /root/test/x-monster/services/nginx/ssl/lolineko.com/fullchain.cer \
    --reloadcmd "cd /root/test/x-monster && docker-compose exec nginx nginx -s reload"

acme.sh --install-cert \
    -d ku-korose.xyz \
    --key-file /root/test/x-monster/services/nginx/ssl/v2ray/cert.key \
    --fullchain-file /root/test/x-monster/services/nginx/ssl/v2ray/fullchain.cer \
    --reloadcmd "cd /root/test/x-monster && docker-compose exec nginx nginx -s reload"

acme.sh --install-cert \
    -d ku-korose.xyz \
    -d *.ku-korose.xyz \
    --key-file /root/test/x-monster/services/nginx/ssl/ku-korose.xyz/ku-korose.xyz.key \
    --fullchain-file /root/test/x-monster/services/nginx/ssl/ku-korose.xyz/fullchain.cer \
    --reloadcmd "cd /root/test/x-monster && docker-compose exec nginx nginx -s reload"

acme.sh --install-cert \
    -d hentailoli.xyz \
    -d *.hentailoli.xyz \
    --key-file /root/test/x-monster/services/nginx/ssl/hentailoli.xyz/hentailoli.xyz.key \
    --fullchain-file /root/test/x-monster/services/nginx/ssl/hentailoli.xyz/fullchain.cer \
    --reloadcmd "cd /root/test/x-monster && docker-compose exec nginx nginx -s reload"

acme.sh --install-cert \
    -d acgmn.pw \
    -d *.acgmn.pw \
    --key-file /root/test/x-monster/services/nginx/ssl/acgmn.pw/acgmn.pw.key \
    --fullchain-file /root/test/x-monster/services/nginx/ssl/acgmn.pw/fullchain.cer \
    --reloadcmd "cd /root/test/x-monster && docker-compose exec nginx nginx -s reload"

acme.sh --install-cert \
    -d hacg.monster \
    -d *.hacg.monster \
    --key-file /root/test/x-monster/services/nginx/ssl/hacg.monster/hacg.monster.key \
    --fullchain-file /root/test/x-monster/services/nginx/ssl/hacg.monster/fullchain.cer \
    --reloadcmd "cd /root/test/x-monster && docker-compose exec nginx nginx -s reload"

#docker exec 测试，只有 compose restart 和 nginx -s reload 能用
```


```bash
// 续期
acme.sh --list
acme.sh --renew -d lolineko.com --force
acme.sh --renew -d acgmn.pw --force
acme.sh --renew -d hacg.monster --force
```

```bash
//总结
1. 安装 acme.sh
2. 申请证书
3. 安装证书
4. 自动更新
5. 移除证书


// 安装 acme.sh
# acme.sh 相比 certbot 最大的好处就是简单、成功率高、自动续期
curl  https://get.acme.sh | sh
wget -O -  https://get.acme.sh | sh
alias acme.sh=~/.acme.sh/acme.sh #方便调用
acme.sh --uninstall #卸载
rm -rf ~/.acme.sh/





// 自动更新 acme.sh
acme.sh  --upgrade  --auto-upgrade #自动更新，一劳永逸
acme.sh --upgrade  --auto-upgrade  0 #关闭自动更新
acme.sh --upgrade #也可以手动更新
#由于 acme 协议和 letsencrypt CA 都在频繁的更新, 因此 acme.sh 也经常更新以保持同步




// 管理证书
acme.sh --list #列出
acme.sh --remove -d example.com [--ecc] #移除
acme.sh --renew -d example.com --force
acme.sh --renew -d example.com --force --ecc




// HTTP webroot 方式
acme.sh  --issue  -d clsn.io -d *.clsn.io  --webroot  /www/wwwroot/clsn.io/
#如果用 nginx：
acme.sh --issue  -d clsn.io  --nginx [/etc/nginx/nginx.conf]
acme.sh --issue  -d clsn.io  --nginx [/etc/nginx/conf.d/example.com.conf]
#可选手动指定 nginx 配置，或者是网站配置

// HTTP standalone 方式
acme.sh  --issue -d clsn.io   --standalone
#如果你还没有运行任何 web 服务, 80 端口是空闲的, 那么 acme.sh 还能假装自己是一个webserver, 临时听在80 端口, 完成验证




【向 CA 申请证书的流程】

1. 申请域名 abc.xxx
2. 向 CA 证明你是域名所有者，例如 webroot、dns txt
3. CA 验证并承认你的合法性
4. 生成证书
5. 部署证书
6. 钩子

据我观察，第二步有类似 cookies 的机制，如果你已经进行过 dnsapi webroot 等验证方式，此时重新申请证书，CA 会跳过第二步，直接生成新证书



# 正确的使用方法是使用 --installcert 命令,并指定目标位置, 然后证书文件会被copy到相应的位置。注意, 默认生成的证书都放在安装目录下: ~/.acme.sh/, 请不要直接使用此目录下的文件

# Nginx 的配置 ssl_certificate 使用 fullchain.cer ，而非 <domain>.cer ，否则 SSL Labs 的测试会报 Chain issues Incomplete 错误

#生成的证书文件推荐使用 fullchain.cer，私钥文件为是 <domain>.key

cert.pem服务端证书
chain.pem浏览器需要的所有证书，但不包括服务端证书，比如根证书和中间证书
fullchain.pem包括了cert.pem和chain.pem的内容
privkey.pem私钥

```
