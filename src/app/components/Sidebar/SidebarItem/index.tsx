import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface SidebarItemProps {
  href?: string;
  label: string;
  icon: React.ReactNode;
  open: boolean;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  href,
  label,
  icon,
  active,
  open,
}) => {
  const baseClass =
    "px-3 py-1 rounded-xl text-md font-semibold flex items-center gap-3";
  const activeClass = active ? "bg-white shadow-md" : "";
  const className = `${baseClass} ${activeClass}`;

  if (href) {
    return (
      <li className={className}>
        <Link
          className={clsx(
            "flex items-center gap-3 w-full",
            active && "bg-transparent",
            !open && "justify-center"
          )}
          href={href}
        >
          {icon}
          {open ? label : ""}
        </Link>
      </li>
    );
  }
  return (
    <li className={className}>
      <span className="flex items-center gap-3 w-full">
        {icon}
        {open ? label : ""}
      </span>
    </li>
  );
};

export default SidebarItem;
