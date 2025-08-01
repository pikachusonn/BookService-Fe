import PostCard from './Compoments/PostCard';
import PostList from './Compoments/PostList';
import { fetchPosts, Post } from './Compoments/action';

export default async function FeedPage() {
  // 1. Lấy trang dữ liệu đầu tiên trên server
  const initialPosts: Post[] = await fetchPosts(1);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">
        BookShop Society
      </h1>
        <PostList initialPosts={initialPosts} />
      {/* 2. Truyền dữ liệu ban đầu vào Client Component */}
    </main>
  );
}
