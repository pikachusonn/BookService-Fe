'use client';

import { useState } from 'react';
import { useGetComments, useAddComment } from '@/hook/comment';

export default function CommentSection({ postId }: { postId: string | undefined }) {
  const [newComment, setNewComment] = useState('');
  console.log("Dữ liệu bình luận nhận được:", postId);
  const { data, isLoading, isError } = useGetComments(postId, {
    enabled: true,  
  });

  const { mutate: addComment, isPending: isSubmitting } = useAddComment();

  const handleCommentSubmit = () => {
    if (!newComment.trim() || !postId) return;
    addComment(
      { content: newComment, postId: postId },
      {
        onSuccess: () => {
          setNewComment('');
        },
      }
    );
  };
  const comments = data?.data?.data || [];
  console.log("Dữ liệu bình luận nhận được:", data);
  return (
    <div className="mt-4">
      <div className="divider"></div>
      <h3 className="font-bold mb-2">Bình luận</h3>
      {isLoading && <p className="text-sm text-base-content/60">Đang tải bình luận...</p>}
      {isError && <p className="text-sm text-error">Không thể tải được bình luận.</p>}
      {comments.length === 0 && !isLoading && !isError && (
        <p className="text-sm text-base-content/60">Chưa có bình luận nào.</p>
      )}

      {!isLoading && !isError && (
        <div className="space-y-3">
          {comments.map((comment) => (
            <div key={comment.id} className="chat chat-start">
              <div className="chat-header text-xs opacity-50">
                {comment.user.username}
              </div>
              <div className="chat-bubble chat-bubble-info">{comment.content}</div>
            </div>
          ))}
          {comments.length === 0 && <p className="text-sm text-base-content/60">Chưa có bình luận nào.</p>}
        </div>
      )}

      {/* Form gửi bình luận mới */}
      <div className="form-control mt-4">
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Viết bình luận của bạn..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          disabled={isSubmitting} // Vô hiệu hóa khi đang gửi
        ></textarea>
        <button
          onClick={handleCommentSubmit}
          className="btn btn-primary btn-sm mt-2 self-end"
          disabled={isSubmitting || !newComment.trim()} // Vô hiệu hóa khi đang gửi hoặc input rỗng
        >
          {isSubmitting ? <span className="loading loading-spinner loading-xs"></span> : 'Gửi'}
        </button>
      </div>
    </div>
  );
}