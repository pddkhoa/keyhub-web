export const Dropdown = () => {
  return (
    <>
      <div className="h-full w-full bg-white flex border border-gray-200 rounded items-center">
        <label className="px-4 appearance-none outline-none text-gray-800 w-full">
          Option
        </label>
        <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600">
          <svg
            className="w-4 h-4 mx-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </button>
        <label
          htmlFor="show_more"
          className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
        >
          <svg
            className="w-4 h-4 mx-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </label>
      </div>
      <input
        type="checkbox"
        name="show_more"
        id="show_more"
        className="hidden peer"
      />
      <div className="absolute rounded shadow z-50 bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200">
        <div className="cursor-pointer group">
          <div className="block p-2 border-transparent border-l-4 group-hover:border-black group-hover:bg-gray-100">
            Python
          </div>
        </div>

        <div className="cursor-pointer group border-t">
          <div className="block p-2 border-transparent border-l-4 group-hover:border-black group-hover:bg-gray-100">
            PHP
          </div>
        </div>
      </div>
    </>
  );
};
