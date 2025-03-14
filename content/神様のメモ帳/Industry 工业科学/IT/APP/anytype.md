---
tags:
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
  - Label/Industry-工业科学/IT/APP/GUI/Mobile
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
scoop: anytype
---

## Brief

- Fundamentals
    - [[Electron]]

- Pro
    - Support E2EE
        - Key is generated and auto saved in Windows Credential Manger

- Con
    - NOT Support plugin system
    - NOT Support self-hosted directly
        - Backup node [[URL]] is embedded in [[anytype]] client
        - To use self-hosted backup node, you should compile client manually
    - NOT Support nested tags
        - [[anytype]] `tag` 是扁平的，只有一层，等价于编程中的 Enum 枚举
            - 第一，搜索祖先标签时，无法获取后代标签的 Objects。但 [[Obsidian]] 支持
        - 如果用 [[anytype]] `Object` 来当作 Tag，并创建例如名为 `Sub Tags` 的 `Object` 类型的 `Relation`，来模拟多层级标签。最后在需要打标签的 `Object` 通过 `Relation` 来指向 Tag Object
            - 逻辑上确实是多层级标签
            - 使用有缺点
            - 第一，搜索祖先标签时，无法获取后代标签的 Objects。但 [[Obsidian]] 支持

- Philosophy
    - Graph Database
        - [[anytype]] Object == Node
        - [[anytype]] Relation == Node's Property
        - [[anytype]] 没有提供图论的 Edge，只能通过 Node Properties 来模拟
            - Many-to-One 的时候应该在 One 那一边创建 Relation，这样才能用 [[anytype]] 的 `Set` 来模拟「图遍历」操作
    - *Node*, instead of *Block*
        - Block 本质是「逻辑行」，而「行（Line）」是「Content」的单位
        - Block 是不稳定的，因为 content 是不稳定的，line 是不稳定的
        - Block 是不稳定的，即便你给每个 block 生成一个随机 ID。
            - 一旦删除该 block，对该 block 的引用全部失效，哪怕你新建了一个 block 并且有着一模一样的内容
            - [[Markdown]] 使用「物理行」来充当 content 的「行」，即「物理行」就是「逻辑行」，因此它的「行」没有任何稳定性可言，更别说去引用该行
            - [[Notion]]-like 们用「逻辑行」来充当 content 的「行」，虽然不像 [[Markdown]] 物理行那样容易丢失，但只是缓解、降低了「行」丢失的可能性，并没有根治这个问题。
            - 要想根治，必须要像 [[SQL]] 那样使用 Relationship 强制预定义 Keys。这样 Key 是稳定的，所以程序员们才能放心大胆操作 Keys
            - 放在笔记软件里，那就是 [[anytype]] 的 relations、[[Obsidian]] 的 frontmatter、[[Roam Research]] 的 CRM
            - 放在 Airtable-like 软件里，那就是 table headers

