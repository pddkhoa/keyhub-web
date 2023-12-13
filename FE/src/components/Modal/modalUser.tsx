import User from "@/types/user";
import { UserAvatar } from "../Avatar/avatar";
import { Button } from "../ui/button";
import { MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nodata } from "../ui/nodata";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

type ModalUserProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  data: User;
  setFollowing: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalUser: React.FC<ModalUserProps> = ({
  setFlag,
  data,
  setFollowing,
}) => {
  const { sendRequest } = useFetch();
  const user = useSelector((state: RootState) => state.user.user);
  const isFollowing = useState(user.checkStatusFollow);

  useEffect(() => {
    sendRequest({ type: REQUEST_TYPE.GET_USER_ID, slug: data.id?.toString() });
  }, []);

  const handleFollow = async (id: any) => {
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
    sendRequest({ type: REQUEST_TYPE.GET_USER_ID, slug: id.toString() });
  };

  return (
    <div className=" max-w-md mx-auto md:max-w-4xl  min-w-0 break-words bg-gray-900 dark:bg-white   w-full mb-6 shadow-lg rounded-xl mt-16">
      <div className="px-6">
        <div className="flex flex-wrap justify-center">
          <div className="w-full flex justify-center">
            <div className="relative">
              <div className="shadow-xl rounded-full align-middle border-none absolute -m-12 -ml-20 lg:-ml-16 max-w-[150px]">
                <UserAvatar size={130} data={user.avatar} />
              </div>
            </div>
          </div>
          <div className="w-full text-center">
            <div className="flex w-full justify-between">
              <div className="flex gap-5 py-6 px-3 mt-32 sm:mt-0">
                <Button
                  type="button"
                  variant={"gradient"}
                  className="rounded-xl"
                  onClick={() => setFlag.off()}
                >
                  Back
                </Button>
              </div>
              <div className="flex gap-5 py-6 px-3 mt-32 sm:mt-0">
                {!user.checkStatusFollow ? (
                  <Button
                    type="button"
                    variant={"gradient"}
                    onClick={() => handleFollow(user.id)}
                    className="rounded-xl"
                  >
                    Follow
                  </Button>
                ) : (
                  <Button
                    type="button"
                    variant={"gradient"}
                    onClick={() => handleFollow(user.id)}
                    className="rounded-xl"
                  >
                    Unfollow
                  </Button>
                )}
                <div className="border-l" />
                <Link to={`/user/${user.id}`}>
                  <Button
                    type="button"
                    variant={"gradient"}
                    className="rounded-xl w-fit"
                  >
                    Visit Page
                    <MousePointer2 className="ml-2 w-5 h-5 rotate-90" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:pt-4 pt-8 pb-0">
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-gray-300 dark:text-black">
                  {user.sumBLog}
                </span>
                <span className="text-sm text-slate-500">Blogs</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-gray-300 dark:text-black">
                  {user.totalFollowers}
                </span>
                <span className="text-sm text-slate-500">Followers</span>
              </div>
              <div className="p-3 text-center">
                <span className="text-xl font-bold block uppercase tracking-wide text-gray-300 dark:text-black">
                  {user.totalFollowing}
                </span>
                <span className="text-sm text-slate-500">Following</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-2">
          <h3 className="text-2xl text-gray-300 font-bold leading-normal mb-1 dark:text-black">
            {user.name}
          </h3>
          <div className="text-xs mt-0 mb-2 text-slate-500 font-bold uppercase">
            <i className="fas fa-map-marker-alt mr-2 text-slate-500 opacity-75 " />
            {user.address}
          </div>
        </div>
        <div className="mt-6 py-6 border-t border-slate-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4">
              {" "}
              <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                “
              </div>
              <p className="text-md text-title-foreground text-center px-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                obcaecati laudantium recusandae, debitis eum voluptatem ad,
                illovoluptatibus temporibus odio provident.
              </p>
              <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type ModalListUserProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  data: User[];
  setFollowing: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ModalListUser: React.FC<ModalListUserProps> = ({
  setFlag,
  data: initialData,
  setFollowing,
}) => {
  const { sendRequest } = useFetch();
  const [dataUser, setDataUser] = useState(initialData);

  const handleFollow = async (id: any) => {
    setDataUser((prev) =>
      prev.map((user) => {
        if (user.id === id) {
          return { ...user, checkStatusFollow: !user.checkStatusFollow };
        }
        return user;
      })
    );

    await sendRequest({
      type: REQUEST_TYPE.FOLLOW_USER,
      data: null,
      slug: id.toString(),
    });

    if (setFollowing) {
      setFollowing((prevFollowing) => !prevFollowing);
    }
  };

  return (
    <div className="w-3/5 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-card brightness-150">
      <div className="h-full flex flex-col">
        <div className="px-5 py-2 flex space-x-5 shadow border-b-2 ">
          <h1 className="text-lg grow text-title">Users</h1>
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
        <div className="px-8 grow overflow-y-auto h-96 py-6">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-2">
              {dataUser && dataUser.length > 0 ? (
                dataUser.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center space-x-2 hover:bg-hover p-2 brightness-90 rounded-lg cursor-pointer"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <UserAvatar size={55} data={item.avatar} />
                      <div className="flex flex-col">
                        <span className="text-title font-semibold text-lg">
                          {item.name}
                        </span>
                        <span className="text-title-foreground text-sm">
                          @{item.second_name}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      {item.checkStatusFollow ? (
                        <Button
                          variant={"gradient"}
                          onClick={() => handleFollow(item.id)}
                        >
                          UnFollow
                        </Button>
                      ) : (
                        <Button
                          variant={"gradient"}
                          onClick={() => {
                            handleFollow(item.id);
                          }}
                        >
                          Follow
                        </Button>
                      )}
                      <Link to={`/user/${item.id}`}>
                        <Button
                          type="button"
                          variant={"gradient"}
                          className="rounded-xl w-fit"
                        >
                          Visit Page
                          <MousePointer2 className="ml-2 w-5 h-5 rotate-90" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <Nodata />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
