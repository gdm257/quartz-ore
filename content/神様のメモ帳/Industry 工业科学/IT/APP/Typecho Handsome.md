---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## 更新

【安装】

下载主题文件包并解压后，会得到三个文件夹：主题、插件、crx。

1. 将「主题」文件夹下面的「handsome」文件夹上传至typecho的`/usr/themes`目录下（**主题文件夹必须命名为handsome**）
2. 将「插件」文件夹下面的「Handsome」文件夹上传至typecho的`/usr/plugins/`目录下。（**必须安装，否则无法使用主题功能。**启用该插件后，后台——管理栏目下会多一个友情链接的栏目。）
3. 启用插件和主题。（**主题的个性化设置：后台设置——控制台——外观——设置外观**）

其中crx是Chrome内核浏览器插件，具体介绍可以看下这里使用浏览器插件发送时光机 （可以不用）


【更新】

- 下载最新版本主题
- 使用 handsome 的后台外观设置数据备份功能备份（以避免万一）
- 手动记下 Handsome 插件的设置
- 删除 /usr/themes/handsome 文件夹，上传新版本主题
- 删除 /usr/plugins/Handsome 文件夹，上传新版本插件
- 在 Typecho 后台中禁用再启用 Handsome 插件，手动恢复插件设置
- 进入 Typecho 后台 - 外观 - 外观设置，以此刷新授权
- handsome 外观设置是保存到数据库中的，所以更新 handsome 后设置会自动恢复

注意 ：** 切换主题**的时候typecho会自动清空上一个主题的所有备份数据，备份数据存储在数据库中。所以请提前使用handsome主题内置外观设置数据备份功能

切换主题，会自动清空当前被切换的主题的外观数据**，但是如果你备份了数据，**切换主题，再切换回来通过`恢复备份`既可以恢复之前的数据了。


## 文件结构

```
component/aside.php        左边导航栏
  component/comments.php     评论区
  component/footer.php       底部版权、音乐播放器之类
  component/header.php       页面头，没啥要改的
  component/headnav.php      顶部导航
  component/say.php          时光机动态
  component/sidebar.php      右侧栏目
  component/third_party_comments.php    3.3.0新增，第三方评论
  css/        博客CSS，一般不要改
  fonts/      博客字体，一般不要改
  img/        图像，一般不要改
  js/         js文件，一般不要改
  lang/       语言文件
  libs/Content.php    文章内容
  libs/...    一般不要改
  usr/        另一个语言文件？
  404.php     404界面
  archive.php    整合
  booklist.php   书单
  cross.php      时光机
  files.php      归档
  functions.php  配置界面的东西
  guestbook.php  留言板
  index.php      首页
  links.php      友链
  page.php       文章页面整合
  post.php       文章输出

  color： 选填，不填默认为success（绿色），可选值：
  light：白色
  info：蓝色
  dark：深色
  success：绿色
  black：黑色
  warning：黄色
  primary：紫色
  danger：红色
```


## 自定义 CSS

```css
/* 右侧边栏透明化（日间模式）*/
.bg-white-only {
    background-color: rgba(249, 249, 249, 0.83);
}

.bg-white-only:hover {
    background-color: rgba(249, 249, 249, 0.95);
}



/* 时光机评论背景半透明 */
div.comment-body div {
    background-color: rgba(249, 249, 249, 0.55);
}
div.comment-body div.panel-footer > div {
    background-color: transparent;
}

#rightAside > div > * {
    background-color: rgba(249, 249, 249, 0.55);
    border-radius: 4px;
}
#rightAside .list-group-item {
    background-color: transparent;
}
#rightAside .list-group-item img.img-square {
    border: 0px;
}

#post-panel > .wrapper.bg-white, #post-panel .wrapper-lg.bg-white-opacity {
    background-color: transparent;
}
div.m-t {
    background-color: rgba(249, 249, 249, 0.55);
    border-radius: 4px;
}



/* 透明化页脚 */
#footer.app-footer .wrapper {
    background: transparent;
}

html.theme-dark #footer.app-footer .wrapper {
    background: transparent;
}



/* 面包屑导航背景透明 */
#post-panel .breadcrumb {
    background: transparent;
}

#post-panel .breadcrumb > li {
    color: #fff;
}



/*图片居中*/
/* #post-content img {
    border: 0 !important;
    max-width: 100% !important;
    margin: 0 auto !important;
    display: block !important;
} */


/*全站变灰*/
/* html {
-webkit-filter: grayscale(100%);
-moz-filter: grayscale(100%);
-ms-filter: grayscale(100%);
-o-filter: grayscale(100%);
filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
_filter:none;
} */



```


