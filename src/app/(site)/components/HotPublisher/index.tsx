import { FaFire } from "react-icons/fa";

/* eslint-disable @next/next/no-img-element */
const HotPublisher = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 font-semibold flex items-end p-[20px] bg-black/50 rounded-3xl bg-opacity-60 transition duration-300">
        <div className="flex flex-col">
          <div className="text-orange-400 flex items-center gap-3">
            {" "}
            <FaFire />
            Hot Publisher
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white text-2xl">
              Hokazono - The creator of Kagurabachi
            </span>
            <button className="btn rounded-full btn-outline btn-info h-auto py-1 text-[12px]">
              View detail
            </button>
          </div>
          <p className="text-white text-[14px] font-light line-clamp-2">
            EVO, short for the Evolution Championship Series, is the
            world&apos;s premier fighting game tournament. It&apos;s a
            prestigious event where players from all over the globe gather to
            compete in open format tournaments, with the goal of being crowned
            EVO world champion. Evo is more than just a competition; it&apos;s a
            celebration of fighting game culture and a gathering place for fans
            and players alike.
          </p>
        </div>
      </div>
      <img
        src={
          "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2025/5/11/vhvn-11-5-25-4-read-only-17469269238161882059964.jpg"
        }
        className="w-full h-full object-center object-cover rounded-3xl"
        alt="hotPublisherCover"
      />
    </div>
  );
};
export default HotPublisher;
