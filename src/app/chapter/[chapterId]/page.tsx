"use client";
import { useGetChapterDetail } from "@/hook/chapter";
import { useParams } from "next/navigation";
import NavigationFooter from "../component/NavigationFooter";

/* eslint-disable @next/next/no-img-element */
const Chapter = () => {
  const { chapterId } = useParams();
  const { data: chapter } = useGetChapterDetail(chapterId as string);
  const images = chapter?.data?.data?.images?.split(",");

  return (
    <div className="flex flex-col items-center bg-black/80">
      {images?.map((i, index) => (
        <img
          className="h-screen w-auto"
          src={i}
          key={index}
          alt={`page ${index}`}
        />
      ))}
      <NavigationFooter />
    </div>
  );
};

export default Chapter;
