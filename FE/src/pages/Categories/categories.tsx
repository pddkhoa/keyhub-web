import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const Categories = () => {
  const [tabs, setTabs] = useState("");

  const renderContent = () => {
    switch (tabs) {
      case "Tab_1":
        return (
          <div className="z-30 h-96 relative items-center justify-center w-full">
            <div
              className="inset-0 h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://wallpapercave.com/wp/wp6689710.jpg")',
              }}
            />
            <div className="absolute inset-0 z-20 h-96 flex items-center justify-center  w-full bg-gray-900 bg-opacity-75" />
            <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
              <div
                className="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://wallpapercave.com/wp/wp6689710.jpg")',
                }}
              >
                <div className="grid grid-cols-12 gap-1">
                  <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                    <div className="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                      <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                        The Mysteries Of The Forest
                      </p>
                    </div>
                    <div className="text-gray-400 font-semibold text-xl mb-4">
                      07
                    </div>
                    <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5" />
                  </div>
                  <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                    <div className="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                      <div className="p-8">
                        <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                          Forests are truly amazing places. Combining impressive
                          biodiversity with natural beauty, the woods of the
                          world can be both captivating and perplexing. A hike
                          through a forest can be a relaxing way to pass an
                          afternoon or, sometimes, a glimpse into the unknown.
                        </p>
                        <div className="bottom-0 absolute p-2 right-0">
                          <button className="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>LEARN MORE</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className=" h-96 min-h-0 py-14">
      <div className="h-12 flex items-center justify-center mx-auto w-full">
        <Tabs defaultValue="cate1" className="mt-[6px] w-full flex">
          <TabsList className="w-full border-b-4 flex justify-center border-border text-title-foreground">
            <TabsTrigger
              onClick={() => {
                setTabs("Tab_1");
              }}
              className="data-[state=active]:border-b-4 mx-4 px-5 py-2 text-md  data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 "
              value="cate1"
            >
              Thể Thao
            </TabsTrigger>
            <TabsTrigger
              onClick={() => {
                setTabs("Tab_2");
              }}
              className="data-[state=active]:border-b-4  px-5 py-2 text-md  data-[state=active]:border-blue-500 data-[state=active]:text-blue-500"
              value="cate2"
            >
              Khoa Học
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {renderContent()}
    </div>
  );
};
