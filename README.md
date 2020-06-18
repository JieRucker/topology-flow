# topology-flow

topology-flow 是一个可视化流程图绘制工具，使用 Canvas + Typescript 构建


# 快速上手

## typescrypt/es6

```
import { Topology } from '@topology-flow/core';

var canvas = new Topology('topology-dom', options);
canvas.open(data);

```

# es5

```
<script src="/bundle/topology.bundle.js"></script>

var canvas = new TopologyFlow.Topology('topology-dom', options);
canvas.open(data);

```

# 开发与编译

```
// Monorepos + yarn workspaces 结构
$ yarn
$ yarn build
```
