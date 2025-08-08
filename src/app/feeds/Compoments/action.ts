'user sever';


export async function toggleLike(postId: number, isLiked: boolean) {
  // Trong thực tế, bạn sẽ gọi API backend Spring ở đây
  // Ví dụ: await fetch(`http://your-api/posts/${postId}/like`, { method: isLiked ? 'DELETE' : 'POST' });
  
  console.log(`Server Action: Post ${postId} is now ${isLiked ? 'unliked' : 'liked'}`);
  
  // Sau khi cập nhật, có thể cần revalidate lại dữ liệu
  // revalidatePath('/feed'); 
  
  // Tạm thời trả về trạng thái mới
  return !isLiked;
}