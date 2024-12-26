---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Layer/k8s/Operator/CD
  - flag/APP/DevOps/CD
  - flag/Feature/helm-remote-chart
github: k3s-io/helm-controller
apiVersions:
  - helm.cattle.io/v1
CRD:
  - HelmChart
  - HelmChartConfig
template-functions:
  - fail
---

- References
    - [Helm | K3s](https://docs.k3s.io/helm)
    - [helm-controller/pkg/apis/helm.cattle.io/v1/types.go at master · k3s-io/helm-controller](https://github.com/k3s-io/helm-controller/blob/master/pkg/apis/helm.cattle.io/v1/types.go)
    - [helm-controller/pkg/crd/crds.go at master · k3s-io/helm-controller](https://github.com/k3s-io/helm-controller/blob/master/pkg/crd/crds.go)

- Installation
    - [[k3s]] comes with [[helm-controller]] by default

- Configuration
    - `HelmChart.spec.valuesContent: string`
        - [[helm]] `--values <extract-as-file>`
    - `HelmChartConfig.spec.valuesContent: string`
        - [[helm]] `--values <extract-as-file>`
        - override `HelmChart` values by [[helm]] cli `--values` option
