import { Button } from "@/components/ui/button";
import { View, Image } from "lucide-react";

type PreviewProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
};

export const Preview: React.FC<PreviewProps> = ({ setFlag }) => {
  return (
    <div className="w-5/6 h-full 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal brightness-125 overflow-y-scroll">
      <div className="h-full flex flex-col space-y-5">
        <div className="px-5 py-2 flex space-x-5 shadow border-b-2 ">
          <h1 className="text-lg grow text-title">Preview</h1>
          <button
            className="block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors"
            onClick={setFlag.off}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-8 px-4 h-full pb-4 overflow-y-auto">
          <div className=" col-span-6 h-full  rounded-lg">
            <div className="flex flex-col space-y-5 p-1.5">
              <div className="text-title text-2xl font-bold">
                An Introduction to Federated GraphQL
              </div>
              <div className="border-l-4 border-border p-1 ">
                <p className="ml-2 text-title-foreground">
                  TLDRIn an ideal version of this world, your monolithic backend
                  would be modularized and factored into discrete services with
                  well-defined boundaries. WunderGraph Cosmo can help you
                  implement federated graphs that augment your modular,
                  microservices-based development, help you scale up and move
                  fast without breaking things.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="p-1.5 bg-input text-title-foreground text-sm rounded-lg font-bold hover:brightness-125 cursor-pointer ">
                  #typescripts
                </span>
                <span className="p-1.5 bg-input text-title-foreground text-sm rounded-lg font-bold hover:brightness-125 cursor-pointer">
                  #typescripts
                </span>
                <span className="p-1.5 bg-input text-title-foreground text-sm rounded-lg font-bold hover:brightness-125 cursor-pointer">
                  #typescripts
                </span>
                <span className="p-1.5 bg-input text-title-foreground text-sm rounded-lg font-bold hover:brightness-125 cursor-pointer">
                  #typescripts
                </span>
              </div>
              <div className="h-64 w-3/4 mx-auto">
                <img
                  className="w-full h-full object-cover rounded-xl hover:brightness-125"
                  src="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/14aafb53287e365d83b70f7848b07076?_a=AQAEufR"
                />
              </div>
              <div className="flex gap-5">
                <span className="mr-2 flex gap-2">
                  <svg
                    className="fill-rose-600 dark:fill-rose-400 mt-0.5"
                    style={{ width: 24, height: 24 }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
                  </svg>
                  <span className="text-lg font-bold text-title-foreground">
                    123
                  </span>
                </span>
                <span className="mr-2 flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-circle text-title-foreground mt-0.5"
                  >
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                  <span className="text-lg font-bold text-title-foreground">
                    123
                  </span>
                </span>
              </div>
            </div>
            <div className="border-t-2 ">
              <div className="flex gap-x-4 mx-4  items-center my-5 text-title ">
                <span className="text-xl">Comments</span>
              </div>
              <div className="relative mx-4 mt-4 flex flex-col bg-card rounded-xl space-y-5">
                <div className="flex flex-col h-fit">
                  <div className="flex flex-row w-full p-3">
                    <img
                      className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                      alt="Noob master's avatar"
                      src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                    />
                    <span className="flex relative flex-1 p-3">
                      <textarea
                        className="flex flex-1 bg-transparent outline-none rounded-lg text-title-foreground p-2"
                        rows={3}
                      ></textarea>
                    </span>
                  </div>
                  <div className="flex flex-row gap-3 justify-between items-center p-3 px-4 border-t text-title-foreground">
                    <div className="flex gap-4">
                      <Image className="hover:brightness-110 cursor-pointer" />
                      <View className="hover:brightness-110 cursor-pointer" />
                    </div>
                    <div>
                      <Button>Post Comment</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-2 border rounded-lg">
            <div className="flex flex-auto p-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preview;
