---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## apache
### 管理

```bash
# 全平台
httpd -M 列出模块
httpd -S 查看虚拟主机配置
httpd -t 检测配置是否正确
httpd -f <httpd_conf_file>
httpd -k start
httpd -k stop
httpd -k restart

# Windows
httpd.exe -k install 安装为服务 Apache2.4
httpd.exe -k install -n "MyServiceName"
httpd.exe -k install -n "MyServiceName" -f "c:/files/my.conf"
httpd.exe -n "MyServiceName" -t 测试配置是否可用
httpd.exe -k start -n "MyServiceName"
httpd.exe -k stop -n "MyServiceName"
httpd.exe -k restart -n "MyServiceName"
httpd.exe -k uninstall
httpd.exe -k uninstall -n "MyServiceName"


# Unix
apachectl start
apachectl stop
apachectl restart
apachectl fullstatus



```



### 指令

```conf
<VirtualHost>
<Files>和<Directory>段的组合可以作用于文件系统中的特定文件
<Location>指令与其相应的正则表达式版本(<LocationMatch>)一起作用于网络空间的特定部分，<Location>指令与文件系统无关
<Limit>

ServerRoot : Apache的主目录
Listen：apache监听的端口号
LoadModule：加载动态模块
User/Group：apache进程执行者
ServerAdmin：服务器返回客户端的错误信息中会包含该邮件地址，所以推荐写邮箱地址
ServerName:服务器域名，无需配置
DocumentRoot：网站根目录（apache运行项目的根地址）
Option指令是Apache配置文件中比较常见的指令，该指令可以在Apache服务器核心配置（server config）、虚拟主机配置（virtual host）、特定目录配置（directory）以及.htaccess文件中使用，该指令主要作用是控制特定目录启动哪些服务器特性

Options +Indexes ：加上该指令可以在网页上查看项目某个目录下的所有文件，例如访问/index 等同访问 index.php或index.html

Options +FollowSymLinks：服务器允许在此目录中使用符号链接。如果该配置项位于<Location>配置段中，将会被忽略掉

Options +All：默认设置，开启除MultiViews之外的特性

Options +None：不启动任何服务器特性

Options +ExceCGI：允许使用mod_cgi木块执行CGI脚本

Options +MultiViews：允许使用mod_negotiation模块提供内容协商的“多重视图”，即自动选择最匹配客户端要求的文件

Options +SymLInksIfOwnerMatch：只有当符号连接和符号连接指向的目标文件或目录的所有者是同一用户时，才会使用符号连接。如果该配置选项位于<Location>配置段中，将会被忽略

Options +includes：允许使用mod_include模块提供的服务器端包含功能

“+”的选项将强制覆盖当前的可选项设置

“-”的选项将强制从当前可选项设置中除去

Allow from all

Require all granted :允许所有有权限的人访问apache的运行目录

AllowOverride None/all：禁止（允许）用户对目录配置文件（.htaccess）修改，不建议开启

Order allow,deny ：apache会按照Order中的最后一条规则为准，如果allow all 但是deny 某个ip，最后会deny 某个ip

<IfModule>容器作用于模块，如果该模块载入的话就会执行里面的内容

DirectoryIndex index.html index.php ：#优先级从左往右一次递减（会优先访问index.html）




url-path是表示资源在网络空间而不是在文件系统中的位置，/path/to/file.html
file-path即文件在本地文件系统中相对于根目录的路径，/usr/local/apache/htdocs/path/to/file.html，不以斜杠开头的file-path将被视为对ServerRoot
directory-path即目录在本地文件系统中相对于根目录的路径，如 /usr/local/apache/htdocs/path/to/
```



### Auth

```bash
htpasswd -bc ./conf/user.passwd loli 123456 #创建认证文件（如果已有，会覆盖原文件，而非追加）
htpasswd -b ./conf/user.passwd abc 123456 #追加用户
htpasswd -D ./conf/user.passwd Jack #删除用户
htpasswd -b ./conf/user.passwd Jack 123456 #修改密码
cat ./conf/user.passwd

```

### Location

```bash
Alias "/images/" "Z:/"
Alias "/images/" "//imagehost/www/images/"

```
