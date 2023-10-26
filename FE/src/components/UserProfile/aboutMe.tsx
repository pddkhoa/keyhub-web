import User from "@/types/user";
import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";

type AboutMeProps = {
  user: User;
};

export const AboutMe: React.FC<AboutMeProps> = ({ user }) => {
  return (
    <div className="max-w-sm bg-card shadow-lg  rounded-xl overflow-hidden">
      <div className="group relative rounded-lg block ">
        <div className="flex flex-col space-y-3">
          <div
            className="w-full mx-auto bg-card border-b px-5 pt-5 pb-5 text-title-foreground"
            style={{ maxWidth: 500 }}
          >
            <div className="w-full mb-10">
              <div className="text-3xl text-indigo-500 text-left leading-tight h-3">
                “
              </div>
              <p className="text-md text-title-foreground text-center px-5">
                {user.descriptions
                  ? user.descriptions
                  : " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati laudantium recusandae, debitis eum voluptatem ad, illovoluptatibus temporibus odio provident."}
              </p>
              <div className="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div className="w-full">
              <p className="text-md text-indigo-500 font-bold text-center">
                {user.name}
              </p>
              <p className="text-xs text-gray-500 text-center">
                @{user.second_name}
              </p>
            </div>
          </div>
        </div>
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
