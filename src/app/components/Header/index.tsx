"use client";
import {
  IoAdd,
  IoLogInOutline,
  IoLogOutOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { FcSteam } from "react-icons/fc";
import CommonIconButton from "../CommonIconButton";
import { HiOutlineBell } from "react-icons/hi2";
import CommonAvatar from "../CommonAvatar";
import CommonButton from "../CommonButton";
import { useRouter } from "next/navigation";
import { FiUser } from "react-icons/fi";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
const Header = () => {
  const [userInfo, setUserInfo] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    setUserInfo(storedUser);
  }, []);
  const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 border-b border-black/20">
      <div>
        <FcSteam size={40}/>
      </div>
      <div className="flex items-center justify-end gap-4">
        <label className="input bg-base-200 border-none rounded-full w-[400px] ">
          <IoSearchOutline size={20} />
          <input type="search" required placeholder="Search" />
        </label>
        <CommonButton icon={<IoAdd size={15} />} text="Create" />
        <CommonIconButton icon={<HiOutlineBell size={20} className="" />} />
        {!!userInfo ? (
          <div className="dropdown dropdown-end">
            <CommonAvatar
              src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"
              classNames="border-2 border-black/40 hover:border-success transition duration-500 cursor-pointer"
            />
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-lg border bg-white border-black/20 relative top-[50px]"
            >
              <li>
                <a className="w-full flex items-center justify-between">
                  <span>Profile</span>
                  <FiUser size={20} />
                </a>
              </li>
              <li>
                <a
                  className="w-full flex items-center justify-between"
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem("userInfo");
                    Cookies.remove("accessToken");
                    toast.success("Logged out");
                    router.replace("/");
                    window.location.reload();
                  }}
                >
                  <span>Logout</span>
                  <IoLogOutOutline size={20} />
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <CommonButton
            classNames="btn-outline"
            icon={<IoLogInOutline size={20} />}
            text="Login"
            onClick={() => {
              router.push("/auth/login");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
