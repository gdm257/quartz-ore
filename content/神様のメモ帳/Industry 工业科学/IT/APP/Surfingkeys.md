---
tags:
  - Label/Industry-工业科学/IT/APP/Plugin/Chrome
chrome: https://chromewebstore.google.com/detail/surfingkeys/gfbliohnnapiefjpjlpjnehglfpaknnc
---

- Idea
    - [[Vim]] mode for browser

- Configuration
    - `settings.smoothScroll = false;`
    - `settings.blocklistPattern = /codepen.io/i`
    - `api.map('<Ctrl-i>', '<Alt-s>'); // hotkey must be one keystroke with/without modifier, it can not be a sequence of keystrokes like 'gg'.`

- Test
    - [[v1.17] `Alt-s` (Toggle SurfingKeys on current site) stopped working · Issue #2157 · brookhong/Surfingkeys](https://github.com/brookhong/Surfingkeys/issues/2157)

- Alternatives
    - hunt-and-peck
    - fluent search
        - [[Surfingkeys]] only supports browser, not system level
        - [键盘控制鼠标的讨论 · Issue #68 · xianyukang/MyKeymap](https://github.com/xianyukang/MyKeymap/issues/68)
