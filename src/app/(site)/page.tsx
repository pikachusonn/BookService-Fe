import HotBooks from "./components/HotBooks";
import HotPublisher from "./components/HotPublisher";
import NewlyUpdatedBooks from "./components/NewlyUpdatedBooks";
import UpcommingEvents from "./components/UpCommingEvents";

export default function Home() {
  return (
    <div className="p-4 flex gap-4 pt-4 items-stretch">
      <div className="w-4/5 flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-lg font-semibold">Best seller</h3>
          <select
            defaultValue="This week"
            className="select w-[200px] rounded-full"
          >
            <option>Today</option>
            <option>This week</option>
            <option>This month</option>
            <option>All time</option>
          </select>
        </div>
        <div className="bg-base-200 w-full h-[300px] rounded-3xl overflow-y-hidden border border-black/40">
          <HotBooks />
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-base-200 w-1/2 h-[300px] rounded-3xl border border-black/40">
            <HotPublisher />
          </div>
          <div className="bg-base-200 w-1/2 h-[300px] rounded-3xl border border-black/40 group relative">
            <div className="absolute inset-0 font-semibold flex items-end p-[20px] bg-black/50 rounded-3xl bg-opacity-60 transition duration-300">
              <div className="flex flex-col">
                <div className="text-info font-light">
                  <div className="inline-grid *:[grid-area:1/1]">
                    <div className="status status-success animate-ping"></div>
                    <div className="status status-success"></div>
                  </div>{" "}
                  Upcoming Event
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white text-2xl">
                    Evo 2025 - Las Vegas
                  </span>
                  <button className="btn rounded-full btn-outline btn-info h-auto py-1 text-[12px]">
                    View detail
                  </button>
                </div>
                <p className="text-white text-[14px] font-light line-clamp-2">
                  EVO, short for the Evolution Championship Series, is the
                  world&apos;s premier fighting game tournament. It&apos;s a
                  prestigious event where players from all over the globe gather
                  to compete in open format tournaments, with the goal of being
                  crowned EVO world champion. Evo is more than just a
                  competition; it&apos;s a celebration of fighting game culture
                  and a gathering place for fans and players alike.
                </p>
              </div>
            </div>
            <UpcommingEvents />
          </div>
        </div>
        <div className="bg-base-200 w-full rounded-3xl border border-black/20 pb-4">
          <NewlyUpdatedBooks />
        </div>
      </div>
      <div className="bg-base-200 rounded-3xl h-[97vh] w-1/5 sticky top-3 right-0 border border-black/20"></div>
    </div>
  );
}
