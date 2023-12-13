import ResponseRate from "../Charts/Line";
import UserMetrics from "../Charts/ChartUser";
import { Label } from "@/components/ui/label";
import ChartTypeBlog from "../Charts/Donut";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";

const Dashboard = () => {
  const allBlog = useSelector((state: RootState) => state.admin.listAllBlog);
  const allUser = useSelector((state: RootState) => state.admin.listAllUser);
  const { isLoading, sendRequest } = useFetch();

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_ALLBLOG,
    });
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_ALLUSER,
    });
  }, []);

  return (
    <div className="container py-16 mx-auto ">
      <div className="py-10">
        <Label className="text-white text-3xl font-semibold">Overview</Label>
      </div>
      {isLoading ? (
        <div role="status" className="w-full flex justify-center">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-12 p-4 gap-6 3xl:gap-8">
            <div className="col-span-full">
              <div className="bg-slate-800 card  text-gray-300 w-full hover:brightness-90 transition-all cursor-pointer group bg-transparent shadow-xl border-2 border-white/50  rounded-2xl overflow-hidden relative">
                <div className="px-8 py-6 flex flex-col text-left gap-3">
                  <div className="flex justify-between items-center">
                    <div className="h-16 w-16">
                      {/* <img src="https://preview.cruip.com/stellar/images/carousel-icon-01.svg" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        id="growth"
                      >
                        <path
                          fill="#9f85ec"
                          d="M16,6a1,1,0,0,1-1-1V1a1,1,0,0,1,2,0V5A1,1,0,0,1,16,6Z"
                        ></path>
                        <path
                          fill="#38004d"
                          d="M24,22H20a4.92,4.92,0,0,0-3,1V17a1,1,0,0,0-2,0v4a4.92,4.92,0,0,0-3-1H8a1,1,0,0,0-1,1v2a5,5,0,0,0,5,5h3v3a1,1,0,0,0,2,0V30h3a5,5,0,0,0,5-5V23A1,1,0,0,0,24,22ZM9,23V22h3a3,3,0,0,1,3,3v1H12A3,3,0,0,1,9,23Zm14,2a3,3,0,0,1-3,3H17V27a3,3,0,0,1,3-3h3Z"
                        ></path>
                        <path
                          fill="#9f85ec"
                          d="M11.5,16.8a1,1,0,1,1,1-1.74A7,7,0,1,0,9.94,12.5a1,1,0,0,1-1.74,1,9,9,0,1,1,3.3,3.3Z"
                        ></path>
                        <path
                          fill="#9f85ec"
                          d="M16,14a5,5,0,1,1,5-5A5,5,0,0,1,16,14Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,6Z"
                        ></path>
                        <path
                          fill="#9f85ec"
                          d="M21.13 16.13a1 1 0 01-.71-.29L17.57 13A1 1 0 0119 11.57l2.85 2.85A1 1 0 0121.13 16.13zM16 18a1 1 0 01-1-1V13a1 1 0 012 0v4A1 1 0 0116 18z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="uppercase font-bold text-xl">Analysis</div>
                  <div className="text-gray-300 uppercase tracking-widest">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi itaque quaerat aliquid ex molestias odio, tempore
                    omnis quasi quibusdam.
                  </div>
                </div>
                <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
                <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 p-4 3xl:gap-8">
            <ChartTypeBlog className="col-span-6" />
            <div className="col-span-6  flex flex-col gap-8">
              <div className="card  text-gray-300 w-fit hover:brightness-90 transition-all cursor-pointer group bg-transparent shadow-xl border-2 border-white/50  rounded-2xl overflow-hidden relative">
                <div className="px-8 py-6 flex flex-col text-left gap-3">
                  <div className="flex justify-between items-center">
                    <div className="h-16 w-16">
                      {/* <img src="https://preview.cruip.com/stellar/images/carousel-icon-01.svg" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        id="user"
                      >
                        <defs>
                          <linearGradient
                            id="a"
                            x1="7.388"
                            x2="24.835"
                            y1="5.933"
                            y2="6.188"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#96369f"></stop>
                            <stop offset="1" stop-color="#01b3ed"></stop>
                          </linearGradient>
                          <linearGradient
                            id="b"
                            x1="7.212"
                            x2="24.659"
                            y1="17.93"
                            y2="18.185"
                            xlinkHref="#a"
                          ></linearGradient>
                        </defs>
                        <path
                          fill="url(#a)"
                          d="M18,6a6,6,0,1,0-6,6A6.006,6.006,0,0,0,18,6Zm-6,4a4,4,0,1,1,4-4A4,4,0,0,1,12,10Z"
                        ></path>
                        <path
                          fill="url(#b)"
                          d="M3.051,18.446a9.944,9.944,0,0,0,17.845,0,1.006,1.006,0,0,0,0-.892,9.944,9.944,0,0,0-17.845,0A1,1,0,0,0,3.051,18.446ZM12,14a7.9,7.9,0,0,1,6.866,4A7.938,7.938,0,0,1,5.081,18,7.948,7.948,0,0,1,12,14Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="text-3xl">
                      {allUser ? allUser.length.toString() : "...Loading"}
                    </div>
                  </div>
                  <div className="uppercase font-bold text-xl">Total User</div>
                  <div className="text-gray-300 uppercase tracking-widest">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi itaque quaerat aliquid ex molestias odio, tempore
                    omnis quasi quibusdam.
                  </div>
                </div>
                <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
                <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all" />
              </div>
              <div className="card  text-gray-300 w-fit hover:brightness-90 transition-all cursor-pointer group bg-transparent shadow-xl border-2 border-white/50 rounded-2xl overflow-hidden relative">
                <div className="px-8 py-6 flex flex-col text-left gap-3">
                  <div className="flex justify-between items-center">
                    <div className="h-16 w-16">
                      {/* <img src="https://preview.cruip.com/stellar/images/carousel-icon-01.svg" /> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24"
                        id="book"
                      >
                        <defs>
                          <linearGradient
                            id="a"
                            x1="2"
                            x2="12"
                            y1="12"
                            y2="12"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stop-color="#16b0e2"></stop>
                            <stop offset="1" stop-color="#6e5af0"></stop>
                          </linearGradient>
                          <linearGradient
                            id="b"
                            x1="12"
                            x2="22"
                            y1="12.005"
                            y2="12.005"
                            xlinkHref="#a"
                          ></linearGradient>
                          <linearGradient
                            id="c"
                            x1="4.75"
                            x2="8.5"
                            y1="8.496"
                            y2="8.496"
                            xlinkHref="#a"
                          ></linearGradient>
                          <linearGradient
                            id="d"
                            x1="4.75"
                            x2="9.25"
                            y1="11.496"
                            y2="11.496"
                            xlinkHref="#a"
                          ></linearGradient>
                        </defs>
                        <g data-name="1">
                          <path
                            fill="url(#a)"
                            d="M12,5.3v16.03a1.009,1.009,0,0,1-.49-.11l-.04-.02a25.693,25.693,0,0,0-7.44-2.44l-.29-.04A2.055,2.055,0,0,1,2,16.744V4.664a1.967,1.967,0,0,1,2.16-1.99,18.757,18.757,0,0,1,7.06,2.34l.25.15A1.048,1.048,0,0,0,12,5.3Z"
                            opacity=".4"
                          ></path>
                          <path
                            fill="url(#b)"
                            d="M22,4.674v12.07a2.055,2.055,0,0,1-1.74,1.98l-.33.04a25.461,25.461,0,0,0-7.46,2.46.885.885,0,0,1-.47.11V5.3a1.048,1.048,0,0,0,.53-.14l.17-.11a18.851,18.851,0,0,1,7.07-2.37h.06A1.97,1.97,0,0,1,22,4.674Z"
                          ></path>
                          <path
                            fill="url(#c)"
                            d="M7.75,9.246H5.5a.75.75,0,0,1,0-1.5H7.75a.75.75,0,1,1,0,1.5Z"
                          ></path>
                          <path
                            fill="url(#d)"
                            d="M8.5,12.246h-3a.75.75,0,0,1,0-1.5h3a.75.75,0,0,1,0,1.5Z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div className="text-3xl">
                      {allBlog ? allBlog.length.toString() : "...Loading"}
                    </div>
                  </div>
                  <div className="uppercase font-bold text-xl">Total Blog</div>
                  <div className="text-gray-300 uppercase tracking-widest">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque nesciunt facere, nostrum distinctio quia sequi
                  </div>
                </div>
                <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0" />
                <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-yellow-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 p-4 3xl:gap-8">
            <UserMetrics className="col-span-full  " />
            <ResponseRate className="col-span-full h-fit " />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
