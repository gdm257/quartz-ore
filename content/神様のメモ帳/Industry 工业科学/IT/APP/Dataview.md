---
tags:
  - Label/Industry-工业科学/IT/APP/Plugin/Obsidian/Plugin
alternatives:
  - "[[Query All The Things]]"
github: blacksmithgu/obsidian-dataview
md-blocks:
  - dataview
  - dataviewjs
js-magic-helper:
  - dv
---

## Brief

- References
    - [Network Dependents · blacksmithgu/obsidian-dataview](https://github.com/blacksmithgu/obsidian-dataview/network/dependents)

- Idea
    - 像 [[SQL|SQL-like]] 查询笔记、提取内容、展示结果
    - 用 [[JavaScript|JavaScript]] 查询笔记、提取内容、展示结果

- Fundamentals
    - 渲染 `dataview` [[Markdown]] Fenced Code Block
    - 渲染 `dataviewjs` [[Markdown]] Fenced Code Block
    - 渲染 行内式查询（inline query）

- Philosohpy
    - Inline Properties
        - [Native support for Inline (Intext) properties (`key:: value` a la dataview) - Feature requests - Obsidian Forum](https://forum.obsidian.md/t/native-support-for-inline-intext-properties-key-value-a-la-dataview/17092)
        - [Inline property style - Help - Obsidian Forum](https://forum.obsidian.md/t/inline-property-style/46902)
    - 高性能、灵活、强大、可编程、可扩展

- Description
    - Dataview 是 [[Obsidian]] 最强插件之一

## DSL

### Add metadata

- Field Definition (aka Index)
    1. [[Obsidian#Frontmatter|YAML Frontmatter]] field
        - field aka key
    2. `[key:: value]` or `(key:: value)`
        - 行内字段 inline field
        - `::` 之后紧跟的空格会被忽略
        - `::` 直到右方括号为 value
    3. `key:: value`
        - 行尾字段 inline field
        - `::` 之后紧跟的空格会被忽略
        - All content after the `::` is the value of the field until the next line break
    4. 内置字段
        * E.g. `file.path`
        * 详见 [Metadata on Pages](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-pages/)
        * 详见 [Metadata on Tasks and Lists - Dataview](https://blacksmithgu.github.io/obsidian-dataview/annotation/metadata-tasks/)
    * Field 建议不带空格
    * Field 支持大写英文字母
    * Value 支持的数据类型有
        * `Text`
        * `Number`
        * `Boolean`
        * `List`
        * `Object`
        * `Link`
        * `Date`
        * `Duration`


### Query

- Query
    1. `dataview`
        - Dataview Query Language (DQL)
        - [[Markdown]] Fenced Code Block
    2. `dataviewjs`
        - [[JavaScript|JavaScript]] Query
        - [[Markdown]] Fenced Code Block
    3. `= DQL`
        - inline DQL query
    4. `$= JS`
        - inline [[JavaScript|JavaScript]] query


#### 1. DQL

```dataview
LIST
FROM #工业科学Industry/IT/App/License
SORT aliases DESC
```

- Dataview Query Language
    1. Query Type
        1. `LIST`
        2. `TABLE`
        3. `TASK`
        4. `CALENDAR`
    2. (Optional) `FROM` statement
    3. (Optional) other data commands to sort, group and filter output
    - DQL 语法类似 [[SQL]]
    - DQL 支持小写指令 E.g. `from`，但为了可读性推荐大写


#### 2. JS Query

- References
    - [基于 Dataview 构建 Obsidian Memos 的监控大盘](https://www.edony.ink/my-obsidian-memos-monitor-system/)

```dataviewjs

```

- API
    - [Codeblock Reference - Dataview](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/)
    - Query
        - `dv.current()`
        - `dv.page(path)`
        - `dv.pages(source)`
        - `dv.pagePaths(source)`
            - `source: str`
            - `condition [{and|or} condition]...`
            - Condition
                - Tags: `#foo/bar` `-#foo/bar` `!#foo/bar`
                - Folders: `foo/bar`
                - Files: `folder/file`
                - Links: `[[note]]`
                    - 所有引用了 `note` 的文章
                - 支持 引号包裹以处理空格
            - 支持 括号提升逻辑运算优先级
    - Widget
        - Render
            - `dv.el(element, text)`
                - [[HTML]] element
                - E.g.
                - `dv.el("b", "This is some bold text")`
                - `dv.el("b", "This is some text", { cls: "dataview dataview-class", attr: { alt: "Nice!" } });`
            - `dv.header(level, text)`
            - `dv.paragraph(text)`
            - `dv.span(text)`
            - `dv.execute(source)`
            - `dv.executeJs(source)`
            - `dv.view(path, input)`
        - Dataviews
            - `dv.list(elements)`
            - `dv.table(headers, elements)`
            - `dv.taskList(tasks, groupByFile)`
        - Markdown Dataviews
            - `dv.markdownTable(headers, values)`
            - `dv.markdownList(values)`
            - `dv.markdownTaskList(tasks)`

- `Pages`
    - `.where()`
    - `.sort()`
    - `.groupBy()`
    - `.distinct()`
    - `.map(func)`
    - `.file.name`
        - return a data array of all file names

- `Page.file`
    -   `file.name`：笔记的标题。
    -   `file.folder`：此文件所属文件夹的路径。
    -   `file.path`：完整文件路径（字符串）。
    -   `file.link`：指向文件的链接（链接）。
    -   `file.size`：文件的大小（字节）（数字）。
    -   `file.ctime`：创建文件的日期（日期+时间）。
    -   `file.cday`：创建文件的日期（只是一个日期）。
    -   `file.mtime`：上次修改文件的日期（日期+时间）。
    -   `file.mday`：上次修改文件的日期（只是一个日期）。
    -   `file.tags`：笔记中所有独特的标签的数组。副标签按级别细分，所以`#Tag/1/A` 将以`[#Tag, #Tag/1, #Tag/1/A]` 的形式存储在数组中。
    -   `file.etags`：笔记中所有显式标签的数组；与 `file.tags` 不同，不包括副标签。
    -   `file.inlinks`：包含当前笔记「双向链接」的其他笔记。
    -   `file.outlinks`：笔记中所有包含的双向链接、附件。
    -   `file.aliases`：当前笔记的所有「别名」，结果是数组形式。
    -   `file.tasks`：当前笔记所有「任务」组成的数组。例如 `- [ ] blah blah blah`。

- Fundamentals
    - `DataArray`
        - JS array 的代理类，扩展了更多功能
        - `.where()` aka `.filter()`
        - `.sort()`
        - `.groupBy()`
            - 返回多个 `group`，`group` 是子集，仅此而已
            - 将一个 `DataArray` 拆分为多个 `DataArray`，元素总数相等
            - [Codeblock Examples - Dataview](https://blacksmithgu.github.io/obsidian-dataview/api/code-examples/)
        - `.limit(n)`
        - `.map()`
    - [Data Arrays - Dataview](https://blacksmithgu.github.io/obsidian-dataview/api/data-array/)
