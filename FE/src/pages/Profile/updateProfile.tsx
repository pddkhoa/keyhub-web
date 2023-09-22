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
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import User from "@/types/user";
import { useSelector } from "react-redux";
import TokenPayload from "../../types/user";
import jwt_decode from "jwt-decode";
import { FaBuilding, FaGlobe, FaGraduationCap } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Modal from "@/components/Modal/modal";
import useBoolean from "@/hooks/useBoolean";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChangeName,
  EditMore,
  UpdateBio,
} from "@/components/Modal/Tool/updateAbout";
import { UpdateAccount } from "@/components/Modal/Tool/updateAccount";
import { RootState } from "@/redux/store";

export const UpdateProfile = () => {
  const location = useLocation();
  const userData = useSelector((state: RootState) => state.user.detail.data);

  useEffect(() => {
    const { state } = location;
    if (state === null || typeof state !== "object") {
      return;
    }
  }, [location]);

  return (
    <div className=" container  min-h-0 px-4 py-16">
      <header className="w-full h-full mx-auto flex">
        <div className="h-full w-1/4 flex flex-col p-5 space-y-5  overflow-x-hidden">
          <div className="ease-in-out transition-transform z-3 ml-auto w-full h-full border-l-4  bg-card border-theme-divider-tertiary rounded-xl p-4">
            <div className=" flex flex-col w-full h-full space-y-5">
              <ul className="h-full  space-y-3">
                <li className="flex justify-between p-2 rounded-lg cursor-pointer items-center w-full hover:bg-hover">
                  <Items icon={<Contact2 />} title="Profile" />
                  <div className="">
                    <ChevronRight className="text-title-foreground" />
                  </div>
                </li>
                <li className="flex justify-between p-2  rounded-lg cursor-pointer items-center w-full hover:bg-hover">
                  <Items icon={<FileLock2 />} title="Security" />
                  <div className="">
                    <ChevronRight className="text-title-foreground" />
                  </div>
                </li>
                <li className="flex justify-between p-2 rounded-lg cursor-pointer items-center w-full hover:bg-hover">
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
          {userData && <AccountInfo info={userData} />}
          {userData && <AboutInfo info={userData} />}
        </div>
      </header>
    </div>
  );
};

type AccountInfoProps = {
  info: User;
};

const AccountInfo: React.FC<AccountInfoProps> = ({ info }) => {
  const { data } = useSelector((state: RootState) => state.auth.login);
  const { userDetails }: any = jwt_decode(data.token) as TokenPayload;

  const [pwd, setPwd] = useState(userDetails.password);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="text-title">Account Infomation</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="text-title-foreground hover:brightness-125 cursor-pointer">
              <PenSquare />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-5  rounded-lg bg-card">
            <DropdownMenuItem
              onClick={() => {
                setDisplayCreate.on(), setDisplayModal(true);
              }}
              className="flex justify-between p-2 rounded-lg cursor-pointer items-center w-full hover:bg-hover"
            >
              <span className="text-title-foreground whitespace-nowrap">
                Reset Password
              </span>
              <div className="">
                <ChevronRight className="text-title-foreground" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative px-2">
        <Label htmlFor="confirmPass" className="text-md text-title-foreground">
          Username
        </Label>
        <Input
          className="w-full text-sm px-4 py-3  rounded-lg"
          value={info?.username}
          disabled
        />
      </div>
      <div className="relative px-2">
        <Label htmlFor="confirmPass" className="text-md text-title-foreground">
          Email
        </Label>
        <Input
          className="w-full text-sm px-4 py-3  rounded-lg"
          disabled
          value={info?.email}
        />
      </div>
      <div className="relative px-2">
        <Label
          htmlFor="confirmPass"
          className="text-md text-title-foreground flex justify-between"
        >
          <div>Password</div>
        </Label>
        <Input
          type="password"
          value={pwd}
          disabled
          className="w-full text-sm px-4 py-3 rounded-lg"
        />
      </div>
      <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
        {displayModal ? (
          <UpdateAccount
            setFlag={setDisplayCreate}
            data={info}
            password={pwd}
          />
        ) : null}
      </Modal>
    </div>
  );
};

