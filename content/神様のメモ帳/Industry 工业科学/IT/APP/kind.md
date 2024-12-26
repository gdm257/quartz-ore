---
tags:
  - Label/Industry-工业科学/IT/APP/Command/CLI
  - flag/APP/Layer/k8s/ClusterCreater
commands:
  - kind
scoop: kind
---

- Alternatives
    - [[k3d]]
        - [[k3d]] 定位与 [[kind]] 一模一样，原理相同，只不过 [[k3d]] 用的是 [[k3s]] 而不是 [[kubeadm]]
        - [[k3d]] 功能上是 [[kind]] 的超集，占用却更低
    - [[kubeadm]]
    - [[k3s]]
    - [[k3sup]]

- Idea
    - [[k8s|Kubernetes]] in [[Docker]]
    - Each container is a [[k8s]] node

- Con
    - Heavy
        - [[kind]] runs [[kubeadm]] in [[Docker]] container to create a [[k8s]] node
        - [[kubeadm]] requires at least 0.5 Core CPU, 1G RAM per node

- Pro
    - Easy to understand
    - Easy to deployment

- Configuration
    - `kind: str`
        - `Cluster`
    - `apiVersion: str`
        - e.g. `kind.x-k8s.io/v1alpha4`
    - `name: <cluster-name:str> = "kind"`
    - `nodes: List[Dict]`
        - `role: "control-plane" | "worker"`
        - `image: str`
            - Decide kubernetes version
        - `extraMounts: List[Dict]`
            - to persist data by [[Docker]] volumes
            - `hostPath: str`
                - Support relative path
            - `containerPath: str`
            - `readOnly: bool`
            - `selinuxRelabel: bool`
            - `propagation`
        - `extraPortMappings: List[Dict]`
            - `containerPort: int`
            - `hostPort: int`
            - `listenAddress: str`
            - `protocol: "TCP" | "UDP"`
        - `labels: Dict[str, str]`
            - for working with `nodeSelectors`
        - `kubeadmConfigPatches: List[str]` 
            - Each overriding config should be a string that can be [[YAML]] `|` multi-lines string syntax, where content is [[kubeadm]] configuration in [[YAML]]
    - `featureGates: Dict[str, bool]`
    - `runtimeConfig: Dict[str, str]`
    - `networking: Dict[str, Any]`
        - `ipFamily: str`
            - e.g. `ipv6`
        - `apiServerAddress: str = 127.0.0.1`
        - `apiServerPort: int = 6443`
        - `podSubnet: <ipcidr:str>`
            - e.g. `10.244.0.0/16`
        - `serviceSubnet: <ipcidr:str>`
        - `disableDefaultCNI: bool`
        - `kubeProxyMode: "iptables" | "nftables" | "none"`

- Fundamentals
    - [[Go]] package
    - [[kind]] cli
        - Wrapper of package for users
    - [[Docker]] image
        - [[systemd]] as main process
        - [[kubeadm]] to boot a [[k8s]] node
        - All components run within a container which becomes a [[k8s]] node
        - `kubelet` daemon
