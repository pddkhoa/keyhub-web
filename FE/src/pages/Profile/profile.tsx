import AlphabetAvatar from "../../components/Avatar/avatar";
import banner from "../../asset/banner.jpeg";
import { AboutMe } from "../../components/UserProfile/aboutMe";

import { useSelector } from "react-redux";
import TokenPayload from "../../types/user";
import jwt_decode from "jwt-decode";
import { RootStateToken } from "../../types/token";
import { Button } from "@/components/ui/button";

import { TabsProfile } from "@/components/Tab/tabsProfile";
import { PlusCircle } from "lucide-react";

export const Profile = () => {
  const { data } = useSelector((state: RootStateToken) => state.auth.login);
  const user = jwt_decode(data.token) as TokenPayload;

  return (
    <div className="container mx-auto min-h-0 px-4 py-6">
      <header className="w-full">
        <div className="relative  h-[300px] w-full rounded-xl">
          <div className="w-full h-full">
            <img
              src={banner}
              alt="banner"
              className="w-full h-full rounded-xl object-fill"
            />
          </div>
        </div>
        <div className="relative p-4 mb-2 w-full">
          <div className="absolute flex items-center justify-between w-[calc(100%-36px)] border-b-2 gap-5 pb-2 -top-[4.5rem]">
            <div className="flex my-4">
              <AlphabetAvatar size={150} />
              <div className="flex flex-col mt-16 mx-4">
                <p className="text-3xl text-title font-bold">
                  {user.userDetails.username}
                </p>
                <p className="text-xl  text-gray-600">
                  @{user.userDetails.users.email}
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-16">
              <Button variant={"gradient"} size={"lg"}>
                <PlusCircle className="w-5 h-5 mr-2" />
                Add New Post
              </Button>
            </div>
          </div>
        </div>
      </header>
      <section className="grid grid-cols-4 gap-5 pt-24">
        <div className="col-span-1 py-2">
          <AboutMe />
        </div>
        <div className="col-span-3">
          <TabsProfile />
        </div>
      </section>
    </div>
  );
};
