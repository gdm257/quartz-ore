---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/CI
aliases:
  - task
  - go-task
  - taskfile
frontmatter-as-page:
  - recipe-functions
  - recipe-properties
github: go-task/task
commands:
  - task
scoop: task
choco: go-task
winget: Task.Task
npm: "@go-task/cli"
snap: task
brew: go-task
pkgx: task
aur: go-task-bin
dnf: go-task
nix-env: nixpkgs.go-task
pacstall: go-task-deb
github-action:
  - arduino/setup-task
json-schema:
  - https://taskfile.dev/schema.json
vars:
  - "{{.CLI_ARGS}}"
  - "{{.CLI_FORCE}}"
  - "{{.TASK}}"
  - "{{.TASK_EXE}}"
  - "{{.TASK_VERSION}}"
  - "{{.TASKFILE}}"
  - "{{.TASKFILE_DIR}}"
  - "{{.CHECKSUM}}"
  - "{{.ROOT_TASKFILE}}"
  - "{{.ROOT_DIR}}"
  - "{{.USER_WORKING_DIR}}"
  - "{{.TIMESTAMP}}"
  - "{{.KEY}}"
  - "{{.ITEM}}"
template-functions:
  - OS
  - ARCH
  - exeExt
  - catLines
  - splitLines
  - splitArgs
  - joinPath
  - relPath
  - toSlash
  - fromSlash
  - shellQuote
  - merge
  - spew
exit-codes:
  - 0
  - 1
  - 100
  - 101
  - 102
  - 103
  - 104
  - 105
  - 106
  - 107
  - 200
  - 201
  - 202
  - 203
  - 204
  - 205
  - 206
files:
  - taskfile.yaml
  - Taskfile.yaml
  - taskfile.yml
  - Taskfile.yml
---

- Idea
    - [[YAML]]-based task runner

