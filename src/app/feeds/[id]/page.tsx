import { fetchPostById } from '../Compoments/action';
import PostCard from '../Compoments/PostCard'; // Component PostCard đầy đủ tính năng

type PostDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const post = await fetchPostById(params.id);

  if (!post) {
    return <div className="text-center p-10">Không tìm thấy bài viết.</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <div className="w-full max-w-lg mx-auto">
        {/* Component PostCard đầy đủ sẽ được hiển thị ở đây */}
        <PostCard post={post} />
      </div>
    </main>
  );
}
