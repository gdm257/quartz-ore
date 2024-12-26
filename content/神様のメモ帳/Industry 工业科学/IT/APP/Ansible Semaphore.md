---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/DevOps/CD
vars:
  - semaphore_vars
scoop: gdm257/semaphore
---

- Idea
    - A WebUI to replace `ansible-playbook`
        - 提问：原生 [[ansible]] 如何使用？
        - `ansible-playbook mybook.yml`
        - 运行 playbook 是原生 [[ansible]] 最灵活、最推荐的使用方式，官方提供了 `ansible-playbook` 命令用来运行 playbook
        - CLI 用多了，自然想用 GUI 偷懒，于是 [[Ansible Semaphore]] 诞生了
    - Simplify workflow
        - 提问：为了 `ansible-playbook custom-book.yml`，需要做哪些工作？
            - 编写 playbook 的 [[YAML]] 文件
            - 编写 playbook 所需的 Config [[INI]] 文件
            - 编写 playbook 所需的 Inventory 文件
            - 编写 playbook 所需的 Role 文件
            - 编写 playbook 所需的 Module 文件
            - 编写 playbook 所需的 其他文件
        - [[Ansible Semaphore]] 简化了部分工作
            - [[Ansible Semaphore]] supports writing "Inventory", "Vars", "credentials" in Web UI
            - [[Ansible Semaphore]] 不需要你写 config 文件
            - [[Ansible Semaphore]] 允许你运行 远程目录（repo）里的 playbooks

- Alternatives
    - [[ansible|`ansible-playbook` command]]

- Dependencies
    - [Manual Installation | Semaphore Docs](https://docs.semui.co/administration-guide/installation_manually)
    - [[Python]]
    - [[ansible]]
    - [[git]]
    - `~/.ssh/known_hosts` with managed nodes' fingerptint
        - important!
    - 3rd python packages for some modules/roles automatically
        1. `/etc/semaphore/requirements.txt` for [[Docker]]
        - [Installation | Semaphore Docs](https://docs.semui.co/administration-guide/installation#installing-additional-python-packages)
        - [feat: python3 requirements-file for docker deployments by ansibleguy · Pull Request #1498 · semaphoreui/semaphore](https://github.com/semaphoreui/semaphore/pull/1498)
        - [installing python modules required by collections in semaphore docker container? · Issue #1401 · semaphoreui/semaphore](https://github.com/semaphoreui/semaphore/issues/1401)
        - [semaphore/deployment/docker/common/semaphore-wrapper at develop · semaphoreui/semaphore](https://github.com/semaphoreui/semaphore/blob/develop/deployment/docker/common/semaphore-wrapper)
    - 3rd collections/roles automatically
        1. `roles/requirements.yml` `collections/requirements.yml` in repo
        - For the fundamentals, [[Ansible Semaphore]] run it automatically when task is launched: `ansible-galaxy install -r requirements.yml`
        - [Ansible Galaxy support · Issue #150 · semaphoreui/semaphore](https://github.com/semaphoreui/semaphore/issues/150)
        - [Ansible best practices: using project-local collections and roles | Jeff Geerling](https://www.jeffgeerling.com/blog/2020/ansible-best-practices-using-project-local-collections-and-roles)
        - [Roles managment · Issue #377 · semaphoreui/semaphore](https://github.com/semaphoreui/semaphore/issues/377)
        - [Ansible Galaxy Collections in Semaphore · Issue #682 · semaphoreui/semaphore](https://github.com/semaphoreui/semaphore/issues/682)
        - [Collections · Issue #692 · semaphoreui/semaphore](https://github.com/semaphoreui/semaphore/issues/692)
        - [Manual Installation | Semaphore Docs](https://docs.semui.co/administration-guide/installation_manually)

- Configuration
    - `config.json`

- Data
    - Playbook repo layout
        - `(repo)/`
            - `collections/requirements.yml`
            - `roles/requirements.yml`
            - `*.yml`

- Con
    - 你仍要手写 playbook 并上传为 git repo
