import { useQuery } from "@tanstack/react-query";
import { ApiCommentResponse } from "@/common/interface";
import { commentApi } from "@/api/CommentApi";
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useGetComments = (postId: string | undefined, options: { enabled: boolean }) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => {
      if (!postId) throw new Error("Post ID is required");
      return commentApi.getCommentByPostId(postId);
    },
    enabled: !!postId && options.enabled,
  });
};

export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: commentApi.addComment,

    onSuccess: (data, variables) => {
      console.log("Thêm bình luận thành công!");
      const postId = variables.postId;
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },

    onError: (error) => {
      console.error("Lỗi khi thêm bình luận:", error);
      alert("Đã có lỗi xảy ra, vui lòng thử lại.");
    },
  });
};
