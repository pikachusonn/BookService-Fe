import { WorkflowApi } from "@/api/WorkFlowApi";
import { QUERY_KEYS } from "@/common/const";
import { IUpdateWorkflow } from "@/common/interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useGetWorkflowByProject = (projectId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.WORKFLOW, projectId],
    queryFn: () => WorkflowApi.getWorkflowByProject(projectId),
  });
};

export const useUpdateWorkflow = () => {
  const queryclient = useQueryClient();
  return useMutation({
    mutationFn: ({
      projectId,
      payload,
    }: {
      projectId: string;
      payload: IUpdateWorkflow;
    }) => WorkflowApi.updateWorkflow(projectId, payload),
    onSuccess: (_data, variables) => {
      queryclient.invalidateQueries({
        queryKey: [QUERY_KEYS.WORKFLOW, variables.projectId],
      });
      toast.success("Workflow updated successfully");
    },

    onError: (_error, variables) => {
      queryclient.invalidateQueries({
        queryKey: [QUERY_KEYS.WORKFLOW, variables.projectId],
      });
      toast.error("Something went wrong !!!");
    },
  });
};
