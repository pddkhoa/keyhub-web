import User from "@/types/user";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { createAxios } from "@/api/createInstance";
import { showToast } from "@/hooks/useToast";
import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import { useSelector, useDispatch } from "react-redux";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Link } from "react-router-dom";

interface CardUserProps {
  data: User;
  ref?: any;
}

export const CardUser: React.FC<CardUserProps> = React.forwardRef(
  ({ data }, ref) => {
    const user = useSelector((state: RootState) => state.auth.login);
    const dispatch = useDispatch();
    const axiosJWT = createAxios(user, dispatch, loginSuccess);
    const accessToken = user?.data.token;
    const [isFollowing, setIsFollowing] = useState(data.checkStatusFollow);
    const handleFollow = async (id: number) => {
      if (!isFollowing) {
        // Nếu chưa follow, thực hiện follow
        const { body } = await ClientServices.followUser(
          id,
          accessToken,
          axiosJWT
        );
        if (body?.success) {
          showToast(body?.message, "success");
          setIsFollowing(true);
        } else {
          console.log(body?.message);

          showToast("error", "error");
        }
      } else {
        // Nếu đã follow, thực hiện unfollow (tương tự)
        const { body } = await ClientServices.followUser(
          id,
          accessToken,
          axiosJWT
        );
        if (body?.success) {
          showToast(body?.message, "success");
          setIsFollowing(false);
        } else {
          console.log(body?.message);
          showToast("error", "error");
        }
      }
    };

    const card = (
      <div className="flex justify-center items-end text-center min-h-screen sm:block rounded-xl mt-40">
        <div className="bg-gray-500 transition-opacity bg-opacity-75" />
        <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all ">
          <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
            <div className="grid grid-cols-1">
              <div className="mt-4 mr-auto mb-4 ml-auto bg-gray-900 max-w-lg">
                <div className="flex flex-col items-center pt-6 pr-6 pb-6 pl-6">
                  <img
                    src={data.avatar}
                    className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                  />
                  <p className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-2xl">
                    {data.name}
                  </p>
                  <div className="w-full mb-10">
                    <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                      “
                    </div>
                    <p className="text-md text-title-foreground text-center px-5">
                      {data.descriptions
                        ? data.descriptions
                        : " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illovoluptatibus temporibus odio provident."}
                    </p>
                    <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                      ”
                    </div>
                  </div>
                  <div className="w-full mt-6 mx-auto flex justify-center">
                    <Link to={`/user/${data.id}`}>
                      <Button variant={"gradient"}>Visit site</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    const body = (
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="bg-card font-semibold text-center rounded-2xl  shadow-lg p-10 max-w-xs">
            <img
              className="mb-3 w-28 h-28 rounded-full shadow-lg mx-auto"
              src={data.avatar}
            />

            <h1 className="text-lg text-title"> {data.name}</h1>
            <h3 className="text-sm text-gray-400 "> {data.second_name}</h3>
            <div className="text-xs w-48 text-gray-400 mt-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </div>
            <div className="w-full flex justify-center pt-3">
              {isFollowing && data.id ? (
                <Button
                  onClick={() => handleFollow(data.id)}
                  variant={"gradient"}
                  className="px-6 py-4 rounded-lg h-fit "
                >
                  UNFOLLOW
                </Button>
              ) : (
                <Button
                  onClick={() => handleFollow(data.id)}
                  variant={"gradient"}
                  className="px-6 py-4 rounded-lg h-fit "
                >
                  FOLLOW
                </Button>
              )}
            </div>
          </div>
        </HoverCardTrigger>

        <HoverCardContent className="my-2 relative w-fit h-96 p-6 brightness-125  shadow-xl z-50">
          {card}
        </HoverCardContent>
      </HoverCard>
    );
    const content = ref ? (
      <div
        ref={ref}
        className="relative flex justify-center items-center rounded-xl"
      >
        {body}
      </div>
    ) : (
      <div className="relative flex justify-center items-center rounded-xl">
        {body}
      </div>
    );
    return content;
  }
);
