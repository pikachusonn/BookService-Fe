// src/app/feed/PostCard.tsx
'use client';

import Image from 'next/image';
import { Post } from '@/common/interface';
import Link from 'next/link';
import ImageGrid from './ImageGrid';
import { toggleLike } from '@/hook/post'; // Import hàm toggleLike từ API
import { useState, useTransition } from 'react';

// SVG Icons cho các nút
const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${filled ? 'text-red-500' : 'text-gray-500'}`} fill={filled ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
  </svg>
);

const CommentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
  </svg>
);


export default function PostCard({ post }: { post: Post}) {
  console.log("PostCard rendered:", post);
  // State để quản lý tương tác
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  // Giả lập số lượt thích và bình luận ban đầu
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 1000));
  const [commentCount, setCommentCount] = useState(Math.floor(Math.random() * 100));
  const [isPending, startTransition] = useTransition();
  // Hàm xử lý khi nhấn "Thích"
  const handleLike = () => {
      // 4. Optimistic Update: Cập nhật giao diện ngay lập tức
      const newLikedState = !isLiked;
      setIsLiked(newLikedState);
      setLikeCount(prevCount => newLikedState ? prevCount + 1 : prevCount - 1);

      // 5. Gọi Server Action trong startTransition để không làm đóng băng UI
      startTransition(async () => {
        try {
          // Gọi hàm từ server
            await toggleLike(post.id, !newLikedState);
        } catch (error) {
          // Nếu có lỗi từ server, revert lại trạng thái giao diện
          console.error("Lỗi khi cập nhật like:", error);
          setIsLiked(!newLikedState);
          setLikeCount(prevCount => !newLikedState ? prevCount + 1 : prevCount - 1);
        }
      });
    };

  // Hàm xử lý khi nhấn "Bình luận"
  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  // Hàm xử lý khi nhấn "Chia sẻ"
  const handleShare = () => {
    // Tạm thời chỉ thông báo, bạn có thể dùng navigator.share hoặc copy link
    alert(`Chia sẻ bài viết: ${post.title}`);
  };

    return (
      <div className="card bg-base-100 shadow-xl">
        {/* Phần Header và Nội dung chữ */}
        <div className="card-body pb-0">
          {/* Header: Avatar và Tên người đăng */}
          <div className="flex items-center gap-3 mb-4">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={`https://i.pravatar.cc/40?u=${post.avatarUrl}`} alt="Author Avatar" width={40} height={40} />
              </div>
            </div>
            <div>
              <div className="font-bold">{post.userName}</div>
              <div className="text-xs text-base-content/60">18 giờ trước</div>
            </div>
          </div>

          {/* Nội dung bài viết (chữ) */}
          <p>{post.content}</p>
        </div>

        {/* Hình ảnh của bài viết (nằm giữa) */}
        <Link href={`/feeds/${post.id}`}>
          <ImageGrid images={post.imageUrls} />
        </Link>
        {/* Phần tương tác (Like, Comment, Share) */}
        <div className="card-body">
          {/* Thống kê lượt thích và bình luận */}
          <div className="flex justify-between items-center text-sm text-base-content/60">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.562 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span>{likeCount}</span>
            </div>
            <span>{commentCount} bình luận</span>
          </div>

          {/* Dải phân cách */}
          <div className="divider my-2"></div>

          {/* Các nút hành động */}
          <div className="card-actions justify-around">
            <button onClick={handleLike} className="btn btn-ghost gap-2" disabled={isPending}>
              <HeartIcon filled={isLiked} /> Thích
            </button>
            <button onClick={handleToggleComments} className="btn btn-ghost gap-2">
              <CommentIcon /> Bình luận
            </button>
            <button onClick={handleShare} className="btn btn-ghost gap-2">
              <ShareIcon /> Chia sẻ
            </button>
          </div>

          {/* Phần bình luận (chỉ hiện khi được bật) */}
          {showComments && (
            <div className="mt-4">
              <div className="divider"></div>
              <h3 className="font-bold mb-2">Bình luận</h3>
              <div className="space-y-2">
                <p className="text-sm"><strong>Người dùng A:</strong> Bình luận mẫu...</p>
              </div>
              <div className="form-control mt-4">
                <textarea className="textarea textarea-bordered h-24" placeholder="Viết bình luận của bạn..."></textarea>
                <button className="btn btn-primary btn-sm mt-2 self-end">Gửi</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }