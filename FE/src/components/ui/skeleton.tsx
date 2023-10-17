export const Skeleton = () => {
  return (
    <div className="relative flex w-full h-full animate-pulse gap-2 p-4">
      <div className="h-20 w-1/4 rounded-xl bg-slate-400" />
      <div className="flex-1 my-2">
        <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg" />
        <div className="h-10 w-[90%] rounded-lg bg-slate-400 text-sm" />
      </div>
    </div>
  );
};
