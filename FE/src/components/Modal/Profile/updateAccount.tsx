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

import User from "@/types/user";
import { useFormik } from "formik";
import { Check, Loader2, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

type UpdateAccountProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  data: User;
  password: string;
};

export const UpdateAccount: React.FC<UpdateAccountProps> = ({
  setFlag,
  data,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector((state: RootState) => state.auth.isLoading);
  const checkOffModal = useSelector(
    (state: RootState) => state.auth.checkOffModal
  );

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
        email: data.email,
        old_pass: value.password,
        new_pass: value.confirmPass,
      };
      resetPassword(report, dispatch, navigate, "");
      if (checkOffModal) {
        setFlag.off();
      }
    },
  });

  return (
    <div className="w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal brightness-110">
      <div className="h-full flex flex-col space-y-5">
        <div className="px-5 py-2 flex space-x-5 shadow border-b-2">
          <span className="text-lg grow text-title">Reset Password</span>
          <button
            className="block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors"
            onClick={setFlag.off}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-full h-full"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>
        <div className="px-8 grow overflow-y-auto">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2 py-4">
                <div className="relative px-2">
                  <Label
                    htmlFor="email"
                    className="text-md text-title-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    className="w-full text-sm px-4 py-3  rounded-lg"
                    value={data?.email}
                    disabled
                  />
                </div>
                <div className="relative px-2">
                  <Label
                    htmlFor="passNew"
                    className="text-md text-title-foreground"
                  >
                    Password New
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
                <div className="relative px-2">
                  <Label
                    htmlFor="confirmPass"
                    className="text-md text-title-foreground flex justify-between"
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
                    className="w-full text-sm px-4 py-3 rounded-lg"
                  />
                  <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
                    {formik.errors.confirmPass && formik.touched.confirmPass ? (
                      <X className="text-red-500" />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 py-2 border-t flex justify-end items-center gap-2">
              <button
                type="button"
                onClick={setFlag.off}
                className="px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
              >
                Close
              </button>
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
                  Save
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
