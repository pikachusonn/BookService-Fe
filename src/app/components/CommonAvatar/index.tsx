import clsx from "clsx";

interface ICommonAvatarProps {
  src: string;
  alt?: string;
  width?: number;
  classNames: string;
}
const CommonAvatar = ({
  src,
  alt = "avatar",
  width = 40,
  classNames,
}: ICommonAvatarProps) => {
  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <div className="avatar" tabIndex={0} role="button">
        <div
          className={clsx(`rounded-full`, classNames)}
          style={{ width: `${width}px` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-lg border bg-white border-black relative top-[50px]"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default CommonAvatar;
