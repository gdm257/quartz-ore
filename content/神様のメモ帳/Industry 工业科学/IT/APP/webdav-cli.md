---
tags:
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Download
---

```bash
npm install --global webdav-cli
npx webdav-cli \
--path "E:/"  \
--host 0.0.0.0  \
--port 2560  \
--username="11"  \
--password 123456  \
--rights canRead,canGetSize,canGetMimeType,canGetProperty,canGetProperties,canGetLastModifiedDate,canGetWebName,canGetType,canCreate  \

 'all', 'canCreate', 'canDelete', 'canMove', 'canRename',
    'canAppend', 'canWrite', 'canRead', 'canSource',
    'canGetMimeType', 'canGetSize', 'canListLocks',
    'canSetLock', 'canRemoveLock', 'canGetAvailableLocks',
    'canGetLock', 'canAddChild', 'canRemoveChild',
    'canGetChildren', 'canSetProperty', 'canGetProperty',
    'canGetProperties', 'canRemoveProperty', 'canGetCreationDate',
    'canGetLastModifiedDate', 'canGetWebName', 'canGetType'


npx webdav-cli --path "E:/"  --host 0.0.0.0  --port 2560  --username="11"  --password 123456  --rights canRead,canGetSize,canGetMimeType,canGetProperty,canGetProperties,canGetLastModifiedDate,canGetWebName,canGetType




// 开机自启
npm i -g pm2-windows-service
环境变量 PM2_HOME=C:/Users/JasonYang/.pm2
（这路径根据自己需要定）
pm2-service-install

在管理员命令行下, cd 到 app.js 所在目录
pm2 start app.js --name myapp
pm2 list
pm2 save

pm2-service-uninstall
```