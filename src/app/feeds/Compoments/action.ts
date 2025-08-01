'user sever';
export type Post = {
  id: number;
  title: string;
  body: string;
  images: string[];
};

export async function fetchPosts(page: number): Promise<Post[]> {
    const limit = 10; // Number of posts per page
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }
    const data = await res.json();
    return data;
}

export async function fetchPostById(id: string): Promise<Post | null> {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export async function toggleLike(postId: number, isLiked: boolean) {
  // Trong thực tế, bạn sẽ gọi API backend Spring ở đây
  // Ví dụ: await fetch(`http://your-api/posts/${postId}/like`, { method: isLiked ? 'DELETE' : 'POST' });
  
  console.log(`Server Action: Post ${postId} is now ${isLiked ? 'unliked' : 'liked'}`);
  
  // Sau khi cập nhật, có thể cần revalidate lại dữ liệu
  // revalidatePath('/feed'); 
  
  // Tạm thời trả về trạng thái mới
  return !isLiked;
}