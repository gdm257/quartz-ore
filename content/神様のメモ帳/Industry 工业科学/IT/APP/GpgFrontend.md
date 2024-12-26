---
tags:
- flag/License/Freeware
- Label/Industry-工业科学/IT/APP/GUI/Desktop
- flag/APP/Text
- flag/APP/File/Cryption
---

GpgFrontend GUI Application

- Configuration:
    * %APPDATA%/gnupg/


GpgFrontend 使用后会在密钥文件夹下生成 .lock 文件，这会导致 gpg 命令报错，请手动删除。

GpgFrontend 的密钥导入功能有 bug，无法导入私钥，请使用 `gpg --import <file>` 命令代替。

重要的提示，`sec#`，这里有一个符号 `#`，说明对应私钥不在这个电脑上，只导入了公钥（它应该已经被放在一个极其、极端、极度安全的地方了）