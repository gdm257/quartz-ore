---
tags:
  - flag/APP/Layer/k8s/AddOns/IngressController
  - flag/APP/Layer/k8s/AddOns/GatewayAPI
  - Label/Industry-工业科学/IT/APP/Server/Self-hosted
github: projectcontour/contour
routers:
  - HTTPRoute
  - GRPCRoute
  - TLSRoute
  - TCPRoute
---

- Support Gateway API core and extended features
- Support `Ingress` and can not disable
- Support `HTTPProxy` CRD
- 官方之前说是不支持 L4，但现在还是支持了 `TCPRoute`
- [Documentation](https://projectcontour.io/docs/1.30/config/gateway-api/)
- [Support gateway.networking.k8s.io · Issue #4678 · projectcontour/contour](https://github.com/projectcontour/contour/issues/4678)
