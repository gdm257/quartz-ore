---
aliases:
- 兰空图床
tags:
- flag/License/GPL
- Label/Industry-工业科学/IT/APP/Server/Self-hosted
- flag/APP/Picture
---

## Brief

- References
    - [lsky-org/lsky-pro: ☁️兰空图床(Lsky Pro) - Your photo album on the cloud.](https://github.com/lsky-org/lsky-pro)

- Installation
    - 

- Version
    - 

- Idea
    - 全功能图床

- Configuration
    - 

- Data
    - 

- Examples
    - 

- Users
    - 

- UI
    - 

- CLI
    - 

- Philosophy
    - 

- Objects
    - 

- Fundamentals
    - 「本地存储」相当于 [[miniserve]] [[alist]]，就是简单的 file server
    - 「OSS 存储」：LSky Pro 将图片上传到 OSS，返回的 URL 直接指向 OSS 的 object。也就是说，LSky Pro 的域名，与「图片 URL」的域名，不是同一个域名，后者是 OSS 服务的域名

- Architecture
    - 

- Pro
    - 免费版全面超越 [[Chevereto]]
    - [[GPL]] 协议，支持闭源建站

- Con
    - MinIO 的 URL 拼接有 Bug，没法用
        - 准确的说，是「BucketEndpoint」这项完全没有生效
        - 另外，是否以 `/` 结尾很重要
        - 与其说是 bug，不如说是故意的，强制要求你使用 Virtual Host Style Bucket（DNS Style Bucket），即 OSS Server 的最终 URL 格式形如 `http(s)://<bucket-name>.domain.com/xxx.jpg`
        - DNS style bucket 缺点明显，OSS Server 与 Reverse Server 高度耦合，不利于维护
    - 缺少 文档！搭建高级功能非常痛苦！
    - 缺少 扩展性，没有 hook，没有丰富的自定义项

- Test
    - 设置保存后立即生效，调试很方便
    - 日志文件实时更新，调试很方便

- Alternatives
    - 

- Description
    - 
