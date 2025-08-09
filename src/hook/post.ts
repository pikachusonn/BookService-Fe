import { useInfiniteQuery } from '@tanstack/react-query';
import { postApi } from '@/api/PostApi';
import { useQuery } from "@tanstack/react-query";

export const posts = () => {
  return useInfiniteQuery({
    queryKey: ['posts'], // Key định danh cho query này
    queryFn: postApi.getPosts, // Hàm để lấy dữ liệu
    initialPageParam: 0, // Trang bắt đầu (khớp với Spring Pageable)
    
    // Hàm này quyết định trang tiếp theo là trang nào
    getNextPageParam: (lastPage, allPages) => {
      // Dựa vào metadata từ API của bạn
      if (lastPage.metadata.page < lastPage.metadata.totalPages - 1) {
        return lastPage.metadata.page + 1;
      }
      // Nếu không còn trang nào, trả về undefined
      return undefined;
    },
  });
};

export const useGetPostDetail = (postId: string) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => postApi.getPostById(postId),
  });
};

export const toggleLike = async (postId: string, isLiked: boolean) => {
  return postApi.toggleLike(postId, isLiked);
};
