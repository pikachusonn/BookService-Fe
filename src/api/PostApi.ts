import instance from '@/utils/axios'; // Giả sử bạn đã có file cấu hình axios
import { ApiPostResponse } from '@/common/interface';
import { Post } from '@/common/interface';

const getPosts = async ({ pageParam = 0 }) => {
  const limit = 10;
  const res = await instance.get<ApiPostResponse>(
    `/api/v1/library/social?page=${pageParam}&size=${limit}`
  );
  return res.data; // Trả về toàn bộ object { data, metadata }
};
const getPostById = async (id: string): Promise<Post | null> => {
  try {
    const res = await instance.get<Post>(`/api/v1/library/social/posts/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    return null;
  }
}

export const postApi = {
  getPosts,
  getPostById,
};
