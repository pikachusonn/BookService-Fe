import { QUERY_KEYS } from "@/common/const";
import { IBookFilterRequest } from "@/common/interface";
import { useQuery } from "@tanstack/react-query";
import { bookApi } from "@/api/BookApi";
export const useGetBooks = (params: IBookFilterRequest) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BOOK_LIST, params],
    queryFn: () => bookApi.getBook(params),
  });
};

export const useGetBooksDetail = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.BOOK_DETAIL, id],
    queryFn: () => bookApi.getBookDeDetail(id),
  });
};
