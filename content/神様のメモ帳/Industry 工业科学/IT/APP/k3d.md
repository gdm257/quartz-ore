---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Layer/k8s/ClusterCreater
commands:
  - k3d
scoop: k3d
json-schema:
  - https://github.com/k3d-io/k3d/raw/main/pkg/config/v1alpha5/schema.json
apiVersions:
  - k3d.io/v1alpha5
---

## Brief

- Idea
    - [[k3s]] in [[Docker]]

- Pro
    - Lightweight
        - [[k3d]] is similar to [[kind]], but [[k3d]] uses [[k3s]] cluster instead of [[kubeadm]]

- Con
    - Distroless based
        - [[k3d]] runs [[k8s]] master in a distroless image
        - It is impossible to install any packages that some applications depends. For examples, [[longhorn]] requires installation of `iscsiadm/open-iscsi` for each [[k8s]] node
    - ONLY Support creating docker container as node
    - NOT Support adding remote server as node

- Dependencies
    - [[Docker]]
    - [[kubectl]]

- Configuration
    - [Using Config Files - k3d](https://k3d.io/v5.7.4/usage/configfile/)
