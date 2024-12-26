---
tags:
    - Label/Industry-工业科学/IT/APP/Server/Self-hosted
    - flag/APP/Picture
---

```bash
Lsky Pro 开源版连相册功能都没有，还是 chevereto 最香（2022-09）

经过实际测试，安全的做法是，把数据库信息写到 settings.php 并挂载进容器。测试如下。

1. 第一次配置环境变量后，第二次无需环境变量也能启动？不能，因为 settings.php 指定了变量名且改文件没有被更改。
2. 第一次配置环境变量后，settings.php 是否有被改动？无
3. 用 settings.php 代替环境变量？可以！
4. 在网页更改一些设置，settings.php 是否有被改动？无。

完全恢复只需要：1. 数据库 2. 图片文件夹（/var/www/html/images）


// 传统 zip 包安装

chmod -R 775 ./*
chmod -R 777 settings.php

报错 1：

    G\: Sessions are not working on this server due to missing write permission on session save path (php.ini session.save_path).

这个应该是 php 的问题，咕歌「php.ini session.save_path 问题」一番，各种操作试了一遍，正确操作为：php 的配置文件 php.ini，在 [session] 段设置「session.save_path = "/tmp"」，dnmp 的 php.ini 自带有注释，搜索「session.save_path = "/tmp"」找到并取消注释即可


报错 2:

    No write permission in /images/ directory. Chevereto needs to be able to write in this directory.
    No write permission in /content/ directory. Chevereto needs to be able to write in this directory.
    No write permission in /app/content/ directory. Chevereto needs to be able to write in this directory.
    /app/content/locks/ doesn't exists. Make sure to upload it.

chmod -R 775 ./www/cg/*


Chevereto需要在以下路径中写入并存取（递归权限）：

    app/content
    app/content/languages
    app/content/languages/cache
    app/content/locks
    app/content/system
    content
    images

```