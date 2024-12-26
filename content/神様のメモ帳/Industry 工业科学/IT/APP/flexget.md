---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Download
---

- Alternatives
    - 人生苦短，我用 [[AutoBangumi]]

[madwind/flexget_qbittorrent_mod: flexget qbittorrent删种、辅种 自动签到 插件](https://github.com/madwind/flexget_qbittorrent_mod)

**Question 1**

`Accepted` & `Undecided` & `Rejected`？
Flexget 从所有 input plugins 解析出所有 entries；
所有 entries 以 `Undecided` 的初始状态交给 filter plugins；
如果一个 entry 被一个 filter plugin 处理后，依旧保持 `Undecided` 状态，那么 entry 将被交给下一个 filter plugin 处理；
如果一个 entry 被一个 filter plugin 标记为 `Accepted` 或 `Rejected`，那么这个 entry 就不会交给下一个 filter plugin，直接把当前状态当作最终状态（`accept_all` 插件除外）；
如果一个 entry 被所有 filter plugins 处理后，依旧保持 `Undecided` 状态，那么 entry 的最终状态就是 `Undecided`；
最终状态为 `Accepted` 的 entries 将交给 output plugins 处理；
最终状态为 `Undecided` 的 entries 被丢弃；
最终状态为 `Rejected` 的 entries 被丢弃；
plugins 的执行顺序由代码 `@plugin.priority(123)` 决定，正因此才有 plugin 分类 input output filter；


**Question 2**

`accept_all` plugin?
请无脑 `accept_all: yes`，否则 filter plugins 逻辑复杂到爆！
`accept_all: yes` 将所有 entries 的初始状态从 `Undecided` 改为 `Accepted`，并继续交由其他 filter plugins 处理；
`accept_all: no` 所有 entries 保持初始状态 `Undecided` 并继续交由其他 filter plugins 处理；


**Question 3**

`regexp` plugin?

```python
regexp = {
    # 命中任意一个就接受 => 都没命中就保持原样 (Accepted or Undecided)
    'accept': [],

    # 命中任意一个就拒绝 => 都没命中就保持原样 (Accepted or Undecided)
    'reject': [],

    # 缺少任意一个就接受 => 全部命中才能保持原样 (Accepted or Undecided)
    'accept_excluding': [],

    # 缺少任意一个就拒绝 => 全部命中才能保持原样 (Accepted or Undecided)
    'reject_excluding': [],

    'from': 'title',
}


      # 集合之外的保持原样，交给其他插件
      # Accept「HEVC」和「1080」の并集
      accept:
      - HEVC
      - '1080'

      # Accept「非HEVC」和「非1080」の并集
      accept_excluding:
      - HEVC
      - '1080'

      # Rject「HEVC」和「1080」の并集
      reject:
      - HEVC
      - '1080'

      # Rject「非HEVC」和「非1080」の并集
      reject_excluding:
      - HEVC
      - '1080'

经过测试，一个条目同时命中 accept 和 reject，最后还是 reject。所以不要在 reject 使用 `^.*$`，会导致拒绝全部条目。


```



**Question 4**

日期？

无解。请 if/regexp 根据 dump 的字段手动解析。
age plugin 只支持 `ISO 8601` 格式的日期与时间，然而 RSS \<item\> 的 \<pubDate\> 是 `RFC 822` 规范。




**Question 5**

`oneOf` 的数据类型？
到处找不到，只能自己猜了……源码里找到个 `JsonScheme` 的字眼，应该是 JSON
数字型（Number）     JavaScript 中的双精度浮点型格式
字符串型（String）     双引号包裹的 Unicode 字符和反斜杠转义字符
布尔型（Boolean）     true 或 false
数组（Array）     有序的值序列
值（Value）     可以是字符串，数字，true 或 false，null 等等
对象（Object）     无序的键:值对集合
空格（Whitespace）     可用于任意符号对之间
null     空
整形（Integer）     数字1-9，0和正负数
分数（Fraction）     分数，比如 .3，.9
指数（Exponent）     指数，比如 e，e+，e-，E，E+，E-
记得小写
对了，aria2 的 options 是 dict，跟 yaml 是一致的。




原笔记

```bash
pipx install flexget
flexget check  #检查配置文件
flexget --test execute  #手动模拟一次 RSS 操作，仅供测试，不会下载到本地
-c ~/flexget/flexget.yaml
--logfile FILE
--loglevel critical, error, warning, info, verbose, debug, trace
--test
flexget --cron execute  #在 crontab 中调用，for non-interactively shell
flexget execute  #手动执行所有任务
    --task <task>  #只执行指定任务
    --dump  # Debug 很有用，打印每个 Entry 的 fields
    --dump accepted
    --dump [{eval,trace,accepted,rejected,undecided,failed,title} [{eval,trace,accepted,rejected,undecided,failed,title} ...]]
flexget execute –dump  #show all entries
flexget web passwd <new_password>
flexget daemon start  #守护进程式运行
    --autoreload-config
    --enable-tray-icon
flexget status  #查看 RSS 记录
flexget rejected list
flexget rejected clear
cat ~/.config/flexget/flexget.log


flexget execute --learn : 这样子不会下载种子，但是会把这次 RSS 到的种子标记为已下载，这样之后就不会下到老种了

Accepted 的条目会记录在 `~/.flexget/db-config.sqlite`，之后再见到时默认会自动 reject，如果想从数据库中删除以便再次 accept，请使用 flexget seen 命令。


task
content_size
quality
rss_pubdate    rss
description    rss
id

title
url
original_url
pathscrub

{# Comment #}
{% Statement %}    诸如 for 循环 或赋值的语句
# Line Statement ##
{{ Expression }}    表达式

变量
运算符
过滤器
if else 三元表达式
内置函数


task 下的每个字段都是一个 plugin，常用的 plugin 有 3 类：input plugin（从哪里爬取信息 E.g. rss）、filter plugin、output plugin（获取的数据要发送到哪去E.g. qbittorrent、aria2）

各个插件的文档详见 https://flexget.com/Plugins/<plugin_name>
E.g. https://flexget.com/Plugins/rss
E.g. https://flexget.com/Plugins/content_size

input plugin
    rss
    csv
    html
    text
    regexp_parse
    filesystem

    from_task
    configure_series

    anidb_list
    my_anime_list
    thetvdb_list
    imdb_list

    from_transmission
    from_rtorrent
    from_deluge
    sonarr_list

    mock

filter plugin
    series
    regexp
    list_match
    content_filter
    if
    accept_all
    only_new
    age
    content_size
    quality
    best_quality

output plugin
    aria2
    qbittorrent
    transmission
    rtorrent
    deluge
    utorrent
    email
    telegram
    discord
    sftp_upload
    ftp_download
    download

    exec
    copy
    move
    delete
    symlink
    make_rss
    make_html
    list_add
    list_remove


```


写插件：

```python
# 魔改源码
git clone xxx
cd xx
vim ./flexget/plugins/xxx/myplugin.py

# 全局安装
pipx install ./
pipx install ./ --force # 强制重装
pipx upgrade flexget # 更新出错暂时原因不明，目测是路径错误，建议重装

# 项目级
virtualenv ./ # 初始化虚拟环境（项目级）

./Scripts/pip install -e .  # Windows 安装依赖（项目级，操作都是项目级）
./Scripts/flexget execute  # Windows 运行代码
git pull
./bin/pip install --upgrade -e .  # Windows Upgrade

./bin/pip install -e .  # Linux 安装依赖
./bin/flexget execute  # Linux 运行代码
git pull
./bin/pip install --upgrade -e .  # Linux Upgrade



from flexget import plugin
from flexget.event import event


class MyPlugin:
    schema = {}  # Override needed

    def on_task_output(self, task, config):
        # Override needed
        pass


@event('plugin.register')
def register_plugin():
    plugin.register(MyPlugin, 'plugin_name', api_ver=2)

```

