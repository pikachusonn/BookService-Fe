import CommonSelect from "@/app/components/CommonSelect";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const NavigationFooter = () => {
  const options = [
    { label: "Chapter 1", value: 1 },
    { label: "Chapter 2", value: 2 },
  ];
  return (
    <div className="fixed bottom-0 py-1 bg-black/70 w-full flex items-center justify-center gap-[20px]">
      <BsArrowLeftCircle className="text-white" size={30} />
      <CommonSelect options={options} classnames="w-[200px]" />
      <BsArrowRightCircle className="text-white" size={30} />
    </div>
  );
};

export default NavigationFooter;
