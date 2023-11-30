import ResponseRate from "../Charts/Line";
import UserMetrics from "../Charts/ChartUser";
import { Label } from "@/components/ui/label";
import ChartTypeBlog from "../Charts/Donut";

const Dashboard = () => {
  return (
    <div className="container py-16 mx-auto ">
      <div className="py-10">
        <Label className="text-white text-3xl font-semibold">Overview</Label>
      </div>
      <div className="grid grid-cols-12 gap-6 3xl:gap-8">
        <div className="col-span-4 p-4">
          <div className="card  text-gray-300 w-fit hover:brightness-90 transition-all cursor-pointer group bg-transparent shadow-xl border-2 rounded-2xl overflow-hidden relative">
            <div className="px-8 py-6 flex flex-col text-left gap-3">
              <div className="h-16 w-16">
                <img src="https://preview.cruip.com/stellar/images/carousel-icon-01.svg" />
              </div>
              <div className="uppercase font-bold text-xl">Boot Detection</div>
              <div className="text-gray-300 uppercase tracking-widest">
                Incorporate rich user profiling, and facilitate more
                transactions.
              </div>
            </div>
            <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all" />
          </div>
        </div>
        <div className="col-span-4 p-4">
          <div className="card  text-gray-300 w-fit hover:brightness-90 transition-all cursor-pointer group bg-transparent shadow-xl border-2 rounded-2xl overflow-hidden relative">
            <div className="px-8 py-6 flex flex-col text-left gap-3">
              <div className="h-16 w-16">
                <img src="https://preview.cruip.com/stellar/images/carousel-icon-01.svg" />
              </div>
              <div className="uppercase font-bold text-xl">Boot Detection</div>
              <div className="text-gray-300 uppercase tracking-widest">
                Incorporate rich user profiling, and facilitate more
                transactions.
              </div>
            </div>
            <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all" />
          </div>
        </div>
        <div className="col-span-4 p-4">
          <div className="card  text-gray-300 w-fit hover:brightness-90 transition-all cursor-pointer group bg-transparent shadow-xl border-2 rounded-2xl overflow-hidden relative">
            <div className="px-8 py-6 flex flex-col text-left gap-3">
              <div className="h-16 w-16">
                <img src="https://preview.cruip.com/stellar/images/carousel-icon-01.svg" />
              </div>
              <div className="uppercase font-bold text-xl">Boot Detection</div>
              <div className="text-gray-300 uppercase tracking-widest">
                Incorporate rich user profiling, and facilitate more
                transactions.
              </div>
            </div>
            <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
            <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 p-4 3xl:gap-8">
        <ResponseRate className="col-span-full h-fit @4xl:col-span-6 @6xl:col-span-7" />
        <ChartTypeBlog className="col-span-full h-fit @4xl:col-span-6 @6xl:col-span-5" />
        <UserMetrics className="@4xl:col-span-2 h-fit @7xl:col-span-12" />
      </div>
    </div>
  );
};

export default Dashboard;
