import User from "@/types/user";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";
import banner from "../../asset/__banner-default.jpg";

type AboutMeProps = {
  user: User;
};

export const AboutMe: React.FC<AboutMeProps> = ({ user }) => {
  return (
    <div className="max-w-sm bg-card shadow-lg  rounded-xl overflow-hidden">
      <div className="group relative rounded-lg block bg-black">
        <img
          className="w-full h-40 inset-0 object-cover rounded-lg opacity-90 transition-opacity group-hover:opacity-50"
          src={user.banner_url ? user.banner_url : banner}
          alt="avatar"
        />
        <div className="absolute -top-9 left-5 translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          {/* <div className="group duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6  hover:translate-y-12">
            <div className="group-hover:duration-400 relative rounded-2xl  text-gray-50 flex flex-col justify-center items-center gap-1 ">
              <span className="text-sm italic break-words w-60 h-24 ">
                "{user.descriptions ? user.descriptions : "Welcome my feeds!"}"
              </span>
              <p className="text-amber-300 ">- @{user.second_name} -</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="py-4 px-6 pb-6">
        {user?.school && (
          <UserInfoItem
            icon={<FaGraduationCap className="w-5 h-5" />}
            text={user.school}
          />
        )}
        {user?.address && (
          <UserInfoItem
            icon={<FaLocationDot className="w-5 h-5" />}
            text={user.address}
          />
        )}
        {user?.email && (
          <UserInfoItem
            icon={<FaEnvelope className="w-5 h-5" />}
            text={user.email}
          />
        )}
      </div>
    </div>
  );
};
const UserInfoItem = ({ icon, text }: any) => (
  <div className="flex items-center mt-4 text-title-foreground">
    {icon}
    <h1 className="px-2 text-sm">{text}</h1>
  </div>
);
