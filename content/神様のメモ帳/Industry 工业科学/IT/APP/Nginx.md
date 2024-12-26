---
tags:
  - flag/License/BSD
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Network
  - flag/APP/Layer/k8s/AddOns/GatewayAPI
  - flag/APP/Layer/k8s/AddOns/IngressController
ports:
  - "80"
  - "443"
---

# Nginx

[h5bp/server-configs-nginx: Nginx HTTP server boilerplate configs](https://github.com/h5bp/server-configs-nginx)

[Nginx第三方防火墙扩展 | Escape](https://www.escapelife.site/posts/84529923.html)

[网站性能如何影响转化率 | Cloudflare](https://www.cloudflare.com/zh-cn/learning/performance/more/website-performance-conversion-rates/)

[移动性能 | 如何使站点对移动友好 | Cloudflare](https://www.cloudflare.com/zh-cn/learning/performance/how-to-make-a-site-mobile-friendly/)

[如何防止网站瘫痪 | Cloudflare](https://www.cloudflare.com/zh-cn/learning/performance/preventing-downtime/)

[什么是 Core Web Vitals（CWV）？ | Cloudflare](https://www.cloudflare.com/zh-cn/learning/performance/what-are-core-web-vitals/)

[Optimize site speed · Cloudflare Docs](https://developers.cloudflare.com/learning-paths/optimize-site-speed/)

[什么是cdn\_CDN的工作原理\_使用CDN服务器的好处 | Cloudflare](https://www.cloudflare.com/zh-cn/learning/cdn/what-is-a-cdn/)

[全网最详细的负载均衡原理图解 - 知乎](https://zhuanlan.zhihu.com/p/346907076)

    要想完全掌握 Nginx，除了指令（directive）、变量（variable）、模块（module），还需要理解 Nginx 的编译、Nginx 命令行、Nginx 处理请求的流程；更进一步，自己编写 Nginx 模块；最后是阅读 Nginx 源码，一是帮助写出更合理的指令，二是帮助写出更强大的模块，三是自己修改 Nginx。这样才算是把 Nginx 玩透了 a.k.a. 精通 Nginx。


### 参考

[nginx documentation](https://nginx.org/en/docs/)

[trimstray/nginx-admins-handbook: How to improve NGINX performance, security, and other important things.](https://github.com/trimstray/nginx-admins-handbook)

[Nginx学习篇 | Poetry's Blog](http://blog.poetries.top/2018/02/25/nginx-study/)

[Nginx版本发布策略](https://www.jianshu.com/p/5bf22d925530)


#### location

[Nginx中proxy_pass的斜杠问题 - 简书](https://www.jianshu.com/p/c751250a5112)

[nginx之location的匹配规则 | Poetry's Blog](http://blog.poetries.top/2018/02/28/nginx-location-match-rules/)

[Nginx里Location语法使用基础知识 - 运维学习笔记博客](https://www.imydl.tech/lnmp/481.html)

[NGINX location 在配置中的优先级](https://linux.cn/article-5690-1.html)


#### proxy_pass

[HTTP头字段 - 维基百科，自由的百科全书](https://zh.wikipedia.org/zh-cn/HTTP%E5%A4%B4%E5%AD%97%E6%AE%B5)

[Nginx服务器的反向代理proxy_pass配置方法讲解_网络_chenyulancn的专栏-CSDN博客](https://blog.csdn.net/chenyulancn/article/details/70838264)


#### PHP

[如何正确配置Nginx+PHP | 火丁笔记](https://blog.huoding.com/2013/10/23/290)

[Linux 下 Nginx + PHP 环境的配置 - ZGQ's Blog](https://blog.izgq.net/archives/895/)


#### if

[深度硬核文:Nginx的301重定向处理过程分析 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000020521708)

#### 日志

[日志分析工具更新至GoAccess v1.3 - 运维学习笔记博客](https://www.imydl.tech/lnmp/719.html)


#### 安全

[Nginx常用屏蔽规则 - 让网站更安全 - Xcnte' s Blog](https://www.xcnte.com/archives/681/)

[Nginx 防止SQL注入、XSS攻击的实践配置方法 - 运维学习笔记博客](https://www.imydl.tech/lnmp/762.html)

[Nginx给网站添加用户认证配置（ Basic HTTP authentication） - Rat's Blog](https://www.moerats.com/archives/171/)

[Nginx环境使用auth_basic密码保护wordpress后台登录界面 - Rat's Blog](https://www.moerats.com/archives/170/)

[Nginx 安全加固规范 - Bypass - 博客园](https://www.cnblogs.com/xiaozi/p/10119062.html)


### 11 个阶段

[How nginx processes a TCP/UDP session](https://nginx.org/en/docs/stream/stream_processing.html)


- POST_READ
    - realip
- SERVER_REWIRTE
    - rewrite
        - rewrite
        - if
        - return
        - error_page
- FIND_CONFIG
    - nginx 框架
- REWRITE
    - rewrite
- POST_REWRITE
    - 无
- PREACCESS
    - limit_conn, limit_req
    - limit_req
    - limit_conn
- ACCESS
    - auth_basic, access, auth_request
    - access
    - auth_basic
    - auth_request
- POST_ACCESS
    - 无
- PRECONTENT
    - try_files
    - mirrors
- CONTENT
    - index, autoindex, concat 等等
    - concat
    - random_index
    - index
    - auto_index
    - static
        - root
        - alias
- LOG
    - access_log


### Command

```bash
nginx command
Compile:
    cd nginx-source-code
    ./configure --help
    ./configure [options]    生成 makefile
    make    编译
    make install    安装（复制文件到指定目录）

Usage:
    nginx [options]

Examples:
    nginx    # 启动
    nginx -s reload    # 重新加载配置文件
    nginx -s stop    # 退出
    nginx -t    # 检查配置文件

Options:
    -h
    -v    nginx version
    -V    nginx version, compiler version, configure parameters
    -t    检查配置文件，不运行
    -T    检查配置文件，不运行，并输出配置内容到 stdout
    -s <signal>
        reload    reloading the configuration file
        quit    graceful shutdown
        stop    fast shutdown
        reopen    reopening the log files
    -c <config-file>
    -e <error-log-file>
    -q    quiet
    -p "/usr/local/nginx"    set nginx path prefix
    -g <directives>
        全局指令。
        本来指令应该是写在配置文件里的，
        但 -g 可以以参数的形式来配置指令。
        -g "pid /var/run/nginx.pid; worker_processes `sysctl -n hw.ncpu`;"

Description:
    - nginx 有 Mainline 分支和 Stable 分支.
    - Mainline 是开发分支，包含最新的功能和 bug 修复.
    - Mainline 版本号的第二个数字如果是基数 E.g. v1.17.0
    - Stable 是稳定分支，merge 自 mainline，每年 4 月份发布一次.
    - Stable 版本号的第二个数字如果是偶数 E.g. v1.16.0
    - 把文件放在宿主机，然后挂载到容器中，修改配置文件只需要 docker exec -it containe_name nginx -s reload 即可重新加载配置文件.

```


### # 注释

```nginx
# 注释
server_name localhost; # 注释
listen 80; # 注释

```


### Configuration

「模块」与「指令」与「配置」的关系？

- nginx 的所有行为都由「配置」决定.
- 「配置」就是多个「指令」的嵌套与组合.
- 一个「指令」一定属于某个「模块」.
- 一个「模块」可以提供多个「指令」.
- 「指令」负责注册事件，nginx 会将数据交给「模块」处理，模块才是真干事的.
- 「模块」可看作「指令」の回调函数.

```bash
http {
    if () {

    }

    location {
        location {}
    }
}

```


### Directives

动作类指令无法合并。值指令可以合并，无值时继承父配置块，子配置存在时会覆盖掉父配置块值。



### Variables

```nginx
nginx中的变量分为两种，自定义变量、内置变量，但无论是哪种，变量只能存放一种类型的值，那就是字符串

变量名是整个配置文件可见，但变量的值是基于每个独立请求的上下文

set命令可以用在 server，location，if 配置上下文中

同一个上下文中，多次set同一个变量，使用配置中最后一个set值 (rewrite模块中return有额外影响)



// 0. 自定义变量
set $var01 value


// 0. 常用内置变量
$remote_addr
$host
$http_upgrade
$proxy_add_x_fowarded_for
$is_args
$args


// 1. http 请求相关の变量
$arg_name
$is_args
$args
$query_string
$require_uri
$uri
$host
$proxy_add_x_fowarded_for


$cookie_name

$args               这个变量等于请求行中的参数，同$query_string
$content_length     请求头中的Content-length字段。
$content_type       请求头中的Content-Type字段。
$document_root      当前请求在root指令中指定的值。
$host               请求主机头字段，否则为服务器名称。
$http_user_agent    客户端agent信息
$http_cookie        客户端cookie信息
$limit_rate         这个变量可以限制连接速率。
$request_method     客户端请求的动作，通常为GET或POST。
$remote_addr        客户端的IP地址。
$remote_port        客户端的端口。
$remote_user        已经经过Auth Basic Module验证的用户名。
$request_filename   当前请求的文件路径，由root或alias指令与URI请求生成。
$scheme             HTTP方法（如http，https）。
$server_protocol    请求使用的协议，通常是HTTP/1.0或HTTP/1.1。
$server_addr        服务器地址，在完成一次系统调用后可以确定这个值。
$server_name        服务器名称。
$server_port        请求到达服务器的端口号。
$request_uri        包含请求参数的原始URI，不包含主机名，如：”/foo/bar.php?arg=baz”。
$uri                不带请求参数的当前URI，$uri不包含主机名，如”/foo/bar.html”。
$document_uri       与$uri相同。

// 2. tcp 请求相关の变量


// 3. nginx 处理请求过程中产生の变量


// 4. 发送 http 响应时相关の变量


// 5. nginx 系统变量
```


### Modules

[nginx 自定义模块 | 残星](https://canxing.github.io/2018/08/23/ngxin-customize-module/)



### ====== Demand ======


### 重载重启の绝世大坑

0. 结论：

重载证书的钩子用 `docker-compose exec nginx nginx -s reload`

1. 重启流程：

nginx 以配置 A 启动 -> 相关文件无错 -> 启动成功
 -> 修改配置，称为配置 B  -> restart 或 stop && start
 **-> nginx 停止 -> nginx 以配置 A 启动 -> 相关文件无错 -> 初步恢复成功**
 -> nginx 以配置 B 重载 -> 相关文件无错 -> 重载完成 -> 结束

如果配置 A 恢复失败，nginx 进程就跑不起来，这会导致在 docker 中无限 restarting！

2. 重载流程：

nginx 以配置 A 启动 -> 相关文件无错 -> 启动成功
 -> 修改配置，称为配置 B -> reload
 -> nginx 以配置 B 重载 -> 相关文件无错 -> 重载完成 -> 结束

3. 举个例子：

证书更新后放到了其他路径（或新文件名），修改了 conf，那么 restart 要保证原证书存在才能恢复，然后才能成功重载新配置。原证书不存在就无限报错 `no such a file: /path/to/旧证书`。

这是个巨坑，明明新配置用了 `/path/新证书`，结果报错报的是 `/path/to/旧证书`，怎么想不通，测试了老半天才找到规律。

exec 的 reload、compose 的 restart 都可以更新证书缓存，照上面看来 restart 条件苛刻些，所以推荐 reload。


### 服务器 URL

IP [端口可选]
域名 [端口可选]
@
部分指令支持 upstream name


1. 允许 https://xxx.com/abc/../../../../ 这样的请求会不会有安全隐患？这种请求能否访问到 root /www/path 的上级文件夹？

应该是不大可能的。location 指令的文档提了一嘴，url 在进行 location 匹配之前，会先 url 序列化，base64、双斜杠、「.」、「..」会被处理，处理完才会进行 location 匹配。也就是说，https://xxx.com/abc/../../../../ 大概率会被序列化为 https://xxx.com/ ，虽然没读过 nginx 源码但这方面的安全 nginx 应该有比较成熟的限制了。

http://nginx.org/en/docs/http/ngx_http_core_module.html#location

当然，反序列化攻击就看 CMS 的造化了。



### URL decode

测试 url 编码的素材

世萌195
黑之契约者1 觉醒…


### ======= Config =======

### server_name

【特殊匹配格式】
```nginx
1. server_name ""; 匹配Host请求头不存在的情况。
2. server_name "-"; 无任何意义。
3. server_name "*"; 它被错误地解释为万能的名称。 它从不用作通用或通配符服务器名称。相反，它提供了server_name_in_redirect指令现在提供的功能。 现在不建议使用特殊名称“ *”，而应使用server_name_in_redirect指令。 
```

【server_name的配置格式之通配符匹配】

`server_name  *.example.org;`

通配符格式中的`*`号只能在域名的开头或结尾，并且`*`号两侧只能是`.`，所以`www.*.example.org`和`w*.example.org`是无效的。`*`号可以匹配多个域名部分，`*.example.org`不仅与`www.example.org`匹配，而且也与`www.sub.example.org`匹配。  
`.example.org`是比较特殊的通配符格式, 可以同时匹配确切名称`example.org`和通配符名称`*.example.org`。

【server_name的配置格式之正则匹配】

`server_name  ~^(?<user>.+)\.example\.net$;`

正则匹配格式，必须以`~`开头，比如：`server_name ~^www\d+\.example\.net$;`。如果开头没有`~`，则nginx认为是精确匹配，或者如果匹配字符中含有`*`号，则会被认为是通配符匹配，不过非法的通配符格式。在逻辑上，需要添加`^`和`$`锚定符号。注意，正则匹配格式中`.`为正则元字符，如果需要匹配`.`，则需要反斜线转义。如果正则匹配中含有`{`和`}`则需要双引号引用起来，避免nginx报错，如果未加双引号，则nginx会报如下错误：`directive "server_name" is not terminated by ";" in ...`。 正则表达式命名捕获的变量可以在nginx进行引用，下面示例:

```nginx
server {
    server_name   ~^(www\.)?(?<domain>.+)$;

    location / {
        root   /sites/$domain;
    
    }
}
```

正则表达式捕获也可以通过数字进行引用，数字引用不推荐使用，此种方式容易被覆盖。下面示例:

```nginx
server {
    server_name   ~^(www\.)?(.+)$;
    location / {
        root   /sites/$2;
    }
}
```


### upstream




### include

`include` 语句可以跟绝对路径或相对路径。Windows 绝对路径写法 `D:/path/to/file`。如果是相对路径，则是相对于主配置文件 `nginx.conf` 的所在目录，无论 `include` 指令是否写在 `nginx.conf` 里。



### location

location 匹配流程：

1. = 精准匹配，没有匹配则继续，有则停止 location 匹配
2. ^~ 前缀正则匹配，没有匹配则继续，**有则停止 location 匹配**
2. /xxx 最长的前缀字符串匹配，先记着，然后继续 location 匹配
3. ~ or ~* 正则匹配，**按 conf 文件中的书写顺序**，没有匹配则用最长的前缀字符串匹配，**有则停止 location 匹配**

……这么说，我的 location-security 岂不是一点用都没有？

= 精准匹配
^~ 前缀正则匹配，且不继续匹配正则
/xxx 前缀字符串匹配
~ 正则
~* 正则大小写不敏感

例如：`location ~ .*/dcity/.* {}`


### log


### gzip

### try_files

try_files $uri $uri/ /index.php;

当然在你的开发中可能会有变化，你可能需要基于你的需要设置更复杂的配置。 但是对于一个基础的网站来说，这个配置可以工作得很完美。 你应该永远从简单开始来搭建你的系统。

如果你不关心目录是否存在这个检测的话，你也可以决定忽略这个目录的检测，去掉 “$uri/” 这个配置。

### rewrite 模块

rewrite
语法: rewrite regex replacement [last|break|redirect|permanent];
默认值：
使用字段：server, location, if
flag:
last 重新循环匹配 location；
break 只往后执行，不重新匹配 location；
redirect 返回 302 临时重定向；
permanent 返回 301 永久重定向；
无 flag，再次循环同级匹配；

rewrite
if
return
error_page

有的http服务器在url末尾没有加斜线，又没有找到对应的文件，但是找到相应的目录的时候，会在原url上加上斜线，并发送一个301重定向给前台，让浏览器跳转到相应地址。但如果web服务器不这么做，或者是直接读取目录下的默认文件给前台，那么后果将是直接404，或者响应数据中所有相对路径的根目录都发生改变，导致资源404。即使http服务器为错误的url响应了重定向，也是无故的多了一次请求，浪费了性能



1. 301 ssl

```nginx
server {
    listen 80;
    server_name lnmp.org www.lnmp.org;
    return 301 https://lnmp.org$request_uri;
}
```

2. 301 www 到 @

```nginx
server {
    listen 443;
    server_name lnmp.org www.lnmp.org;

    if ($host = 'www.lnmp.org')
    {
        return 301 https://lnmp.org$request_uri;
    }
}
```


### proxy 模块

```bash
proxy_redirect
语法：proxy_redirect [ default|off|redirect replacement ]
默认值：proxy_redirect default
使用字段：http, server, location
如果需要修改从被代理服务器传来的应答头中的"Location"和"Refresh"字段，可以用这个指令设置。

locaction /zzzzzzz {
        proxy_pass http://netdata:19999/;
    }

【非正则】
一种是只包含 IP 和端口号的，最终代理到 $proxy_pass$location$uri，这种方式称为不带 URI 方式
另一种是在端口号之后有其他路径的，包含了只有单个 / 的如 proxy_pass http://localhost:8080/，以及其他路径，比如 proxy_pass http://localhost:8080/abc，对于带URI方式，nginx将使用诸如 alias 的替换方式对 URL 进行替换，且这种替换只是字面上的替换，最终代理到 $proxy_pass$uri


【正则】

    #一句话，末尾带 /，不保留 $location，反之保留
    #简单的说，proxy_pass 末尾带 /，nginx 转发给上游服务器的请求为
    # $proxy_pass$uri
    #末尾不带 /，nginx 转发给上游服务器的请求为
    # $proxy_pass$location$uri
    #另外，url = location + uri

    #proxy_pass 末尾的斜杠 / 极为重要！
    #它会自动更改 $uri 变量，
    #以使 /zzz 之后的部分发送给上游，
    #而无需显式 rewrite
    #例如：
    #http://myserver:443/zzz/index 发到后端为
    #http://netdata:19999/index

【常见案例1 - 把路径当域名使】

location /app {
    rewrite /app /app/ last;
}

location /app/ {
    proxy_pass http://gonic:80/;
}

注意，虽说这么做可以转发了，但有些软件还需要配置 base_url（prefix），在这里是「/app」

```

### ssl 模块

```bash
ssl_certificate /ssl/hacg.monster/fullchain.cer;
ssl_certificate_key /ssl/hacg.monster/hacg.monster.key;
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
ssl_prefer_server_ciphers off; #on 表示由 nginx 决定使用的协议套件
ssl_session_tickets off; #当我们在 Nginx 里面配置多个 https 的站点的时候，如果有一个站点开启了 ssl_session_tickets ，那么浏览器的就会缓存Session Ticket，然后在下一个请求使用当前的Session Ticket，提升性能；
#而然后再新增站点的时候，无论是否设置了 ssl_session_tickets 了。那么都会导致浏览器复用前一个的Session Ticket。
#于是就产生了 “此网站无法提供安全连接” 的问题。


# 非必要：
ssl_session_timeout 1d; #ssl 过期时间
ssl_session_cache shared:MozSSL:10m; #缓存，握手性能优化
```

### auth_basic 模块

[带你深入了解nginx基本登录认证（包含所有配置步骤和深度解析） | 墨抒颖](https://www.msy.plus/2021/08/14/nginx-basic-auth/)

```bash
echo -n 'user:' >> /etc/nginx/.htpasswd # user就是你要登陆的用户名
openssl passwd -apr1 >> /etc/nginx/.htpasswd # 接下来会提示你输入密码和确认密码

auth_basic "Log in";
auth_basic_user_file /etc/nginx/conf.d/.htaccess.passwd;


HTTP Basic Authentication protocol
http://username:password@example.com:port/path

```

### access 模块

allow
deny
