export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-primary font-bold">Hello</p>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
      <button className="btn btn-sm">
        <span className="loading loading-spinner"></span>
        loading
      </button>
    </div>
  );
}
