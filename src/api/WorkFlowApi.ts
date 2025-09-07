import { IUpdateWorkflow } from "@/common/interface";
import instance from "@/utils/axios";

export const WorkflowApi = {
  getWorkflowByProject: (projectId: string) => {
    return instance.get(`api/v1/workflow/${projectId}`);
  },

  updateWorkflow: (projectId: string, payload: IUpdateWorkflow) => {
    return instance.put(`api/v1/workflow/${projectId}`, payload);
  },
};
