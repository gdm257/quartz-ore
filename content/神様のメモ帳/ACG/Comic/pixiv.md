# pixiv

参考

[个人图包索引 105套【191124补档完毕】更新中 - 美图舘 - 天使动漫论坛](https://www.tsdm.live/forum.php?mod=viewthread&tid=902674&fromuid=158902)

[Mapaler/PixivUserBatchDownload: P站画师个人作品批量下载工具，UserScript + Aria2。可高度自定义重命名，发送到本地或远程(如路由器)下载。](https://github.com/Mapaler/PixivUserBatchDownload)

- `npm i -g pxder`

1. 画集
2. 画师
3. CG
4. 作品 & 角色
5. 萌点
6. 特性
    1. 某站
    2. 排名
    3. R18
    4. R17.9
    5. 全年龄
    6. 动图
7. 无属性
    1. 个人向
    2. 精选
    3. 壁纸
    4. 美图
8. 2.5次元
    1. 手办
    2. cosplay
9. 三次元

## 灵梦御所 & saber 酱 & 幻想次元 & 猫の仓库

1. 琉璃神社系列
2. 灵梦御所
3. 文文系列
4. 七七柒
5. 凯撒
6. 洛城
7. 月子酱
8. 百合居
9. 火花
10. 幻想绯乡图社
11. 影之音酱
12. 树人君
13. Piece菌系列
14. 千夜
15. 白鹭学园


## 扫图站

yande.re    病娇以前叫做萌妹（moe.imouto.org, oreno.imouto.org）主收高清扫图、海报画
gelbooru    danbooru 的良好替代品
Rule34
e-shuushuu
lolibooru

konachan    此方酱

zerochan    只收绘图高的，tag 以人物、出处、画师为主


Danbooru 是一個歐美知名的動漫插圖分享網站，其音譯取自日文的瓦楞紙(段ボール)，
故圖示是用一個紙箱圖案作為表示

tags有5个不同的种类，种类不同于内容，不同种类使用不同颜色加以区分。其中：
紫红-copyright- 授权（一般指品牌或公司）
绯红-general-一般（无特殊性质的标签）
黄-artist-作者、艺术家
绿 -character-人物（专指图片中包含的人物名字，一般是日漫角色是日文罗马音）
青蓝-circle-圈子（一定范围内的东西）

Rating - 尺度評分，即三個等級Safe、Questionable跟Explicit
Score - 會員評分(限金會員以上評分)，分數越高代表這張圖人氣越高
Favorites - 會員收藏數，有時候收藏數量也會影響Score分數



## PixivBatchDownloader

【通用配置】
http://token:123456@localhost:6800/jsonrpc
http://127.0.0.1:7890
E:/[pixiv]/pixiv




【文件命名】

画师 illustration
(%{illust.user.id})%{illust.user.name}/illustration/%{illust.title}_p%{page}_%{illust.id}.%{illust.extention}
(%{illust.user.id})%{illust.user.name.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}/illustration/%{illust.title.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}_p%{page}_%{illust.id}.%{illust.extention}

画师 Manga
(%{illust.user.id})%{illust.user.name}/manga/%{illust.title}/%{illust.id}_p%{page}.%{illust.extention}
(%{illust.user.id})%{illust.user.name.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}/manga/%{illust.title.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}/%{illust.id}_p%{page}.%{illust.extention}

画师 Anime
(%{illust.user.id})%{illust.user.name}/anime/%{illust.title}/%{illust.id}_%{illust.ugoira_metadata.frames.length}fps_f%{page}.%{illust.extention}
(%{illust.user.id})%{illust.user.name.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}/anime/%{illust.title.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}/%{illust.id}_%{illust.ugoira_metadata.frames.length}fps_f%{page}.%{illust.extention}

收藏 illustration
(%{user.user.id})%{user.user.name}_bookmark/illustration/%{illust.title}_p%{page}_%{illust.id}_%{illust.user.name}.%{illust.extention}
(%{user.user.id})%{user.user.name.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}_bookmark/illustration/%{illust.title.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}_p%{page}_%{illust.id}_%{illust.user.name.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}.%{illust.extention}

收藏 Manga
(%{user.user.id})%{user.user.name}_bookmark/manga/%{illust.title}_%{illust.user.name}/%{illust.id}_p%{page}.%{illust.extention}
(%{user.user.id})%{user.user.name.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}_bookmark/manga/%{illust.title.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}_%{illust.user.name.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}/%{illust.id}_p%{page}.%{illust.extention}

收藏 Anime
(%{user.user.id})%{user.user.name}_bookmark/anime/%{illust.title}_%{illust.user.name}/%{illust.id}_%{illust.ugoira_metadata.frames.length}fps_f%{page}.%{illust.extention}
(%{user.user.id})%{user.user.name.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}_bookmark/anime/%{illust.title.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}_%{illust.user.name.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")}/%{illust.id}_%{illust.ugoira_metadata.frames.length}fps_f%{page}.%{illust.extention}




重命名 windows 路径保留字符

.replace(/\\*/gi, "⚹")
.replace(/\\//gi, "／")
.replace(/\\\\/gi, "∖")
.replace(/\|/gi, "∣")
.replace(/\?/gi, "？")
.replace(/:/gi, "：")
.replace(/"/gi, "＂")
.replace(/</gi, "〈")
.replace(/>/gi, "〉")

.replace(/\\*/gi, "⚹").replace(/\\//gi, "／").replace(/\\\\/gi, "∖").replace(/\|/gi, "∣").replace(/\?/gi, "？").replace(/:/gi, "：").replace(/"/gi, "＂").replace(/</gi, "〈").replace(/>/gi, "〉")


在花括号对中「\」要转义为「\\」
xxx.xxx.replace(/\//, "／")
写成
{xxx.xxx.replace(/\\//, "／")}



【增量下载】

（推荐）第一种 aria2 自动跳过已存在文件。`auto-file-renaming=false` `allow-overwrite=false`
第二种 PixivUserBatchDownload 下载过滤器，适合标签、日期、作品类型来过滤。



【下载过滤器】

只下载 插画
illust.type != "illust"

只下载 漫画
illust.type != "manga"

只下载 动画
illust.type != "ugoira"

只下载 最近 10 天
new Date(illust.create_date) < new Date(Date.now() - 24*60*60*1000 * 10)

只下载 2022 年及之后
new Date(illust.create_date) < new Date("2020-10-01 00:00:00")

作品发布 年月日
new Date(illust.create_date).getFullYear()
new Date(illust.create_date).getMonth() + 1
new Date(illust.create_date).getDate()


# SSS
