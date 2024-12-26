---
tags:
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
  - flag/APP/Network/Implement__/ACME/Provider
  - flag/APP/Layer/k8s/CSI
namespaces:
  - cert-manager
k8s-csi-drivers:
  - csi.cert-manager.io
apiVersions:
  - cert-manager.io/v1
  - controller.config.cert-manager.io/v1alpha1
CRD:
  - ClusterIssuer
  - Certificate
version-gatewayapi:
  - 1.0.0
---

- Con
    - NOT Support latest Gateway API
    - NOT Support cross-namespace
        - `Secret` of issuer, `ClusterIssuer`, `Issuer`, `Certificate`, `Secret` of cert must be in the same `namespace`
        - The only exception is between `ClusterIssuer` and `Certificate`
        - TL;DR
        - `Secret` & `Issuer`
            - Both `ClusterIssuer` and `Issuer` can specific `metadata.namespace`
            - Both `ClusterIssuer` and `Issuer` must refer `Secret` of ACME in the **same namespace**
        - `Issuer` & `Certificate`
            - `Certificate` must be in the same namespace as the `Issuer`
            - `Certificate` and `ClusterIssuer` can be in the different namespaces
        - `Certificate` & `Secret`
            - `Secret` and `Certificate` must be in the same space

- API
    - [API Reference - cert-manager Documentation](https://cert-manager.io/docs/reference/api-docs/)

- Ecosystem
    - `Ingress`
        - simply adding annotations to your `Ingress` resources and cert-manager will facilitate creating the `Certificate` resource for you
        - [Annotated Ingress resource - cert-manager Documentation](https://cert-manager.io/docs/usage/ingress/#supported-annotations)
    - `Gateway`
        - `metadata.annotations`
            - `cert-manager.io/issuer: foo`
            - `cert-manager.io/cluster-issuer: foo`
            - cert-manager will auto create a `Certificate`
            - However, I'd like to use existed `Certificate` instead of generating by `Gateway`. Just do NOT use any [[cert-manager]] `annotations` for `Gateway`
        - `spec.listeners[].tls.mode: "Terminate" | "Passthrough"`
        - `spec.listeners[].tls.certificateRefs[].name: bar`
        - [Annotated Gateway resource - cert-manager Documentation](https://cert-manager.io/docs/usage/gateway/)
