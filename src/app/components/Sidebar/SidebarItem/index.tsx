import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  href?: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, label, icon, active }) => {
  const baseClass = "px-3 py-1 rounded-xl text-md font-semibold flex items-center gap-3";
  const activeClass = active ? "bg-base-200 shadow-md" : "";
  const className = `${baseClass} ${activeClass}`;

  if (href) {
    return (
      <li className={className}>
        <Link className="flex items-center gap-3 w-full" href={href}>
          {icon}
          {label}
        </Link>
      </li>
    );
  }
  return (
    <li className={className}>
      <span className="flex items-center gap-3 w-full">
        {icon}
        {label}
      </span>
    </li>
  );
};

export default SidebarItem;
