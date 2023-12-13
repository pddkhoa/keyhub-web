import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Check, Loader2, X } from "lucide-react";
import { Button } from "../ui/button";
import { RULES } from "@/lib/rules";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import User from "@/types/user";

interface EditPasswordProps {
  data: User;
  passwordCurrent: string;
}

export const EditPassword: React.FC<EditPasswordProps> = ({
  data,
  passwordCurrent,
}) => {
  const { isLoading, sendRequest } = useFetch();

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
      sendRequest({ type: REQUEST_TYPE.RESETPASSWORD, data: report });

      // resetPassword(report, dispatch, navigate, "");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-5 py-4">
          <div className="relative px-2">
            <Label
              htmlFor="password_current"
              className="text-md text-title-foreground"
            >
              Password Current
            </Label>
            <Input
              type="password"
              id="password_current"
              name="password_current"
              value={passwordCurrent}
              disabled
              className="w-full bg-input border  border-border"
            />
          </div>
          <div className="relative px-2">
            <Label htmlFor="passNew" className="text-md text-title-foreground">
              Password New
            </Label>
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
            <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
              {formik.errors.password && formik.touched.password ? (
                <X className="text-red-500" />
              ) : null}
            </div>
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
          <div className="my-2 relative w-96 p-6">
            <Label className="text-white">Requirements</Label>
            <ul className="space-y-2 ml-2">
              <li
                className={`text-sm flex justify-between border-b-2 items-center w-full ${
                  requirementsMet.length ? "text-green-500" : "text-red-500"
                }`}
              >
                <span>At least 8 characters</span>
                {requirementsMet.length ? <Check /> : <X />}
              </li>
              <li
                className={`text-sm flex justify-between border-b-2 w-full ${
                  requirementsMet.lowercase ? "text-green-500" : "text-red-500"
                }`}
              >
                <span>At least one lowercase letter</span>
                {requirementsMet.lowercase ? <Check /> : <X />}
              </li>
              <li
                className={`text-sm flex justify-between border-b-2 w-full ${
                  requirementsMet.uppercase ? "text-green-500" : "text-red-500"
                }`}
              >
                <span>At least one uppercase letter</span>
                {requirementsMet.uppercase ? <Check /> : <X />}
              </li>
              <li
                className={`text-sm flex justify-between border-b-2 w-full ${
                  requirementsMet.number ? "text-green-500" : "text-red-500"
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
                  !requirementsMet.space ? "text-green-500" : "text-red-500"
                }`}
              >
                <span>Password cannot contain spaces</span>
                {!requirementsMet.space ? <Check /> : <X />}
              </li>
            </ul>
          </div>
          <div className="px-5 py-2 border-t flex justify-end items-center gap-2">
            <button
              type="button"
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
        </div>
      </div>
    </form>
  );
};
