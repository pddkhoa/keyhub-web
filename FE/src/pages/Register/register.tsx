import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";

export const Register = () => {
  return (
    <>
      <div className="w-full  absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-pink-950 bottom-0 leading-5 h-full overflow-hidden"></div>
      <div className=" relative min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
              <p className="text-gray-400">
                Already have an account?
                <Link
                  to="/login"
                  className="text-sm text-purple-700 hover:text-purple-700"
                >
                  Sign in
                </Link>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <Input type="email" placeholder="Email" />
              </div>
              <div className="relative" x-data="{ show: true }">
                <input
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  placeholder="Password"
                />
                <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"></div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-gray-900  hover:bg-pink-950 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
