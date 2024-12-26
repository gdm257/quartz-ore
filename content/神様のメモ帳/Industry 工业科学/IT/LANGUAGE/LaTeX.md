---
aliases:
  - LaTeX Specification
tags:
  - flag/LANGUAGE/TeX
  - flag/MachineLanguage/Markup
  - Label/Industry-工业科学/IT/Language
---

## Brief

- 笔记方面，LaTeX 被 Markdown 完爆，公式除外.
- 字体方面，LaTeX 被 Word 完爆.

标记语言の选择

- 写文章：Markdown、org-mode、Word。至于 AsciiDoc、reStructuredText、LaTeX、OPML 都不合格.
- 公式笔记：LaTeX、Word。其他标记语言都不合格.
- 印刷品：LaTeX、Word。其他标记语言都不合格.

## Examples

### Notations


| Notation   | Code       | Description |
| ---------- | ---------- | ----------- |
| $\partial$ | `\partial` | 偏导          |
|            |            |             |


### Lines

- 行内公式 $x^n + y^n = z^n,$

- 单行公式
$$x^n + y^n = z^n,$$

- 多行公式
$$
\begin{eqnarray*}
x + 0 & = & x\\
x + (- x) & = & 0\\
x + y & = & y + x\\
(x + y) + z & = & x + (y + z)
\end{eqnarray*}
$$


- 多行计算式
$$
\begin{eqnarray*}
(\mathrm{e}^{\sin x} + \sin \mathrm{e}^x)'

& = &
(\mathrm{e}^{\sin x})'
+ (\sin \mathrm{e}^x)'\\

& = &
(\sin x)'
\mathrm{e}^{\sin x} + (\mathrm{e}^x)' \cos \mathrm{e}^x\\

& = &
\mathrm{e}^{\sin x} \cos x + \mathrm{e}^x \cos \mathrm{e}^x,
\end{eqnarray*}
$$
