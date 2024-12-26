---
tags:
- flag/License/MIT
- Label/Industry-工业科学/IT/APP/Command/CLI
- flag/APP/Network
- flag/APP/Shell/Implement__/Bench
---

- References
    - [spiritLHLS/ecsspeed: 自动更新测试服务器节点列表的网络基准测试脚本(Network benchmarking script that automatically updates the list of the measurement server nodes)](https://github.com/spiritLHLS/ecsspeed)

- Installation
    - 

- Configuration
    - 

- Data
    - 

- Usage
    - Speedtest
        - `bash <(wget -qO- bash.spiritlhl.net/ecs-net)`
        - `bash <(wget -qO- --no-check-certificate https://github.com/spiritLHLS/ecsspeed/raw/main/script/ecsspeed-net.sh)`
        - `bash <(wget -qO- --no-check-certificate https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/ecsspeed/main/script/ecsspeed-net.sh)` 国内用
    - Ping
        - `bash <(wget -qO- bash.spiritlhl.net/ecs-ping)`
        - `bash <(wget -qO- --no-check-certificate https://github.com/spiritLHLS/ecsspeed/raw/main/script/ecsspeed-ping.sh)`
        - `bash <(wget -qO- --no-check-certificate https://ghproxy.com/https://raw.githubusercontent.com/spiritLHLS/ecsspeed/main/script/ecsspeed-ping.sh)` 国内用

- Examples
    - 

- Users
    - 

- UI
    - 

- Idea
    - Speedtest，但自带最新节点
    - 三网 Ping，但是自带最新节点

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 涵盖中国三大运营商、香港、台湾的测速节点，默认的三网测速每个运营商选择本机ping值最低的两个节点测速，详情三网测速才是全测，节点列表大概每7天自动更新一次

- Pro
    - 

- Con
    - 支持国内服务器测试(有判断是否为国内机器)，但由于国内服务器带宽过小，会很慢，详见初次运行的显示

- Test
    - 

- Alternatives
    - 

- Description
    - 
