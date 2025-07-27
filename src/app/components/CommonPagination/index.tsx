import clsx from "clsx";

interface ICommonPagination {
  currentIndex: number;
  maxPage: number;
  onChange: (i: number) => void;
  classnames?: string;
}
const CommonPagination = ({
  onChange,
  maxPage,
  classnames,
  currentIndex,
}: ICommonPagination) => {
  const getPages = (): number[] => {
    if (maxPage <= 7) {
      return Array.from({ length: maxPage - 2 }, (_, i) => i + 2);
    }

    const middlePages: number[] = [];
    const count = 5;

    let start = currentIndex - Math.floor(count / 2);
    let end = currentIndex + Math.floor(count / 2);

    // Clamp start and end to be within 2 and maxPage - 1
    if (start < 2) {
      start = 2;
      end = start + count - 1;
    }

    if (end > maxPage - 1) {
      end = maxPage - 1;
      start = end - count + 1;
    }

    for (let i = start; i <= end; i++) {
      middlePages.push(i);
    }

    return middlePages;
  };

  return (
    <div className={clsx("join", classnames)}>
      <button
        onClick={() => {
          onChange(1);
        }}
        className={clsx("join-item btn", { "btn-active": currentIndex === 1 })}
      >
        1
      </button>
      {currentIndex > 4 && (
        <button className="join-item btn btn-disabled">...</button>
      )}
      {getPages().map((i) => (
        <button
          onClick={() => {
            onChange(i);
          }}
          key={i}
          className={clsx("join-item btn", {
            "btn-active": currentIndex === i,
          })}
        >
          {i}
        </button>
      ))}
      {currentIndex < maxPage - 3 && (
        <button className="join-item btn btn-disabled">...</button>
      )}
      <button
        onClick={() => {
          onChange(maxPage);
        }}
        className={clsx("join-item btn", {
          "btn-active": currentIndex === maxPage,
        })}
      >
        {maxPage}
      </button>
    </div>
  );
};
export default CommonPagination;
