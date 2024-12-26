---
tags:
  - flag/License/Freeware
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - Label/Industry-工业科学/IT/APP/GUI/Mobile
  - flag/APP/Audio/AudioManagement
  - flag/APP/Audio/Player
scoop: aimp
extensions:
  - .aimppl4
---

- Data
    - Playlists
        - [[AIMP]] 启动时只会读取 `<AIMP>/Profile/PLS/*.aimppl4`
        - [[AIMP]] 退出时会自动保存所有 playlists（包括手动创建的普通列表、手动创建的智能列表、导入的播放列表）到 `<AIMP>/Profile/PLS/`，格式为 `.aimppl4`
        - [[AIMP]] 支持为任意 Playlist 开启「Preimage」功能
            - 智能列表 == 启用 Preimage 功能的普通列表
            - 智能列表 == Read ONLY Playlist
            - Preimage == 外部数据源「单向覆盖」`.aimppl4` 已有数据
                - Search local files
                - Search cloud drive
                - Search podcast
                - Search bookmarks
                - Search [[AIMP]] internal existing playlists
                - Import external playlist file
            - Preimage 是单向的，会覆盖软件里对 `.aimppl4` 播放列表的修改。因此软件里修改后，请及时导出播放列表
