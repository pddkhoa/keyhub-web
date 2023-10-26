import { UserAvatar } from "@/components/Avatar/avatar";
import { Comments } from "@/components/Comment/comment";
import { Button } from "@/components/ui/button";
import BlogPost from "@/types/blog";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Link } from "react-router-dom";

type PreviewProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  data: BlogPost;
};

export const Preview: React.FC<PreviewProps> = ({ setFlag, data }) => {
  const [openComment, setOpenComment] = useState(false);
  return (
    <div className="w-5/6 h-full 2xl:w-xl sm:x-0  rounded-xl shadow bg-card brightness-125 ">
      <div className="h-full flex flex-col">
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
              <div className="mt-2 flex gap-2">
                <UserAvatar size={65} data={data.users.avatar} />
                <div className="flex flex-col mt-2">
                  <div className="text-xl text-title-foreground font-bold">
                    {data.users.name}
                  </div>
                  <div className="text-md text-blue-700">
                    @{data.users.second_name}
                  </div>
                </div>
              </div>
              <div className="text-title text-2xl font-bold">{data.title}</div>
              <div className="border-l-4 border-border p-1 ">
                <p className="ml-2 text-title-foreground">{data.description}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {data.tags && data.tags.length > 0
                  ? data.tags.map((item) => (
                      <span
                        key={item.id}
                        className="p-1.5 bg-input text-title-foreground text-sm rounded-lg font-bold hover:brightness-125 cursor-pointer "
                      >
                        #{item.name}
                      </span>
                    ))
                  : null}
              </div>
              <div className="h-80 w-3/4 mx-auto">
                <img
                  className="w-full h-full object-cover rounded-xl hover:brightness-125"
                  src={data.avatar}
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
            <div className="border-t-2 p-2">
              {openComment ? (
                <div className="relative mx-4 mt-4 flex flex-col bg-card rounded-xl space-y-5">
                  <Comments idBlog={data.id} />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setOpenComment(!openComment);
                  }}
                  className="flex items-center w-full rounded-xl typo-callout border border-border my-6 p-3 hover:bg-hover cursor-pointer"
                >
                  <img
                    src="https://res.cloudinary.com/daily-now/image/upload/s--sYrpGLn---/f_auto,q_auto/v1694801471/avatars/avatar_mDenuln7M9yJMqBFVVMNi"
                    alt="pddkhoavn2k2's profile"
                    className="object-cover w-10 h-10 rounded-lg"
                    loading="lazy"
                  />
                  <span className="ml-4 text-title-foreground">
                    Share your thoughts
                  </span>
                  <Button variant={"gradient"} className="ml-auto">
                    Post
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className=" col-span-2">
            <div className="flex flex-col w-full p-1 mt-4 gap-5 justify-center items-center self-center">
              <Link to={`/blog/${data.id}`}>
                <Button variant={"gradient"}>Read Post</Button>
              </Link>
              <div className="h-fit w-full border rounded-xl ">
                <div className="flex relative flex-row p-3">
                  <a className="flex items-center no-underline">
                    <div
                      aria-label="Community Picks"
                      className="rounded-full cursor-pointer w-12 h-12 relative overflow-hidden"
                      style={{
                        background: "var(--theme-background-secondary)",
                      }}
                    >
                      <img
                        className="absolute block inset-0 w-full h-full m-auto object-cover"
                        alt="Community Picks"
                        src="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1655817725/logos/community"
                      />
                    </div>
                  </a>
                  <div className="flex flex-col ml-2">
                    <a className="font-bold text-lg  text-title-foreground flex items-center no-underline">
                      Community Picks
                    </a>
                    <a className="text-md text-blue-600">@community</a>
                  </div>
                </div>
                <div className="flex relative flex-row p-3">
                  <a className="flex items-center no-underline">
                    <div
                      aria-label="Community Picks"
                      className="rounded-full cursor-pointer w-12 h-12 relative overflow-hidden"
                      style={{
                        background: "var(--theme-background-secondary)",
                      }}
                    >
                      <img
                        className="absolute block inset-0 w-full h-full m-auto object-cover"
                        alt="Community Picks"
                        src="https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1655817725/logos/community"
                      />
                    </div>
                  </a>
                  <div className="flex flex-col ml-2">
                    <a className="font-bold text-lg  text-title-foreground flex items-center no-underline">
                      Community Picks
                    </a>
                    <a className="text-md text-blue-600">@community</a>
                  </div>
                </div>
              </div>
              <div className="h-fit w-full border rounded-xl p-4">
                <Label className="text-title-foreground text-lg">
                  Categories recommend{" "}
                </Label>
                <div className="grid grid-cols-3 gap-2 gap-y-4 mt-4">
                  <div className="flex flex-col items-center w-16">
                    <button className="iconOnly medium btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative">
                      <div className="object-cover w-10 h-10 rounded-full relative overflow-hidden">
                        <img
                          className="absolute block inset-0 w-full h-full m-auto object-cover ls-is-cached lazyloaded"
                          data-src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                          alt="projectboard's profile"
                          src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                        />
                      </div>
                    </button>
                    <span className="mt-1.5 max-w-[4rem] text-title-foreground overflow-hidden overflow-ellipsis text-center typo-caption1 text-theme-label-tertiary cursor-pointer">
                      @projectboard
                    </span>
                  </div>
                  <div className="flex flex-col items-center w-16">
                    <button className="iconOnly medium btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative">
                      <div className="object-cover w-10 h-10 rounded-full relative overflow-hidden">
                        <img
                          className="absolute block inset-0 w-full h-full m-auto object-cover ls-is-cached lazyloaded"
                          data-src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                          alt="projectboard's profile"
                          src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                        />
                      </div>
                    </button>
                    <span className="mt-1.5 max-w-[4rem] text-title-foreground overflow-hidden overflow-ellipsis text-center typo-caption1 text-theme-label-tertiary cursor-pointer">
                      @projectboard
                    </span>
                  </div>
                  <div className="flex flex-col items-center w-16">
                    <button className="iconOnly medium btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative">
                      <div className="object-cover w-10 h-10 rounded-full relative overflow-hidden">
                        <img
                          className="absolute block inset-0 w-full h-full m-auto object-cover ls-is-cached lazyloaded"
                          data-src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                          alt="projectboard's profile"
                          src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                        />
                      </div>
                    </button>
                    <span className="mt-1.5 max-w-[4rem] text-title-foreground overflow-hidden overflow-ellipsis text-center typo-caption1 text-theme-label-tertiary cursor-pointer">
                      @projectboard
                    </span>
                  </div>
                  <div className="flex flex-col items-center w-16">
                    <button className="iconOnly medium btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative">
                      <div className="object-cover w-10 h-10 rounded-full relative overflow-hidden">
                        <img
                          className="absolute block inset-0 w-full h-full m-auto object-cover ls-is-cached lazyloaded"
                          data-src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                          alt="projectboard's profile"
                          src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                        />
                      </div>
                    </button>
                    <span className="mt-1.5 max-w-[4rem] text-title-foreground overflow-hidden overflow-ellipsis text-center typo-caption1 text-theme-label-tertiary cursor-pointer">
                      @projectboard
                    </span>
                  </div>
                  <div className="flex flex-col items-center w-16">
                    <button className="iconOnly medium btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative">
                      <div className="object-cover w-10 h-10 rounded-full relative overflow-hidden">
                        <img
                          className="absolute block inset-0 w-full h-full m-auto object-cover ls-is-cached lazyloaded"
                          data-src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                          alt="projectboard's profile"
                          src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                        />
                      </div>
                    </button>
                    <span className="mt-1.5 max-w-[4rem] text-title-foreground overflow-hidden overflow-ellipsis text-center typo-caption1 text-theme-label-tertiary cursor-pointer">
                      @projectboard
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-fit w-full border rounded-xl p-4">
                <Label className="text-title-foreground text-lg">
                  Users recommend{" "}
                </Label>
                <div className="grid grid-cols-3 gap-2 gap-y-4 mt-4">
                  <div className="flex flex-col items-center w-16">
                    <button className="iconOnly medium btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative">
                      <div className="object-cover w-10 h-10 rounded-full relative overflow-hidden">
                        <img
                          className="absolute block inset-0 w-full h-full m-auto object-cover ls-is-cached lazyloaded"
                          data-src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                          alt="projectboard's profile"
                          src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                        />
                      </div>
                    </button>
                    <span className="mt-1.5 max-w-[4rem] text-title-foreground overflow-hidden overflow-ellipsis text-center typo-caption1 text-theme-label-tertiary cursor-pointer">
                      @projectboard
                    </span>
                  </div>
                  <div className="flex flex-col items-center w-16">
                    <button className="iconOnly medium btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative">
                      <div className="object-cover w-10 h-10 rounded-full relative overflow-hidden">
                        <img
                          className="absolute block inset-0 w-full h-full m-auto object-cover ls-is-cached lazyloaded"
                          data-src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                          alt="projectboard's profile"
                          src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                        />
                      </div>
                    </button>
                    <span className="mt-1.5 max-w-[4rem] text-title-foreground overflow-hidden overflow-ellipsis text-center typo-caption1 text-theme-label-tertiary cursor-pointer">
                      @projectboard
                    </span>
                  </div>
                  <div className="flex flex-col items-center w-16">
                    <button className="iconOnly medium btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative">
                      <div className="object-cover w-10 h-10 rounded-full relative overflow-hidden">
                        <img
                          className="absolute block inset-0 w-full h-full m-auto object-cover ls-is-cached lazyloaded"
                          data-src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                          alt="projectboard's profile"
                          src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                        />
                      </div>
                    </button>
                    <span className="mt-1.5 max-w-[4rem] text-title-foreground overflow-hidden overflow-ellipsis text-center typo-caption1 text-theme-label-tertiary cursor-pointer">
                      @projectboard
                    </span>
                  </div>
                  <div className="flex flex-col items-center w-16">
                    <button className="iconOnly medium btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative">
                      <div className="object-cover w-10 h-10 rounded-full relative overflow-hidden">
                        <img
                          className="absolute block inset-0 w-full h-full m-auto object-cover ls-is-cached lazyloaded"
                          data-src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                          alt="projectboard's profile"
                          src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                        />
                      </div>
                    </button>
                    <span className="mt-1.5 max-w-[4rem] text-title-foreground overflow-hidden overflow-ellipsis text-center typo-caption1 text-theme-label-tertiary cursor-pointer">
                      @projectboard
                    </span>
                  </div>
                  <div className="flex flex-col items-center w-16">
                    <button className="iconOnly medium btn flex-row items-center border typo-callout font-bold no-underline shadow-none cursor-pointer select-none focus-outline justify-center flex relative">
                      <div className="object-cover w-10 h-10 rounded-full relative overflow-hidden">
                        <img
                          className="absolute block inset-0 w-full h-full m-auto object-cover ls-is-cached lazyloaded"
                          data-src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                          alt="projectboard's profile"
                          src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
                        />
                      </div>
                    </button>
                    <span className="mt-1.5 max-w-[4rem] text-title-foreground overflow-hidden overflow-ellipsis text-center typo-caption1 text-theme-label-tertiary cursor-pointer">
                      @projectboard
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Preview;
