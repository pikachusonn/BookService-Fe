import clsx from "clsx";

interface ICommonButtonProps {
  text: string;
  icon?: React.ReactNode;
  mode?: string; // e.g., "primary", "secondary", etc.
  classNames?: string
}

const CommonButton = ({ text, icon, mode, classNames }: ICommonButtonProps) => {
  return (
    <button
      className={clsx(
        "btn rounded-full px-7",
        mode ? `btn-${mode}` : "btn-primary",
        classNames
      )}
    >
      {icon}
      {text}
    </button>
  );
};

export default CommonButton;
