---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/DevOps/CD
  - flag/APP/Layer
  - flag/Platform/Linux独占
frontmatter-as-page:
  - ansible-galaxy-collection
  - ansible-galaxy-role
  - ansible-hosts
  - ansible-module-attributes
  - ansible-module-parameters
  - ansible-module-returns
pip: ansible
apt: ansible
commands:
  - ansible
  - ansible-community
  - ansible-config
  - ansible-connection
  - ansible-console
  - ansible-doc
  - ansible-galaxy
  - ansible-inventory
  - ansible-playbook
  - ansible-pull
  - ansible-test
  - ansible-vault
aliases:
  - Ansible
envvars:
  - ANSIBLE_CONFIG
ansible-hosts:
  - all
---

## Brief

- License
    - [[GPL]] 3.0
        - [[ansible]] 以及内置的很多 collections 如 [[community.general]] 都采用 [[GPL]]v3
        - 但你开源的 collections/roles 可以不被 [[GPL]] 传染
        - 第一，collections/roles 本身算是 [[ansible]] 的 configuration。一般 config 是不视作会被 [[GPL]] 影响的，即便 app 本身采用 [[GPL]]，这是开源世界的常识
        - 第二，collections/roles「声明依赖」另一个 [[GPL]] 开源的 collection 如 [[community.general]]，也不受 [[GPL]] 传染性影响。形式上，「依赖声明」很像「动态链接（库）」，广义上你可以说后者包含前者。但实践中并非如此，看来对 [[GPL]] 规定的「动态链接」的解释，还是收缩在了狭义的「动态链接库」，才会被视作 [[GPL]] 衍生作品
            - 实际案例 [hashistack/requirements.yml at main · wescale/hashistack](https://github.com/wescale/hashistack/blob/main/requirements.yml)

- Philosophy
    - [enginyoyen/ansible-best-practises: A project structure that outlines some best practises of how to use ansible](https://github.com/enginyoyen/ansible-best-practises)
    - [Ansible 最佳实践 - Ansible wiki](https://ansible.leops.cn/advanced/best-practices/)

- References
    - [omerbsezer/Fast-Ansible: This repo covers Ansible with LABs: Multipass, Commands, Modules, Playbooks, Tags, Managing Files and Servers, Users, Roles, Handlers, Host Variables, Templates and details.](https://github.com/omerbsezer/Fast-Ansible)
    - [Ansible入门 · Ansible入门](https://getansible.com/)
    - [Ansible Documentation — Ansible Documentation](https://docs.ansible.com/ansible/latest/)
    - [一步到位玩透Ansible(原51cto专栏) | 骏马金龙](https://www.junmajinlong.com/ansible/index/)
    - [后端 - 极简教程｜20 分钟玩转Ansible系列手册！ - 民工哥技术之路 - SegmentFault 思否](https://segmentfault.com/a/1190000038230424)
    - [Ansible简明教程 | JaydenZ's Blogs](https://jaydenz.github.io/2018/05/12/6.Ansible%E6%95%99%E7%A8%8B/)

- Ecosystem
    - [Ansible Galaxy](https://galaxy.ansible.com)
    - [ansible-community/awesome-ansible: Awesome Ansible List](https://github.com/ansible-community/awesome-ansible)
    - ansible-playbook-grapher

## Installation

- Control node
    - Linux
        - `pip install ansible`
        - `sudo apt install ansible`
    - Windows
        - not supported
- Managed node
    - [[sshd]]
    - Python 2.7, or Python 3.5+
- [Installation Guide — Ansible Documentation](https://docs.ansible.com/ansible/latest/installation_guide/index.html)

## Fundamentals

- SSH
    - 相当于登录 SSH 并运行命令，将这整个过程自动化、配置化
- Agentless
    - Ansible 是 Agentless 软件，可参考 [[mosh]]
    - 连接方式通常为 [[sshd|SSH]]
    - Control node sends a small program called an Ansible module to managed node, so [[Python]] is required in managed node
- Module
    - Ansible 是框架化的，Ansible 本身没有完成任务的能力，真正执行操作的是 Ansible 的模块。这点跟 [[scrapy]] 简直一模一样，scrapy core 只负责启动事件循环和回调 hooks，回调函数的具体内容由各个 extensions 分别实现。[[ansible]] 的 core 与 模块 也是这样的关系
    - Ansible 自带一些模块，正如 [[scrapy]] 自带一些 middlewares
- Idempotent
    - 执行 commands，以实现 validation，不报错即幂等

## CLI

- `ansible-doc module_name`


## Configuration

- Idea
    - Similar to [[Django]] `settings.py`

- References
    - [Ansible Configuration Settings — Ansible Documentation](https://docs.ansible.com/ansible/latest/reference_appendices/config.html)

- Configuration
    - Ansible Configuration
        1. `$ANSIBLE_CONFIG`
        2. `./ansible.cfg`
            - CWD 权限必须最小化才会自动加载配置
        3. `~/.ansible.cfg`
        4. `/etc/ansible/ansible.cfg`
            - [[INI]] format
        - 只使用**第一个**发现的配置文件，忽略其他

- API
    - relative path
        - relative to `ansible.cfg` in most cases

```yaml
[defaults]

inventory: List[str] = /etc/ansible/hosts[,...]

```

## Playbook

- Alternatives
    - tasksfile for [[go-task|task]]
    - justfile for [[just]]
    - playbook for [[ansible]]

- CLI
    - `/usr/bin/ansible-playbook`

- Web
    - [[Ansible Semaphore]]

- Configuration
```yaml
---
- name:
  hosts:
  user:
  order:

  pre_tasks:
  roles:
  tasks:
    name:
  post_tasks:
  handlers:

  vars:
  vars_file:
  environment:
```

## Inventory

- Idea
    - [[SSH]] login infomation

```ini
<myhost>
<myhost>

[all:vars]
ansible_connection=ssh

[subname]
<myhost>
<myhost>

[subname]
<myhost>
<myhost>

[subname:subname:subname]
<myhost>
<myhost>
```

```yaml
all:
  hosts:
    <myhost>:
      ansible_host:
      ansible_post:
    <myhost>:
      ansible_host:
      ansible_post:
  vars:
      ansible_connection: ssh
  children:
    <subname>:
      hosts:
      vars:
      children:
        <subname>:
          ...
    <subname>:
      hosts:
      vars:
      children:
        <subname>:
          ...
```

- Test
    - `ansible_ssh_private_key_file`
        - 私钥文件必须权限最小化 700，否则 [[ssh command]] 无法连接

- Variables
    - all group
    - parent group
    - child group
    - host
    - `vars:`
        - 变量按按顺序覆盖
        - `ansible_group_priority: 1`
            - 同组变量覆盖时的权重，数字越大，优先级越高

- Define
    - Single file
        - `ansible-playbook -i <hosts_file> site.yml`
            - 可多次指定
        - ansible config - `[defaults]` - `inventory = /etc/ansible/hosts[,/etc/ansible/hosts02,...]`
        - `/etc/ansible/hosts`
            - 不指定时默认读取这个
    - Directory
        - `-i <hosts_dir>`
            - 可多次指定
            - `<hosts_dir>/hosts01`
            - `<hosts_dir>/hosts02`
            - `<hosts_dir>/hosts03...`
            - 默认 ASCII 升序
    - Dynamic
        - `-i <hosts_dir_or_file>`
        - `hosts01.py`
    - Multiple inventory sources
        - 同时使用以上几种方式来定义 inventories
- `all` `ungrouped` 内置分组
- `all` 不包括 `localhost`
- `localhost` 内置主机
- Support [[INI]] format
- Support [[YAML]] format
- Support [[JSON|JSON]] format
- Support [[Python|Python]] format
- Support 多层级 group
    - [[INI]] 通过形如 `[group:sub:ssub]` 的 section 来实现
    - 不能出现循环嵌套，即不能有任何形式的同名分组
- [How to build your inventory — Ansible Documentation](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html)
- [Ansible Configuration Settings — Ansible Documentation](https://docs.ansible.com/ansible/devel/reference_appendices/config.html#cfg-in-world-writable-dir)

## Variables

- Syntax
    - 变量采用小驼峰命名法

- Variables File
    - [[YAML]] 文件结构为 `Dict[str, Any]`
        - `Any` 意味着可以是 `List` `Dict`，然后无限嵌套
        - 引用时，`foo.bar` 索引 `Dict`
        - 引用时，`foo[0]` 索引 `List`

- Categories
    1. vars
        - `-e, --extra-vars EXTRA_VARS`
            - 命令行选项，可指定多次
            - `EXTRA_VARS` 可以是 `key=value key2=value` 的 [[INI]] 格式
            - `EXTRA_VARS` 可以是 `@yaml_or_json_file`
        - Playbook 中 `vars:` 直接定义变量
    2. vars file
        - Playbook 中 `vars_file:` 指定变量文件
    3. group vars aka host vars
        - Playbook 的 `group_vars:` 指定组变量目录
            - 不同 inventory 组，变量的值不同
            - 不同 inventory 组，变量不同
            - `./group_vars/<subname>/<subname>/.../<subname>/vars.yml`
            - `./group_vars/all` 适用于 `all` 内置组，只有指定 `hosts` 为 `all` 才生效
    4. facts
        - Ansible 内置变量
        - 从 Managed Node 收集的信息，被定义为一堆内置变量
        - 如果用不到这些变量，建议禁用 facts 功能，否则每次运行 Ansible 时都会收集信息，严重影响性能以及速度
    5. register
        - 命令执行结果作为变量值


## Module

- References
    - [Ansible.Builtin — Ansible Documentation](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/index.html)

- `ansible.builtin`
    - `ansible.builtin.command`
        - 默认模块
    - `ansible.builtin.ping`
    - `ansible.builtin.shell`
    - `ansible.builtin.script`


## Handler

- Idea
    - Event driven
        - Handler name == Event name
        - Handler content == callback function
        - `notify` == trigger event
    - Task Hook
        - 判断条件固定的 if
        - if `changed` 为 `true`，才执行 handler
        - `handlers` 的值跟 `tasks` 一模一样，区别在于执行条件、执行时机、执行顺序不同

- Con
    - `handers` 判断条件固定，不够灵活。想要自定义判断条件，还得是 `when:`


## Tag

- Idea
    - 给一个 Task 打标签，方便单独运行部分 Task(s)，而非所有 Tasks


## Template

- Idea
    - Copy (scp) the file to the remote server
    - Replace the Jinja2 interpolation syntax variables present ({{ }}) in the template file with actual values

## Plugin

- References
    - [Understanding privilege escalation: become — Ansible Documentation](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_privilege_escalation.html)


## Role

- Idea
    - Reusable for different playbooks

- Alternatives
    - tasks + handlers + vars + defaults + meta
        - they are hard to reuse in different playbooks without role

- References
    - [Roles — Ansible Documentation](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_reuse_roles.html)

- Configuration
    - `~/.ansible/roles`
    - `/usr/share/ansible/roles`
    - `/etc/ansible/roles`

- Directory Layout
    - `tasks/main.yml` - the main list of tasks that the role executes.
    - `handlers/main.yml` - handlers, which may be used within or outside this role.
    - `library/my_module.py` - modules, which may be used within this role (see [Embedding modules and plugins in roles](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_reuse_roles.html#embedding-modules-and-plugins-in-roles) for more information).
    - `defaults/main.yml` - default variables for the role (see [Using Variables](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_variables.html#playbooks-variables) for more information). These variables have the lowest priority of any variables available, and can be easily overridden by any other variable, including inventory variables.
    - `vars/main.yml` - other variables for the role (see [Using Variables](https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_variables.html#playbooks-variables) for more information).
    - `files/main.yml` - files that the role deploys.
    - `templates/main.yml` - templates that the role deploys.
    - `meta/main.yml` - metadata for the role, including role dependencies and optional Galaxy metadata such as platforms supported.


## Collections

- Ecosystem
    - `galaxy.yml`
    - `meta/runtime.yml`
    - `roles/`
        - `<role_name_01>/`
    - `playbooks/`
        - `<playbook_01>.yml`
    - `files/`
        - `<filename_01>`
    - `plugins/`
        - `vars/`
    - `README.md`
    - `docs/`

- Idea
    - wheel 之于 [[Python]]，collection 之于 [[ansible]]
    - 虽说 Module/Role 可以复用，但「怎么」复用、如何复用诸如「GitHub」这样的「远程目录」，并没有统一规范。于是 Collection 诞生了，每个 Collection 就相当于一个「第三方库」，库里可以有 Role/Module etc

- Examples
    - [Ansible Galaxy](https://galaxy.ansible.com)
    - [[git]] repo e.g. `git+https://github.com/user/repo.git`
        - `collections/requirements.yml` 或 `galaxy.yml` 声明的 collections 也会自动安装（递归）
    - [[ansible]] 内置了很多 collections `ansible-galaxy collection list`
```
amazon.aws
ansible.netcommon
ansible.posix
ansible.utils
ansible.windows
arista.eos
awx.awx
azure.azcollection
check_point.mgmt
chocolatey.chocolatey
cisco.aci
cisco.asa
cisco.dnac
cisco.intersight
cisco.ios
cisco.iosxr
cisco.ise
cisco.meraki
cisco.mso
cisco.nxos
cisco.ucs
cloud.common
cloudscale_ch.cloud
community.aws
community.ciscosmb
community.crypto
community.digitalocean
community.dns
community.docker
community.general
community.grafana
community.hashi_vault
community.hrobot
community.library_inventory_filtering_v1
community.libvirt
community.mongodb
community.mysql
community.network
community.okd
community.postgresql
community.proxysql
community.rabbitmq
community.routeros
community.sap_libs
community.sops
community.vmware
community.windows
community.zabbix
containers.podman
cyberark.conjur
cyberark.pas
dellemc.enterprise_sonic
dellemc.openmanage
dellemc.powerflex
dellemc.unity
f5networks.f5_modules
fortinet.fortimanager
fortinet.fortios
frr.frr
google.cloud
grafana.grafana
hetzner.hcloud
ibm.qradar
ibm.spectrum_virtualize
ibm.storage_virtualize
ieisystem.inmanage
infinidat.infinibox
infoblox.nios_modules
inspur.ispim
inspur.sm
junipernetworks.junos
kaytus.ksmanage
kubernetes.core
kubevirt.core
lowlydba.sqlserver
microsoft.ad
netapp.cloudmanager
netapp.ontap
netapp.storagegrid
netapp_eseries.santricity
netbox.netbox
ngine_io.cloudstack
ngine_io.exoscale
openstack.cloud
openvswitch.openvswitch
ovirt.ovirt
purestorage.flasharray
purestorage.flashblade
sensu.sensu_go
splunk.es
t_systems_mms.icinga_director
telekom_mms.icinga_director
theforeman.foreman
vmware.vmware
vmware.vmware_rest
vultr.cloud
vyos.vyos
wti.remote
```

## AD-Hoc

`/usr/bin/ansible`
