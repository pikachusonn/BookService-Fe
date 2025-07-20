/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useGetBooks } from "@/hook/book";
import { HiOutlineBell } from "react-icons/hi2";

const NewlyUpdatedBooks = () => {
  const { data: bookList, isLoading } = useGetBooks({
    pageIndex: 0,
    pageSize: 10,
  });

  const bookListPlaceHolder =
    bookList && bookList?.data?.data[0]
      ? Array.from({ length: 24 }, () => ({ ...bookList?.data?.data[0] }))
      : [];

  return (
    <div className="w-full p-4">
      <div className="flex items-center gap-3 font-semibold px-2">
        <div className="indicator">
          <span className="indicator-item status status-error"></span>
          <HiOutlineBell size={30} className="text-orange-500" />
        </div>
        Newly Updated Books
      </div>
      <div className="flex pt-5 flex-wrap items-center xl:gap-6 2xl:gap-7 p-3">
        {!isLoading
          ? bookListPlaceHolder?.map((book) => (
              <div
                key={book?.id}
                className="flex flex-col items-center gap-1 relative"
              >
                <div className="absolute inset-0 p-2">
                  <div className="badge badge-accent">30 min ago</div>
                </div>
                <div className="w-[220px] h-[330px] rounded-lg">
                  <img
                    src={book?.coverImg}
                    alt="cover image"
                    className="w-full h-full rounded-lg"
                  />
                </div>
                <h5 className="font-semibold">{book?.name}</h5>
                <span className="text-sm">Chapter 85</span>
              </div>
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
        <a className="link link-info text-center">View more</a>
      </div>
    </div>
  );
};

export default NewlyUpdatedBooks;
