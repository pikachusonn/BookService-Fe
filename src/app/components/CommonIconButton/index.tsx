interface ICommonIconButtonProps {
  icon: React.ReactNode;
}

const CommonIconButton = ({ icon }: ICommonIconButtonProps) => {
  return <button className="btn btn-circle bg-base-200">{icon}</button>;
};

export default CommonIconButton;
