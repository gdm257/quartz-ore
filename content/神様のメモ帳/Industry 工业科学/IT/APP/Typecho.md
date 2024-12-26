---
tags:
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Network/Implement__/CMS
---

[typecho-fans/plugins: Typecho Fans插件作品目录](https://github.com/typecho-fans/plugins)

- Test
    - `Return value of Widget\Base\Comments::filter() must be of the type array, null returned`


### 后台 URL

[Typecho修改默认后台地址 - SunPma'Blog](https://sunpma.com/96.html)


1. `config.inc.php` 将 `/admin/` 改为 `/abc/`
2. 重命名 admin 文件夹为 abc


曾经，我将 Typecho 文章路径设为 `/{category}/{slug}`。

现在，我经过长期的、大量的笔记写作实践，知道了「分类」实在是容易改变，每个一段时间，之前的分类体系就不好用了。所以，文章静态链接是否包含 `{category}`，需要慎重考虑。如果你确定 `/{category}/{slug}` 够用，那么就用这个，因为它由雅、简单、直观。但如果你不确定……

这个问题本质是「分类」的问题，因为一篇文章必须只属于一个分类。所以，你的分类足够合理吗？包容性？可扩展性？文章链接能否兼容二级分类？

博客上的「分类」越精炼越好，越固定越好。如果你不确定是否要开一个分类，那就先使用「tag」。
