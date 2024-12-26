---
tags:
  - flag/Library/APILayer/Implement__/Web/SSG-Framework
  - flag/License/MIT
  - Label/Industry-工业科学/IT/Library/3rdLibrary
publish: "true"
homepage: https://quartz.jzhao.xyz
github: jackyzha0/quartz
npx: quartz
files:
  - quartz.config.ts
frontmatter:
  - title
  - description
  - permalink
  - aliases
  - tags
  - draft
  - publish
  - date
  - cover
  - image
  - socialImage
html-events:
  - nav
slots:
  - head
  - header
  - beforeBody
  - pageBody
  - afterBody
  - left
  - right
  - footer
---

- Fundamentals
    1. Generate [[quartz]] building scripts (because user might extend [[quartz]])
    2. Parse [[Markdown]] content files
        1. Create `vfile`
        2. Apply text *transformers*
        3. Slugify the file path
        4. Parse [[Markdown]]
        5. Apply markdown-to-markdown transformers
        6. Convert [[Markdown]] to [[HTML]]
        7. Apply HTML-to-HTML transformers
        8. [Architecture](https://quartz.jzhao.xyz/advanced/architecture)
    3. *Filter* out unwanted [[Markdown]] files
    4. *Emit* files
        1. Content assets
        2. [[HTML]] files

- CLI
    - Fundamentals
        - `npx quartz sync --no-pull`
            - is equivalent to
            - `git add . && git commit && git push`

- Web
    - `/`
    - `/tags/`
    - `/<path>/<to>/<file>`

- Ecosystem
    - Emitter
        - [Layout](https://quartz.jzhao.xyz/layout)
        - [Creating your own Quartz components](https://quartz.jzhao.xyz/advanced/creating-components)
        - Con
            - NOT Support web framework except [[JSX]]
                - That means you should write component by [[JSX]](TSX) from scratch without [[React]]/[[vue]] framework, just web 1.0 i.e. [[HTML]]/[[CSS]]/[[JavaScript|JS]]
                - To create a complex component, reference `quartz/components/Graph` component
        - `quartz/plugins/types.ts:type QuartzEmitterPluginInstance` Emitter
            - Emitter is a function that returns `type QuartzEmitterPluginInstance`
                - `name: string`
                - `emit`
                    - Slugging [[URL]]([[URI]])
                - `getQuartzComponents`
                    - returns a list of components, which is equivalent to *the whole [[HTML]] page*
                    - Each page is composed of multiple different sections which contain `QuartzComponent`s
                    - Emitter could add components to sections
                - `getDependencyGraph`
                    - Use for `Graph` component
        - `quartz/cfg.ts:export interface FullPageLayout` Sections
            - `head: QuartzComponent`
            - `header: QuartzComponent[]`
            - `beforeBody: QuartzComponent[]`
            - `pageBody: QuartzComponent`
            - `afterBody: QuartzComponent[]`
            - `left: QuartzComponent[]`
            - `right: QuartzComponent[]`
            - `footer: QuartzComponent`
            - To extend content page, pass in `opts: FullPageLayout` to `ContentPage()` in `quartz.config.ts`
            - Because `getQuartzComponents()` returns `QuartzComponent[]`, you should manually unpack component list like `return [head, ...header, ...beforeBody, pageBody, ...afterBody, ...left, ...right, footer]`
            - To layout the page, please use `.css` property with [[CSS]] (see below)
        - `quartz/components/index.ts` Compoents
            - Component is a function that `satisfies quartz/components/types.ts:QuartzComponentConstructor`
            - Component is a function that returns a function that returns [[HTML]] fragment in [[JSX]](TSX) syntax
            - Component supporting hook by attributions
                - `.css: string` in [[CSS]]
                - `.beforeDOMLoaded: string` in [[JavaScript|JS]]
                - `.afterDOMLoaded: string` in [[JavaScript|JS]]
