// src/app/feed/PostList.tsx
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { fetchPosts, Post } from './action';
import { Oval } from 'react-loader-spinner';
import PostCard from './PostCard';

export default function PostList({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // `ref` sẽ được gắn vào phần tử cuối cùng của danh sách
  // `inView` sẽ là `true` khi phần tử đó xuất hiện trên màn hình
  const { ref, inView } = useInView();

  // Hàm để tải thêm bài viết
  const loadMorePosts = async () => {
    const nextPage = page + 1;
    const newPosts = await fetchPosts(nextPage);

    if (newPosts.length > 0) {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPage(nextPage);
    } else {
      // Không còn bài viết để tải
      setHasMore(false);
    }
  };

  // Khi `inView` thay đổi thành `true`, gọi hàm tải thêm
  useEffect(() => {
    if (inView && hasMore) {
      loadMorePosts();
    }
  }, [inView, hasMore]);

  return (
    <div className="w-full max-w-lg mx-auto space-y-6">
      {posts.map((post) => (
        // Chỉ cần một thẻ card duy nhất ở đây
        <PostCard key={post.id} post={post} />
      ))
      }

      {/* Phần tử theo dõi và hiển thị loading */}
      {hasMore && (
        <div ref={ref} className="flex justify-center items-center p-4">
          <Oval height={40} width={40} color="#4fa94d" />
        </div>
      )}

      {!hasMore && (
        <div className="text-center p-4">
          <p>Bạn đã xem hết bài viết!</p>
        </div>
      )}
    </div>
  );
}
