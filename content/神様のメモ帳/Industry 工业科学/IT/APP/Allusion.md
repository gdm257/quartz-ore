---
tags:
- flag/License/GPL
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- flag/APP/Picture
- flag/APP/Picture/Implement__/PictureManagement
---

- References
    - [Allusion programmatic api? · Issue #556 · allusion-app/Allusion](https://github.com/allusion-app/Allusion/issues/556)

- Test
    - 移动文件夹
        - 例如，我要将 `D:/mypic/pic01/` 迁移为 `E:/pic/01/`
        - ~~Allusion - 添加 Location `E:/pic/`~~
        - ~~文件管理器 - 复制粘贴重命名~~
        - ~~Allusion - Location - 刷新按钮~~
        - 没救，会变成丢失状态，会被识别为新图片。JSON？Location 太坑了，根本没法改，要改就得自己写解析器，我有这功夫不如直接调用 Allusion API，或者重新手动标记
