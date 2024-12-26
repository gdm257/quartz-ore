---
tags:
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/Platform/Windows独占
- flag/APP/Process
- flag/APP/Process/_Theme/Service
---

[winsw/xml-config-file.md at v3 · winsw/winsw](https://github.com/winsw/winsw/blob/v3/docs/xml-config-file.md)


```bash
winsw 2.x
Usage:
    * 复制 winsw.exe 到任意目录，随便重命名，此处重命名为「lrr.exe」
    * 假设 lrr.exe 放在 D 盘下，文件完整路径为「D:/lrr.exe」
    * 同目录下，创建与 exe 同名的文件「D:/lrr.xml」
    * 编辑 lrr.xml
    * 安装服务 D:/lrr.exe install
    * 运行服务 D:/lrr.exe start
    * 查看服务 D:/lrr.exe status
    * 重启服务 D:/lrr.exe restart
    * 停止服务 D:/lrr.exe stop
    * 卸载服务 D:/lrr.exe uninstall
    * 每创建一个服务就要复制一份 .exe，且 .xml 的 id 必须不同
    * winsw 3.x 正在试图开发类似 nssm 的全局管理，bug 很多，目前不可用

.xml:
    # 服务 id 必须唯一
    <id>lanraragi</id>
    <name>lanraragi</name>
    <description>LANraragi</description>
    <depend>Eventlog</depend>
    <depend>W32Time</depend>
    <workingdirectory>D:/Installer/LANraragi</workingdirectory>
    <log mode="roll">D:\Temp\logs</log>
    <env name="HOME" value="c:\abc" />
    <env name="E2" value="c:\abc" />
    <interactive>false</interactive>    # GUI 需要为 true

    # 简单启动命令
    <executable>wsl</executable>
    <arguments>
      arg01
      arg02
      -d ubuntu
      url=http://*:2558
      "D:/"
      'POST'
      %ENV_VARIABLE%
      %HOME%
    </arguments>

    # 复杂启动/结束命令
    <prestart>
      <executable></executable>
      <arguments></arguments>
      <stdoutPath></stdoutPath>
      <stderrPath></stderrPath>
    </prestart>

    <executable>catalina.sh</executable>
    <startarguments>jpda run</startarguments>

    <stopexecutable>catalina.sh</stopexecutable>
    <stoparguments>stop</stoparguments>

    <prestop>
      <!-- ... -->    参考 <prestart>
    </prestop>

    <poststop>
      <!-- ... -->
    </poststop>

    <stoptimeout>10sec</stoptimeout>

    <preshutdown>false</preshutdown>
    <preshutdownTimeout>3 min</preshutdown>

    # 自启动
    <delayedAutoStart>true</delayedAutoStart>
    <startmode>Automatic</startmode>
    Automatic    (Default) Auto start
    Manual    手动
    disabled    禁用
    system    started by the OS initialization process
            （一般只有驱动程序用）
    boot    started by the OS loader
            （一般只有驱动程序用）

    # user account 亲测可用
    <serviceaccount>
        <domain>DESKTOP-UHBCU5N</domain>
            # The <domain> is optional and
            # defaults to the local computer.
        <user>abc</user>
            # 默认登录为「本地系统」，无需登录即可开机自启
        <password>xxx</password>
        <allowservicelogon>true</allowservicelogon>
    </serviceaccount>

    # LocalSystem account
    <serviceaccount>
      <username>LocalSystem</username>
    </serviceaccount>

    # LocalService account
    <serviceaccount>
      <username>NT AUTHORITY\LocalService</username>
    </serviceaccount>

    # NetworkService account
    <serviceaccount>
      <username>NT AUTHORITY\NetworkService</username>
    </serviceaccount>

winsw.exe:
    uninstall [lrr.xml]
    install [lrr.xml]
    install [lrr.xml]
        --user --username <username>
        --pass --password <password>
        P.S. the LocalSystem account by default
            the LocalService account,
            the NetworkService account
            user account
    start [lrr.xml]
    stop [lrr.xml]
    stop [lrr.xml] --force
    refresh [lrr.xml]
    status [lrr.xml]
    dev list    3.x版本的全局管理功能，目前无法使用
    dev ps
    dev ps --all


【用户还没有登录的情况下实现启动】

1. Windows Service
Windows 启动的时候，还没有登录账号的时候，此时Windows中设置为auto状态的Service 将会在Session 0中运行。
sc create “SERVICE_NAME” binpath= "SERVICE_PROGRAM" displayname= "SERVICE_DESCRIPTION" start= auto

2. Windows Startup Script
打开本地的组策略管理，运行命令gpedit
然后依次打开Computer Configuration->Windows Settings->Scripts-> Startup, 在Startup中配置需要开机启动的脚本或者程序。

3. Windows Schedule Task
任务运行的账号选成"System"
触发器中，选择At Startup触发器
使用如下命令行：
schtasks /create /TN "TASK_NAME" /RU SYSTEM /SC ONSTART /TR "TASK_PROGRAM"

```