- References
    - [Intro to Anytype | Anytype Docs](https://doc.anytype.io/anytype-docs)
    - [Open repos](https://tech.anytype.io/)

## Data

- Philosophy
    - SQL/NoSQL *Fields* by *Relations*
    - Stream Note *Content* by Non-Relation
        - 一个 Object 可以解构为 2 个部分
            1. Relations
            2. Content
        - Relations 使一个 Object 等价于「一条 SQL 记录」「A Node in Graph DB」
        - Content 使一个 Object 等价于「一篇笔记」
        - Examples
            - `Set` 就是典型的「只有 Relations」「没有 Content」的 Node，或者说是「Content 完全根据 Relations 动态生成」
        - 这就引出了二者的特点
            - Content 趋向手动、没有配合
            - Relation 趋向自动、正交性强、兼容性强、**易于迁移**
        - 我个人并不喜欢「Content」，而是倾向于 **Relations ONLY**
            - [[anytype]] 或许也是这么想的，于是设计了 `Type` `Layout` `Template` `Set` *以增强 Relations 的体验*，并内置了一些的 `Type`s

- Types
    - **Vault**
        - Vault == Database
        - Space == Schema
        - Object Type == Table
        - Object == Record
        - Relation == a property of the Object
            - 这里的 relation 并不是 SQL 里的 relation，而是单纯的 field
            - 自定义 relation == 声明 field name
            - relation value == filed value
                - You can also use Relations to link one Object to another
                - 简单说，value 可以用作外键，指向另一个 Object
            - 因为 *Object* 是「Row」与「Stream Block」的结合
                - Relations 承担了 Row 的 fields 的角色
                - Relations 实际上就是 NoSQL 的自定义字段（列）
                - Relations 在 Object 窗口的顶部进行编辑，体验类似 [[Obsidian]] frontmatter
                - 笔记正文 承担了 Blocks 的角色
                - 笔记正文 是典型的 流式文本（标记语言），由于其形式不固定（与之相对数据库 Table 有着固定的结构），不得不进行 *正交*、*嵌套式* 渲染
                    - 因此 笔记正文 对于「管理」来说是一种 *落后* 的结构，原因就不详细阐述了，这点对前端开发者来说很容易理解
                    - 本质上就是为了降低「用户」的*使用门槛*，在数据结构上进行了 *阉割*
                    - 我有一个不成熟的猜想，用户的水平越高、知识体系越完整，就越倾向于「结构化」的数据，例如上面所说的 Relations，并且正文长度越短；反之则*不得不*使用门槛较低的「流式文本」，*正文长度越长*。
                    - 最典型的例子莫过于「树形结构」
                        - 用「标记语言」如 [[Markdown]] 嵌套列表的话*书写很方便*，但是却无法进行「结构的查询」的（也就是只能进行简单的全文搜索（[[RegExp]]），而无法像 [[SQL]] 那样使用 `join` 来查询）
                        - 用「数据库」需要 *提前规划 fields/tables/relationship*，门槛高，但是 *定制化的查询、修改（CRUD）* 十分简单
                    - 新一代笔记软件 [[Obsidian]]、[[Notion]]、[[anytype]]、Research Roam etc，*无一例外*都朝着「数据库」这个方向设计与发展；「标记语言」这个方向的底层数据结构设计千篇一律，差异*只*在于集成度与*用户体验细节优化*
                - 笔记正文 通过键盘回车直接输入
        - Block Type == [[wagtail]] block type
        - Block == [[wagtail]] block
        - Widget == Qeury + UI
        - [Glossary](https://tech.anytype.io/l10n/glossary)
    - **Object**
        - Idea
            - *EVERYTHING* (any content) in [[anytype]] is an Object
            - Your content lives in objects
        - Philosophy
            - Every object has a Type
                - *多对一，灵活性下降一个层次，这样的的设计究竟是好是坏？*
                - 坏文明！
        - System Types
            - `Type`
                - Object Type
                - Type itself is also an object
            - `Audio`
            - `Bookmark`
            - `Collection`
                - 就是个 [[Excel]]，但没有导入功能，鸡肋
            - `File`
            - `Image`
            - `Note`
            - `Page`
            - `Set`
                - gather all objects of *a certain type* in your space
                - 只有一个 query 条件，鸡肋。我不理解，别说 [[Dataview]]，连 [[Obsidian]] 全文搜索都支持多个条件进行与或非组合
                - ……好吧，也不是没有解决办法，因为所有创建 Object 时会自动添加一些 Relations 例如 `Object Type` `Creation Date`。唯一 query 直接选 `Relation -> Object Type`，相当于搜索所有 Objects。之后再通过次级 filters 对 relations 进行过滤
            - `Space member`
            - `Task`
            - `Template`
            - `Video`
            - [Glossary](https://tech.anytype.io/l10n/glossary)
        - Built-in Types
            - `Human`
            - `Project`
            - Allowed to delete
        - System Relation Types
            - `URL`
            - `Text`
            - `Number`
            - `Date`
            - `Status`
            - `Tag`
            - `Email/phone/URL`
            - `Checkbox`
            - `Media`
            - `Object`
            - 就如同 [[MySQL]] 规定了「数据类型」，[[anytype]] 规定了「relation types」
            - 支持 创建 relation
            - 不支持 创建 relation type
            - Create relation == Declare field *NAME*
            - Relation type == Relation *value type*
            - [Add a New Relation | Anytype Docs](https://doc.anytype.io/anytype-docs/basics/relations/create-a-new-relation)
    - **Space**
        - An object only lives in and belongs to ONE space
        - Space-scoped by default, like `Namespace` in [[k8s]]
        - Space is essentially a graph
        - Anytype aims to provide a natural way of thinking where everything is represented as objects with specific relationships, just like in the real world
    - **Widget**
        - Idea
            - Widget is a custom view of your data(objects)
        - Examples
            - `All Objects` is a system widget
