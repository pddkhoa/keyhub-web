import { Button } from "../ui/button";

export const CardUser = () => {
  return (
    <article className="overflow-hidden relative h-full flex flex-col p-0.5  rounded-2xl  bg-gradient-to-r from-blue-500 via-violet-500 to-purple-900 shadow-2">
      <div className="h-24 rounded-2xl bg-card">
        <img
          className="object-cover w-full h-full rounded-2xl"
          src="https://daily-now-res.cloudinary.com/image/upload/s--euPjOC8Q--/f_auto,q_auto/v1696850310/public/project_board-_cover"
          alt="Banner image for source"
        />
      </div>
      <div className="flex flex-col flex-1 p-4 -mt-7 bg-card rounded-2xl ">
        <div className="flex justify-between rounded-2xl items-end mb-3">
          <a href="https://app.daily.dev/squads/projectboard">
            <img
              className="-mt-14 w-24 h-24 rounded-full z-10"
              src="https://res.cloudinary.com/daily-now/image/upload/s--cyIBVVeB--/f_auto,q_auto/v1696423241/squads/34edc2fd-c771-4d30-a118-221dd49e12bc"
              alt="Project board source"
            />
          </a>
          <button
            type="button"
            className="flex flex-row-reverse items-center p-1 pl-3 hover:bg-theme-hover active:bg-theme-active rounded-xl border border-theme-divider-secondary"
            aria-label="Members list"
          >
            <span
              className="mr-1 ml-2 min-w-[1rem] text-title-foreground"
              aria-label="squad-members-count"
            >
              165
            </span>
            <div className="object-cover w-7 h-7 rounded-xl -ml-2 relative overflow-hidden">
              <img
                className="absolute block inset-0 w-full h-full m-auto object-cover lazyloaded"
                data-src="https://daily-now-res.cloudinary.com/image/upload/v1682559224/avatars/avatar_WnYeQeO3ktOv7xv3XG2Ko.jpg"
                alt="huydang's profile"
                src="https://daily-now-res.cloudinary.com/image/upload/v1682559224/avatars/avatar_WnYeQeO3ktOv7xv3XG2Ko.jpg"
              />
            </div>
            <div className="object-cover w-7 h-7 rounded-xl -ml-2 relative overflow-hidden">
              <img
                className="absolute block inset-0 w-full h-full m-auto object-cover lazyloaded"
                data-src="https://daily-now-res.cloudinary.com/image/upload/v1682559224/avatars/avatar_WnYeQeO3ktOv7xv3XG2Ko.jpg"
                alt="huydang's profile"
                src="https://daily-now-res.cloudinary.com/image/upload/v1682559224/avatars/avatar_WnYeQeO3ktOv7xv3XG2Ko.jpg"
              />
            </div>
            <div className="object-cover w-7 h-7 rounded-xl -ml-2 relative overflow-hidden">
              <img
                className="absolute block inset-0 w-full h-full m-auto object-cover lazyloaded"
                data-src="https://daily-now-res.cloudinary.com/image/upload/v1682559224/avatars/avatar_WnYeQeO3ktOv7xv3XG2Ko.jpg"
                alt="huydang's profile"
                src="https://daily-now-res.cloudinary.com/image/upload/v1682559224/avatars/avatar_WnYeQeO3ktOv7xv3XG2Ko.jpg"
              />
            </div>
          </button>
        </div>
        <div className="flex flex-col flex-1 justify-between ">
          <div className="flex-auto mb-5">
            <a href="https://app.daily.dev/squads/projectboard">
              <div className="font-bold text-title">Project board</div>
              <div className="text-title-foreground">@projectboard</div>
            </a>
            <div className="mt-1 line-clamp-5 text-title-foreground multi-truncate">
              The daily.dev project board. Share your projects, ask for
              feedback, contributions or any kind of input you need.{" "}
            </div>
          </div>
          <div
            className="flex justify-between"
            aria-label="You are not allowed to join the Squad"
          >
            <Button>Join Squad</Button>
            <Button>Follow</Button>
          </div>
        </div>
      </div>
    </article>
  );
};
