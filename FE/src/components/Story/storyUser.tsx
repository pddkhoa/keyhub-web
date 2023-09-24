import { PlusCircle } from "lucide-react";
import AlphabetAvatar from "../Avatar/avatar";

export const StoryUser = () => {
  return (
    <div className="h-fit  rounded-xl p-4">
      <div className="w-full mx-auto">
        <ul className="flex space-x-6">
          <li className="flex flex-col items-center space-y-1 ">
            <div className="relative grid h-[14rem]  w-[9rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>
              <div className="relative p-2 px-6 h-full">
                <div className="flex justify-center items-center h-full font-sans text-sm tracking-normal text-title antialiased">
                  <PlusCircle className="w-7 h-7  cursor-pointer hover:brightness-75" />
                </div>
              </div>
            </div>
          </li>
          <li className="flex flex-col items-center space-y-1 ">
            <div className="relative grid h-[14rem] w-full max-w-[10rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>
              <div className="relative p-2 px-6">
                <h2 className="mb-6 block font-sans text-sm tracking-normal text-title antialiased">
                  How we design and code open-source projects?
                </h2>

                <AlphabetAvatar size={50} />
              </div>
            </div>
          </li>
          <li className="flex flex-col items-center space-y-1 ">
            <div className="relative grid h-[14rem] w-full max-w-[10rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>
              <div className="relative p-2 px-6">
                <h2 className="mb-6 block font-sans text-sm tracking-normal text-title  antialiased">
                  How we design and code open-source projects?
                </h2>

                <AlphabetAvatar size={50} />
              </div>
            </div>
          </li>
          <li className="flex flex-col items-center space-y-1 ">
            <div className="relative grid h-[14rem] w-full max-w-[10rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>
              <div className="relative p-2 px-6">
                <h2 className="mb-6 block font-sans text-sm tracking-normal text-title antialiased">
                  How we design and code open-source projects?
                </h2>

                <AlphabetAvatar size={50} />
              </div>
            </div>
          </li>
          <li className="flex flex-col items-center space-y-1 ">
            <div className="relative grid h-[14rem] w-full max-w-[10rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
              <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>
              <div className="relative p-2 px-6">
                <h2 className="mb-6 block font-sans text-sm tracking-normal text-white antialiased">
                  How we design and code open-source projects?
                </h2>

                <AlphabetAvatar size={50} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
