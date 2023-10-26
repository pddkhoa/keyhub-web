import BlogPost from "@/types/blog";
import AlphabetAvatar, { UserAvatar } from "../Avatar/avatar";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { IconBookmark, IconHide, IconUnBookmark } from "../ui/icon";
import convertDate from "../FormatDate/formatDate";
import useBoolean from "@/hooks/useBoolean";
import Modal from "../Modal/modal";
import Preview from "../Modal/Blog/preview";
import { createAxios } from "@/api/createInstance";
import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import { useSelector, useDispatch } from "react-redux";
import { showToast } from "@/hooks/useToast";

interface CardDetailProps {
  post: BlogPost;
  ref?: any;
}

const CardDetail: React.FC<CardDetailProps> = React.forwardRef(
  ({ post }, ref) => {
    const user = useSelector((state: RootState) => state.auth.login);
    const dispatch = useDispatch();
    const axiosJWT = createAxios(user, dispatch, loginSuccess);
    const accessToken = user?.data.token;
    const [isLike, setIsLike] = useState(post.isLike);
    const [valueLike, setValueLike] = useState(post.likes);

    const handleLike = async (id: number) => {
      if (!isLike) {
        // Nếu chưa follow, thực hiện follow
        const { body } = await ClientServices.likeBlog(
          id,
          accessToken,
          axiosJWT
        );
        if (body?.success) {
          setIsLike(true);
          setValueLike(body.result.like);
        } else {
          setIsLike(false);

          console.log(body?.message);
        }
      } else {
        // Nếu chưa follow, thực hiện follow
        const { body } = await ClientServices.likeBlog(
          id,
          accessToken,
          axiosJWT
        );
        if (body?.success) {
          setIsLike(false);
          setValueLike(body.result.like);
        } else {
          console.log(body?.message);
        }
      }
    };
    const handleHide = async (id: number) => {
      // Nếu chưa follow, thực hiện follow
      const { body } = await ClientServices.hideBlog(id, accessToken, axiosJWT);
      if (body) {
        if (body?.success) {
          showToast(body.message, "success");
        } else {
          showToast(body.message, "error");
        }
      }
    };

    const formatDate = () => {
      const inputDate = post?.create_date;

      const formattedDate = inputDate && convertDate(inputDate);

      return formattedDate;
    };

    const [displayModal, setDisplayModal] = useState("");
    const [displayCreate, setDisplayCreate] = useBoolean(false);

    const body = (
      <>
        <div className="flex flex-row px-2 py-3 mx-3">
          <div className=" h-auto rounded-full">
            <UserAvatar size={50} data={post.users.avatar} />
          </div>
          <div className="flex flex-col w-full mb-2 ml-4">
            <div className="text-title-foreground text-md font-semibold">
              {post.users.name}
            </div>
            <div className="flex w-full mt-1">
              <div className="text-blue-700 font-base text-sm mr-1 cursor-pointer">
                @{post.users.second_name}
              </div>
              <div className="text-gray-400 font-thin text-xs">
                {formatDate()}
              </div>
            </div>
          </div>
          <div className="flex w-full h-fit justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="hover:brightness-150 opacity-70 rounded-xl hover:bg-input p-2 h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    id="menumeatballs"
                  >
                    <path
                      fill="#ffff"
                      d="M12 10C13.1046 10 14 10.8954 14 12 14 13.1046 13.1046 14 12 14 10.8954 14 10 13.1046 10 12 10 10.8954 10.8954 10 12 10zM4 10C5.10457 10 6 10.8954 6 12 6 13.1046 5.10457 14 4 14 2.89543 14 2 13.1046 2 12 2 10.8954 2.89543 10 4 10zM20 10C21.1046 10 22 10.8954 22 12 22 13.1046 21.1046 14 20 14 18.8954 14 18 13.1046 18 12 18 10.8954 18.8954 10 20 10z"
                      className="color000000 svgShape"
                    ></path>
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-2">
                <DropdownMenuLabel>Option</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => handleHide(post.id)}
                >
                  <IconHide className="w-6 h-6 mr-2" />
                  <span>Hide</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  {post.isSave ? (
                    <>
                      <IconUnBookmark className="mr-2" />
                      <span>Unbookmark</span>
                    </>
                  ) : (
                    <>
                      <IconBookmark className="w-6 h-6 mr-2" />
                      <span>Bookmark</span>
                    </>
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="border-b border-border" />
        <div className=" h-[450px]  mb-7 mt-6 mx-3 px-2">
          <img
            className="rounded-lg h-full object-cover w-full"
            src={post.avatar}
          />
        </div>
        <div className="text-title text-xl font-semibold  mb-2 mx-3 px-2">
          {post.title}
        </div>
        <div className="text-gray-500 text-md mb-6 mx-3 px-2">
          {post.description}
        </div>
        <div className="flex justify-start mb-4 border-t border-border">
          <div
            onClick={() => handleLike(post.id)}
            className="flex items-center gap-2 w-fit mt-1 pt-2 pl-5"
          >
            <span className="group relative transition ease-out duration-300  bg-input h-9 px-2 py-2 text-center rounded-full hover:brightness-150 cursor-pointer hover:scale-110">
              <svg
                className={`h-5 w-5 ${
                  !isLike ? "text-title-foreground" : "text-red-500"
                }  `}
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                />
              </svg>
              <span
                className="absolute -top-10 left-[50%] -translate-x-[50%] 
z-20 origin-left scale-0 px-3 rounded-lg text-title-foreground
bg-card py-2 text-sm
shadow-md transition-all duration-300 ease-in-out 
group-hover:scale-100"
              >
                Like<span></span>
              </span>
            </span>
            <span className="text-lg text-title-foreground ">{valueLike}</span>
          </div>
          <div className="flex items-center gap-2 w-fit mt-1 pt-2 pl-5">
            <span className="group relative transition ease-out duration-300  bg-input h-9 px-2 py-2 text-center rounded-full hover:brightness-150 cursor-pointer hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                className="w-6 h-5 text-title-foreground"
                viewBox="0 0 24 24"
                id="comment"
              >
                <path
                  fill="currentColor"
                  d="M3.0703,17.9941v1.3257c0,1.1392,0.6533,2.1274,1.665,2.5171c0.2871,0.1108,0.582,0.1646,0.8721,0.1646
c0.666,0,1.3086-0.2842,1.7939-0.8198l1.4307-1.5781c2.2764,0.1025,4.5771-0.0059,6.8545-0.3228
c1.5371-0.2114,2.7617-1.4438,3.0459-3.0562c0.1099-0.5847,0.1713-1.1757,0.2094-1.7531c0.0847-0.0117,0.1729-0.0192,0.2564-0.0311
c1.3076-0.1826,2.3516-1.2554,2.5957-2.6641C21.9307,11.0137,22,10.2041,22,9.3701c0-0.8408-0.0693-1.6538-0.2061-2.4155
c-0.168-0.9443-0.6973-1.7583-1.4209-2.2109c-0.334-0.228-0.7471-0.3887-1.1709-0.4536c-2.6729-0.3848-5.5781-0.3862-8.2744,0.0015
c-0.4131,0.0635-0.8105,0.2202-1.1123,0.4272c-0.7568,0.4663-1.2891,1.2808-1.4551,2.21C8.3509,6.9746,8.3483,7.0234,8.3397,7.0698
C7.3392,7.1252,6.326,7.2106,5.2998,7.3511c-0.4922,0.0752-0.96,0.2559-1.3047,0.4917c-0.8994,0.54-1.5303,1.48-1.7275,2.5698
C2.0898,11.3433,2,12.3213,2,13.3198s0.0898,1.9771,0.2627,2.8789C2.3701,16.8647,2.6523,17.4878,3.0703,17.9941z M10.9033,6.396
c0.0928-0.0635,0.2129-0.1099,0.3193-0.1265c2.4863-0.3574,5.2188-0.356,7.6855-0.0015c0.1221,0.019,0.248,0.0664,0.3701,0.1489
c0.2744,0.1719,0.4785,0.5039,0.5469,0.8892C19.9414,7.9531,20,8.6475,20,9.3701c0,0.7158-0.0586,1.4067-0.1758,2.0591
c-0.0889,0.5127-0.4395,0.9312-0.8477,1.0205c-0.007-0.1337-0.0236-0.2635-0.0339-0.396c-0.0097-0.1236-0.019-0.2462-0.0315-0.3685
c-0.0438-0.4293-0.0988-0.8533-0.1768-1.2633c-0.1992-1.0991-0.8301-2.0391-1.6826-2.5488
c-0.3916-0.2661-0.8594-0.4468-1.3652-0.5239c-0.7127-0.0981-1.436-0.1658-2.1642-0.2205c-0.2556-0.02-0.51-0.0382-0.7673-0.0531
c-0.6505-0.0359-1.3059-0.0598-1.9694-0.0659C10.6899,7.0089,10.5958,7,10.5,7c-0.0303,0-0.0596,0-0.0898,0
C10.5107,6.7451,10.6768,6.5361,10.9033,6.396z M4.2344,10.7783c0.0977-0.54,0.3779-0.9736,0.8369-1.251
c0.1455-0.0981,0.333-0.1689,0.5146-0.1968c1.2285-0.1685,2.459-0.2729,3.6475-0.311c0.5078-0.0122,1.0161-0.0156,1.5231-0.011
c0.6246,0.0043,1.2455,0.0269,1.862,0.0621c0.2514,0.0137,0.5005,0.0326,0.7499,0.0513c0.6854,0.0535,1.3677,0.1153,2.031,0.2066
c0.1963,0.0298,0.3838,0.1006,0.5762,0.229c0.4121,0.2471,0.6924,0.6807,0.792,1.23C16.9219,11.5947,17,12.4468,17,13.3198
c0,0.0496,0.001,0.0943-0.0037,0.1432c-0.0015,0.0307-0.0023,0.0564-0.0061,0.1053c-0.0088,0.7788-0.084,1.5483-0.2246,2.2979
c-0.1328,0.7524-0.6895,1.3418-1.3535,1.4336c-2.3115,0.3218-4.6484,0.418-6.9434,0.2822
c-0.2969-0.0181-0.5957,0.1021-0.7998,0.3262l-1.75,1.9307c-0.1387,0.1523-0.2939,0.1987-0.4648,0.1313
c-0.1855-0.0713-0.3838-0.2798-0.3838-0.6504v-1.7197c0-0.2778-0.1152-0.5435-0.3193-0.7324
c-0.2695-0.2505-0.4521-0.6006-0.5186-1.0151C4.0781,15.0454,4,14.1929,4,13.3198S4.0781,11.5947,4.2344,10.7783z"
                ></path>
              </svg>
              <span
                className="absolute -top-10 left-[50%] -translate-x-[50%] 
z-20 origin-left scale-0 px-3 rounded-lg
bg-card py-2 text-sm text-title-foreground
shadow-md transition-all duration-300 ease-in-out 
group-hover:scale-100"
              >
                Comment<span></span>
              </span>
            </span>
            <span className="text-lg text-title-foreground ">100+</span>
          </div>
          <div className="flex justify-end w-full mt-1 pt-2 pr-5">
            <span
              onClick={() => {
                setDisplayModal("PREVIEW"), setDisplayCreate.on();
              }}
              title="Preview"
              className="transition group relative ease-out duration-300 bg-input h-9 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer hover:brightness-150 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 text-title-foreground"
                id="next"
              >
                <path
                  fill="currentColor"
                  d="M29.14,11.34l-9-9A1,1,0,0,0,18.39,3V6.52H12.57a10,10,0,0,0-10,10v2.31a1,1,0,0,0,2,0V16.52a8,8,0,0,1,8-8h6.83a1,1,0,0,0,1-1V5.41L27,12l-6.63,6.63V16.57a1,1,0,0,0-1-1H14.77a7,7,0,0,0-5.91,3.24l-4.3,6.76V24.13a1,1,0,0,0-2,0V29a1,1,0,0,0,.72,1,1,1,0,0,0,.28,0,1,1,0,0,0,.84-.46l6.14-9.66a5,5,0,0,1,4.22-2.32h3.62v3.52a1,1,0,0,0,1.71.71l9-9a1,1,0,0,0,0-1.41Z"
                ></path>
              </svg>
              <span
                className="absolute -top-10 left-[50%] -translate-x-[50%] 
z-20 origin-left scale-0 px-3 rounded-lg
bg-card py-2 text-sm
shadow-md transition-all duration-300 ease-in-out text-title-foreground
group-hover:scale-100"
              >
                Preview<span></span>
              </span>
            </span>
          </div>
        </div>
        <div className="flex w-full border-t border-border"></div>
        <div className="relative flex gap-3 items-center w-full max-w-xl p-4 overflow-hidden text-gray-600 ">
          <span className="flex justify-center">
            <AlphabetAvatar size={45} />
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-6">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500"
            >
              <svg
                className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </span>
          <input
            type="search"
            className="w-full ml-4 py-2 pl-4 pr-10 text-sm bg-input border border-transparent appearance-none rounded-tg placeholder-gray-400  focus:outline-none focus:border-blue-500 hover:brightness-150"
            style={{ borderRadius: 25 }}
            placeholder="Post a comment..."
            autoComplete="off"
            disabled
          />
        </div>
        <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
          {displayModal === "PREVIEW" ? (
            <Preview setFlag={setDisplayCreate} data={post} />
          ) : null}
        </Modal>
      </>
    );

    const content = ref ? (
      <article ref={ref} className="bg-card shadow rounded-lg">
        {body}
      </article>
    ) : (
      <article className="bg-card shadow rounded-lg">{body}</article>
    );

    return content;
  }
);

export default CardDetail;
