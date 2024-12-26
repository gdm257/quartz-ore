---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Network
---

## Typecho APlayer

[FaithPatrick/APlayer-Typecho-Plugin: Typecho plugin for APlayer https://github.com/DIYgod/APlayer](https://github.com/FaithPatrick/APlayer-Typecho-Plugin)

[pjax 需要重载什么函数呢？ · Issue #12 · zgq354/APlayer-Typecho-Plugin](https://github.com/zgq354/APlayer-Typecho-Plugin/issues/12)

[journey-ad/cPlayer-Typecho-Plugin: A typecho plugin for a beautiful html5 music player https://github.com/MoePlayer/cPlayer/tree/f9b593dcd89395f9d7dd08ccda428f7628ab9ab2](https://github.com/journey-ad/cPlayer-Typecho-Plugin)


音乐播放器

相比 cPlayer，更推荐用 APlayer，因为有 pjax 回调函数可以用。

```php
pjax 回调函数

if (!window.audios) {
    audios = [];
    for (var i = 0; i < APlayers.length; i++) {
        audios[i] = APlayers[i].audio;
    }
}
for (var i = 0; i < APlayers.length; i++) {
        audios.push(APlayers[i].audio);
    }
for(var i = 0; i < audios.length; i++) {if(audios[i]){audios[i].pause()}};

```