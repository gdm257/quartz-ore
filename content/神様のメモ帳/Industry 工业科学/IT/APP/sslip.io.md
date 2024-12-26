---
tags:
  - flag/License/Freeware
  - Label/Industry-工业科学/IT/APP/Server/Service
  - flag/APP/Network/Implement__/DNS/Server
homepage: https://sslip.io
---

- Idea
    - Provide a [[DNS]] server that return specific IP from queried domain
    - Provide [[DNS]] records of `1.2.3.4.sslip.io` to `1.2.3.4`, where `1.2.3.4` is your server's IP. So you can use `1.2.3.4.sslip.io` to issue [[Let's Encrypt]] TLS certificate by HTTP-01 challenge

- API
    - Public DNS Records
        - `<num>.<num>.<num>.<num>.sslip.io`
    - Private DNS Servers
        - `ns.sslip.io.`
        - `ns-aws.sslip.io.`
        - `ns-azure.sslip.io.`
        - `ns-gce.sslip.io.`
        - `ns-ovh.sslip.io.`
        - Private DNS Records
            - `1-2-3-4.xip.yourdomain.com` -> `1.2.3.4`

- Examples
    - `dig 127.0.0.1.sslip.io +short`
    - `dig '@ns.sslip.io' 169-254-169-254.xip.mydomain.com +short` -> `169.254.169.254`
