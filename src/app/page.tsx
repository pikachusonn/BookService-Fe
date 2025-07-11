export default function Home() {
  return (
    <div className="px-4 flex gap-3 pt-4 items-stretch">
      <div className="w-4/5 flex flex-col gap-3">
        <div className="bg-base-200 w-full h-[300px] rounded-3xl"></div>
        <div className="flex items-center gap-3">
          <div className="bg-base-200 w-1/2 h-[300px] rounded-3xl"></div>
          <div className="bg-base-200 w-1/2 h-[300px] rounded-3xl"></div>
        </div>
      </div>
      <div className="bg-base-200 rounded-3xl flex-1"></div>
    </div>
  );
}
