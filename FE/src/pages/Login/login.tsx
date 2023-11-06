import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import * as Yup from "yup";
import { RULES } from "@/lib/rules";
import { loginUser } from "@/redux/authSlice";
import { RootState } from "@/redux/store";

const Login = () => {
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state: RootState) => state.auth.login.isFetching
  );
  // const { handleRequest } = useFetch();
  const [showPass, setShowPass] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().matches(RULES.noBlank).required("Required"),
      password: Yup.string().matches(RULES.noBlank).required("Required"),
    }),

    onSubmit: async (value) => {
      const report = {
        username: value.username,
        password: value.password,
      };

      loginUser(report, dispatch, navigate);
      // handleRequest("login", report);
    },
  });

  return (
    <>
      <div className="relative bg-gradient-to-b  from-gray-900 via-gray-900 to-[rgb(7,16,45)] bottom-0 leading-5 h-full overflow-hidden">
        <div className=" relative min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl ">
          <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10 mr-20">
            <div className="self-start  lg:flex flex-col  text-white">
              <h1 className="my-3 font-semibold text-4xl uppercase">
                Welcome back
              </h1>
              <p className="text-xl opacity-75">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups
              </p>
            </div>
          </div>
          <div className="flex justify-center self-center z-10">
            <div className="p-12 bg-card brightness-125 mx-auto rounded-3xl border w-96 ">
              <div className="mb-7">
                <h3 className="font-semibold text-2xl text-title">Sign In </h3>
                <p className="text-title-foreground">
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
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Label
                      htmlFor="username"
                      className="text-sm text-title-foreground"
                    >
                      Username
                    </Label>
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.username}
                      placeholder="Username"
                      className="w-full text-sm  px-4 py-3 bg-input border  border-border rounded-lg "
                    />
                  </div>
                  <div className="relative">
                    <Label
                      htmlFor="password"
                      className="text-sm text-title-foreground"
                    >
                      Password
                    </Label>
                    <Input
                      type={!showPass ? "password" : "text"}
                      id="password"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      placeholder="Password"
                      className="w-full text-sm  px-4 py-3 bg-input border  border-border rounded-lg "
                    />
                    <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3">
                      <div
                        className="cursor-pointer z-50 text-title-foreground"
                        onClick={() => setShowPass(!showPass)}
                      >
                        {!showPass ? <Eye /> : <EyeOff />}
                      </div>
                    </div>
                    <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm ml-auto">
                      <Link
                        to="/forgotpassword"
                        className="text-purple-700 hover:text-purple-600"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    {isFetching ? (
                      <Button disabled className="w-full">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="w-full flex justify-center"
                        disabled={formik.isSubmitting || !formik.isValid}
                      >
                        Sign Up
                      </Button>
                    )}

                    {/* )} */}
                  </div>
                </form>
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
      </div>
    </>
  );
};
export default Login;
