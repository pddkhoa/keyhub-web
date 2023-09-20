import { FaGraduationCap } from "react-icons/fa";
import { FaLocationDot, FaEnvelope } from "react-icons/fa6";

export const AboutMe = () => {
  return (
    <div className="max-w-sm bg-card shadow-lg  rounded-xl overflow-hidden">
      <div className="flex items-center px-6 py-4 bg-primary border-b-[3px] ">
        <h1 className=" text-title font-semibold text-lg">About Me</h1>
      </div>
      <div className="py-4 px-6 pb-6">
        <p className="py-2 text-lg text-title-foreground">
          Full Stack maker &amp; UI / UX Designer , love hip hop music Author of
          Building UI.
        </p>
        <div className="flex items-center mt-4 text-title-foreground">
          <FaGraduationCap className="w-5 h-5" />
          <h1 className="px-2 text-sm">MerakiTeam</h1>
        </div>
        <div className="flex items-center mt-4 text-title-foreground">
          <FaLocationDot className="w-5 h-5" />
          <h1 className="px-2 text-sm">California</h1>
        </div>
        <div className="flex items-center mt-4 text-title-foreground">
          <FaEnvelope className="w-5 h-5" />
          <h1 className="px-2 text-sm">patterson@example.com</h1>
        </div>
      </div>
    </div>
  );
};
