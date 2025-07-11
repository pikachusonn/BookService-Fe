interface ICommonAvatarProps {
  src: string;
  alt?: string;
  width?: number;
}
const CommonAvatar = ({
  src,
  alt = "avatar",
  width = 40,
}: ICommonAvatarProps) => {
  return (
    <div className="avatar">
      <div className={`rounded-full  border border-base-200`} style={{ width: `${width}px` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default CommonAvatar;
