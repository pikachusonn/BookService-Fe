/* eslint-disable jsx-a11y/alt-text */

import CommonButton from "@/app/components/CommonButton";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { FaRegEye, FaRegUser } from "react-icons/fa";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import CommonAvatar from "@/app/components/CommonAvatar";
import CommonPagination from "@/app/components/CommonPagination";
import { useParams, useRouter } from "next/navigation";
import { useGetBooksDetail } from "@/hook/book";
/* eslint-disable @next/next/no-img-element */
const BookDetail = () => {
  const { bookId } = useParams();
  const { data: bookDetail } = useGetBooksDetail(bookId as string);
  const router = useRouter();
  return (
    <div className="p-4">
      <div className="flex items-start">
        <div className="w-[20%] p-3 flex flex-col gap-5">
          <img
            src={
              bookDetail?.data?.data?.coverImg ||
              "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
            }
            alt="cover"
            className={clsx("w-full border-2 border-black", styles.coverImage)}
          />
          <CommonButton text="ADD TO FAVORITE" classNames="w-full rounded-sm" />
        </div>
        <div className="flex items-start flex-1 h-full">
          <div className="p-4 w-[75%]">
            <div className="p-3 shadow-md [mask-image:linear-gradient(to_right,black,transparent)]">
              <h3 className="text-3xl font-bold">
                {bookDetail?.data?.data?.name}
              </h3>
            </div>
            <div className="p-4 flex items-start gap-[25px]">
              <div className="flex flex-col gap-3 font-semibold text-lg">
                <div className="flex items-center gap-3 h-[25px]">
                  <FaRegUser size={20} />
                  <h5>Publisher</h5>
                </div>
                <div className="flex items-center gap-3 h-[25px]">
                  <MdOutlineOnlinePrediction size={20} />
                  <h5>Status</h5>
                </div>
                <div className="flex items-center gap-3 h-[25px]">
                  <IoIosHeartEmpty size={20} />
                  <h5>Favourited</h5>
                </div>
                <div className="flex items-center gap-3 h-[25px]">
                  <FaRegEye size={20} />
                  <h5>View</h5>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-muted text-black/60">
                <div className="flex items-center gap-1 h-[25px]">
                  <CommonAvatar
                    classNames="border-2 border-red-400/50"
                    width={30}
                    src={
                      bookDetail?.data?.data?.publisher?.user?.avatar ||
                      "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                    }
                  />
                  {bookDetail?.data?.data?.publisher?.user?.username}
                </div>
                <span className="text-success h-[25px] leading-[25px]">
                  OnGoing
                </span>
                <span className="h-[25px] leading-[25px]">
                  {bookDetail?.data?.data?.favorites?.length}
                </span>
                <span className="h-[25px] leading-[25px]">
                  {bookDetail?.data?.data?.viewCount}
                </span>
              </div>
              <div></div>
            </div>
            <div className="flex items-center flex-wrap gap-2 text-sm px-4">
              {bookDetail?.data?.data?.categories?.map((c) => (
                <span
                  className="px-3 py-1 rounded-sm border border-orange-400 hover:text-white hover:bg-orange-400 cursor-pointer"
                  key={c?.id}
                >
                  {c?.name}
                </span>
              ))}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">SUMMARY</h3>
              <div className="divider"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                interdum tempus justo et ultrices. Pellentesque scelerisque
                turpis sapien, et semper ante venenatis blandit. Quisque ligula
                nibh, cursus quis diam sit amet, pellentesque porttitor nibh.
                Mauris dignissim, nulla ac tincidunt commodo, metus justo luctus
                leo, id semper neque tellus in sem. Ut id quam egestas, congue
                nisi vel, interdum nisl. Nunc leo mi, sodales congue ex sit
                amet, aliquet sodales ligula. Donec ac euismod metus. Proin in
                tortor justo. Proin mollis leo sit amet est varius condimentum.
                Proin fringilla sem nec mauris vehicula, sit amet feugiat felis
                ultrices. Fusce ligula augue, pulvinar ut tincidunt sit amet,
                facilisis non turpis. Maecenas elementum congue orci laoreet
                egestas.
              </p>
            </div>
          </div>
          <div className="flex-1 h-full flex flex-col">
            <h3 className="text-lg font-bold">RELEASE SCHEDULE</h3>
            <div className="divider"></div>
            <span className="p-1 bg-yellow-500 font-semibold">WEEKLY</span>
            <p className="text-xl font-semibold bg-gradient-to-r from-gray-800 via-yellow-700 to-yellow-600 bg-clip-text text-transparent">
              New chapter arrives on Sunday, Aug 03, 22:00
            </p>
            <span className="text-black/70 text-sm pt-5 leading-[-5px]">
              Add this book to favorite to get notification when new chapter
              drops
            </span>
            <div className="my-5 bg-base-200 flex-1 w-full"></div>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-neutral-500 px-4">
        CHAPTER LIST ({bookDetail?.data?.data?.chapters?.length})
      </h3>
      <div className="divider"></div>
      <div className="flex items-start gap-5">
        <div className="w-[60%]">
          <div className="flex flex-col gap-4">
            {bookDetail?.data?.data?.chapters?.map((c, index) => (
              <div
                key={c?.id}
                className="flex h-[150px] bg-base-200 cursor-pointer rounded border border-base-100 hover:border-blue-500"
                onClick={() => {
                  router.push(`/chapter/${c?.id}`);
                }}
              >
                <img
                  src={c?.coverImage}
                  className="object-center object-cover h-full aspect-square"
                />
                <div className="flex flex-col h-full p-3 justify-between">
                  <div>
                    <h5 className="text-xl font-semibold">#00{index + 1}</h5>
                    <span className="text-mute text-neutral-500 text-sm">
                      Chapter {index + 1}: {c?.chapter_name}
                    </span>
                  </div>
                  <span className="text-mute text-neutral-500 text-sm">
                    Sep 09, 2025
                  </span>
                </div>
              </div>
            ))}
          </div>
          {bookDetail?.data?.data?.chapters?.length > 5 && (
            <CommonPagination
              currentIndex={1}
              maxPage={10}
              onChange={() => {}}
              classnames="pt-5"
            />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-neutral-500">COMMENTS (0)</h3>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Make a comment</legend>
            <textarea
              className="textarea h-16 w-full"
              placeholder="Bio"
            ></textarea>
          </fieldset>
          <div className="flex flex-col items-center gap-5">
            <img
              src={"/assets/icons/empty.png"}
              className="w-[150px] aspect-square"
            />
            <span>No comment yet, be the first</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
