"use client";
import {
  IoBarChartOutline,
  IoCalendarOutline,
  IoLibraryOutline,
  IoShareSocialOutline,
} from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { RiHome4Line, RiSettings3Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        "bg-base-100 h-screen flex flex-col gap-5 sticky top-0 left-0 transition-all duration-250 border-r border-black/20",
        open ? "w-[14%]" : "w-[5%]",
        open && styles.openSidebar && styles.closedSidebar
      )}
    >
      <div
        className={clsx(
          "flex justify-between items-center px-2 pt-2 relative",
          open ? "justify-between" : "justify-center"
        )}
      >
        <div className="p-3 bg-base-300 inline-block border border-neutral-200 rounded-xl">
          <IoLibraryOutline size={30} />
        </div>
        {open ? (
          <button
            className="btn btn-square rounded-full w-[30px] h-[30px] "
            onClick={() => {
              setOpen(false);
            }}
          >
            <FaChevronLeft />
          </button>
        ) : (
          <button
            className="btn btn-square rounded-full absolute right-[-15px] top-[20px] w-[30px] h-[30px] border border-black/20"
            onClick={() => {
              setOpen(true);
            }}
          >
            <FaChevronRight />
          </button>
        )}
      </div>
      <ul className="menu rounded-box w-full flex flex-col gap-3">
        <SidebarItem
          href="/"
          label="HomePage"
          icon={<RiHome4Line size={20} />}
          active={pathname === "/"}
          open={open}
        />
        <SidebarItem
          href="/my-library"
          label="My Library"
          icon={<GrStorage size={20} />}
          active={pathname === "/my-library"}
          open={open}
        />
        <SidebarItem
          label="Feeds"
          icon={<IoShareSocialOutline size={20} />}
          active={pathname === "/feeds"}
          href="/feeds"
          open={open}
        />
        <SidebarItem
          href="/leaderboard"
          label="Leaderboard"
          icon={<IoBarChartOutline size={20} />}
          active={pathname === "/leaderboard"}
          open={open}
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
          open={open}
        />
        <SidebarItem
          href="/calendar"
          label="Calendar"
          icon={<IoCalendarOutline size={20} />}
          active={pathname === "/calendar"}
          open={open}
        />
        <SidebarItem
          href="/settings"
          label="Settings"
          icon={<RiSettings3Line size={20} />}
          active={pathname === "/settings"}
          open={open}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
