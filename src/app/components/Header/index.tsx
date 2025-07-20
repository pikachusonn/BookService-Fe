import { IoAdd, IoLogInOutline, IoSearchOutline } from "react-icons/io5";
import { RiHome4Line } from "react-icons/ri";
import CommonIconButton from "../CommonIconButton";
import { HiOutlineBell } from "react-icons/hi2";
import CommonAvatar from "../CommonAvatar";
import CommonButton from "../CommonButton";
const Header = () => {
  const userInfo = localStorage.getItem("userInfo");
  return (
    <div className="flex items-center justify-between p-4">
      <div className="breadcrumbs text-lg font-md">
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
        {true ? (
          <CommonAvatar
            src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
            classNames="border-2 border-black/40 hover:border-success transition duration-500 cursor-pointer"
          />
        ) : (
          <CommonButton
            classNames="btn-outline"
            icon={<IoLogInOutline size={20} />}
            text="Login"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