type AboutInfoProps = {
  info: User;
};

const AboutInfo: React.FC<AboutInfoProps> = ({ info }) => {
  const [displayModal, setDisplayModal] = useState("");
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  const renderModalContent = () => {
    switch (displayModal) {
      case "CHANGE_NAME":
        return <ChangeName setFlag={setDisplayCreate} data={info} />;
      case "UPDATE_BIO":
        return <UpdateBio setFlag={setDisplayCreate} data={info} />;
      case "EDIT_MORE":
        return <EditMore setFlag={setDisplayCreate} data={info} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="text-title">About Information</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="text-title-foreground hover:brightness-125 cursor-pointer">
              <PenSquare />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-5  rounded-lg bg-card">
            <DropdownMenuItem
              onClick={() => {
                setDisplayCreate.on(), setDisplayModal("CHANGE_NAME");
              }}
              className="flex justify-between p-2 rounded-lg cursor-pointer items-center w-full hover:bg-hover"
            >
              <span className="text-title-foreground whitespace-nowrap">
                Change Name
              </span>
              <div className="">
                <ChevronRight className="text-title-foreground" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setDisplayCreate.on(), setDisplayModal("UPDATE_BIO");
              }}
              className="flex justify-between p-2 rounded-lg cursor-pointer items-center w-full hover:bg-hover"
            >
              <span className="text-title-foreground whitespace-nowrap">
                Update Bio
              </span>
              <div className="">
                <ChevronRight className="text-title-foreground" />
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setDisplayCreate.on(), setDisplayModal("EDIT_MORE");
              }}
              className="flex justify-between p-2 rounded-lg cursor-pointer items-center w-full hover:bg-hover"
            >
              <span className="text-title-foreground whitespace-nowrap">
                Edit Detail
              </span>
              <div className="">
                <ChevronRight className="text-title-foreground" />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative px-2">
        <Label htmlFor="confirmPass" className="text-md text-title-foreground">
          Full Name
        </Label>
        <Input
          className="w-full text-sm px-4 py-3  rounded-lg"
          value={info?.name}
          disabled
        />
      </div>
      <div className="relative px-2">
        <Label htmlFor="confirmPass" className="text-md text-title-foreground">
          Second Name
        </Label>
        <Input
          className="w-full text-sm px-4 py-3  rounded-lg"
          value={info?.second_name}
          disabled
        />
      </div>
      <div className="relative px-2">
        <Label htmlFor="confirmPass" className="text-md text-title-foreground">
          Gender
        </Label>
        <Input
          className="w-full text-sm px-4 py-3  rounded-lg"
          value={info?.gender}
          disabled
        />
      </div>
      <div className="relative px-2">
        <Label className="text-md text-title-foreground">Bio</Label>
        <Textarea
          placeholder="Tell us a little bit about yourself"
          className="resize-none"
          maxLength={100}
          value={info?.descriptions || "nothing"}
          disabled
        />
      </div>
      <div className="relative px-2">
        <Label className="text-md text-title-foreground">More</Label>
        <div className="flex flex-col px-10">
          <MoreInfoItem
            icon={<FaGraduationCap className="w-5 h-5" />}
            label="School"
            value={info.school}
          />
          <MoreInfoItem
            icon={<FaLocationDot className="w-5 h-5" />}
            label="Address"
            value={info.address}
          />
          <MoreInfoItem
            icon={<FaBuilding className="w-5 h-5" />}
            label="Company"
            value={info.company}
          />
          <MoreInfoItem
            icon={<FaGlobe className="w-5 h-5" />}
            label="Country"
            value={info.country}
          />
        </div>
      </div>
      <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};
const MoreInfoItem = ({ icon, value }: any) => (
  <div className="flex justify-between">
    <div className="flex items-center mt-4 text-title-foreground">
      {icon}
      <h1 className="px-2 text-sm">{value || "nothing"}</h1>
    </div>
  </div>
);
