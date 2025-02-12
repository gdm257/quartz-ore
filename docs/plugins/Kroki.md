---
title: "Kroki"
tags:
  - plugin/transformer
---

This plugin adds [Kroki](https://kroki.io) support to Quartz. See [[features/Latex|Latex]] for more information.

> [!note]
> For information on how to add, remove or configure plugins, see the [[configuration#Plugins|Configuration]] page.

This plugin accepts the following configuration options:

- `server`: kroki server URL to use to render diagram descriptions. Default to `"https://kroki.io"` official service, or you can host your own kroki server like `"http://localhost:8000"`.
- `headers`: HTTP headers to send to the server for custom authentication.
- `alias`: a list of code language name to treat as kroki code block, meta.type will be ignored. For full list of names, check [kroki.io](https://kroki.io), which accepts `https://kroki.io/<alias>/<output_format>/<encoded_source>`. If empty list given, you should set e.g. `kroki type=plantuml` as code language name to enable kroki renderer.
- `target`: should be one of `"html"`(default) and `"mdx3"`. Transform HTML tags as MDX 3.0 AST or not. `"mdx3"` makes no sense for quartz.
- `output`: one of `"inline-svg"` `"img-base64"` `"img-html-base64"` `"object-base64"`. Default to `"inline-svg"`. Decide how to output and show diagrams.

## API

- Category: Transformer
- Function name: `Plugin.Kroki()`.
- Source: [`quartz/plugins/transformers/kroki.ts`](https://github.com/jackyzha0/quartz/blob/v4/quartz/plugins/transformers/kroki.ts).
