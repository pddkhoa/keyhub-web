import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { showToast } from "@/hooks/useToast";
import { RULES } from "@/lib/rules";
import { forgortPassword } from "@/services/access/apiRequest";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().matches(RULES.noBlank).required("Required"),
    }),

    onSubmit: async (value) => {
      const report = {
        email: value.email,
      };
      console.log(report);
      setIsLoading(true);
      try {
        const { body } = await forgortPassword(report.email);
        if (body?.statusCode === 200) {
          showToast(body.message, "success");
          setIsLoading(false);
          navigate("/confirmmail", { state: { report } });
        } else {
          showToast(body?.message || "Error", "error");
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    },
  });
  return (
    <div className="relative bg-gradient-to-b  from-gray-900 via-gray-900 to-[rgb(7,16,45)] bottom-0 leading-5 h-full overflow-hidden">
      <div className="relative h-screen w-full  sm:flex sm:flex-row  justify-center bg-transparent">
        <div className="flex justify-center w-full self-center z-10">
          <div className="relative bg-card  brightness-150 border-2 border-border px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="font-semibold text-3xl text-title">
                  <p>Forgot password</p>
                </div>
                <div className="flex flex-row text-sm font-medium text-gray-400">
                  <p>Fill up the form to reset the password</p>
                </div>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col space-y-5">
                  <label htmlFor="email">
                    <p className="font-medium text-title-foreground pb-2">
                      Email address
                    </p>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoFocus
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full py-3"
                      placeholder="Enter email address"
                    />
                  </label>
                  {isLoading ? (
                    <Button disabled>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={formik.isSubmitting || !formik.isValid}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                        />
                      </svg>
                      <span className="text-title-foreground">
                        Reset password
                      </span>
                    </Button>
                  )}

                  <p className="text-center text-title-foreground">
                    Not registered yet?{" "}
                    <Link
                      to={"/register"}
                      className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                    >
                      <span>Register now </span>
                    </Link>
                    <span>/</span>
                    <Link
                      to={"/login"}
                      className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                    >
                      <span>Login Now </span>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
