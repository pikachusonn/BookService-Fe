import { IBookFilterRequest } from "@/common/interface";
import instance from "@/utils/axios";
export const bookApi = {
  getBook: (params: IBookFilterRequest) => {
    return instance.get("api/v1/library/book", {
      params,
    });
  },

  getBookDeDetail: (id: string) => {
    return instance.get(`api/v1/library/book/${id}`);
  },
};
