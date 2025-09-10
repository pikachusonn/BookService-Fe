import { IStatus } from "@/common/interface";

interface IStatusMenuProps {
  status: IStatus;
  x: number;
  y: number;
}
const StatusMenu = ({ status, x, y }: IStatusMenuProps) => {
  return (
    <div
      style={{
        position: "fixed",
        top: `${y}px`,
        left: `${x}px`,
        backgroundColor: "red",
      }}
    >
      hehehe
    </div>
  );
};

export default StatusMenu;