## 页脚内容修改

手动改 `component/footer.php`

```php
第 133 行原版
&copy;&nbsp;<?php echo date("Y"); ?> Copyright&nbsp;
改为
&copy;&nbsp;2022


页脚右侧自己看着修改，也在 133 行附近


```



~~自定义 CSS 实现~~ 行不通，自定义 css 优先级太低了，会被 php/js 覆盖

```css
/* 页脚左侧内容 */
#footer > div.wrapper >span[class="text-ellipsis"] {
    content: "©2022";
}
```


## 文章末尾の版权声明

poster.php

约 89 行 `<!--/文章的页脚部件：打赏和其他信息的输出-->` 之后添加

```php
<!--/文章的页脚部件：打赏和其他信息的输出-->
<!--版权声明开始-->
<div class="entry-content l-h-2x">
<div style="border-top: 2px dotted #8e8e8e96;height: 0px;margin: 20px 0px;text-align: center;width: 100%;">
<span style="background-color: #23b7e5;color: #fff;padding: 6px 10px;position: relative;top: -14px;border-radius: 14px;">END</span>
</div>
<div style="padding: 10px;background: rgba(220, 220, 220, 0.22);font-size: 17px;border-left: 3px solid;text-align: left;">
<span>本文作者：<a href="<?php $this->author->permalink(); ?>" rel="author" style="color:blue"><?php $this->author(); ?></a><br></span>
<!-- <span>文章标题：<a href="<?php $this->permalink() ?>" style="color:blue"><?php $this->title() ?></a><br></span> -->
<span>本文链接：<a href="<?php $this->permalink() ?>" style="color:blue"><?php $this->permalink() ?></a><br></span>
<span>许可协议：<a href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh" target="_blank" style="color:blue">CC BY-NC 4.0</a><br>您可以自由的转载和修改，但请注明出处，不得用于商业目的！</span>
</div>
</div>
<!--版权声明结束-->
```



## 闲言碎语 URL

`component/aside.php`：`cross.html` 改为 `cross`
`component/headnav.php`：`cross.html` 改为 `cross`


## 闲言碎语

[handsome 美化教程 2022 最新 最全 最详细 v8.4.1版本之后（持续更新） - 乔戈路阔阔 | Chelgr Lukoco](https://chelgr.com/3.html)


`component/headnav.php` 搜索「闲言碎语」，一个个替换成「时光机」



## 站点头像

后台 - 外观 - 设置外观（进入 handsome）- 初级设置 - 头像图片地址



## XXX 下的文章

分类 %s 下的文章
标签 %s 下的文章
包含关键字 %s 的文章    目测是搜索
~~xxx 发布的文章~~


`archives.php` 修改

```php
25 行左右 "的文章"
'category'  =>  _mt('分类 - %s'),
'search'    =>  _mt('关键字 - %s'),
'tag'       =>  _mt('标签 - %s'),
```

`libs/Content.php` 修改

```php
1318 行左右 "的文章"
'category'  =>  _mt('分类 - %s'),
'search'    =>  _mt('关键字 - %s'),
'tag'       =>  _mt('标签 - %s'),
```

`lang/zh_TW.php` 添加

```php
'分类 - %s' => '分類 - %s',
'关键字 - %s' => '關鍵字 - %s',
'标签 - %s' => '標籤 - %s',
```

`lang/en.php` 添加

```php
'分类 - %s' => 'Category - %s',
'关键字 - %s' => 'Keyword - %s',
'标签 - %s' => 'Tag - %s',
```