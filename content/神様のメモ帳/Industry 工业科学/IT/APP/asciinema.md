---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Text
commands:
  - asciinema
pip: asciinema
---

- Installation
    - `pip install asciinema`

- Con
    - 支持 颜色高亮

```bash
# 录制
asciinema rec [filename]
--append #Append to existing recording
--overwrite
--stdin #Enable stdin (keyboard) recording
--raw #Save raw STDOUT output
--title <title>
-i <sec> #Limit recorded terminal inactivity to max <sec> seconds
Ctrl+D or exit #结束录制


# 播放
asciinema play <filename>
asciinema play /path/to/asciicast.cast
asciinema play https://asciinema.org/a/22124.cast
asciinema play http://example.com/demo.cast
asciinema play http://example.com/blog/post.html #requires `<link rel="alternate" type="application/x-asciicast" href="/my/ascii.cast">` in page's HTML
cat /path/to/asciicast.cast | asciinema play -
-i <sec> #Limit recorded terminal inactivity to max <sec> seconds
--speed=<factor>


# 其他
asciinema cat <filename>
asciinema upload <filename>
asciinema auth

```
