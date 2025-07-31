interface ICommonModal {
  id: string;
  children: React.ReactNode;
}
const CommonModal = ({ id, children }: ICommonModal) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box bg-base-200 border border-black/20">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {children}
      </div>
    </dialog>
  );
};

export default CommonModal;
