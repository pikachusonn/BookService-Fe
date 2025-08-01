// src/app/feed/ImageGrid.tsx
'use client';

import Image from 'next/image';

type ImageGridProps = {
  images?: string[];
};

export default function ImageGrid({ images }: ImageGridProps) {
  if (!images || images.length === 0) {
    return null; // Không hiển thị gì nếu không có ảnh
  }

  // Layout cho 1 ảnh
  if (images.length === 1) {
    return (
      <figure className="mt-4">
        <Image src={images[0]} alt="Post image" width={800} height={600} className="w-full h-auto rounded-lg" />
      </figure>
    );
  }

  // Layout cho 2 ảnh
  if (images.length === 2) {
    return (
      <figure className="mt-4 grid grid-cols-2 gap-1">
        <Image src={images[0]} alt="Post image 1" width={400} height={400} className="w-full h-full object-cover" />
        <Image src={images[1]} alt="Post image 2" width={400} height={400} className="w-full h-full object-cover" />
      </figure>
    );
  }

  // Layout cho 3 ảnh
  if (images.length === 3) {
    return (
      <figure className="mt-4 grid grid-cols-2 grid-rows-2 gap-1 h-96">
        <div className="col-span-2 row-span-1 relative">
            <Image src={images[0]} alt="Post image 1" layout="fill" className="object-cover" />
        </div>
        <div className="col-span-1 row-span-1 relative">
            <Image src={images[1]} alt="Post image 2" layout="fill" className="object-cover" />
        </div>
        <div className="col-span-1 row-span-1 relative">
            <Image src={images[2]} alt="Post image 3" layout="fill" className="object-cover" />
        </div>
      </figure>
    );
  }
  
  // Layout cho 4+ ảnh
  const remainingImages = images.length - 4;
  return (
    <figure className="mt-4 grid grid-cols-2 grid-rows-2 gap-1 h-96">
      {images.slice(0, 4).map((src, index) => (
        <div key={index} className="relative">
          <Image src={src} alt={`Post image ${index + 1}`} layout="fill" className="object-cover" />
          {/* Overlay cho ảnh cuối cùng nếu còn nhiều ảnh hơn */}
          {index === 3 && remainingImages > 0 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">+{remainingImages}</span>
            </div>
          )}
        </div>
      ))}
    </figure>
  );
}
