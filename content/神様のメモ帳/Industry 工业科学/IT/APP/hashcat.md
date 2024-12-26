---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/File/Cryption
  - flag/APP/Text
extensions:
  - .hcmask
---

- References
    - [[安全] 使用Hashcat破解文件密码（以zip为例子） - 星星の小窝](https://blog.seanzou.com/archives/1689612734569)
    - [2023-05-29 如何使用 hashcat 破解 RAR、ZIP 压缩包密码-量子哈希](https://www.ccwifi.cc/blogs/index.php/2024/03/30/2023-05-29%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8hash8152/)

- CLI
    - `hashcat [options] {hash|hashfile|hccapxfile}... [dict|mask|dir]...`
        - `Options`
            - `-a, --attack-mode <num>`
                - 0 | Straight
                - 1 | Combination
                - 3 | Brute-force
                - 6 | Hybrid Wordlist + Mask
                - 7 | Hybrid Mask + Wordlist
                - 9 | Association
            - `-m, --hash-type <num>`
            - `--show`
        - `hash`
            - 哈希文件
            - 必须是绝对路径！
        - `dict`
            - 密码字典文件，每行一个密码
