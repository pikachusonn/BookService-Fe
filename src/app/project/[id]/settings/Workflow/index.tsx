"use client";
import { useState, useCallback, useEffect } from "react";
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Node,
  Edge,
  ReactFlowProvider,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { IoMdAdd } from "react-icons/io";
import CommonButton from "@/app/components/CommonButton";
import { FaRegSave } from "react-icons/fa";
import { LuTrash } from "react-icons/lu";
import { useGetWorkflowByProject, useUpdateWorkflow } from "@/hook/workflow";
import { IUpdateWorkflow } from "@/common/interface";
import StatusMenu from "./StatusMenu";
import clsx from "clsx";
import WorkflowMap from "./WorkflowMap";

const Workflow = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const [focusedNode, setFocusedNode] = useState<any>(null);

  const { data: workflowData, isLoading } = useGetWorkflowByProject(
    "396883af-734c-421a-ada4-13dc6b896fff"
  );

  const updateWorkflow = useUpdateWorkflow();

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

  useEffect(() => {
    const workflow = workflowData?.data?.data;
    if (!!workflow) {
      setNodes(
        workflow?.statuses?.map((s) => {
          return {
            id: s?.id,
            position: JSON?.parse(s?.position),
            data: {
              label: s?.statusName,
              color: s?.color,
              isStart: s?.start,
              isEnd: s?.end,
            },
          };
        })
      );
      setEdges(workflow?.workFlowTransitions);
    }
  }, [workflowData]);

  const getDifference = () => {
    // Normalize nodes
    const convertedNodes = nodes?.map((n: any) => ({
      id: n?.id,
      position: n?.position,
      label: n?.data?.label,
      color: n?.data?.color,
      isStart: n?.data?.isStart,
      isEnd: n?.data?.isEnd,
    }));

    const convertedOriginalNode = workflowData?.data?.data?.statuses?.map(
      (s: any) => ({
        id: s?.id,
        position: JSON.parse(s?.position),
        label: s?.statusName,
        color: s?.color,
        isStart: s?.start,
        isEnd: s?.end,
      })
    );

    // Normalize transitions
    const convertedEdges = edges?.map((e: any) => ({
      id: e?.id,
      source: e?.source,
      target: e?.target,
      label: e?.label,
    }));

    const convertedOriginalEdges =
      workflowData?.data?.data?.workFlowTransitions?.map((t: any) => ({
        id: t?.id,
        source: t?.source,
        target: t?.target,
        label: t?.label,
      }));

    // ===== NODE CHECKS =====
    const addedOrChangedNode = convertedNodes?.some((n) => {
      const original = convertedOriginalNode?.find((o) => o.id === n.id);
      if (!original) return true; // new node
      return (
        n.position.x !== original.position.x ||
        n.position.y !== original.position.y ||
        n.label !== original.label ||
        n.color !== original.color ||
        n.isStart !== original.isStart ||
        n.isEnd !== original.isEnd
      );
    });

    const deletedNode = convertedOriginalNode?.some(
      (o) => !convertedNodes?.some((n) => n.id === o.id)
    );

    // ===== EDGE CHECKS =====
    const addedOrChangedEdge = convertedEdges?.some((e) => {
      const original = convertedOriginalEdges?.find((o) => o.id === e.id);
      if (!original) return true; // new edge
      return (
        e.source !== original.source ||
        e.target !== original.target ||
        e.label !== original.label
      );
    });

    const deletedEdge = convertedOriginalEdges?.some(
      (o) => !convertedEdges?.some((e) => e.id === o.id)
    );

    // ===== FINAL RESULT =====
    return (
      addedOrChangedNode || deletedNode || addedOrChangedEdge || deletedEdge
    );
  };

  const handleAddStatus = () => {
    const newNode = {
      id: crypto.randomUUID(), // generate unique id
      position: { x: 100, y: 100 }, // default position
      data: { label: "New Status", color: "#4096ff" }, // default label
    };

    setNodes((prev) => [...prev, newNode]);
  };

  const handleSaveWorkflow = () => {
    const originalNodes =
      workflowData?.data?.data?.statuses?.map((s: any) => ({
        id: s?.id,
        position: s?.position,
        label: s?.statusName,
        statusName: s?.statusName,
        color: s?.color,
        isStart: s?.start,
        isEnd: s?.end,
      })) ?? [];

    const currentNodes =
      nodes?.map((n: any) => ({
        id: n?.id,
        // position: n?.position,
        position: JSON.stringify(n?.position),
        label: n?.data?.label,
        statusName: n?.data?.label,
        color: n?.data?.color,
        isStart: n?.data?.isStart,
        isEnd: n?.data?.isEnd,
      })) ?? [];

    const originalEdges =
      workflowData?.data?.data?.workFlowTransitions?.map((t: any) => ({
        id: t?.id,
        source: t?.source,
        target: t?.target,
        label: t?.label,
      })) ?? [];

    const currentEdges =
      edges?.map((e: any) => ({
        id: e?.id,
        source: e?.source,
        target: e?.target,
        label: e?.label,
      })) ?? [];

    // === STATUS DIFF ===
    const addedStatus = currentNodes.filter(
      (n) => !originalNodes.some((o) => o.id === n.id)
    );

    const updatedStatus = currentNodes.filter((n) => {
      const original = originalNodes.find((o) => o.id === n.id);
      if (!original) return false;
      return (
        n.label !== original.label ||
        n.statusName !== original.statusName ||
        n.position !== original.position ||
        n.color !== original.color ||
        n.isStart !== original.isStart ||
        n.isEnd !== original.isEnd
      );
    });

    const deletedStatus = originalNodes.filter(
      (o) => !currentNodes.some((n) => n.id === o.id)
    );

    // === TRANSITION DIFF ===
    const addedTransitions = currentEdges.filter(
      (e) => !originalEdges.some((o) => o.id === e.id)
    );

    const updatedTransitions = currentEdges.filter((e) => {
      const original = originalEdges.find((o) => o.id === e.id);
      if (!original) return false;
      return (
        e.source !== original.source ||
        e.target !== original.target ||
        e.label !== original.label
      );
    });

    const deletedTransitions = originalEdges.filter(
      (o) => !currentEdges.some((e) => e.id === o.id)
    );

    const payload: IUpdateWorkflow = {
      addedStatus,
      updatedStatus,
      deletedStatus,
      addedTransitions,
      updatedTransitions,
      deletedTransitions,
    };

    updateWorkflow.mutate({
      payload,
      projectId: "396883af-734c-421a-ada4-13dc6b896fff",
    });
  };

  return (
    <div className="w-full flex flex-col h-[calc(100vh-230px)] border border-black/30 shadow-lg relative">
      <div className="w-fit z-[100] gap-3 rounded-full flex items-center justify-center absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="flex items-center">
          <CommonButton
            icon={<IoMdAdd />}
            text="Add Status"
            onClick={handleAddStatus}
            classNames={`bg-base-200 text-black border-black/20 rounded-tr-none rounded-br-none w-[190px] hover:bg-black hover:text-white`}
          />
          <CommonButton
            icon={<IoMdAdd />}
            text="Add Connection"
            classNames="bg-base-200 text-black border-black/20 rounded-tl-none rounded-bl-none w-[190px] hover:bg-black hover:text-white"
          />
        </div>
        <div className="tooltip" data-tip="Save">
          <CommonButton
            icon={<FaRegSave size={20} />}
            text=""
            classNames={`${!getDifference() && "btn-disabled"}`}
            onClick={handleSaveWorkflow}
          />
        </div>

        {getDifference() && (
          <div className="tooltip" data-tip="Cancel">
            <CommonButton
              icon={<LuTrash size={20} />}
              classNames="bg-red-600 border-none"
              text=""
              onClick={() => {
                setNodes(
                  workflowData?.data?.data?.statuses?.map((s) => {
                    return {
                      id: s?.id,
                      position: JSON?.parse(s?.position),
                      data: {
                        label: s?.statusName,
                        color: s?.color,
                        isStart: s?.start,
                        isEnd: s?.end,
                      },
                    };
                  })
                );
                setEdges(workflowData?.data?.data?.workFlowTransitions);
              }}
            />
          </div>
        )}
      </div>
      <div
        className={clsx(
          "w-full flex-1",
          isLoading && "items-center justify-center"
        )}
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-xl"></span>
        ) : (
          <ReactFlowProvider>
            <WorkflowMap
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={(e, node) => {
                console.log(e?.clientX, e?.clientY);

                // const nodeEl = document.querySelector(`[data-id="${node.id}"]`);
                setFocusedNode({
                  status: node,
                  x: e.clientX, // mouse X position (page-aware)
                  y: e.clientY, // mouse Y position (page-aware)
                });
              }}
            />
          </ReactFlowProvider>
        )}
      </div>
      {!!focusedNode && (
        <StatusMenu
          status={focusedNode?.status}
          x={focusedNode?.x}
          y={focusedNode?.y}
        />
      )}
    </div>
  );
};
export default Workflow;
