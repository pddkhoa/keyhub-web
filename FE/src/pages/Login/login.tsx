import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { loginUser } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";

const Login = () => {
  const [password, setPwd] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { setAuth } = useAuth();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";
  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      const dataForm = {
        username,
        password,
      };

      loginUser(dataForm, dispatch, navigate);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-full  absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-pink-950 bottom-0 leading-5 h-full overflow-hidden"></div>
      <div className=" relative min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10 mr-20">
          <div className="self-start  lg:flex flex-col  text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
            <p className="text-xl opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center z-10">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p className="text-gray-400">
                Don'thave an account?{" "}
                <Link
                  to="/register"
                  className="text-sm text-purple-700 hover:text-purple-700"
                >
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <input
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  placeholder="Email"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="relative" x-data="{ show: true }">
                <input
                  className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-pink-400"
                  placeholder="Password"
                  onChange={(e) => setPwd(e.target.value)}
                />
                <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <Link
                    to="#"
                    className="text-purple-700 hover:text-purple-600"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full flex justify-center bg-gray-900  hover:bg-pink-950 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                >
                  Sign in
                </button>
              </div>
              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-100" />
                <span className="text-gray-300 font-normal">or</span>
                <span className="h-px w-16 bg-gray-100" />
              </div>
              <div className="flex justify-center gap-5 w-full ">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:bg-gray-600 hover:text-white text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
                >
                  <FcGoogle className="w-6 h-6 mr-2" />
                  <span className="text-xl uppercase">Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
