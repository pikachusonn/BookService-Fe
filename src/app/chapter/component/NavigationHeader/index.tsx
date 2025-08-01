import { FaPlus } from "react-icons/fa";
/* eslint-disable @next/next/no-img-element */
const NavigationHeader = () => {
  return (
    <div className="py-1 px-4 fixed top-0 bg-black/70 w-full">
      <div className="flex items-center gap-2">
        <img
          className=" w-[70px] aspect-square rounded-md"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMD6sCsuGnOsACvh3lQ54IOtwMLiSz1hgqVA&s"
          }
          alt="logo"
        />
        <div className="flex flex-col pt-2">
          <span className="text-3xl font-bold text-red-400 leading-[10px]">MANGA</span>
          <span className="text-3xl font-bold text-white flex items-center gap-2 pl-5">
            PLUS
            <FaPlus className="text-red-400" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default NavigationHeader;
