import { FaGraduationCap, FaUserCog } from "react-icons/fa";
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { Button } from "../ui/button";

export const AboutMe = () => {
  return (
    <div className="max-w-sm bg-white shadow-lg  rounded-lg overflow-hidden">
      <div className="flex items-center px-6 py-5 bg-gray-900">
        <h1 className=" text-white font-semibold text-lg">About Me</h1>
      </div>
      <div className="py-4 px-6 pb-6">
        <p className="py-2 text-lg text-gray-700">
          Full Stack maker &amp; UI / UX Designer , love hip hop music Author of
          Building UI.
        </p>
        <div className="flex items-center mt-4 text-gray-700">
          <FaGraduationCap className="w-5 h-5" />
          <h1 className="px-2 text-sm">MerakiTeam</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaLocationDot className="w-5 h-5" />
          <h1 className="px-2 text-sm">California</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <FaEnvelope className="w-5 h-5" />
          <h1 className="px-2 text-sm">patterson@example.com</h1>
        </div>
        <div className="flex items-center justify-center mt-4 text-gray-700">
          <Button>
            <FaUserCog className="w-5 h-5" />
            <h1 className="px-2 text-sm">Edit Profile</h1>
          </Button>
        </div>
      </div>
    </div>
  );
};
