---
tags:
  - Label/ACG/_Article/Collection
publish: false
---

* 59970 首歌都有音轨号.
    - `xidel TLMC.xspf -e '//playList//track[not(trackNum)]' --output-format json-wrapped`
    - `xidel TLMC.xspf -e '//playList//track/trackNum[text()=""]' --output-format json-wrapped`
* 6 首歌缺少 标题.
    - `xidel TLMC.xspf -e '//playList//track[not(title)]/location' --output-format json-wrapped`
    - `xidel TLMC.xspf -e '//playList//track[title=""]' --output-format json-wrapped`
* 13 首歌缺少 专辑.
    - `xidel TLMC.xspf -e '//playList//track[not(album)]' --output-format json-wrapped`
    - `xidel TLMC.xspf -e '//playList//track[album=""]' --output-format json-wrapped`
* 124 首歌缺少 作者.
    - `xidel TLMC.xspf -e '//playList//track[not(creator)]' --output-format json-wrapped`
    - `xidel TLMC.xspf -e '//playList//track[creator=""]' --output-format json-wrapped`
* 1018 首歌的 标题 带有 Windows 路径保留字符.
    - `xidel TLMC.xspf -e '//playList//track/title' | grep '[<>:"/\??|*]' | wc`
    - `xidel TLMC.xspf -e '//playlist//track/title[contains(text(), "<") or contains(text(), ">") or contains(text(), ":") or contains(text(), "/") or contains(text(), "\") or contains(text(), "|") or contains(text(), "*") or contains(text(), "?") or contains(text(), '"'"'"'"'"')]/parent::*/location'`
* 1382 首歌的 作者 带有 Windows 路径保留字符.
    - `xidel TLMC.xspf -e '//playList//track/creator' | grep '[<>:"/\??|*]' | wc`
    - `xidel TLMC.xspf -e '//playlist//track/creator[contains(text(), "<") or contains(text(), ">") or contains(text(), ":") or contains(text(), "/") or contains(text(), "\") or contains(text(), "|") or contains(text(), "*") or contains(text(), "?") or contains(text(), '"'"'"'"'"')]/parent::*/location'`
* 通过 xspf，可以很轻松地批量迁移带有 cue 音轨的歌单.
* 还是有办法用 foobar2000 来分割的，那就是，输出文件名只包含音轨号，标题和艺术家自己写脚本进行重命名.



F:/Touhou lossless music collection/[DiGiTAL WiNG]/2013.05.26 [DWCD-0008] BEST OF WiNG [例大祭10]/DiGiTAL WiNG - BEST OF WiNG Special Non-Stop Version.cue
F:/Touhou lossless music collection/[DiGiTAL WiNG]/2013.05.26 [DWCD-0008] BEST OF WiNG [例大祭10]/DiGiTAL WiNG - BEST OF WiNG.cue

才发现，这个是 **2 个 cue 在同一文件夹** 导致的。
我还得写个脚本，来检查是否有 cue 在同一文件夹。
有蛮多的 70+



对 foobar2000 来说这个文件名无法完成转换，带研究
`彩音 ～xi-on～ ‎ - GROOVY MOON -グルーヴィー・ムーン-`
F:/Touhou lossless music collection/[彩音 ～xi-on～]/2016.12.29 [XITH-0026] GROOVY MOON -グルーヴィー・ムーン- [C91]/彩音 ～xi-on～ ‎ - GROOVY MOON -グルーヴィー・ムーン-.cue



该 cue 信息有误
F:\Touhou lossless music collection\[Floresta Prateada]\2012.05.27 [FPCD-0008] -勿忘草- true forget me not [例大祭9]\-勿忘草- true forget me not.cue



3之849 v转换后有较大问题。

来源："F:\Touhou lossless music collection\[DiGiTAL WiNG]\2013.05.26 [DWCD-0008] BEST OF WiNG [例大祭10]\DiGiTAL WiNG - BEST OF WiNG Special Non-Stop Version.cue" / index: 14
  解码源文件错误在 2:40.228 : 无法读取文件

来源："F:\Touhou lossless music collection\[DiGiTAL WiNG]\2013.05.26 [DWCD-0008] BEST OF WiNG [例大祭10]\DiGiTAL WiNG - BEST OF WiNG Special Non-Stop Version.cue" / index: 15
  解码源文件错误在 0:00.000 : 无法读取文件
  在转移内嵌图像时发生一个错误 (对象未找到) : "F:\Touhou lossless music collection\[DiGiTAL WiNG]\2013.05.26 [DWCD-0008] BEST OF WiNG [例大祭10]\cue 15.flac"
  转换失败：对象未找到

来源："F:\Touhou lossless music collection\[DiGiTAL WiNG]\2013.05.26 [DWCD-0008] BEST OF WiNG [例大祭10]\DiGiTAL WiNG - BEST OF WiNG Special Non-Stop Version.cue" / index: 16
  解码源文件错误在 0:00.000 : 无法读取文件
  在转移内嵌图像时发生一个错误 (对象未找到) : "F:\Touhou lossless music collection\[DiGiTAL WiNG]\2013.05.26 [DWCD-0008] BEST OF WiNG [例大祭10]\cue 16.flac"
  转换失败：对象未找到




**已完成 59968 首，剩余 2 首为 `[DiGiTAL WiNG]\2013.05.26 [DWCD-0008] BEST OF WiNG [例大祭10]\DiGiTAL WiNG - BEST OF WiNG Special Non-Stop Version.cue` 的 index 15 16，要么是文件损坏，要么是文件本来就有问题。重新下了一遍，已确定是文件本来就有问题。**

~~约有 24000-25000 首可以直接重定向到「东方同人社团合集」，免去上传。~~

用 rclone 的 --from-files-raw 试了下，已有有 50826 首，剩下不到 1w 首需要上传。
