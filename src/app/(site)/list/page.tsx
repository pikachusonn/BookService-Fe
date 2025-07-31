/* eslint-disable @next/next/no-img-element */
"use client";
import BookItem from "@/app/components/BookItem";
import CommonButton from "@/app/components/CommonButton";
import CommonModal from "@/app/components/CommonModal";
import CommonPagination from "@/app/components/CommonPagination";
import CommonSelect from "@/app/components/CommonSelect";
import { CATEGORIES } from "@/common/const";
import { useGetBooks } from "@/hook/book";
import clsx from "clsx";
import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaSortAmountDown } from "react-icons/fa";

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
  const [categoryFilter, setCategoryFilter] = useState<string[]>([]);
  const [innerCategoryFilter, setInnerCategoryFilter] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const { data: bookList, isLoading } = useGetBooks({
    pageIndex: currentIndex - 1,
    pageSize: 14,
    category: categoryFilter.join(","),
  });

  const metaData = bookList?.data?.metadata;

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
          ? bookList?.data?.data?.map((book) => (
              <BookItem book={book} key={book?.id} />
            ))
          : Array.from({ length: 14 }).map((_, index) => (
              <div key={index} className="flex w-[220px] flex-col gap-4">
                <div className="skeleton h-[330px] w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
      </div>
      <div className="flex justify-end">
        {metaData && (
          <CommonPagination
            maxPage={metaData?.totalPages}
            onChange={setCurrentIndex}
            currentIndex={currentIndex}
          />
        )}
      </div>
      <CommonModal id="filterModal">
        <h3 className="font-bold text-lg flex items-center gap-3">
          Categories <CiFilter />
        </h3>
        <div className="flex flex-wrap gap-2 py-5">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className={clsx(
                "px-[10px] py-[3px] border border-black rounded-full cursor-pointer",
                {
                  ["bg-black text-white"]: innerCategoryFilter?.includes(c),
                }
              )}
              onClick={() => {
                if (innerCategoryFilter?.includes(c)) {
                  setInnerCategoryFilter(
                    innerCategoryFilter?.filter((ic) => ic !== c)
                  );
                } else {
                  setInnerCategoryFilter([...innerCategoryFilter, c]);
                }
              }}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <CommonButton
            text="Clear"
            mode="error"
            classNames="bt-outline"
            onClick={() => {
              setCategoryFilter([]);
              setInnerCategoryFilter([]);
            }}
          />
          <CommonButton
            text="Save"
            onClick={() => {
              setCategoryFilter(innerCategoryFilter);
            }}
          />
        </div>
      </CommonModal>
    </div>
  );
};
export default List;
