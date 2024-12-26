---
tags:
  - flag/Library/APILayer/Implement__/Web/CMS_Framework
  - Label/Industry-工业科学/IT/Library/3rdLibrary
---

- Alternatives
    - [Strapi vs Directus: which one to choose 2024? | by Weframe Tech | Medium](https://medium.com/@weframe.tech/strapi-vs-directus-which-one-is-good-ff398e7c9e42)
    - [Strapi vs Directus](https://strapi.io/headless-cms/comparison/strapi-vs-directus)
        - comparison is out of date
        - Webhooks has been fully replaced by Flows
        - [Webhooks | Directus Docs](https://docs.directus.io/reference/system/webhooks.html)

- Deps
    - [directus/api/package.json at main · directus/directus](https://github.com/directus/directus/blob/main/api/package.json)

- Configuration
    - `/api/.env`
    - `.env`
    - extensions

- Data
    - Files uploaded
        - If you have files uploaded, make sure to copy those over as well, or use the same storage location in the new location of Directus.
    - Database
        1. Schema
            - Custom Schemas
                - Support IaC (and Version Control)
                - `npx directus schema snapshot ./snapshot.yaml`
                - `npx directus schema snapshot --yes ./snapshot.yaml` non-interactively
                - `npx directus schema apply ./path/to/snapshot.yaml`
                - `npx directus schema apply --yes ./path/to/snapshot.yaml`
                - `npx directus schema apply --dry-run ./path/to/snapshot.yaml`
            - Built-in Schemas
                - `npx directus database install`
                - `npx directus bootstrap` equivalent to
                    - `npx directus database install`
                    - `npx directus database migrate:latest`
            - [Migrate schema | Directus Docs](https://docs.directus.io/self-hosted/cli.html#migrate-schema-to-a-different-environment)
        2. Migrations
            - Custom Migrations
                - `./migrations/` (`MIGRATIONS_PATH`)
                    - `[identifier]-[name].js`
                    - `20201202A-my-custom-migration.js`
                    - 官方没有特别提供 API，需要自己手动实现
                - `directus database migrate:*`
                - [Custom Migrations | Directus Docs](https://docs.directus.io/self-hosted/migrations.html)
            - Built-in Migration
                - `directus database migrate:latest`
        3. Dump
            - Custom Tables
                - 很遗憾官方并没有提供 [[Django]] 那样的数据库无关的导出，只能手动导出 [[SQL]]
                - NOT Support cross-database
                - [Upgrades & Migrations | Directus Docs](https://docs.directus.io/self-hosted/upgrades-migrations.html)
            - Built-in Tables
                - 很遗憾官方也没有提供 IaC/Export 方案，只能自己手动模拟
                - RBAC/Users/Roles etc 想做 [[git]] version control 很麻烦

- Objects
    - [[directus]] == API Server
    - `@directus/sdk` == API Client
    - Collection == Table
    - Flow == Server-Side Event & Hook
        - Similar to GitHub Action

- API
    - [Custom API Endpoints | Directus Docs](https://docs.directus.io/extensions/endpoints.html)
    - [Headless CMS | Directus Docs](https://docs.directus.io/use-cases/headless-cms/introduction.html)
    - [Build a Website With Next.js and the Directus JavaScript SDK | Directus Docs](https://docs.directus.io/guides/headless-cms/build-static-website/next.html)
    - [Build a Website With Nuxt 3 and the Directus JavaScript SDK | Directus Docs](https://docs.directus.io/guides/headless-cms/build-static-website/nuxt-3.html)
    - [Getting Started with Directus and Astro | Directus Docs](https://docs.directus.io/blog/getting-started-directus-astro.html)

```css
// 隐藏「设置」页面里关于 directus 的链接
.module-nav.alt-colors .module-nav-content .v-list.nav:has(a[href="https://github.com/directus/directus/discussions/new?category=feature-requests"]) a:nth-last-child(-n+3) {
    display: none;
}
```
