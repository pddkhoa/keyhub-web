import AlphabetAvatar from "../../components/Avatar/avatar";
import banner from "../../asset/__banner-default.jpg";
import { AboutMe } from "../../components/UserProfile/aboutMe";

import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";

import { TabsProfile } from "@/components/Tab/tabsProfile";
import { PenSquare, PlusCircle } from "lucide-react";

import { RootState } from "@/redux/store";
import { useNavigate } from "react-router";

export const Profile = () => {
  const userData = useSelector((state: RootState) => state.user.detail?.data);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto min-h-0 px-4 py-6">
      <header className="w-full">
        <div className="relative  h-[350px] w-full rounded-xl">
          <div className="w-full h-full">
            <img
              src={userData.banner_url ? userData.banner_url : banner}
              alt="banner"
              className="w-full h-full rounded-xl object-cover opacity-75"
            />
          </div>
        </div>
        <div className="relative p-4 mb-2 w-full">
          <div className="absolute flex items-center justify-between w-[calc(100%-36px)] border-b-2 gap-5 pb-2 -top-[4.5rem]">
            <div className="flex my-4">
              <AlphabetAvatar size={150} />
              <div className="flex flex-col mt-16 mx-4">
                <p className="text-3xl text-title font-bold">
                  {userData?.name}
                </p>
                <p className="text-xl  text-gray-600">
                  @{userData?.second_name}
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-16">
              <Button
                onClick={() => navigate("/editor")}
                variant={"gradient"}
                size={"lg"}
              >
                <PlusCircle className="w-5 h-5 mr-2" />
                Add New Post
              </Button>
              <Button
                onClick={() =>
                  navigate("/profile/update", { state: { userData } })
                }
                variant={"gradient"}
                size={"lg"}
              >
                <PenSquare className="w-5 h-5 mr-2" />
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </header>
      <section className="grid grid-cols-4 gap-5 pt-24">
        <div className="col-span-1 py-2">
          <AboutMe user={userData} />
        </div>
        <div className="col-span-3">
          <TabsProfile />
        </div>
      </section>
    </div>
  );
};
