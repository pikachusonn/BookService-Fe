/* eslint-disable @next/next/no-img-element */
// src/app/feed/PostCard.tsx
"use client";
import { IUpsertReaction, Post } from "@/common/interface";
import Link from "next/link";
import ImageGrid from "./ImageGrid";
import { useRemoveReaction, useUpsertReaction } from "@/hook/post"; // Import hàm toggleLike từ API
import { JSX, useState } from "react";
import { IoHeartCircle } from "react-icons/io5";
import { reactions } from "@/common/const";
import { FaAngry, FaSadCry } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import CommentSection from './CommentSection';


const CommentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6.002l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
    />
  </svg>
);

export default function PostCard({ post }: { post: Post }) {
  const queryClient = useQueryClient();
  const [showComments, setShowComments] = useState(false);

  const upsertReactionMuation = useUpsertReaction();
  const removeReatcionMuation = useRemoveReaction();
  const handleToogleReaction = (param: IUpsertReaction) => {
    if (param?.type === "REMOVE") {
      removeReatcionMuation.mutate(param?.postId);
    } else {
      upsertReactionMuation.mutate(param);
    }
    queryClient.setQueryData(["posts"], (oldData: any) => {
      if (!oldData) return oldData;

      return {
        ...oldData,
        pages: oldData.pages.map((page: any) => ({
          ...page,
          data: page.data.map((p: Post) =>
            p.id === param.postId
              ? {
                  ...p,
                  currentUserReaction:
                    param.type === "REMOVE"
                      ? null
                      : {
                          ...(p.currentUserReaction || {}),
                          type: param.type,
                        },
                }
              : p
          ),
        })),
      };
    });
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleShare = () => {
    alert(`Chia sẻ bài viết: ${post.title}`);
  };

  const reactionIcons: Record<string, JSX.Element> = {
    LIKE: <BiSolidLike size={25} color={"#1E76FF"} />,
    LOVE: <IoHeartCircle size={25} color="#FB4553" />,
    ANGRY: <FaAngry size={25} color="#FF736C" />,
    SAD: <FaSadCry size={25} color="#FDE082" />,
  };

  const reactionButton = () => {
    if (!post?.currentUserReaction) {
      return (
        <div className="dropdown dropdown-hover dropdown-top dropdown-center">
          <button
            onClick={() => {
              handleToogleReaction({ postId: post?.id, type: "LOVE" });
            }}
            className="btn btn-ghost gap-2"
          >
            <IoHeartCircle size={30} className="text-black/30" /> Love
          </button>
          <div className="dropdown-content menu bg-base-200 rounded-full z-1 p-2 shadow-sm flex-nowrap flex-row flex items-center gap-3">
            {reactions?.map((r) => (
              <span
                className="cursor-pointer p-2 rounded-lg hover:bg-black/10"
                onClick={() => {
                  handleToogleReaction({
                    postId: post?.id,
                    type: r === post?.currentUserReaction?.type ? "REMOVE" : r,
                  });
                }}
                key={r}
              >
                {reactionIcons[r] ?? null}
              </span>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="dropdown dropdown-hover dropdown-top dropdown-center">
          <button
            onClick={() => {
              handleToogleReaction({ postId: post?.id, type: "REMOVE" });
            }}
            className="btn btn-ghost gap-2"
          >
            {reactionIcons[post?.currentUserReaction?.type]}{" "}
            {post?.currentUserReaction?.type?.toLowerCase()}
          </button>
          <div className="dropdown-content menu bg-base-200 rounded-full z-1 p-2 shadow-sm flex-nowrap flex-row flex items-center gap-3">
            {reactions?.map((r) => (
              <span
                className={clsx(
                  "cursor-pointer p-2 rounded-lg hover:bg-black/10",
                  r === post?.currentUserReaction?.type ? "bg-black/10" : ""
                )}
                onClick={() => {
                  handleToogleReaction({
                    postId: post?.id,
                    type: r === post?.currentUserReaction?.type ? "REMOVE" : r,
                    reactionId: post?.currentUserReaction?.reaction_id,
                  });
                }}
                key={r}
              >
                {reactionIcons[r] ?? null}
              </span>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      {/* Phần Header và Nội dung chữ */}
      <div className="card-body pb-0">
        {/* Header: Avatar và Tên người đăng */}
        <div className="flex items-center gap-3 mb-4">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img
                src={`https://i.pravatar.cc/40?u=${post.avatarUrl}`}
                alt="Author Avatar"
                width={40}
                height={40}
              />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.562 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span>{post?.reactions?.length}</span>
          </div>
          <span>{post.commentCount} bình luận</span>
        </div>

        {/* Dải phân cách */}
        <div className="divider my-2"></div>

        {/* Các nút hành động */}
        <div className="card-actions justify-around">
          {reactionButton()}
          <button
            onClick={handleToggleComments}
            className="btn btn-ghost gap-2"
          >
            <CommentIcon /> Bình luận
          </button>
          <button onClick={handleShare} className="btn btn-ghost gap-2">
            <ShareIcon /> Chia sẻ
          </button>
        </div>

       
          {/* Phần bình luận (chỉ hiện khi được bật) */}
          {showComments && <CommentSection postId={post.id} />}
      </div>
    </div>
  );
}
