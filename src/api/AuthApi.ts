import { ILoginRequest } from "@/common/interface";
import instance from "@/utils/axios";
export const authApi = {
  login: (params: ILoginRequest) => {
    return instance.post("api/v1/library/auth/login", params);
  },
};
