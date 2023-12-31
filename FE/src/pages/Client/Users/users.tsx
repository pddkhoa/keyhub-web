import { CardUser } from "@/components/Card/cardUser";
import { SlideUser } from "@/components/Swipers/slideUser";
import { Nodata } from "@/components/ui/nodata";
import { SkeletonUser } from "@/components/ui/skeleton";
import useAuth from "@/hooks/useAuth";
import useLoadingLazy from "@/hooks/useLoadingLazy";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import User from "@/types/user";
import { Label } from "@radix-ui/react-label";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const [indexPage, setIndexPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isLoadingUserMost, setIsLoadingUserMost] = useState(false);
  const [userMost, setUserMost] = useState<User[]>([]);
  const { axiosJWT, accessToken } = useAuth();

  const [following, setFollowing] = useState(false);

  const getUserAllCustom = async (
    indexPage: any,
    accessToken: any,
    axiosJWT: any
  ) => {
    return await ClientServices.getUserAll(indexPage, accessToken, axiosJWT);
  };
  const { isLoading, result, hasNextPage } = useLoadingLazy<User>(
    indexPage,
    getUserAllCustom
  );

  const intObserver = useRef<any>();
  const lastUserRef = useCallback(
    (data: User) => {
      following;
      if (isLoading) return;
      if (intObserver.current) {
        intObserver.current.disconnect();
      }
      intObserver.current = new IntersectionObserver((datas) => {
        if (datas[0].isIntersecting && hasNextPage && !isLoading) {
          setIsLoadingMore(true);
          setIndexPage((prev) => prev + 1);
        }
        if (!hasNextPage) setIsLoadingMore(false);
      });
      if (data) intObserver.current.observe(data);
    },
    [isLoading, hasNextPage]
  );

  const content =
    result &&
    result.length > 0 &&
    result.map((data, i) => {
      if (result.length === i + 1) {
        return (
          <CardUser
            ref={lastUserRef}
            key={data.id}
            data={data}
            setFollowing={setFollowing}
          />
        );
      }
      return <CardUser key={data.id} data={data} setFollowing={setFollowing} />;
    });

  const userFilter = useSelector(
    (state: RootState) => state.user.listUserSearch
  );

  useEffect(() => {
    setIsLoadingUserMost(true);
    const fetchData = async () => {
      const { body } = await ClientServices.getUserMost(accessToken, axiosJWT);

      if (body?.success) {
        setUserMost(body?.result);

        setIsLoadingUserMost(false);
      } else {
        console.log(body?.message);
        setIsLoadingUserMost(false);
      }
    };
    fetchData();
  }, [following]);

  useEffect(() => {
    if (following) {
      setIndexPage(1); // Cập nhật lại indexPage để tái tải từ trang đầu tiên
    }
  }, [following]);

  return (
    <div className="container  min-h-0 mx-auto w-10/12 py-20">
      <div className="flex flex-col gap-5">
        <div className="">
          <div className="flex relative flex-col items-center p-6 pb-10 mb-16 text-center bg-center bg-cover  bg-gradient-to-tr from-[rgb(7,16,45)] to-[rgb(58,60,84)] rounded-xl">
            <div className="flex relative z-1 flex-col items-center">
              <div className="p-1.5 rounded-full bg-hover brightness-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-12 h-11"
                  data-name="Layer 1"
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
                      <stop offset="0" stopColor="#96369f"></stop>
                      <stop offset="1" stopColor="#01b3ed"></stop>
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
              </div>
              <div className="flex flex-col gap-3 mt-8">
                <span className="text-2xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-100">
                  The security first platform
                </span>
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-100 ">
                  Simplify your security with authentication services
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-col h-fit ">
          <Label className="text-title text-xl font-bold">Suggestions</Label>
          <div className="">
            <SlideUser
              user={userMost}
              loading={isLoadingUserMost}
              setFollowing={setFollowing}
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Label className="text-title text-xl font-bold">All User</Label>

          <div className="grid grid-cols-3 gap-5 mt-8 z-0">
            {userFilter && userFilter?.length > 0 ? (
              userFilter.map((user) => <CardUser key={user.id} data={user} />)
            ) : result && result?.length > 0 ? (
              content
            ) : (
              <div className="col-span-3">
                <Nodata />
              </div>
            )}
            {isLoadingMore && <SkeletonUser />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
