"use client";
import PostCard from '../Compoments/PostCard'; // Component PostCard đầy đủ tính năng
import { useParams } from 'next/navigation';
import { Oval } from 'react-loader-spinner';
import { useGetPostDetail } from '@/hook/post';

export default function PostDetailPage() {
  const params = useParams();
  const { data: post, isPending, isError } = useGetPostDetail(String(params.id));

  if (isPending) {
    return <div className="flex justify-center items-center h-screen"><Oval height={50} width={50} color="#4fa94d" /></div>;
  }

  // 6. Xử lý trạng thái lỗi
  if (isError || !post) {
    return <div className="text-center p-10 text-red-500">Không thể tải hoặc không tìm thấy bài viết.</div>;
  }
  console.log("Dữ liệu post nhận được:", post);

  return (
    <main className="container mx-auto p-4">
      <div className="w-full max-w-lg mx-auto">
        {/* Component PostCard đầy đủ sẽ được hiển thị ở đây */}
        <PostCard post={post?.data} />
      </div>
    </main>
  );
}
