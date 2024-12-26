---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## Typecho KirinShiKi

如果有冲突，Handsome 自定义 CSS 会被 KirinShiKi 的 CSS 覆盖，所以我们直接改 KirinShiKi/css/kirin.css

```css
/* 左栏文章计数器の背景颜色 */
.badge.pull-right {
    background-color: #2e4e7e;
}


/* 夜间模式标题字体颜色 */
html.theme-dark .entry-title {
    color: #efefef
}


/* 打赏模块背景透明 */
.support-author {
    background-color: transparent;
}

html.theme-dark .support-author {
    background-color: transparent;
}




```