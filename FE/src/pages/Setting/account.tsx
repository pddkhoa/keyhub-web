import AlphabetAvatar from "@/components/Avatar/avatar";
import { EditAccount } from "@/components/Form/editAccount";
import { EditNotification } from "@/components/Form/editNotification";
import { EditPassword } from "@/components/Form/editPassword";
import { EditPrivacy } from "@/components/Form/editPrivacy";
import EditProfile from "@/components/Form/editProfile";
import Modal from "@/components/Modal/modal";
import { UploadFIle } from "@/components/Modal/uploadFile";
import { Button } from "@/components/ui/button";
import useBoolean from "@/hooks/useBoolean";
import { RootState } from "@/redux/store";
import { Camera } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import User from "@/types/user";
import { Link } from "react-router-dom";

const SettingAccount = () => {
  const [tabs, setTabs] = useState("ACCOUNT");

  const [displayModal, setDisplayModal] = useState(false);
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  const userData = useSelector((state: RootState) => state.user.detail.data);

  const [user, setUser] = useState<User>(userData);
  const { data } = useSelector((state: RootState) => state.auth.login);
  const { userDetails }: any = jwt_decode(data.token);

  const pwd = userDetails.password;

  const renderContent = () => {
    switch (tabs) {
      case "ACCOUNT":
        return <EditAccount data={userData} />;

      case "NOTIFICATION":
        return <EditNotification data={userData} />;
      case "PASSWORD":
        return <EditPassword data={userData} passwordCurrent={pwd} />;
      case "PROFILE":
        return <EditProfile data={user} />;
      case "PRIVACY":
        return <EditPrivacy data={userData} />;
      default:
        return null;
    }
  };

  return (
    <div className="container h-fit py-20 px-20">
      <div className="flex flex-col gap-5">
        <Link
          to={"/profile"}
          className="text-blue-700 cursor-pointer hover:brightness-150"
        >
          Back
        </Link>

        <div className=" bg-gray-900 text-gray-300 p-4  rounded-xl border">
          <div className="flex flex-wrap gap-5">
            <div className="flex-none sm:flex p-2 pb-5 border-b-2 w-full ">
              <div className=" relative h-24 w-24   sm:mb-0 mb-5">
                <AlphabetAvatar size={100} />
                <button
                  onClick={() => {
                    setDisplayCreate.on(), setDisplayModal(true);
                  }}
                  className="absolute -right-4  bottom-0  text-white  bg-gray-700 p-1.5 font-medium hover:brightness-150 tracking-wider rounded-full transition ease-in duration-300"
                >
                  <Camera />
                </button>
              </div>
              <div className="flex-auto ml-10  justify-evenly">
                <div className="flex flex-col mt-7">
                  <span className="text-2xl text-gray-300">
                    {userData.name}
                  </span>
                  <span className="text-lg text-blue-700">
                    @{userData.second_name}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-end gap-5">
                <Button></Button>
                <Button></Button>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-900 text-gray-300 gap-5 p-4 rounded-xl border">
          <div className="md:flex">
            <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 pr-2 dark:text-gray-400 md:me-4 mb-4 md:mb-0 border-r">
              <TabListItems
                title="Account"
                tabs={"ACCOUNT"}
                setTabs={setTabs}
                activeTab={tabs}
              />
              <TabListItems
                title="Profile"
                tabs={"PROFILE"}
                setTabs={setTabs}
                activeTab={tabs}
              />
              <TabListItems
                title="Notification"
                tabs={"NOTIFICATION"}
                setTabs={setTabs}
                activeTab={tabs}
              />
              <TabListItems
                title="Privacy"
                tabs={"PRIVACY"}
                setTabs={setTabs}
                activeTab={tabs}
              />
              <TabListItems
                title="Password"
                tabs={"PASSWORD"}
                setTabs={setTabs}
                activeTab={tabs}
              />
            </ul>
            <div className="mx-8 bg-gray-900 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
              {renderContent()}
            </div>
          </div>
        </div>
        <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
          {displayModal ? <UploadFIle setFlag={setDisplayCreate} /> : null}
        </Modal>
      </div>
    </div>
  );
};

export default SettingAccount;

interface TabListItemsProps {
  tabs: string;
  setTabs: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  activeTab: string;
}

export const TabListItems: React.FC<TabListItemsProps> = ({
  tabs,
  setTabs,
  title,
  activeTab,
}) => {
  const handleTabClick = () => {
    setTabs(tabs);
  };

  return (
    <li key={tabs}>
      <div
        onClick={handleTabClick}
        className={`inline-flex items-center px-4 py-3 rounded-lg  cursor-pointer  hover:bg-blue-700 w-full hover:text-white ${
          activeTab === tabs ? "text-white bg-blue-700 active " : "bg-gray-900"
        }`}
      >
        {title}
      </div>
    </li>
  );
};
