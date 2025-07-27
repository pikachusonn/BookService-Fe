import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
interface IBookItem {
  book: any;
}
const BookItem = ({ book }: IBookItem) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col items-center gap-1 relative xl:w-[13.6%] 2xl:w-[13.8%] cursor-pointer"
      onClick={() => {
        router.push(`/book/${book?.id}`);
      }}
    >
      <div className="absolute inset-0 p-2">
        <div className="badge badge-accent">30 min ago</div>
      </div>
      <div className="w-full h-auto rounded-lg">
        <img
          src={book?.coverImg}
          alt="cover image"
          className="w-full h-full rounded-lg"
        />
      </div>
      <h5 className="font-semibold">{book?.name}</h5>
      <span className="text-sm">Chapter 85</span>
    </div>
  );
};

export default BookItem;
