import {
  IconAddress,
  IconHelp,
  IconNotification,
  IconPassword,
  IconSettingAccount,
} from "@/components/ui/icon";

const Main = () => {
  return (
    <div className="container h-fit py-20 mx-auto">
      <div className="flex flex-col w-2/3 mx-auto bg-gray-900 text-gray-300 gap-5 p-4 rounded-xl">
        <div className="text-4xl font-semibold">Settings</div>
        <div className="flex flex-col gap-3 mt-10">
          <span>General</span>
          <Items icon={<IconSettingAccount />} title="Account Information" />
          <Items icon={<IconAddress />} title="Saved Address" />
        </div>
        <div className="flex flex-col gap-3 ">
          <span>Account</span>
          <Items icon={<IconPassword />} title="Password" />
          {/* <Items icon={<IconSettingAccount />} title="Account Information" /> */}
        </div>
        <div className="flex flex-col gap-3 ">
          <span>Other</span>
          <Items icon={<IconNotification />} title="Notification" />
          <Items icon={<IconHelp />} title="Help" />
          <Items icon={<IconSettingAccount />} title="Logout" />
        </div>
      </div>
    </div>
  );
};

type ItemsProp = {
  icon: React.ReactNode | any;
  title: string;
};

export const Items: React.FC<ItemsProp> = ({ icon, title }) => {
  return (
    <div
      className={`flex justify-start items-center  ${
        title === "Logout" ? "" : "border-b"
      } pb-2 cursor-pointer hover:bg-gray-700 hover:border-blue-900  p-2`}
    >
      {icon}
      <span className="text-base ml-3">{title}</span>
    </div>
  );
};

export default Main;
