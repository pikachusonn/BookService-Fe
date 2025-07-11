interface ICommonButtonProps {
  text: string;
  icon?: React.ReactNode;
}
const CommonButton = ({ text, icon }: ICommonButtonProps) => {
  return (
    <button className="btn btn-primary rounded-full px-7">
      {icon}
      {text}
    </button>
  );
};
export default CommonButton;
