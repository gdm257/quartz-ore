---
tags:
- flag/APP/Download
- Label/Industry-工业科学/IT/APP/Command/CLI
---

```bash
git clone https://github.com/Spazzlo/folderclone.git
cd folderclone
pip3 install folderclone

把credentials.json放置上传到folderclone解压根目录
screen -S folderclone # 创建screen窗口,folderclone名字可自定义
【Ctrl】【a】【d】 # 临时退出使用screen后台运行,按组合键
screen -r folderclone # 回到screen窗口
multimanager interactive #用来创建项目与 SA

【API和服务】【库】里面搜索【Google Drive API】和【Identity and Access Management (IAM) API】并启用它们。好像还有个【IAM Service Account Credentials API】、【Service Usage API】、【Cloud Resource Manager API】

multifolderclone -s SOURCE_FOLDER_ID -d DESTINATION_FOLDER_ID

```