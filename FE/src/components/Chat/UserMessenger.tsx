// import useFetch from "@/hooks/useFetch";
// import { RootState } from "@/redux/store";
// import { REQUEST_TYPE } from "@/types";
// import { Chat } from "@/types/chat";
// import User from "@/types/user";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { UserAvatar } from "../Avatar/avatar";
// import React from "react";
// import jwtDecode from "jwt-decode";

// interface UserMessengerProps {
//     setChatId: React.Dispatch<React.SetStateAction<string | undefined>>;
//     setUserYou: React.Dispatch<React.SetStateAction<User | undefined>>;
// }

<<<<<<< HEAD
export const UserMessenger: React.FC<UserMessengerProps> = ({
    setChatId,
    setUserYou,
}) => {
    const { isLoading, sendRequest } = useFetch();
    const listChat = useSelector((state: RootState) => state.chat.getListChat);
    const dataUser = useSelector(
        (state: RootState) => state.auth.login.data.token
    );
    const decode = jwtDecode(dataUser) as any;
=======
// export const UserMessenger: React.FC<UserMessengerProps> = ({
//     setChatId,
//     setUserYou,
// }) => {
//     const { isLoading, sendRequest } = useFetch();
//     const listChat = useSelector((state: RootState) => state.chat.getListChat);
//     const dataUser = useSelector(
//         (state: RootState) => state.auth.login.data.token
//     );
//     const decode = jwtDecode(dataUser);
>>>>>>> Khoa

//     const isAuth = decode?.userDetails?.users?.id;

//     const [userChat, setUserChat] = useState<Chat[]>([]);

//     const newChat = useSelector((state: RootState) => state.chat.newMessages);

//     useEffect(() => {
//         sendRequest({ type: REQUEST_TYPE.GET_LIST_CHAT });
//     }, [newChat, isLoading]);

//     useEffect(() => {
//         const filterUsers = () => {
//             if (listChat && listChat.length > 0) {
//                 const updatedListChat = listChat.map((chat) => {
//                     const createdById = isAuth;
//                     const filteredUsers = chat.users.filter(
//                         (user) => user.id !== createdById
//                     );

//                     return {
//                         ...chat,
//                         users: filteredUsers,
//                     };
//                 });

//                 setUserChat(updatedListChat);
//             }
//         };

//         filterUsers();
//     }, [listChat]);

//     const [activeUserId, setActiveUserId] = useState<string | null>(null);

//     const handleUserClick = (userId: any) => {
//         setActiveUserId((prevUserId) =>
//             prevUserId === userId ? null : userId
//         );
//         // Handle any other logic you need when a user is clicked
//     };

//     return (
//         <div className="flex flex-col  pl-6 pr-2 w-80 h-full flex-shrink-0">
//             <div className="flex flex-col py-4 mt-6 bg-gray-800 dark:bg-white/90 p-4 rounded-lg h-full">
//                 <div className="flex flex-row items-center justify-between text-xs">
//                     <span className="font-bold text-md text-gray-200 dark:text-black">
//                         Active Conversations
//                     </span>
//                 </div>
//                 <div className="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
//                     {userChat && userChat?.length > 0 ? (
//                         userChat.map((chat) => (
//                             <UserChat
//                                 key={chat.id}
//                                 idMess={chat.id}
//                                 data={chat?.users[0]}
//                                 isActive={
//                                     activeUserId ===
//                                     chat?.users[0]?.id?.toString()
//                                 }
//                                 onClick={() => {
//                                     setChatId(chat?.id.toString());
//                                     setUserYou(chat?.users[0]);
//                                     handleUserClick(
//                                         chat?.users[0].id?.toString()
//                                     );
//                                 }}
//                             />
//                         ))
//                     ) : (
//                         <div>No data</div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// interface UserChatProps {
//     data: User;
//     onClick: () => void;
//     isActive: boolean;
//     idMess: number;
// }

// export const UserChat: React.FC<UserChatProps> = ({
//     data,
//     onClick,
//     isActive,
// }) => {
//     const handleButtonClick = () => {
//         onClick();
//     };

//     return (
//         <button
//             onClick={handleButtonClick}
//             className={`flex flex-row items-center hover:bg-gray-700 dark:hover:bg-gray-400 rounded-xl p-2 ${
//                 isActive ? "bg-slate-700" : ""
//             }`}
//         >
//             <div className="flex items-center justify-center  bg-indigo-200 rounded-full">
//                 <UserAvatar size={40} data={data?.avatar?.toString()} />
//             </div>
//             <div className="ml-2 w-full flex justify-between items-center text-sm font-semibold text-gray-200 dark:text-black">
//                 <span>{data?.name}</span>
//             </div>
//         </button>
//     );
// };
