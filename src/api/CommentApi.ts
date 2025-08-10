import instance from '@/utils/axios';
import { ApiCommentResponse } from '@/common/interface';
const getCommentByPostId = (id: string) => {
  return instance.get(`/api/v1/library/social/posts/${id}/comments`);
}

const addComment = async (payload: { postId: string; content: string }): Promise<Comment> => {
  const { postId, content } = payload;
  const res = await instance.post(`/api/v1/library/social/posts/${postId}/comments`, { content });
  return res.data; 
};

export const commentApi = {
  getCommentByPostId,
  addComment,
};