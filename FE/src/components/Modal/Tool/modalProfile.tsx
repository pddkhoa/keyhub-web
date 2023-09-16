import { Camera } from "lucide-react";
import avatar from "../../../asset/1112.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ModalProfileProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
};

export const ModalProfile: React.FC<ModalProfileProps> = ({ setFlag }) => {
  return (
    <div className="w-2/3 h-full 2xl:w-xl sm:x-0 border rounded shadow bg-modal brightness-125">
      <div className="h-full flex flex-col space-y-5">
        <div className="px-5 py-2 flex space-x-5 shadow border-b">
          <h1 className="text-lg grow text-title">Profile</h1>
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
        <div className="h-screen overflow-y-scroll flex flex-col p-5 space-y-5 w-full overflow-x-hidden">
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
            <div className="flex justify-between">
              <div className="text-title">Account Infomation</div>
              <div className="text-title-foreground">Edit</div>
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
              <div className="text-title-foreground">Edit</div>
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

        <div className="px-5 py-2 border-t">
          <button
            type="button"
            className="px-5 py-1.5  float-right text-base font-medium rounded text-white bg-blue-700 hover:bg-indigo-500 transition-colors duration-200"
          >
            Save
          </button>
          <button
            type="button"
            onClick={setFlag.off}
            className="px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
