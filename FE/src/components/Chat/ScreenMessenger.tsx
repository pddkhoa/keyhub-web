import AlphabetAvatar, { UserAvatar } from "@/components/Avatar/avatar";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Nodata } from "../ui/nodata";
import jwtDecode from "jwt-decode";
import React, { useEffect, useRef, useState } from "react";
import { ChatMessage } from "@/types/chat";
import User from "@/types/user";
import * as SockJS from "sockjs-client";
import * as Stomp from "stompjs";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import { IconDelete } from "../ui/icon";

interface ScreenMessengerProps {
    chatId: string | undefined;
    userYou: User | undefined;
}

export const ScreenMessenger: React.FC<ScreenMessengerProps> = ({
    chatId,
    userYou,
}) => {
    const { isLoading, sendRequest } = useFetch();

    const dataUser = useSelector(
        (state: RootState) => state.auth.login.data.token
    );

    const [contentMessage, setContentMessage] = useState("");

    const decode = jwtDecode(dataUser) as any;

    const isAuth = decode?.userDetails?.users?.id;

    const token = useSelector(
        (state: RootState) => state.auth.login.data.token
    );

    const [isConnecting, setIsConnecting] = useState(false);

    const [isDelete, setIsDelete] = useState(false);

    const [messages, setMessages] = useState<any>([]);

    const [stompClient, setStompClient] = useState<Stomp.Client>();

    const listChatMessages = useSelector(
        (state: RootState) => state?.chat?.getChatMessages
    );
    useEffect(() => {
        setIsDelete(false);

        if (chatId) {
            sendRequest({
                type: REQUEST_TYPE.GET_LIST_CHAT_MESSAGES,
                slug: chatId,
            });
        }
    }, [chatId, isDelete]);

    const handleSendMessage = async () => {
        if (contentMessage.trim() === "") {
            return;
        }

        if (chatId) {
            stompClient?.send(
                `/topic/${chatId}`,
                {},
                JSON.stringify({ chat_id: chatId, content: contentMessage })
            );
            await sendRequest({
                type: REQUEST_TYPE.SEND_MESSAGES,
                data: { chat_id: chatId, content: contentMessage },
            });

            setContentMessage("");
        } else {
            console.error("WebSocket connection is not established yet");
        }
    };

    const connectWS = () => {
        const url = process.env.REACT_APP_API_URL;
        const socket = new SockJS(`${url}/ws`);
        const temp = Stomp.over(socket);
        setStompClient(temp);
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        temp.connect(headers, onConnect, onError);
    };

    useEffect(() => {
        connectWS();
    }, []);

    const onError = (error: any) => {
        console.log("no error", error);
    };
    const onConnect = () => {
        setIsConnecting(true);
    };

    useEffect(() => {
        if (isConnecting && stompClient && chatId && isAuth) {
            const res = stompClient?.subscribe(
                `/topic/${chatId}`,
                (message) => {
                    const receivedMessage = JSON.parse(message?.body);
                    setMessages((prevMessages: any) => [
                        ...prevMessages,
                        receivedMessage,
                    ]);
                }
            );

            return () => {
                res.unsubscribe();
            };
        }
    });

    useEffect(() => {
        if (chatId) {
            setMessages(listChatMessages);
        }
    }, [listChatMessages, chatId]);

    const handleDeleteChat = async (id: string) => {
        setIsDelete(false);
        await sendRequest({ type: REQUEST_TYPE.DELETE_CHAT, slug: id });
        setIsDelete(true);
    };

    const messagesContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to the bottom when messages change
        if (messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop =
                messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="flex flex-col flex-auto h-full w-full p-6 mr-24">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-800 dark:bg-white/90 h-full w-full p-4">
                <div
                    ref={messagesContainerRef}
                    className="flex flex-col h-full overflow-x-hidden mb-4"
                >
                    <div className="flex flex-col h-full w-full">
                        <div className="grid grid-cols-12 gap-y-2 w-full">
                            {isLoading ? (
                                <div
                                    role="status"
                                    className="absolute left-1/2 top-1/2 justify-center"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                        viewBox="0 0 100 101"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"
                                        />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ) : messages && chatId && messages?.length > 0 ? (
                                messages.map((chat: any) =>
                                    chat?.user_create === isAuth ? (
                                        <ChatMe
                                            key={chat.id}
                                            data={chat}
                                            onClick={() => {
                                                handleDeleteChat(chat.id);
                                            }}
                                        />
                                    ) : (
                                        <ChatYou
                                            key={chat.id}
                                            data={chat}
                                            userYou={userYou}
                                        />
                                    )
                                )
                            ) : (
                                <div className="col-span-12">
                                    <Nodata />
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center h-16 rounded-xl bg-gray-900  w-full px-4">
                    <div className="flex-grow ml-4">
                        <div className="relative w-full">
                            <input
                                disabled={!chatId ? true : false}
                                type="text"
                                value={contentMessage}
                                onChange={(e) =>
                                    setContentMessage(e.target.value)
                                }
                                className="flex w-full border rounded-xl bg-gray-800 focus:outline-none text-white pl-4 h-10"
                            />
                            <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="ml-4">
                        <button
                            disabled={!chatId ? true : false}
                            onClick={handleSendMessage}
                            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                        >
                            <span>Send</span>
                            <span className="ml-2">
                                <svg
                                    className="w-4 h-4 transform rotate-45 -mt-px"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ChatProps {
    data: ChatMessage;
    userYou?: User;
    onClick: () => void;
}

export const ChatMe: React.FC<ChatProps> = ({ data, onClick }) => {
    const handleDeleteChat = () => {
        onClick();
    };
    return (
        <div className="col-start-6 col-end-13 p-3 rounded-lg">
            <div className="flex items-center justify-start flex-row-reverse">
                <AlphabetAvatar size={45} />
                <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                    <div>{data?.content}</div>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="inline-flex cursor-pointer  mr-4 items-center text-white justify-center rounded-xl hover:bg-slate-800 p-0.5 ">
                            <MoreHorizontalIcon />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Option</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem
                            onClick={handleDeleteChat}
                            className="cursor-pointer h-12"
                        >
                            <IconDelete className="w-6 h-6 mr-2" />
                            <span>Delete</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
interface ChatYouProps {
    data: ChatMessage;
    userYou?: User;
}

export const ChatYou: React.FC<ChatYouProps> = ({ data, userYou }) => {
    return (
        <div className="col-start-1 col-end-8 p-3 rounded-lg">
            <div className="flex justify-between w-full">
                <div className="flex flex-row  items-center">
                    <UserAvatar size={45} data={userYou?.avatar?.toString()} />
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>{data?.content}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
