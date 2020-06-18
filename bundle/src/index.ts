import { Topology, registerNode, Pen, Node, Point, Line, Rect, s8 } from '@topology-flow/core';
import { Store, Observer } from 'le5le-store';

import { register as registerFlow } from '@topology-flow/flow-diagram';
import { register as registerActivity } from '@topology-flow/activity-diagram';
import { register as registerClass } from '@topology-flow/class-diagram';
import { register as registerSequence } from '@topology-flow/sequence-diagram';
import { register as registerChart } from '@topology-flow/chart-diagram';
import { layout, alignNodes, spaceBetween } from '@topology-flow/layout';

registerFlow();
registerActivity();
registerClass();
registerSequence();
registerChart();

(window as any).TopologyFlow = {
  Topology,
  registerNode,
  Pen,
  Node,
  Point,
  Line,
  Rect,
  Store,
  Observer,
  s8,
  layout,
  alignNodes,
  spaceBetween
};
