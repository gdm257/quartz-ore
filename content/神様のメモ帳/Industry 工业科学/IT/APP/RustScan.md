---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/Platform/Linux独占
  - flag/APP/Network/Implement__/Port/Scanner
github: RustScan/RustScan
---

- References
    - [现代化端口扫描工具RustScan | 老苏的blog](https://laosu.tech/2024/02/14/%E7%8E%B0%E4%BB%A3%E5%8C%96%E7%AB%AF%E5%8F%A3%E6%89%AB%E6%8F%8F%E5%B7%A5%E5%85%B7RustScan/)

- Examples
    - `alias rustscan='docker run -it --rm --name rustscan rustscan/rustscan:latest'`
    - `rustscan -a 192.168.0.9 -t 500 -b 1500 -- -A`
