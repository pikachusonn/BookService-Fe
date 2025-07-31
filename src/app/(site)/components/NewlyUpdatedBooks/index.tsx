/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import BookItem from "@/app/components/BookItem";
import { useGetBooks } from "@/hook/book";
import { HiOutlineBell } from "react-icons/hi2";

const NewlyUpdatedBooks = () => {
  const { data: bookList, isLoading } = useGetBooks({
    pageIndex: 0,
    pageSize: 14,
  });

  return (
    <div className="w-full p-4">
      <div className="flex items-center gap-3 font-semibold px-2">
        <div className="indicator">
          <span className="indicator-item status status-error"></span>
          <HiOutlineBell size={30} className="text-orange-500" />
        </div>
        Newly Updated Books
      </div>
      <div className="flex pt-5 flex-wrap items-center gap-1 p-3">
        {!isLoading
          ? bookList?.data?.data?.map((book) => (
              <BookItem book={book} key={book?.id} />
            ))
          : Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="flex w-[220px] flex-col gap-4">
                <div className="skeleton h-[330px] w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
      </div>
      <div className="flex justify-center">
        <a href="/list" className="link link-info text-center">
          View more
        </a>
      </div>
    </div>
  );
};

export default NewlyUpdatedBooks;
