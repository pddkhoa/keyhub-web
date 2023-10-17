import AlphabetAvatar from "@/components/Avatar/avatar";
import { Button } from "@/components/ui/button";

export const SidebarHome = () => {
  return (
    <div className="fixed space-y-5 overflow-y-scroll top-28 bottom-0">
      <div className="bg-card rounded-xl p-4">
        <div className="bg-card w-full  flex flex-col justify-center items-center space-y-4">
          <div className="flex justify-between w-full text-title">
            <div>Title</div>
            <div>See all</div>
          </div>
          <div className="bg-background brightness-125 text-title-foreground w-[23rem] max-w-md flex flex-col rounded-xl shadow-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <AlphabetAvatar size={40} />
                <div className="text-md font-bold">Investors Meeting</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-2 flex justify-end gap-3">
              <Button>Add</Button>
              <Button>Delete</Button>
            </div>
          </div>
          <div className="bg-background brightness-125 text-title-foreground w-[23rem] max-w-md flex flex-col rounded-xl shadow-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <AlphabetAvatar size={40} />
                <div className="text-md font-bold">Investors Meeting</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-gray-500 hover:text-gray-300 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-2 flex justify-end gap-3">
              <Button>Add</Button>
              <Button>Delete</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-card rounded-xl p-4">
        <div className="bg-card w-full h-full flex flex-col justify-center items-center space-y-4">
          <div className="flex justify-between w-full text-title">
            <div>Contact</div>
            <div>See all</div>
          </div>
          <div className="w-full h-full overflow-y-scroll">
            <ul className="w-full divide-y divide-border h-full overflow-y-scroll">
              <li className="py-3 ">
                <div className="flex items-center space-x-4 text-title-foreground">
                  <div className="flex-shrink-0">
                    <AlphabetAvatar size={40} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-title-foreground truncate ">
                      Neil Sims
                    </p>
                    <p className="text-sm truncate text-title-foreground">
                      email@flowbite.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold ">
                    Message
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center space-x-4 text-title-foreground">
                  <div className="flex-shrink-0">
                    <AlphabetAvatar size={40} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-title-foreground truncate ">
                      Neil Sims
                    </p>
                    <p className="text-sm truncate text-title-foreground">
                      email@flowbite.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold ">
                    Message
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center space-x-4 text-title-foreground">
                  <div className="flex-shrink-0">
                    <AlphabetAvatar size={40} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-title-foreground truncate ">
                      Neil Sims
                    </p>
                    <p className="text-sm truncate text-title-foreground">
                      email@flowbite.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold ">
                    Message
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center space-x-4 text-title-foreground">
                  <div className="flex-shrink-0">
                    <AlphabetAvatar size={40} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-title-foreground truncate ">
                      Neil Sims
                    </p>
                    <p className="text-sm truncate text-title-foreground">
                      email@flowbite.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold ">
                    Message
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center space-x-4 text-title-foreground">
                  <div className="flex-shrink-0">
                    <AlphabetAvatar size={40} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-title-foreground truncate ">
                      Neil Sims
                    </p>
                    <p className="text-sm truncate text-title-foreground">
                      email@flowbite.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold ">
                    Message
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center space-x-4 text-title-foreground">
                  <div className="flex-shrink-0">
                    <AlphabetAvatar size={40} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-title-foreground truncate ">
                      Neil Sims
                    </p>
                    <p className="text-sm truncate text-title-foreground">
                      email@flowbite.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold ">
                    Message
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
