"use client";
import {
  IoBarChartOutline,
  IoCalendarOutline,
  IoLibraryOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { RiHome4Line, RiSettings3Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-base-100 h-screen w-[14%] flex flex-col gap-5">
      <div className="flex justify-between items-center px-2 pt-2">
        <div className="p-3 bg-base-300 inline-block border border-neutral-200 rounded-xl">
          <IoLibraryOutline size={30} />
        </div>
        <button className="btn btn-square rounded-xl">
          <FaChevronRight />
        </button>
      </div>
      <ul className="menu rounded-box w-full flex flex-col gap-3">
        <SidebarItem
          href="/"
          label="HomePage"
          icon={<RiHome4Line size={20} />}
          active={pathname === "/"}
        />
        <SidebarItem
          href="/my-library"
          label="My Library"
          icon={<GrStorage size={20} />}
          active={pathname === "/my-library"}
        />
        <SidebarItem
          label="Feeds"
          icon={<IoShareSocialOutline size={20} />}
          active={pathname === "/feeds"}
          href="/feeds"
        />
        <SidebarItem
          href="/leaderboard"
          label="Leaderboard"
          icon={<IoBarChartOutline size={20} />}
          active={pathname === "/leaderboard"}
        />
        <SidebarItem
          href="/events"
          label="Events"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          }
          active={pathname === "/events"}
        />
        <SidebarItem
          href="/calendar"
          label="Calendar"
          icon={<IoCalendarOutline size={20} />}
          active={pathname === "/calendar"}
        />
        <SidebarItem
          href="/settings"
          label="Settings"
          icon={<RiSettings3Line size={20} />}
          active={pathname === "/settings"}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
