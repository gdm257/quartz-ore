---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Layer/k8s/AddOns/DNS
---

- Fundamentals
    - `/etc/resolv.conf`
        - `kubelet` auto inject [[CoreDNS]] address as nameserver in Pod's `/etc/resolv.conf`, according to [[k8s]] cluster DNS configuration (`--cluster-dns=<CoreDNS-Pod-IP>` option for `kubelet`)
    - [[IPv4]]/[[IPv6]]
        - `kubelet` and CNI allocate an IP for Pod/Service
        - CNI is responsible for communication between IPs. So new pod could access [[CoreDNS]] Pod
        - [[CoreDNS]] parses hostname to cluster internal IP
    - [[DNS]] records
        - [[CoreDNS]] follows operator pattern, watch [[k8s]] API and dynamic update DNS records
