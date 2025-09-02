"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiSettings3Line } from "react-icons/ri";
import { TbTimelineEventText } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { useParams, usePathname } from "next/navigation";
import SidebarItem from "./SidebarItem";
import { useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { GoTasklist } from "react-icons/go";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        "bg-base-100 h-screen flex flex-col gap-3 sticky top-0 left-0 transition-all duration-250 border-r border-black/20",
        open ? "w-[14%]" : "w-[95px]",
        open && styles.openSidebar && styles.closedSidebar
      )}
    >
      <div
        className={clsx(
          "flex justify-between items-center px-2 pt-2 relative",
          open ? "justify-between" : "justify-center"
        )}
      >
        <div></div>
        {open ? (
          <button
            className="btn btn-square bg-transparent border border-black/10"
            onClick={() => {
              setOpen(false);
            }}
          >
            <FaChevronLeft size={25} />
          </button>
        ) : (
          <button
            className="btn btn-square bg-transparent border border-black/10"
            onClick={() => {
              setOpen(true);
            }}
          >
            <FaChevronRight size={25} />
          </button>
        )}
      </div>
      <ul className="menu rounded-box w-full flex flex-col gap-3">
        <SidebarItem
          href={`/project/${id}`}
          label="DashBoard"
          icon={<RxDashboard size={20} />}
          active={pathname === `/project/${id}`}
          open={open}
        />
        <SidebarItem
          href={`/project/${id}/tasks`}
          label="Tasks Board"
          icon={<GoTasklist size={20} />}
          active={pathname === `/project/${id}/tasks`}
          open={open}
        />
        <SidebarItem
          label="Timeline"
          icon={<TbTimelineEventText size={20} />}
          active={pathname === `/project/${id}/timeline`}
          href="/project/${id}/timeline"
          open={open}
        />
        <SidebarItem
          href={`/project/${id}/settings`}
          label="Project Settings"
          icon={<RiSettings3Line size={20} />}
          active={pathname === `/project/${id}/settings`}
          open={open}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
