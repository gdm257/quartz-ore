---
tags:
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Download
---

## Brief

- References

- Installation

- Dependencies

- Edition

- Idea

- Configuration
    - 无脑选
        - 番剧管理
            - 重命名 `none`
            - 番剧补全 `true`
            - 添加组标签 `true`
        - 解析
            - 语言 `zh`

- Data

- Examples

- Users

- Author

- GUI

- CLI

- Web

- API

- Mobile

- DSL

- Shortcuts

- Philosophy

- Objects
    - Site (mikan/acgnx/dmhy/nyaa)
        - sender (send to RSS)
    - RSS
        - receiver
        - sender (send to Bangumi)
    - Bangumi
        - receiver
        - sender (send to torrent)
            - filter by rules
    - torrent
        - receiver
        - sender (send to Downloader, i.e. QB Client)
    - Downloader (qBittorrent)
        - receiver (API)
            - download to disk
        - sender
            - hook of finished task

- Fundamentals

- Architecture

- Pro

- Con

- Test
    - [经常跑一段时间就不工作了 重启了就好 然后过几天 又不工作了 · Issue #701 · EstrellaXD/Auto_Bangumi](https://github.com/EstrellaXD/Auto_Bangumi/issues/701)
    - [[解析器错误] 解析器错误，陷入死循环 · Issue #635 · EstrellaXD/Auto_Bangumi](https://github.com/EstrellaXD/Auto_Bangumi/issues/635)

- Alternatives

- Description
