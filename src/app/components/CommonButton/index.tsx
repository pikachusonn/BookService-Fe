import clsx from "clsx";

interface ICommonButtonProps {
  text: string;
  icon?: React.ReactNode;
  mode?: string; // e.g., "primary", "secondary", etc.
  classNames?: string;
  onClick?: () => void;
}

const CommonButton = ({ text, icon, mode, classNames, onClick }: ICommonButtonProps) => {
  return (
    <button
      className={clsx(
        "btn rounded-full px-7",
        mode ? `btn-${mode}` : "btn-primary",
        classNames
      )}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};

export default CommonButton;