- Pro
    - Support **looping**
        - [[go-task|task]] 原生支持 for 循环，不依赖 shell，跨平台且优雅
    - Support **redirection**
        - [[go-task|task]] 原生支持 [[Bash]] 重定向语法，不依赖 shell，跨平台且优雅
        - [Tilde evaluation mangles output · Issue #91 · go-task/task](https://github.com/go-task/task/issues/91#issue-296319509)
    - Support var using var
        - In `vars`, a var can use another var
        - e.g. `vars: {FOO: foo, FO: '{{.FOO}}'}`
    - Support cross-platform
        - 跨操作系统
        - 跨 shell
        - Task **parses** and run commands as [[Bash]]
        - [[go-task|task]] 自身就能够解析 [[Bash]] script，不依赖外部 shell
        - 因此 literal string script 能够在 [[Windows]] 运行，哪怕用了 [[PowerShell]]/[[cmd]] 不支持的语法
        - [Tilde evaluation mangles output · Issue #91 · go-task/task](https://github.com/go-task/task/issues/91#issue-296319509)

- Con
    - ~~NOT Support if-else~~
        - Supported by [Templating Reference](https://taskfile.dev/reference/templating/)
    - NOT Support Shebang script
        - Use [[just]] as alternative
    - NOT Support shell other than [[Bash]]
        - `task` parses and run commands as [[Bash]], not [[PowerShell]], even if you're on Windows and running on a Powershell console
        - Solutions: [Tilde evaluation mangles output · Issue #91 · go-task/task](https://github.com/go-task/task/issues/91#issue-296319509)

- Data
    - `Taskfile.yaml`
    - `Taskfile.yml`
    - `taskfile.yaml`
    - `taskfile.dist.yaml` override `taskfile.yaml`
    - cwd 没有则向上递归查找父目录

- Syntax
    - [Schema Reference | Task](https://taskfile.dev/reference/schema)
    - `version: str`
        - e.g. `'3'`
    - `env: Dict[str, Any]`
    - `vars: Dict[str, Any]`
    - `dotenv: List[str]`
        - e.g. `dotenv: ['.env', '{{.ENV}}/.env.', '{{.HOME}}/.env']`
    - `run: "always" | "once" | "when_changed"`
    - `method: "checksum" | "timestamp" | "none"`
    - `interval: str = '5s'`
    - `silent: bool = false`
    - `output: "interleaved" | "group" | "prefixed"`
    - `set: List[str]`
    - `shopt: List[str]`
    - `includes`
        - `Dict[<namespace:str>, <file:str>]`
        - `Dict[<namespace:str>, Dict]`
            - `namespace: Dict`
                - To execute task, run `task namespace:task-name`
                - `aliases: List[str]`
                - `taskfile: str`
                - `dir: str`
                - `vars: Dict[str, List|int|float|bool|str|Dict]`
                    - `{{index .FOO 0}}` reads `List`
                    - `{{len .FOO }}` calls function
                    - `{{.FOO.BAR}}` reads `Dict`
                - `optional: bool = true`
                    - ignore if the included file is missing
                - `internal: bool`
                    - all the tasks of the included file to be internal
    - `tasks: Dict[str, Dict]`
        - `task-name: Dict`
            - `cmds: List[Dict | str]`
                - `cmds: List[Dict]`
                    - `cmd: str`
                    - `defer: str`
                    - `task: str`
                    - `for: Dict | List`
                    - `vars: Dict[str, Any]`
                    - `silent: bool = false`
                    - `ignore_error: bool = false`
                    - `set: List[str]`
                    - `shopt: List[str]`
                    - `platforms: List[str]`
                - Looping
                    - `for: [i0, i1, i2]`
                        - static list
                    - `for: Dict[str, Any]`
                        - `var: str`
                        - `split: str`
                        - foreach variable
                        - split by line by default
                    - `sources: List[file]`
                        - iterate text files by line
                        - support `*` glob pattern for file
                    - `as: str = "ITEM"
                        - `{{.ITEM}}` iteration item value
                    - `cmd: str`
                    - `task: str`
                - e.g. `echo 'foo'`
                - e.g. `defer: rm -rf tmpdir/`
                - e.g.
                    - `task: another-task`
                    - `vars: Dict[str, Any]`
                    - `silent: bool`
            - `deps: List`
                - `List[<task-name:str>]`
                - `List[Dict]`
                    - `task: str`
                    - `vars: Dict[str, Any]`
                        - override keys
                    - `silent: bool = false`
                - all deps run in parallel
            - `vars: Dict[str, Any]`
                - access by `{{.VAR}}`
                - value can use template syntax e.g. `VAR_2: '{{.VAR_1}}'`
                - static variable
                    - value is literal string, boolean, integer, float, array or map
                    - `{{index ARRAY_VAR 0}}`
                    - `{{index MAP_VAR "key"}}`
                - dynamic variable (if map variable is disable)
                    - `VAR_NAME`
                        - `sh: str`
                            - command output as variable
                        - `ref: str`
                            - e.g. `ref: .VAR`
                            - reference to `VAR` and maintains its type (array, map, bool etc)
                            - If you want to pass something other than a string to another task then you will need to use a reference (`ref`) instead
                - dynamic variable (if map variable is enable)
                    - `VAR_NAME: '$command options args'`
                    - all static string variables starting with `$` or `#`, should be escaped by backslash (`\`)
                    - `#.FOO` reference other variable
                - Priority (highest to lowest)
                    - if `<called-task>` references `{{.VAR}}` in `cmd`, and `<caller-task>` calls `<called-task>` in `task`
                    1. `tasks.<called-task>.vars`
                    2. `task <called-task> <called-task> VAR=value`
                    3. ~~`tasks.<called-task>.cmds[i].vars`~~ NO effect!
                    4. `tasks.<caller-task>.cmds[i].vars`
                    5. ~~`tasks.<caller-task>.vars`~~ NO effect!
                    6. `vars`
                    7. `VAR=value task <called-task> <called-task>`
                    8. `export VAR=value; task <called-task> <called-task>`
                    10. ~~`tasks.<called-task>.env`~~ NO effect!
                    11. ~~`tasks.<caller-task>.env`~~ NO effect!
                    9. `env` (bug?)
                    12. non-existence variable as if empty string
            - `requires: Dict`
                - `vars: List[str]`
                - MUST specify `VAR=value` in cli
            - `env: Dict[str, str]`
                - Priority (highest to lowest)
                    - if `<called-task>` contains `${ENV}` in `cmd`, and `<caller-task>` calls `<called-task>` in `task`
                    1. `VAR=value task <called-task> <called-task>`
                    2. `export VAR=value; task <called-task> <called-task>`
                    3. `tasks.<called-task>.env`
                    4. ~~`tasks.<caller-task>.env`~~
                    5. `env`
                    6. non-existence variable as if empty string
                    7. ~~`tasks.<called-task>.vars`~~
                    8. ~~`task <called-task> <called-task> VAR=value`~~
                    9. ~~`tasks.<called-task>.cmds[i].vars`~~
                    10. ~~`tasks.<caller-task>.cmds[i].vars`~~
                    11. ~~`tasks.<caller-task>.vars`~~
                    12. ~~`vars`~~
                    - `{{.ENV}}` substitution by [[go-task|task]] (used in the entire Taskfile)
                    - `${ENV}` expansion by shell (used in command only such as `cmd` `defer`)
            - `dir: str`
                - default to where the Taskfile is located
            - `interactive: bool = false`
            - `platforms: List[str]`
                - e.g. `windows`
                - e.g. `windows/amd64`
                - e.g. `amd64`
                - e.g. `darwin` macOS
            - `preconditions: List[str] | List[Dict["sh"|"msg", str]]`
                - ALL cmd should exit with 0
                - Otherwise task is skipped
            - `status`
                - ALL cmd should exit with non-zero
                - Otherwise task is skipped
            - `sources`, `generates`
                - ANY source file's modification time should be later than ANY generates
                - Otherwise task is skipped
            - `aliases: List[str]`
            - `desc: str`
