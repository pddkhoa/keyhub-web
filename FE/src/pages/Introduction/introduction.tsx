import { Button } from "@/components/ui/button";
import { MousePointer2 } from "lucide-react";
import { SliderBanner, SliderCard, SliderLogo } from "./swiper";
import "./../Introduction/spotlight";
import { Footer } from "@/components/Footer/footer";

const Introduction = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-[rgb(7,16,45)] bottom-0 leading-5 h-full overflow-hidden">
      <div className="relative h-full py-10  sm:flex sm:flex-row  justify-center bg-transparent ">
        <div className="w-full h-full  flex flex-col gap-5">
          <div className="flex bg-transparent justify-between p-4">
            <div className="mx-20 my-1">
              <span className="bg-gradient-to-r from-violet-500 to-pink-500 via-red-500 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                Rainbow Hover
              </span>

              {/* <img className="w-32 h-9 object-cover" src={logo} /> */}
            </div>
            <div className="flex justify-end gap-8 mx-20">
              <Button variant={"gradient"}>Sign in</Button>
              <Button variant={"gradient"}>Sign up</Button>
            </div>
          </div>
          <div className="relative h-96 mx-10 flex flex-col gap-10  bg-gradient-to-tr from-[rgb(7,16,45)] to-[rgb(26,27,37)]">
            <div className="relative w-fit  mx-auto flex justify-center mt-10">
              <div className="absolute  -inset-0.5  rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 blur opacity-75"></div>
              <div className="relative text-title-foreground text-4xl font-bold uppercase leading-none px-7 py-4 rounded-lg  bg-gradient-to-b from-gray-900 to-gray-900  ">
                The API Security Framework
              </div>
            </div>
            <div className="w-full mx-auto flex justify-center items-center">
              <span className="relative text-title-foreground text-xl font-bold w-1/2 break-words text-center">
                Our landing page template works on all devices, so you only have
                to set it up once, and get beautiful results forever.
              </span>
            </div>
            <div className="w-full flex justify-center items-center">
              <Button variant={"gradient"} className="px-8">
                Get Start
                <MousePointer2 className="ml-2 w-4 h-4 rotate-90" />
              </Button>
            </div>
            <div className="absolute right-0  bottom-0 left-0  z-0 h-full w-8 bg-gradient-to-t to-transparent  from-gray-900 via-gray-900 filter blur-2xl" />
          </div>
          <div className="relative  mx-10 h-fit   z-0  justify-center items-center">
            <SliderLogo />
          </div>
          <div className="relative h-fit bg-gradient-to-tr from-[rgb(7,16,45)] to-[rgb(58,60,84)] p-5 rounded-lg  mx-10">
            <SliderBanner />
          </div>
          <hr />
          <div className="relative h-fit ml-20 z-0  mt-10">
            <div className="flex flex-col gap-10">
              <div className="w-2/3  flex flex-col gap-3 mx-auto text-center">
                <span className="text-xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-100">
                  The security first platform
                </span>
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-100 ">
                  Spot issues faster
                </span>
                <span className="text-xl font-thin text-title-foreground">
                  All the lorem ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </span>
              </div>
              <div className="w-full flex gap-5">
                <SliderCard />
              </div>
            </div>
          </div>
          <div className="relative h-fit mx-10 z-0 bg-gradient-to-t from-[rgb(7,16,45)] via-gray-900 to-gray-800]">
            <div className="flex flex-col gap-5 p-8">
              <div className="w-2/3 flex flex-col gap-5 mx-auto text-center">
                <span className="text-xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-100">
                  The security first platform
                </span>
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-100 ">
                  Take control of your business
                </span>
                <span className="text-xl font-thin text-title-foreground">
                  All the lorem ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </span>
                <Button className="w-fit flex mx-auto" variant={"gradient"}>
                  Get Start
                </Button>
              </div>
            </div>
          </div>
          <div className="relative h-fit mx-20 z-0 mt-10">
            <CardHover />
          </div>
        </div>
      </div>
      <hr />
      <Footer />
      <div className="absolute  bottom-0 left-0   z-0 h-full w-28 bg-gradient-to-r to-transparent  from-slate-900 via-slate-900 filter " />
      <div className="absolute right-0 bottom-0   z-0 h-full w-28 bg-gradient-to-l to-transparent  from-slate-900 via-slate-900 filter " />
    </div>
  );
};

// import { Spotlight } from "./spotlight.ts"; // Adjust the path to your Spotlight.ts file

// Your code here to use the Spotlight class

const CardHover = () => {
  return (
    <div
      className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group "
      data-spotlight
    >
      <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
        <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <div
            className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
          </div>
          <div className="flex flex-col h-full items-center text-center">
            <div className="relative inline-flex">
              <div
                className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                aria-hidden="true"
              />
              <img
                className="inline-flex"
                src="./card-01.png"
                width={200}
                height={200}
                alt="Card 01"
              />
            </div>
            <div className="grow mb-5">
              <h2 className="text-xl text-slate-200 font-bold mb-1">
                Amazing Integration
              </h2>
              <p className="text-sm text-slate-500">
                Quickly apply filters to refine your issues lists and create
                custom views.
              </p>
            </div>
            <a
              className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
              href="#0"
            >
              <svg
                className="fill-slate-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={14}
              >
                <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
              </svg>
              <span>Connect</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
        <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <div
            className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
          </div>
          <div className="flex flex-col h-full items-center text-center">
            <div className="relative inline-flex">
              <div
                className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                aria-hidden="true"
              />
              <img
                className="inline-flex"
                src="./card-02.png"
                width={200}
                height={200}
                alt="Card 02"
              />
            </div>
            <div className="grow mb-5">
              <h2 className="text-xl text-slate-200 font-bold mb-1">
                Amazing Integration
              </h2>
              <p className="text-sm text-slate-500">
                Quickly apply filters to refine your issues lists and create
                custom views.
              </p>
            </div>
            <a
              className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
              href="#0"
            >
              <svg
                className="fill-slate-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={14}
              >
                <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
              </svg>
              <span>Connect</span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden">
        <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <div
            className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
          </div>
          <div className="flex flex-col h-full items-center text-center">
            <div className="relative inline-flex">
              <div
                className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
                aria-hidden="true"
              />
              <img
                className="inline-flex"
                src="./card-03.png"
                width={200}
                height={200}
                alt="Card 03"
              />
            </div>
            <div className="grow mb-5">
              <h2 className="text-xl text-slate-200 font-bold mb-1">
                Amazing Integration
              </h2>
              <p className="text-sm text-slate-500">
                Quickly apply filters to refine your issues lists and create
                custom views.
              </p>
            </div>
            <a
              className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
              href="#0"
            >
              <svg
                className="fill-slate-500 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={14}
              >
                <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
              </svg>
              <span>Connect</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
