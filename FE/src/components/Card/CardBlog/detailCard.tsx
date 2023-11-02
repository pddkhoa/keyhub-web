import AlphabetAvatar from "@/components/Avatar/avatar";
import useAuth from "@/hooks/useAuth";
import { showToast } from "@/hooks/useToast";
import ClientServices from "@/services/client/client";
import BlogPost from "@/types/blog";
import { useState } from "react";

interface DetailCardProps {
  data: BlogPost;
}

export const DetailCard: React.FC<DetailCardProps> = ({ data }) => {
  const { axiosJWT, accessToken } = useAuth();

  const [isLike, setIsLike] = useState(data.isLike);

  const handleLike = async (id: number) => {
    if (!isLike) {
      // Nếu chưa follow, thực hiện follow
      const { body } = await ClientServices.likeBlog(id, accessToken, axiosJWT);
      if (body?.success) {
        setIsLike(true);
        showToast(body?.message, "success");
      } else {
        showToast("Error", "error");
        console.log(body?.message);
      }
    } else {
      // Nếu chưa follow, thực hiện follow
      const { body } = await ClientServices.likeBlog(id, accessToken, axiosJWT);
      if (body?.success) {
        setIsLike(false);
        showToast(body?.message, "success");
      } else {
        console.log(body?.message);
      }
    }
  };

  return (
    <article className="mb-4 mx-2 break-inside p-6 rounded-xl bg-card flex flex-col bg-clip-border">
      <div className="flex pb-6 items-center justify-between">
        <div className="flex">
          <a className="inline-block mr-4" href="#">
            <AlphabetAvatar size={75} />
          </a>
          <div className="flex flex-col mt-2">
            <div className="flex items-center">
              <a
                className="inline-block text-lg text-title font-bold mr-2"
                href="#"
              >
                Esther Howard
              </a>
              <span>
                <svg
                  className="fill-blue-500 dark:fill-slate-50 w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
                </svg>
              </span>
            </div>
            <div className="text-slate-500 dark:text-slate-300">
              January 22, 2021
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-3xl text-title font-extrabold whitespace-normal line-clamp-2 truncate">
        {data.title}
      </h2>
      <div className="py-4">
        <a className="flex h-[400px] w-full" href="#">
          <img
            className="w-full h-full object-contain rounded-lg"
            src={data.avatar}
          />
        </a>
      </div>
      <p className="text-title-foreground">{data.description}</p>
      <div className="py-4">
        <div
          className="inline-flex items-center"
          onClick={() => handleLike(data.id)}
        >
          <span className="mr-2">
            <svg
              className="fill-rose-600 dark:fill-rose-400"
              style={{ width: 24, height: 24 }}
              viewBox="0 0 24 24"
            >
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
            </svg>
          </span>
          <span className="text-lg font-bold text-title-foreground">
            {data.likes}
          </span>
        </div>
      </div>
      <div className="relative">
        <input
          className="pt-2 pb-2 pl-3 w-full h-11 bg-input  rounded-lg placeholder:text-title-foreground  font-medium pr-20"
          type="text"
          placeholder="Write a comment"
        />
        <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
          <svg
            className="mr-2"
            style={{ width: 26, height: 26 }}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
            ></path>
          </svg>
          <svg
            className="fill-blue-500 dark:fill-slate-50"
            style={{ width: 24, height: 24 }}
            viewBox="0 0 24 24"
          >
            <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
        </span>
      </div>
    </article>
  );
};
