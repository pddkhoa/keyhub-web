import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import { useState } from "react";
import { registerUser } from "@/services/access/apiRequest";
import * as Yup from "yup";
import { RULES } from "@/lib/rules";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import { Check, Loader2, X } from "lucide-react";
import { showToast } from "@/hooks/useToast";

export const SignUp = () => {
  const navigate = useNavigate();
  const [genders, setGender] = useState("Male");
  const [isLoading, setIsLoading] = useState(false);
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
      username: "",
      email: "",
      name: "",
      password: "",
      confirmPass: "",
      phone: "",
      second_name: "",
      gender: "",
      roles: ["user"],
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().matches(RULES.noBlank).required("Required"),
      second_name: Yup.string().matches(RULES.noBlank).required("Required"),
      username: Yup.string().matches(RULES.noBlank).required("Required"),
      email: Yup.string()
        .matches(RULES.noBlank)
        .matches(RULES.email, "Email invalid")
        .required("Required"),
      phone: Yup.string()
        .matches(RULES.phone, "Phone invalid")
        .required("Required"),
      password: Yup.string()
        .matches(RULES.password, "Password invalid")
        .required("required"),
      confirmPass: Yup.string()
        .oneOf([Yup.ref("password")], "Confirm password not match.")
        .required("Confirm password is required."),
    }),
    validateOnChange: true,
    onSubmit: async (value) => {
      setIsLoading(true);
      const report = {
        username: value.username,
        email: value.email,
        name: value.name,
        password: value.password,
        phone: value.phone,
        second_name: value.second_name,
        gender: genders,
        roles: ["user"],
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const reportNew = {
        ...report,
        confirmPass: value.confirmPass,
      };
      // console.log(reportNew);
      // alert(JSON.stringify(report, null, 2));
      try {
        const { body } = await registerUser(report);

        if (body?.success) {
          setIsLoading(false);
          showToast("Verify Account nhen!", "success");
          navigate("/verify", { state: { report } });
        } else {
          setIsLoading(false);
          showToast(body?.message || "Erorr", "error");
        }
      } catch (error) {
        setIsLoading(false);
      }
    },
  });
  return (
    <>
      <div className="relative bg-gradient-to-b  from-gray-900 via-gray-900 to-[rgb(7,16,45)] bottom-0 leading-5 h-full overflow-hidden">
        <div className="relative h-screen my-10  sm:flex sm:flex-row  justify-center bg-transparent ">
          <div className="flex justify-center self-center z-10">
            <div className="p-12 bg-card brightness-125 mx-auto rounded-3xl min-w-0 ">
              <div className="mb-7">
                <h3 className="font-semibold text-2xl text-title">Sign Up </h3>
                <p className="text-title-foreground">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-sm text-purple-700 hover:text-purple-700"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 space-x-5">
                    <div className="relative">
                      <Label
                        htmlFor="name"
                        className="text-sm text-title-foreground"
                      >
                        Full Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        placeholder="Full Name"
                        className="w-full text-sm  px-4 py-3 bg-input  border  border-border rounded-lg "
                      />

                      <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
                        {formik.errors.name && formik.touched.name ? (
                          <X className="text-red-500" />
                        ) : null}
                      </div>
                    </div>
                    <div className="relative">
                      <Label
                        htmlFor="second_name"
                        className="text-sm text-title-foreground"
                      >
                        Nickname
                      </Label>
                      <Input
                        type="text"
                        id="second_name"
                        name="second_name"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.second_name}
                        placeholder="Nickname"
                        className="w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"
                      />
                      <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
                        {formik.errors.second_name &&
                        formik.touched.second_name ? (
                          <X className="text-red-500" />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
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
                        className="w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"
                      />
                      <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
                        {formik.errors.username && formik.touched.username ? (
                          <X className="text-red-500" />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
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
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Email"
                        className="w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"
                      />
                      <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
                        {formik.errors.email && formik.touched.email ? (
                          <X className="text-red-500" />
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 space-x-5">
                    <div className="relative ">
                      <Label
                        htmlFor="phone"
                        className="text-sm text-title-foreground"
                      >
                        Phone
                      </Label>
                      <Input
                        type="text"
                        id="phone"
                        name="phone"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        placeholder="Phone"
                        className="w-full text-sm px-4 py-3 bg-input border  border-border rounded-lg"
                      />
                      <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
                        {formik.errors.phone && formik.touched.phone ? (
                          <X className="text-red-500" />
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <Label
                        htmlFor="gender"
                        className="text-sm text-title-foreground"
                      >
                        Gender
                      </Label>
                      <Select
                        name="gender"
                        onValueChange={setGender}
                        defaultValue={genders}
                      >
                        <SelectTrigger className="w-full text-sm">
                          <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Femnale">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
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
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="relative">
                      <Label
                        htmlFor="confirmPass"
                        className="text-sm text-title-foreground"
                      >
                        Confirm Password
                      </Label>
                      <Input
                        type="password"
                        id="confirmPass"
                        name="confirmPass"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
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
                  </div>
                  <div className="grid grid-cols-1 pt-4">
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
                        Sign Up
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
