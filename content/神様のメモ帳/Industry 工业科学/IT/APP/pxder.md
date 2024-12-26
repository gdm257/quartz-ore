---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Download
---

## pxder

```bash
pxder -h
pxder --setting
pxder --uid uid1,uid2,uid3,...
pxder --pid pid1,pid2,pid3,...

pxder --follow    下载所有公开关注的画师
pxder --follow--private    下载所有私密关注的画师
pxder --update    更新已下载的画师的画作
pxder -b    公开收藏
pxder -B    私密收藏

--debug
--conf-loca     输出 pxder 的配置存放路径
--no-cf   从旧的资源域名i.pximg.net下载插画，而不是新的套了 CF 的 i-cf.pximg.net
--no-ugoira-meta
下载动图时不请求其元数据，在下列情况下会有帮助:
1. 对动图的帧间隔信息无所谓，不请求可以节省大量解析时间
2. 画师是专门画动图的，几百张动图解析起来实在是慢，并且动图太多可能导致达到 API 调用速率限制

自动重命名
开启了以后，例如这个画师原来叫abc，今天你再次去下载（更新）他的画作，但是他改名叫def了，那么程序会自动帮你重命名画师文件夹



// Start
安装依赖 node.js
npm root -g
npm config set prefix "D:\Portable\scoop\persist\nodejs-lts\bin"
npm config set cache "D:\Portable\scoop\persist\nodejs-lts\cache"

安装更新、卸载
npm i -g pxder
npm uninstall -g pxder


pxder --login --no-protocol
pxder --login
pxder --logout
浏览器 F12 开发者工具 - 登录 URL - 登录 - 开发者工具查看：Network - 最后一个请求（app-api.pixiv.net）- 参数 - code 的值

如果网络错误，先去
pxder --setting
取消代理，开启直连模式。登录完再代理。

登录理论上要允许不安全证书，但我在 qv2ray 允许不安全证书，也没用。所以还是直连登录比较好。

如果你有一个已经登陆了的 pxder，那么你可以通过以下步骤将登录态复制到另一个 pxder 上

    在已经登录了的设备上执行 pxder --export-token，保存好该 token
    在另一个设备上执行 pxder --login TOKEN，将 TOKEN 替换成上一步输出的 token


```