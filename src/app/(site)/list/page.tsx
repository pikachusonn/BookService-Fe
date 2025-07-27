/* eslint-disable @next/next/no-img-element */
"use client";
import BookItem from "@/app/components/BookItem";
import CommonButton from "@/app/components/CommonButton";
import CommonPagination from "@/app/components/CommonPagination";
import CommonSelect from "@/app/components/CommonSelect";
import { CATEGORIES } from "@/common/const";
import { useGetBooks } from "@/hook/book";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaSortAmountDown } from "react-icons/fa";
const CommonModal = () => {
  return (
    <dialog id="filterModal" className="modal">
      <div className="modal-box bg-base-200 border border-black/20">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg flex items-center gap-3">
          Categories <CiFilter />
        </h3>
        <div className="flex flex-wrap gap-2 py-5">
          {Object.entries(CATEGORIES).map(([key, value]) => (
            <span
              key={key}
              className="px-[10px] py-[3px] border border-black rounded-full"
            >
              {value}
            </span>
          ))}
        </div>
        <div className="flex items-end">
          <CommonButton text="Save" />
        </div>
      </div>
    </dialog>
  );
};
const List = () => {
  const sortOptions = [
    {
      value: "hot",
      label: "Hot",
    },
    {
      value: "recentUpload",
      label: "Most recent uploaded",
    },
    {
      value: "recentUpdated",
      label: "Most recent updated",
    },
    {
      value: "bestSeller",
      label: "Best Seller",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const { data: bookList, isLoading } = useGetBooks({
    pageIndex: 0,
    pageSize: 10,
  });

  const bookListPlaceHolder =
    bookList && bookList?.data?.data[0]
      ? Array.from({ length: 14 }, () => ({ ...bookList?.data?.data[0] }))
      : [];
  return (
    <div className="p-5">
      <div className="w-full flex items-end justify-end gap-5">
        <CommonButton
          text={"Filter"}
          onClick={() => {
            (
              document.getElementById("filterModal") as HTMLDialogElement
            )?.showModal();
          }}
          icon={<CiFilter />}
        />
        <CommonSelect
          classnames="w-[200px]"
          legend={
            <div className="flex items-center gap-2 py-2 pl-3">
              Sort <FaSortAmountDown size={15} />
            </div>
          }
          options={sortOptions}
        />
      </div>
      <div className="flex pt-5 flex-wrap items-center xl:gap-2 py-3">
        {!isLoading
          ? bookListPlaceHolder?.map((book) => (
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
      <div className="flex justify-end">
        <CommonPagination
          maxPage={100}
          onChange={setCurrentIndex}
          currentIndex={currentIndex}
        />
      </div>
      <CommonModal />
    </div>
  );
};
export default List;
