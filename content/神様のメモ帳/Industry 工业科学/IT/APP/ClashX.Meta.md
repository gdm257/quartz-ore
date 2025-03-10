---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Network/Implement__/GFW/Proxy
router-rules:
  - DOMAIN
  - DOMAIN-SUFFIX
  - DOMAIN-KEYWORD
  - DOMAIN-REGEX
  - GEOSITE
  - IP-CIDR
  - IP-CIDR6
  - IP-SUFFIX
  - IP-ASN
  - GEOIP
  - SRC-GEOIP
  - SRC-IP-ASN
  - SRC-IP-CIDR
  - SRC-IP-SUFFIX
  - DST-PORT
  - SRC-PORT
  - IN-PORT
  - IN-TYPE
  - IN-USER
  - IN-NAME
  - PROCESS-PATH
  - PROCESS-PATH-REGEX
  - PROCESS-NAME
  - UID
  - NETWORK
  - DSCP
  - RULE-SET
  - AND
  - OR
  - NOT
  - SUB-RULE
  - MATCH
github: MetaCubeX/ClashX.Meta
---

- Syntax
    - [路由规则 - 虚空终端 Docs](https://wiki.metacubex.one/config/rules/)

- Ecosystem
    - Script
        - [Script配置 - Clash Verge Rev Docs](https://clash-verge-rev.github.io/guide/script.html#2)
        - API
            - `function main(config, profileName) {return config;}`
                - `config: dict`
                    - `["proxies"]` or `.proxies`
                    - `["proxy-groups"]`
                    - `["proxy-providers"]`
                    - `["rules"]` or `.rules`
                    - `["rule-providers"]`
                    - `["dns"]` or `.dns`
                    - ...
                - `profileName: str`
                    - clash-verge-rev v2.7.3+ 才有这个参数
        - Objects
            - `console`
            - `Atomics`
            - Infinity、NaN、undefined
            - Function、Object、Math、JSON、Array、Proxy
            - ArrayBuffer、SharedArrayBuffer、BigInt、Boolean、Date、DataView、Map、TypedArray、Int8Array、Uint8Array、Uint8ClampedArray、Int16Array、Uint16Array、Int32Array、Uint32Array、BigInt64Array、BigUint64Array、Float32Array、Float64Array
            - String、RegExp、Symbol
            - Error、RangeError、ReferenceError、TypeError、SyntaxError、EvalError、URIError、AggregateError
            - Reflect、Promise
            - encodeURI、encodeURIComponent、decodeURI、decodeURIComponent
            - WeakRef、WeakMap、WeakSet
