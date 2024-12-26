---
tags:
- flag/APP/Download
- Label/Industry-工业科学/IT/APP/Command/CLI
---

```bash
bash <(wget -qO- https://git.io/gclone.sh)
gclone version

vim ~/.config/rclone/rclone.conf


添加 service_account_file_path 配置.用于动态替换 service_account_file (sa 文件).实现 rateLimitExceeded 错误时,替换当前用户，绕过750G限制
为Google Drive操作增加自动切换账户和命令行根目录id操作支持,其他功能与原版rclone相同
gclone支持根目录id操作

「id」需要尖括号包围。「sss:」这种盘符是不能少的（本地除外），即便目标 id 不在 sss 里，如别人分享的文件要拉进 sss，可以按上面的命令来写。
原版rclone如果跨团队盘或者共享文件夹,需要多个配置盘符用于操作

共享目录和团队盘应该带 --drive-server-side-across-configs
目录 ID 可以是：普通目录，共享目录，团队盘
也支持目录 ID 后跟后续路径


加入了群组，能看见团队盘，别高兴太早！最重要的是确认自己的权限是否能「下载」，在 web 端右键任意文件或文件夹，能下载，才能 copy 到自己的盘里、下载到本地；不能下载，这块盘你只能眼馋，顶多在线看看，没有办法转存！！！强行转会各种报错 403，「ERROR : 023姐姐 莲.zip: Failed to copy: googleapi: Error 403: This file cannot be copied by the u
ser., cannotCopyFile」之类的，报错报得怀疑人生！因为有些盘「查看者」能下载不报错，有些不能下载就报错......

顺便说下，即使不能下载，lsf、size 等无关下载的命令还是可以正常使用的（此时 copy 报错真是令人怀疑人生，debug 了好久才发现问题所在！）。

一般是「查看者」「评论者」可能无法下载，「贡献者」一般有权下载，他们是否有权限下载取决于 g suite 管理员的设置。祈祷吧。



要使用 rclone 所有功能，前提是用「SA」或「token」进行「登录」。
type = drive 推荐要有，值为 backend 类型
scope = drive 推荐要有，值为 backend 类型
SA 只有完全的「团队盘」权限，无法查看个人盘。
SA token 同时存在，用的是 SA。
token 有完全的「团队盘」「个人盘」「share with me」权限。
token 会自动刷新，不用管，例如执行 lsf。
SA_path 有没有无所谓，有则给 gclone 自动切换。
project 单独无法使用，它只提供 API。
team_drive 只能用于团队盘
root_folder_id 可选，反正我不用
project 有没有无所谓，区别在于有 project（client_id、client_secret）用的是自己的 API，反之用的是公共 API。
```