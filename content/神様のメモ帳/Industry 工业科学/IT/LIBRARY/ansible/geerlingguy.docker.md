---
tags:
  - flag/License/MIT
  - Label/Industry-工业科学/IT/Library/Plugin/Ansible/Role
  - Label/Industry-工业科学/IT/APP/Plugin/Docker
ansible-galaxy-role: geerlingguy.docker
vars:
  - docker_edition
  - docker_packages
  - docker_packages_state
  - docker_service_manage
  - docker_service_state
  - docker_service_enabled
  - docker_restart_handler_state
  - docker_install_compose_plugin
  - docker_compose_package
  - docker_compose_package_state
  - docker_install_compose
  - docker_compose_version
  - docker_compose_arch
  - docker_compose_path
  - docker_add_repo
  - docker_repo_url
  - docker_apt_release_channel
  - docker_apt_arch
  - docker_apt_repository
  - docker_apt_ignore_key_error
  - docker_apt_gpg_key
  - docker_apt_filename
  - docker_users
  - docker_daemon_options
---

## Examples

- playbook
```yaml
- hosts: all
  roles:
    - geerlingguy.docker
```
