import instance from "@/utils/axios"; // Giả sử bạn đã có file cấu hình axios
import { ApiPostResponse, IUpsertReaction } from "@/common/interface";
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
};
const toggleLike = async (postId: string, isLiked: boolean) => {
  try {
    await instance.put(`/api/v1/library/social/posts/${postId}/reaction`, {
      isLiked,
    });
  } catch (error) {
    console.error("Error toggling like:", error);
  }
};

const upsertReaction = async (param: IUpsertReaction) => {
  try {
    const res = await instance.post(
      `/api/v1/library/social/posts/${param?.postId}/reactions`,
      {
        type: param?.type,
        reactionId: param?.reactionId,
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

const removeReaction = async (postId: string) => {
  try {
    const res = await instance.delete(
      `api/v1/library/social/posts/${postId}/reactions`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postApi = {
  getPosts,
  getPostById,
  toggleLike,
  upsertReaction,
  removeReaction,
};
