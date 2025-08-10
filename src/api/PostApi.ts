import instance from '@/utils/axios'; // Giả sử bạn đã có file cấu hình axios
import { ApiPostResponse } from '@/common/interface';

const getPosts = async ({ pageParam = 0 }) => {
  const limit = 10;
  const res = await instance.get<ApiPostResponse>(
    `/api/v1/library/social?page=${pageParam}&size=${limit}`
  );
  return res.data;
};
const getPostById = async (id: string) => {
  try {
    const res = await instance.get(`/api/v1/library/social/posts/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
}
const toggleLike = async (postId: string, isLiked: boolean) => {
  try {
    await instance.post(`/api/v1/library/social/posts/${postId}/reaction`, { isLiked });
  } catch (error) {
    console.error("Error toggling like:", error);
  }
};

export const postApi = {
  getPosts,
  getPostById,
  toggleLike,
};
