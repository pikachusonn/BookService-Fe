import PostCard from './Compoments/PostCard';
import PostList from './Compoments/PostList';
import { postApi } from '@/api/PostApi';
import { Post } from '@/common/interface';
import { ApiPostResponse } from '@/common/interface';

export default async function FeedPage() {
  // 1. Lấy trang dữ liệu đầu tiên trên server
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">
        BookShop Society
      </h1>
      <PostList/>
      {/* 2. Truyền dữ liệu ban đầu vào Client Component */}
    </main>
  );
}
