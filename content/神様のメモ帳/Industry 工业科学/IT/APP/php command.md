---
aliases:
- php command
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/LANGUAGE/PHP
---

```bash
php.exe
php-cgi.exe
phpdbg.exe

php.exe 和 php-fpm 是运行 PHP 项目的两种方式。

php.exe 目测对标 python.exe/node.exe，也就是通过「指定文件」的方式来运行。

php-fpm 目测对标 jupyter kernel.

php-fpm 是一个软件，软件的类型是 server (daemon)。php-fpm 也可以用来运行 php 文件，原理是「php-fpm 监听指定端口，我们将 php 文件发送到这个端口，php-fpm 执行代码，并返回运算结果」，看得出来，这种运行方式神似 jupyter，php-fpm 对标 jupyter kernel。

php-fpm 是一个实现了 PHP FastCGI 协议的软件.
php-fpm 最开始是第三方程序，之后被 PHP 官方收了.

那这么说，php-fpm 环境需要自己解决第三方库缺失的问题吗？实际经验告诉我并非如此，实际上 `/www/project` 应该是自带第三方依赖的，也就是像 jar/zipapp/webpack 那样是打包好的。

```
