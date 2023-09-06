export const IconButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
    >
      {children}
    </button>
  );
};
