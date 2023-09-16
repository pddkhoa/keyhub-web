import {
  Camera,
  ChevronRight,
  Contact2,
  FileCog,
  FileLock2,
  PenSquare,
} from "lucide-react";
import avatar from "../../asset/1112.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Items } from "@/components/Sidebar/items";

export const UpdateProfile = () => {
  return (
    <div className=" container  min-h-0 px-4 py-16">
      <header className="w-full h-full mx-auto flex">
        <div className="h-full w-1/4 flex flex-col p-5 space-y-5  overflow-x-hidden">
          <div className="ease-in-out transition-transform z-3 ml-auto w-full h-full border-l-4  bg-card border-theme-divider-tertiary rounded-xl p-4">
            <div className=" flex flex-col w-full h-full space-y-5">
              <ul className="h-full  space-y-3">
                <li className="flex justify-between p-1 rounded-lg cursor-pointer items-center w-full hover:bg-hover">
                  <Items icon={<Contact2 />} title="Profile" />
                  <div className="">
                    <ChevronRight className="text-title-foreground" />
                  </div>
                </li>
                <li className="flex justify-between p-1 rounded-lg cursor-pointer items-center w-full hover:bg-hover">
                  <Items icon={<FileLock2 />} title="Security" />
                  <div className="">
                    <ChevronRight className="text-title-foreground" />
                  </div>
                </li>
                <li className="flex justify-between p-1 rounded-lg cursor-pointer items-center w-full hover:bg-hover">
                  <Items icon={<FileCog />} title="Other Setting" />
                  <div className="">
                    <ChevronRight className="text-title-foreground" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-full w-3/4 flex flex-col p-6 space-y-5  overflow-x-hidden">
          <div className="space-y-2">
            <div className="text-title">Profile Picture</div>
            <div className="mt-1 text-title-foreground">
              Upload a picture to make your profile stand out and let people
              recognize your comments and contributions easily!
            </div>
            <div className="flex relative">
              <div className="relative cursor-pointer bg-card flex justify-center items-center mx-auto group overflow-hidden hover:brightness-110 border hover:border-4 border-border w-36 h-36 rounded-full mt-6">
                <img
                  src={avatar}
                  className="w-full h-full object-cover  group-hover:opacity-60"
                />
                <span className="hidden group-hover:block absolute">
                  <Camera className="w-8 h-8 pointer-events-none text-title" />
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-title">Banner Picture</div>
            <div className="mt-1 text-title-foreground">
              Upload a picture to make your profile stand out and let people
              recognize your comments and contributions easily!
            </div>
            <div className="flex relative">
              <div className="relative cursor-pointer bg-card flex justify-center items-center mx-auto group overflow-hidden hover:brightness-110 border hover:border-4 border-border w-2/3 h-56 rounded-md my-4">
                <img
                  src={avatar}
                  className="w-full h-full object-cover  group-hover:opacity-60"
                />
                <span className="hidden group-hover:block absolute">
                  <Camera className="w-8 h-8 pointer-events-none text-title" />
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="text-title">Account Infomation</div>
              <div className="text-title-foreground hover:brightness-125 cursor-pointer">
                <PenSquare />
              </div>
            </div>
            <div className="relative px-2">
              <Label
                htmlFor="confirmPass"
                className="text-md text-title-foreground"
              >
                Username
              </Label>
              <Input
                className="w-full text-sm px-4 py-3  rounded-lg"
                disabled
              />
            </div>
            <div className="relative px-2">
              <Label
                htmlFor="confirmPass"
                className="text-md text-title-foreground"
              >
                Email
              </Label>
              <Input
                className="w-full text-sm px-4 py-3  rounded-lg"
                disabled
              />
            </div>
            <div className="relative px-2">
              <Label
                htmlFor="confirmPass"
                className="text-md text-title-foreground flex justify-between"
              >
                <div>Password</div>
              </Label>
              <Input className="w-full text-sm px-4 py-3 rounded-lg" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="text-title">About</div>
              <div className="text-title-foreground hover:brightness-125 cursor-pointer">
                <PenSquare />
              </div>
            </div>
            <div className="relative px-2">
              <Label className="text-md text-title-foreground">Bio</Label>
              <Textarea
                placeholder="Tell us a little bit about yourself"
                className="resize-none"
                maxLength={100}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
