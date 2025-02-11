import { remarkKroki } from "remark-kroki"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeMathjax from "rehype-mathjax/svg"
//@ts-ignore
import rehypeTypst from "@myriaddreamin/rehype-typst"
import { QuartzTransformerPlugin } from "../types"

interface remarkKrokiOptions {
  server: string
  headers: object
  alias: Array<string>
  output: "img-base64" | "object-inline" | "img-html-base64" | "inline-svg"
  target: "html" | "mdx3"
}
type Options = remarkKrokiOptions

export const krokiAliases = [
  "blockdiag",
  "bpmn",
  "bytefield",
  "d2",
  "seqdiag",
  "actdiag",
  "nwdiag",
  "packetdiag",
  "rackdiag",
  "c4plantuml",
  "ditaa",
  "diagramsnet",
  "erd",
  "excalidraw",
  "graphviz",
  "mermaid",
  "nomnoml",
  "pikchr",
  "plantuml",
  "structurizr",
  "svgbob",
  "symbolator",
  "tikz",
  "umlet",
  "vega",
  "vegalite",
  "wavedrom",
  "wireviz",
]

export const Kroki: QuartzTransformerPlugin<Partial<Options>> = (opts) => {
  const server = opts?.server ?? "https://kroki.io"
  const headers = opts?.headers ?? {}
  const output = opts?.output ?? "inline-svg"
  const alias = opts?.alias ?? []
  const target = opts?.target ?? "html"
  return {
    name: "Kroki",
    markdownPlugins() {
      const remarkKrokiModified = function (options?: Readonly<remarkKrokiOptions> | null | undefined) {
        const mergedOptions: remarkKrokiOptions = {
          server,
          headers,
          output,
          alias,
          target,
        }
        return remarkKroki(mergedOptions)
      }
      return [remarkKrokiModified]
    },
    externalResources() {
      return { css: [], js: [] }
    }
  }
}
