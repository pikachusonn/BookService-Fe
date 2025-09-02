/* eslint-disable @next/next/no-img-element */
const ProjectHeader = () => {
  return (
    <div className="w-full p-[16px] border-b border-black/20 flex items-center">
      <div className="flex items-center gap-3">
        <img
          src="https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?semt=ais_hybrid&w=740&q=80"
          className="w-[40px] aspect-square border border-black/20"
          alt="logo"
        />
        <h2 className="font-bold text-xl">Wakeup Super</h2>
      </div>
    </div>
  );
};

export default ProjectHeader;
