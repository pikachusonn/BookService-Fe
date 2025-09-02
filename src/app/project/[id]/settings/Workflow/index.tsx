import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  MiniMap,
  Controls,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { IoMdAdd } from "react-icons/io";
import CommonButton from "@/app/components/CommonButton";
import { FaRegSave } from "react-icons/fa";
import { LuTrash } from "react-icons/lu";

const initialNodes = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];
const Workflow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  return (
    <div className="w-full flex flex-col h-[calc(100vh-230px)] border border-black/30 shadow-lg relative">
      <div className="w-fit z-[100] gap-3 rounded-full flex items-center justify-center absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="flex items-center">
          <CommonButton
            icon={<IoMdAdd />}
            text="Add Status"
            classNames="bg-base-200 text-black border-black/20 rounded-tr-none rounded-br-none w-[190px] hover:bg-black hover:text-white"
          />
          <CommonButton
            icon={<IoMdAdd />}
            text="Add Connection"
            classNames="bg-base-200 text-black border-black/20 rounded-tl-none rounded-bl-none w-[190px] hover:bg-black hover:text-white"
          />
        </div>
        <div className="tooltip" data-tip="Save">
          <CommonButton icon={<FaRegSave size={20} />} text="" />
        </div>

        <div className="tooltip" data-tip="Delete">
          <CommonButton
            icon={<LuTrash size={20} />}
            classNames="bg-red-600 border-none"
            text=""
          />
        </div>
      </div>
      <div className="w-full flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Controls />
          <MiniMap />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};
export default Workflow;
