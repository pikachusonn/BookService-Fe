import { IoAdd, IoSearchOutline } from "react-icons/io5";
import { RiHome4Line } from "react-icons/ri";
import CommonIconButton from "../CommonIconButton";
import { HiOutlineBell } from "react-icons/hi2";
import CommonAvatar from "../CommonAvatar";
import CommonButton from "../CommonButton";
const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="breadcrumbs text-sm font-md">
        <ul>
          <li>
            <a>
              <RiHome4Line />
              HomePage
            </a>
          </li>
          <li>
            <a>Doujinshi</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end gap-4">
        <label className="input bg-base-200 border-none rounded-full w-[400px] ">
          <IoSearchOutline size={20} />
          <input type="search" required placeholder="Search" />
        </label>
        <CommonButton icon={<IoAdd size={15} />} text="Create" />
        <CommonIconButton icon={<HiOutlineBell size={20} className="" />} />
        <CommonAvatar src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
      </div>
    </div>
  );
};

export default Header;
