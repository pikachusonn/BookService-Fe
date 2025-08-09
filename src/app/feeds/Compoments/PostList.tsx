'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Oval } from 'react-loader-spinner';
import PostCard from './PostCard'; // Import PostCardSummary component
import { posts } from '@/hook/post'; // 1. Import hook mới

export default function PostList() {
  // 2. Gọi hook để lấy dữ liệu và các trạng thái
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = posts();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // 4. Xử lý các trạng thái ban đầu
  if (isLoading) {
    return <div className="flex justify-center p-10"><Oval height={50} width={50} color="#4fa94d" /></div>;
  }

  if (isError) {
    return <div className="text-center text-red-500 p-10">Không thể tải bài viết.</div>;
  }

  // 5. "Làm phẳng" dữ liệu từ các trang thành một mảng duy nhất
  const allPosts = data?.pages.flatMap(page => page.data) ?? [];

  return (
    <div className="w-full max-w-lg mx-auto space-y-6">
      {/* {allPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))} */}
      {allPosts.map((post, index) => (
        <PostCard key={`${post.id}-${index}`} post={post} />
      ))}

      {/* Phần tử theo dõi và hiển thị loading */}
      {hasNextPage && (
        <div ref={ref} className="flex justify-center items-center p-4">
          {isFetchingNextPage && <Oval height={40} width={40} color="#4fa94d" />}
        </div>
      )}

      {!hasNextPage && (
        <div className="text-center p-4">
          <p>Bạn đã xem hết bài viết!</p>
        </div>
      )}
    </div>
  );
}
