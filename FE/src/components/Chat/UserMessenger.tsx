import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { Chat } from "@/types/chat";
import User from "@/types/user";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserAvatar } from "../Avatar/avatar";
import React from "react";
import jwtDecode from "jwt-decode";

interface UserMessengerProps {
  setChatId: React.Dispatch<React.SetStateAction<string | undefined>>;
  setUserYou: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const UserMessenger: React.FC<UserMessengerProps> = ({
  setChatId,
  setUserYou,
}) => {
  const { sendRequest } = useFetch();
  const listChat = useSelector((state: RootState) => state.chat.getListChat);
  const dataUser = useSelector(
    (state: RootState) => state.auth.login.data.token
  );
  const decode = jwtDecode(dataUser);

  const isAuth = decode?.userDetails?.users?.id;

  const [userChat, setUserChat] = useState<Chat[]>([]);

  const newChat = useSelector((state: RootState) => state.chat.newMessages);

  useEffect(() => {
    sendRequest({ type: REQUEST_TYPE.GET_LIST_CHAT });
  }, [newChat]);

  useEffect(() => {
    const filterUsers = () => {
      if (listChat && listChat.length > 0) {
        const updatedListChat = listChat.map((chat) => {
          const createdById = isAuth;
          const filteredUsers = chat.users.filter(
            (user) => user.id !== createdById
          );

          return {
            ...chat,
            users: filteredUsers,
          };
        });

        setUserChat(updatedListChat);
      }
    };

    filterUsers();
  }, [listChat]);

  const [activeUserId, setActiveUserId] = useState<string | null>(null);

  const handleUserClick = (userId: string) => {
    setActiveUserId((prevUserId) => (prevUserId === userId ? null : userId));
    // Handle any other logic you need when a user is clicked
  };

  return (
    <div className="flex flex-col  pl-6 pr-2 w-64 h-full flex-shrink-0">
      <div className="flex flex-col py-4 mt-6 bg-gray-800 p-4 rounded-lg h-full">
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold text-md text-gray-200">
            Active Conversations
          </span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            4
          </span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-full overflow-y-auto">
          {userChat && userChat?.length > 0 ? (
            userChat.map((chat) => (
              <UserChat
                key={chat.id}
                data={chat?.users[0]}
                isActive={activeUserId === chat?.users[0]?.id?.toString()}
                onClick={() => {
                  setChatId(chat.id.toString());
                  setUserYou(chat.users[0]);
                  handleUserClick(chat.users[0].id?.toString());
                }}
              />
            ))
          ) : (
            <div>No data</div>
          )}
        </div>
      </div>
    </div>
  );
};

interface UserChatProps {
  data: User;
  onClick: () => void;
  isActive: boolean;
}

export const UserChat: React.FC<UserChatProps> = ({
  data,
  onClick,
  isActive,
}) => {
  const handleButtonClick = () => {
    onClick();
  };
  return (
    <button
      onClick={handleButtonClick}
      className={`flex flex-row items-center hover:bg-gray-700 rounded-xl p-2 ${
        isActive ? "bg-slate-700" : ""
      }`}
    >
      <div className="flex items-center justify-center  bg-indigo-200 rounded-full">
        <UserAvatar size={40} data={data?.avatar} />
      </div>
      <div className="ml-2 w-full flex justify-between items-center text-sm font-semibold text-gray-200">
        <span>{data?.name}</span>
        <span className="inline-flex items-center justify-center w-2 h-2 ms-2 text-xs font-semibold text-white bg-purple-700 rounded-full"></span>
      </div>
    </button>
  );
};
