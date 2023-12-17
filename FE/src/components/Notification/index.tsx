import { NotificationType } from "@/types/notifications";
import { UserAvatar } from "../Avatar/avatar";
import { IconComment } from "../ui/icon";
import React from "react";
import { useNavigate } from "react-router-dom";
import convertDate from "../FormatDate/formatDate";
import ClientServices from "@/services/client/client";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

interface NotificationProps {
    noti: NotificationType;
    ref?: any;
    setReadNoti: React.Dispatch<React.SetStateAction<boolean>>;
}

const Notification: React.FC<NotificationProps> = React.forwardRef(
    ({ noti, setReadNoti }, ref) => {
        const navigate = useNavigate();
        const { accessToken, axiosJWT } = useAuth();
        const navigateFollow = async (id: string) => {
            try {
                setReadNoti(true);
                const { body } = await ClientServices.readNotification(
                    noti.id,
                    accessToken,
                    axiosJWT
                );
                if (body?.success) {
                    navigate(`/user/${id}`);
                    setReadNoti(false);
                } else {
                    toast.error(body?.message || "Error");
                    setReadNoti(false);
                }
            } catch (error) {
                console.log(error);
                setReadNoti(false);
            }
        };

        const navigateLikeAndComment = async (id: string) => {
            try {
                setReadNoti(true);
                const { body } = await ClientServices.readNotification(
                    noti.id,
                    accessToken,
                    axiosJWT
                );
                if (body?.success) {
                    navigate(`/blog/${id}`);
                    setReadNoti(false);
                } else {
                    toast.error(body?.message || "Error");
                    setReadNoti(false);
                }
            } catch (error) {
                console.log(error);
                setReadNoti(false);
            }
        };

        const formatDate = () => {
            const inputDate = noti?.create_date;
            const formattedDate = inputDate && convertDate(inputDate);
            return formattedDate;
        };
        const body = (
            <>
                <div className="relative brightness-75 ">
                    <UserAvatar data={noti?.sender?.avatar} size={55} />
                    {!noti.isRead && (
                        <div className="absolute  -left-5  right-auto top-1 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-50 scale-y-50 rounded-full bg-pink-700 p-2.5 text-xs"></div>
                    )}
                    <div className="absolute  left-auto -right-5  -bottom-2  z-10 inline-block  scale-x-50 scale-y-50 rounded-full p-2.5 text-xs bg-gray-800 ">
                        {noti?.type === "like" && (
                            <svg
                                className={`h-8 w-8 
                              text-red-500
                          `}
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
                        )}
                        {noti?.type === "comment" && (
                            <IconComment className="h-8 w-8" />
                        )}
                        {noti?.type === "follow" && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                className="w-8 h-8"
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
                                        <stop
                                            offset="0"
                                            stopColor="#96369f"
                                        ></stop>
                                        <stop
                                            offset="1"
                                            stopColor="#01b3ed"
                                        ></stop>
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
                        )}
                    </div>
                </div>
                <div className="flex flex-col ">
                    <span className="text-white text-md flex justify-between items-center">
                        <p className="truncate">{noti?.sender?.name}</p>
                        <p className="text-xs text-gray-500">{formatDate()}</p>
                    </span>
                    <p
                        className={`  text-sm  w-52 line-clamp-2  break-words ${
                            noti.isRead ? "text-gray-500" : "text-white"
                        }`}
                    >
                        {noti?.type === "like" &&
                            "liked your post " + noti?.targetBlog?.title}
                        {noti?.type === "comment" &&
                            "comment your post " + noti?.targetBlog?.title}
                        {noti?.type === "follow" && "followed you"}
                    </p>
                </div>
            </>
        );

        const content = ref ? (
            <article
                onClick={() => {
                    noti?.type === "follow"
                        ? navigateFollow(noti?.sender?.id.toString())
                        : navigateLikeAndComment(
                              noti?.targetBlog?.id.toString()
                          );
                }}
                ref={ref}
                className="flex gap-5 hover:bg-gray-700 w-full p-1.5 rounded-md cursor-pointer"
            >
                {body}
            </article>
        ) : (
            <article
                onClick={() => {
                    noti?.type === "follow"
                        ? navigateFollow(noti?.sender?.id.toString())
                        : navigateLikeAndComment(
                              noti?.targetBlog?.id.toString()
                          );
                }}
                className="flex gap-5 hover:bg-gray-700 w-full p-1.5 rounded-md cursor-pointer"
            >
                {body}
            </article>
        );

        return content;
    }
);
export default Notification;
