---
tags:
  - flag/APP/Layer/k8s/ClusterCreater
  - Label/Industry-工业科学/IT/APP/GUI/Desktop
commands:
  - nerdctl
  - rdctl
scoop: rancher-desktop
wsl-distros:
  - rancher-desktop
  - rancher-desktop-data
namespaces:
  - default
  - kube-system
  - kube-public
  - kube-node-lease
---

- Fundamentals
    - [[Windows]]
        - Similar to [[Docker Desktop]] which runs [[Docker]] in [[WSL]]
        - [[Rancher Desktop]] runs [[k3d]] which runs [[k3s]] in [[WSL]]

- Alternatives
    - Create cluster
        - [[k3d]]
        - [[kind]]
    - Dashboard
        - [[rancher]]
        - [[Lens]]

- Con
    - Heavy
        - Slow down my PC significantly!
    - NOT Support costomizing options of [[k3s]]
        - only `traefik`/`flannel` can be disabled
        - `K3S_EXEC` env
        - [Feature: Allow advanced configuration of k3s from the UI · Issue #578 · rancher-sandbox/rancher-desktop](https://github.com/rancher-sandbox/rancher-desktop/issues/578)
    - NOT Support using existing [[k8s]] cluster
        - Use [[rancher]]/[[Lens]] alternatively
    - NOT Support running [[Docker Desktop]] at the same time
        - Both [[Rancher Desktop]] and [[Docker Desktop]] use same [[Docker]] socket `/var/run/docker.sock`
