---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Kernel
---

- References
    - [Installing kubeadm | Kubernetes](https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#before-you-begin)

- Fundamentals
    - 

- Test
    - k8s 官方明确说了，禁止使用 swap

```bash
wget https://www.moerats.com/usr/shell/swap.sh && sudo bash swap.sh
# 添加/删除Swap虚拟内存，填写纯数字，单位为 MB
```
