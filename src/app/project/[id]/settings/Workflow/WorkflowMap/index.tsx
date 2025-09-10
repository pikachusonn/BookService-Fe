import {
  Background,
  Controls,
  Edge,
  MiniMap,
  Node,
  ReactFlow,
  useReactFlow,
} from "@xyflow/react";

interface IWorkflowMap {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: (changes: any) => void;
  onEdgesChange: (changes: any) => void;
  onConnect: (params: any) => void;
  onNodeClick: (e: any, node: any) => void;
}
const WorkflowMap = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onNodeClick,
}: IWorkflowMap) => {
  const { screenToFlowPosition } = useReactFlow();
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      onNodeClick={(e, node) => {
        onNodeClick(e, node); // pass it back up if needed
      }}
    >
      <Controls />
      <MiniMap />
      <Background />
    </ReactFlow>
  );
};

export default WorkflowMap;
