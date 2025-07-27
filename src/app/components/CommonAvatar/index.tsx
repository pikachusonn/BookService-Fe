import clsx from "clsx";

interface ICommonAvatarProps {
  src: string;
  alt?: string;
  width?: number;
  classNames?: string;
}
const CommonAvatar = ({
  src,
  alt = "avatar",
  width = 40,
  classNames,
}: ICommonAvatarProps) => {
  return (

      <div className="avatar" tabIndex={0} role="button">
        <div
          className={clsx(`rounded-full`, classNames)}
          style={{ width: `${width}px` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} />
        </div>
      </div>
  );
};

export default CommonAvatar;
