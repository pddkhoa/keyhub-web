import { CardUser } from "@/components/Card/cardUser";
import { SlideUser } from "@/components/Swipers/slideUser";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { SlidersHorizontal } from "lucide-react";

export const Users = () => {
  return (
    <div className="container  min-h-0 mx-auto w-10/12 py-20">
      <div className="flex flex-col gap-5">
        <div className="">
          <div
            className="flex relative flex-col  rounded-xl items-center p-6 pb-10 mb-16 text-center bg-center bg-cover  bg-card"
            style={{
              backgroundImage:
                'url("https://daily-now-res.cloudinary.com/image/upload/s--7QJfELWV--/f_auto/v1686299194/Squads_Background_z0uuvc")',
            }}
          >
            <div className="flex relative z-1 flex-col items-center">
              <div className="p-1.5 rounded-full bg-hover brightness-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-12 h-11"
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

              <div className="flex justify-center items-center mb-3 mt-3 font-bold text-white typo-large-title">
                Connect Users
              </div>
              <div className="mb-4 font-normal text-title-foreground typo-title3 max-w-[40rem]">
                Unleashing the magic of developer communities with Squads. An
                opportunity to dive deep and go niche together with like-minded
                devs.
              </div>
            </div>
            <div className="absolute right-0 bottom-0 left-0 z-0 h-1/3 bg-gradient-to-t to-transparent from-slate-950" />
          </div>
        </div>
        <div className="mb-4 flex flex-col gap-5 h-fit ">
          <Label className="text-title text-xl font-bold">Suggestions</Label>
          <div className="w-full ">
            <SlideUser />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Label className="text-title text-xl font-bold">All User</Label>
          <div className="flex items-center gap-5">
            <div className="items-center h-10 rounded-xl border-2 flex-1 compact flex px-4 overflow-hidden bg-input   cursor-text ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-title-foreground mr-2 w-6 h-6"
                id="search"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path
                  fill="currentColor"
                  d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                ></path>
              </svg>
              <input
                placeholder="Search users"
                id="posts-search"
                className="flex-1 h-10 rounded-12 text-theme-label-tertiary hover:text-theme-label-primary min-w-0  bg-transparent typo-body caret-theme-label-link focus:outline-none"
              ></input>
            </div>
            <Button>
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-5 mt-8">
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
          </div>
        </div>
      </div>
    </div>
  );
};
