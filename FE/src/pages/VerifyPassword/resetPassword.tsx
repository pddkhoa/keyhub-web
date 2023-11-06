import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RULES } from "@/lib/rules";
import { resetPassword } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import { useFormik } from "formik";
import { Check, Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";

const ResetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState<string>();
  const emailRegister = useSelector((state: RootState) => state.auth.email);
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [requirementsMet, setRequirementsMet] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    specialChar: false,
    space: false,
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;

    formik.setFieldValue("password", newPassword);

    const containsSpace = /\s/.test(newPassword);
    const lengthCheck = newPassword.length >= 8;
    const lowercaseCheck = /[a-z]/.test(newPassword);
    const uppercaseCheck = /[A-Z]/.test(newPassword);
    const numberCheck = /[0-9]/.test(newPassword);
    const specialCharCheck = /[@#$%^_&+=]/.test(newPassword);

    setRequirementsMet({
      length: lengthCheck,
      lowercase: lowercaseCheck,
      uppercase: uppercaseCheck,
      number: numberCheck,
      specialChar: specialCharCheck,
      space: containsSpace,
    });
  };

  useEffect(() => {
    if (!emailRegister) {
      navigate("/login", { replace: true });
      return;
    }
    setEmail(emailRegister);
  }, [location, navigate, emailRegister]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPass: "",
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .matches(RULES.password, "Password invalid")
        .required("required"),
      confirmPass: Yup.string()
        .oneOf([Yup.ref("password")], "Confirm password not match.")
        .required("Confirm password is required."),
    }),
    validateOnChange: true,
    onSubmit: async (value) => {
      const report = {
        email: email,
        old_pass: value.password,
        new_pass: value.confirmPass,
      };
      resetPassword(report, dispatch, navigate, "/login");
    },
  });

  return (
    <div className="relative bg-gradient-to-b  from-gray-900 via-gray-900 to-[rgb(7,16,45)] bottom-0 leading-5 h-full overflow-hidden">
      <div className="relative h-screen w-full my-10  sm:flex sm:flex-row  justify-center bg-transparent">
        <div className="flex justify-center w-full self-center z-10">
          <div className="relative bg-card  brightness-150 border-2 border-border px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col space-y-5">
              <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="font-semibold text-3xl text-title">
                  <p>Reset password</p>
                </div>
                <div className="flex flex-row text-sm font-medium text-gray-400">
                  <p>Fill up the form to reset the password</p>
                </div>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-4">
                  <div className="relative">
                    <Label
                      htmlFor="email"
                      className="text-sm text-title-foreground"
                    >
                      Email
                    </Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      disabled
                      className="w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"
                    />
                    <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none"></div>
                  </div>

                  <div className="relative">
                    <Label
                      htmlFor="password"
                      className="text-sm text-title-foreground"
                    >
                      Password
                    </Label>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          onBlur={formik.handleBlur}
                          onChange={handlePasswordChange}
                          value={formik.values.password}
                          placeholder="Password"
                          className="w-full bg-input border  border-border"
                        />
                      </HoverCardTrigger>
                      <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
                        {formik.errors.password && formik.touched.password ? (
                          <X className="text-red-500" />
                        ) : null}
                      </div>
                      <HoverCardContent className="my-2 relative w-80 p-6 bg-modal brightness-125 border-2 border-border rounded-2xl shadow-xl z-[60]">
                        <ul className="space-y-2">
                          <li
                            className={`text-sm flex justify-between border-b-2 items-center w-full ${
                              requirementsMet.length
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            <span>At least 8 characters</span>
                            {requirementsMet.length ? <Check /> : <X />}
                          </li>
                          <li
                            className={`text-sm flex justify-between border-b-2 w-full ${
                              requirementsMet.lowercase
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            <span>At least one lowercase letter</span>
                            {requirementsMet.lowercase ? <Check /> : <X />}
                          </li>
                          <li
                            className={`text-sm flex justify-between border-b-2 w-full ${
                              requirementsMet.uppercase
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            <span>At least one uppercase letter</span>
                            {requirementsMet.uppercase ? <Check /> : <X />}
                          </li>
                          <li
                            className={`text-sm flex justify-between border-b-2 w-full ${
                              requirementsMet.number
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            <span>At least one number</span>
                            {requirementsMet.number ? <Check /> : <X />}
                          </li>
                          <li
                            className={`text-sm flex justify-between border-b-2 w-full ${
                              requirementsMet.specialChar
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            <span>At least one special character</span>
                            {requirementsMet.specialChar ? <Check /> : <X />}
                          </li>
                          <li
                            className={`text-sm flex justify-between border-b-2 w-full ${
                              !requirementsMet.space
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            <span>Password cannot contain spaces</span>
                            {!requirementsMet.space ? <Check /> : <X />}
                          </li>
                        </ul>
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                  <div className="relative">
                    <Label
                      htmlFor="confirm-password"
                      className="text-sm text-title-foreground"
                    >
                      Confirm Password
                    </Label>
                    <Input
                      type="password"
                      id="confirmPass"
                      name="confirmPass"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPass}
                      placeholder="Confirm Password"
                      className="w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"
                    />
                    <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
                      {formik.errors.confirmPass &&
                      formik.touched.confirmPass ? (
                        <X className="text-red-500" />
                      ) : null}
                    </div>
                  </div>
                  <div className="pt-5">
                    {isLoading ? (
                      <Button className="w-full" disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={formik.isSubmitting || !formik.isValid}
                      >
                        Save
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
