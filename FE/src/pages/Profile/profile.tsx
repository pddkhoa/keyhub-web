import AlphabetAvatar, { UserAvatar } from "../../components/Avatar/avatar";

import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

import { TabsProfile } from "@/pages/Profile/tabsProfile";
import { MoreHorizontalIcon } from "lucide-react";

import { RootState } from "@/redux/store";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useBoolean from "@/hooks/useBoolean";
import Modal from "@/components/Modal/modal";
import { CreateSeries } from "@/components/Modal/Series/createSeries";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";

const Profile = () => {
  const userData = useSelector((state: RootState) => state.user.detail?.data);
  console.log(userData);
  const { id } = useParams();
  const userId = Number(id);
  const navigate = useNavigate();
  const { sendRequest, isLoading } = useFetch();
  const [isUser, setIsUser] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const isUser = !userId || userData.id === Number(userId);
    setIsUser(isUser);
    window.scroll(0, 0);
  }, [userData, userId]);

  useEffect(() => {
    if (userId) {
      sendRequest({ type: REQUEST_TYPE.GET_USER_ID, slug: userId.toString() });
    }
  }, [userId]);

  const [displayModal, setDisplayModal] = useState("");
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  const [isFollowing, setIsFollowing] = useState(user.checkStatusFollow);
  const handleFollow = async (id: number) => {
    if (!isFollowing) {
      // Nếu chưa follow, thực hiện follow
      await sendRequest({
        type: REQUEST_TYPE.FOLLOW_USER,
        data: null,
        slug: id.toString(),
      });
    } else {
      await sendRequest({
        type: REQUEST_TYPE.UNFOLLOW_USER,
        data: null,
        slug: id.toString(),
      });
    }
    sendRequest({ type: REQUEST_TYPE.GET_USER_ID, slug: userId.toString() });
  };

  return (
    <div className="container mx-auto min-h-0 px-4 py-16">
      <header className="w-full p-4">
        <div className="relative p-4  w-full">
          <div className="flex items-center w-full   gap-5 pb-2">
            <div className="grid grid-cols-12 my-4 px-8 w-full">
              <div className="col-span-2">
                {!isUser ? (
                  <UserAvatar size={150} data={user?.avatar} />
                ) : (
                  <AlphabetAvatar size={150} />
                )}
              </div>
              <div className="col-span-10 flex flex-col w-full   mt-4  px-8">
                <p className="text-2xl text-title font-bold">
                  {!isUser ? user?.name : userData?.name}
                </p>
                <p className="text-lg  text-blue-700">
                  @{!isUser ? user?.second_name : userData?.second_name}
                </p>
                <p className="text-md break-words text-gray-400">
                  {!isUser ? user?.descriptions : userData.descriptions}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-10 mt-4">
                    <div className="flex flex-col ">
                      <span className="text-gray-200 text-lg ">Posts</span>
                      <span className="text-gray-400 text-xl font-extrabold text-center">
                        {!isUser ? user?.sumBLog : userData?.sumBLog || 0}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-200 text-lg ">Following</span>
                      <span className="text-gray-400 text-xl font-extrabold text-center">
                        {!isUser
                          ? user?.totalFollowing
                          : userData?.totalFollowing || 0}
                      </span>
                    </div>
                    <div className="flex flex-col ">
                      <span className="text-gray-200 text-lg ">Follower</span>
                      <span className="text-gray-400 text-xl font-extrabold text-center">
                        {!isUser
                          ? user?.totalFollowers
                          : userData?.totalFollowers || 0}
                      </span>
                    </div>
                  </div>
                  {isUser ? (
                    <div className="flex gap-5 mt-4">
                      <Button
                        onClick={() => navigate("/editor")}
                        variant={"gradient"}
                        size={"sm"}
                      >
                        Add New Post
                      </Button>
                      <Button
                        onClick={() => {
                          setDisplayCreate.on(),
                            setDisplayModal("CREATE_SERIES");
                        }}
                        variant={"gradient"}
                        size={"sm"}
                      >
                        Add New Series
                      </Button>
                      <Button variant={"gradient"} size={"sm"}>
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
                              onClick={() => {
                                setDisplayCreate.on(),
                                  setDisplayModal("LIST_FOLLOWER");
                              }}
                              className="cursor-pointer"
                            >
                              <span>List Follower</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => {
                                setDisplayCreate.on(),
                                  setDisplayModal("LIST_FOLLOWING");
                              }}
                              className="cursor-pointer"
                            >
                              <span>List Following</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-5 mt-4">
                      {!user.checkStatusFollow ? (
                        <Button
                          onClick={() => {
                            handleFollow(userId);
                          }}
                          variant={"gradient"}
                          size={"sm"}
                        >
                          Follow
                        </Button>
                      ) : (
                        <Button
                          onClick={() => {
                            handleFollow(userId);
                          }}
                          variant={"gradient"}
                          size={"sm"}
                        >
                          UNFollow
                        </Button>
                      )}

                      <Button variant={"gradient"} size={"sm"}>
                        Message
                      </Button>
                      <Button variant={"gradient"} size={"sm"}>
                        <MoreHorizontalIcon />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="grid grid-cols-4 gap-5 ">
        <div className="col-span-4">
          <TabsProfile />
        </div>
      </section>
      <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
        {displayModal === "CREATE_SERIES" ? (
          <CreateSeries setFlag={setDisplayCreate} />
        ) : null}
      </Modal>
    </div>
  );
};

export default Profile;
