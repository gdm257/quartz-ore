---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/Git
npm: "@commitlint/cli"
git-commit:
  - build
  - ci
  - docs
  - feat
  - fix
  - perf
  - refactor
  - style
  - test
files:
  - commitlint.config.js
key-package.json:
  - commitlint
users:
  - "[[alist]]"
  - "[[sqlmodel]]"
---

## Brief

- Ecosystem
    - [[opencommit]]

- Installation
    - `npm install --save-dev @commitlint/cli`
    - `yarn add --dev @commitlint/cli`

- Examples
    - `yarn add --dev @commitlint/cli @commitlint/config-conventional`
    - `echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js`

- Test
    - `Error: ENOENT: no such file or directory, open 'D:\.home\Documents\repo\fboard\.git\COMMIT_EDITMSG'`
        - [no such file or directory COMMIT\_EDITMSG on new checkout · Issue #589 · conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint/issues/589)
        - `git commit` 自动通过 [[pre-commit]] 调用 [[commitlint]]，报错

## Configuration

- Configuration
    - `.commitlintrc`
    - `.commitlintrc.json`
    - `.commitlintrc.yaml`
    - `.commitlintrc.yml`
    - `.commitlintrc.js`
    - `.commitlintrc.cjs`
    - `.commitlintrc.ts`
    - `.commitlintrc.cts`
    - `commitlint.config.js`
    - `commitlint.config.cjs`
    - `commitlint.config.ts`
    - `commitlint.config.cts`
    - `commitlint` field in `package.json`


## Angular convention

- References
    - [Conventional Commits](https://www.conventionalcommits.org)
    - [angular/CONTRIBUTING.md at 22b96b96902e1a42ee8c5e807720424abad3082a · angular/angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines)
    - [Angular Commit Format Reference Sheet](https://gist.github.com/brianclements/841ea7bffdb01346392c)
    - [googleapis/release-please: generate release PRs based on the conventionalcommits.org spec](https://github.com/googleapis/release-please)
    - [Commit Message Editor使用指南 - Kano酱的博客](https://kanochan.net/archives/3370.html)

- Users
    - [arvinxx/gitmoji-commit-workflow: 😉 Gitmoji Commit Workflow](https://github.com/arvinxx/gitmoji-commit-workflow)

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

```revert 固定格式
revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```

- Type
    - 必填
    - **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
    - **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
    - ~~**chore**: (DEPRECATED) replaced by build/ci~~
    - **docs**: Documentation only changes
    - **feat**: A new feature
    - **fix**: A bug fix
    - **perf**: A code change that improves performance
    - **refactor**: A code change that neither fixes a bug nor adds a feature
    - *style*: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    - **test**: Adding missing tests or correcting existing tests

- Scope
    - 可选
    - A scope MUST consist of a noun describing a section of the codebase surrounded by parenthesis, e.g., `fix(parser)`
    - My Common Scopes
    - `cli`
    - `tui`
    - `gui`
    - `api`
    - `webui`
    - `core`
    - Special Scopes
    - `.gitignore`
    - `deps`
    - `i18n`
    - `log`
    - `settings`
    - `linter`
    - `formatter`
    - Others
    - `animations`
    - `bazel`
    - `benchpress`
    - `common`
    - `compiler`
    - `compiler-cli`
    - `core`
    - `elements`
    - `forms`
    - `http`
    - `language-service`
    - `localize`
    - `platform-browser`
    - `platform-browser-dynamic`
    - `platform-server`
    - `router`
    - `service-worker`
    - `upgrade`
    - `zone.js`

- BLANK LINE
    - 空行，字面意思

- Subject
    - 必填
    - 请勿行尾句点
    - 不超过 50 半角字符
    - E.g. `fix: array parsing issue when multiple spaces were contained in string`

- Body
    - 可选
    - ~~可分成多行，每行不得超过72个字符~~
    - 每行长度没有要求
    - 多行 body 请勿包含空行

- Footer
    - 可选
    - 只用于两种情况：不兼容变动、关闭 Issue
    - 如果当前代码与上一个版本不兼容，则 Footer 部分以`BREAKING CHANGE`开头，后面是对变动的描述、以及变动理由和迁移方法。
    - 如果当前 commit 针对某个issue，那么可以在 Footer 部分关闭这个 issues。`Closes #123, #245, #992`
