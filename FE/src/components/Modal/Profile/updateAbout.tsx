import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import User from "@/types/user";
import { Loader2, PenSquare } from "lucide-react";
import React, { useState } from "react";
import * as Yup from "yup";
import { RULES } from "@/lib/rules";
import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { createAxios } from "@/api/createInstance";
import { useDispatch, useSelector } from "react-redux";
import { showToast } from "@/hooks/useToast";
import { RootStateToken } from "@/types/token";
import { updateUserSuccess } from "@/redux/userSlice";
import { loginSuccess } from "@/redux/authSlice";
import ClientServices from "@/services/client/client";

type UpdateAboutProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  data: User;
};

export const UpdateAbout = () => {
  return <div>UpdateAbout</div>;
};

export const ChangeName: React.FC<UpdateAboutProps> = ({ setFlag, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state: RootStateToken) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;

  const formik = useFormik({
    initialValues: {
      email: "",
      name: data.name,
      phone: "",
      second_name: data.second_name,
      gender: "",
      descriptions: "",
      address: "",
      company: "",
      country: "",
      school: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().matches(RULES.noBlank).required("Required"),
      second_name: Yup.string().matches(RULES.noBlank).required("Required"),
    }),
    validateOnChange: true,
    onSubmit: async (value) => {
      setIsLoading(true);
      const report = {
        email: data.email,
        name: value.name,
        phone: data.phone,
        second_name: value.second_name,
        gender: data.gender,
        descriptions: data.descriptions,
        address: data.address,
        company: data.company,
        country: data.country,
        school: data.school,
      };

      console.log(report);

      setIsLoading(true);
      try {
        const { body } = await ClientServices.updateProfile(
          report,
          accessToken,
          axiosJWT
        );
        console.log(body);
        if (body?.success) {
          setIsLoading(false);
          dispatch(updateUserSuccess(body.result));
          // console.log("123123");
          showToast("Update Thanh cong nha!", "success");
          setFlag.off();
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
    <div className="w-2/4 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal brightness-110">
      <div className="h-full flex flex-col space-y-5">
        <div className="px-5 py-2 flex space-x-5 shadow border-b-2">
          <span className="text-lg grow text-title">Change Name</span>
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
                    htmlFor="name"
                    className="text-md text-title-foreground"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="w-full text-sm px-4 py-3  rounded-lg"
                    placeholder={data.name}
                  />
                </div>
                <div className="relative px-2">
                  <Label
                    htmlFor="second_name"
                    className="text-md text-title-foreground"
                  >
                    Second Name
                  </Label>
                  <Input
                    id="second_name"
                    type="text"
                    name="second_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.second_name}
                    placeholder={data.second_name}
                    className="w-full text-sm px-4 py-3  rounded-lg"
                  />
                </div>
              </div>
              <div className=" py-2 border-t">
                {isLoading ? (
                  <Button className="px-5 py-1.5 float-right" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="px-5 py-1.5 float-right"
                    disabled={formik.isSubmitting || !formik.isValid}
                  >
                    Save
                  </Button>
                )}
                <button
                  type="button"
                  onClick={setFlag.off}
                  className="px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const UpdateBio: React.FC<UpdateAboutProps> = ({ setFlag, data }) => {
  const [bio, setBio] = useState<string>(data.descriptions || "");
  const [charCount, setCharCount] = useState<number>(bio.length);
  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    formik.setFieldValue("descriptions", text);
    setBio(text);
    setCharCount(text.length);
  };
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state: RootStateToken) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      second_name: "",
      gender: "",
      descriptions: data.descriptions,
      address: "",
      company: "",
      country: "",
      school: "",
    },
    validationSchema: Yup.object().shape({
      descriptions: Yup.string().matches(RULES.noBlank).required("Required"),
    }),
    validateOnChange: true,
    onSubmit: async (value) => {
      setIsLoading(true);
      const report = {
        email: data.email,
        name: data.name,
        phone: data.phone,
        second_name: data.second_name,
        gender: data.gender,
        descriptions: value.descriptions,
        address: data.address,
        company: data.company,
        country: data.country,
        school: data.school,
      };

      console.log(report);

      setIsLoading(true);
      try {
        const { body } = await ClientServices.updateProfile(
          report,
          accessToken,
          axiosJWT
        );
        console.log(body);
        if (body?.success) {
          setIsLoading(false);
          dispatch(updateUserSuccess(body.result));
          showToast("Update Thanh cong nha!", "success");
          setFlag.off();
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
    <div className="w-2/4 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal brightness-125">
      <div className="h-full flex flex-col space-y-5">
        <div className="px-5 py-2 flex space-x-5 shadow border-b-2">
          <span className="text-lg grow text-title">Update Bio</span>
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
              <div className="flex flex-col space-y-2">
                <div className="relative px-2 py-2">
                  <Label
                    htmlFor="descriptions"
                    className="text-md text-title-foreground"
                  >
                    Bio
                  </Label>
                  <Textarea
                    id="descriptions"
                    name="descriptions"
                    placeholder="Tell us a little bit about yourself"
                    maxLength={150}
                    onBlur={formik.handleBlur}
                    value={formik.values.descriptions}
                    onChange={handleBioChange}
                  />
                  <div className="float-right text-sm text-title-foreground">
                    Characters remaining: {charCount}/150
                  </div>
                </div>
              </div>
              <div className=" py-2 border-t">
                {isLoading ? (
                  <Button className="px-5 py-1.5 float-right" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="px-5 py-1.5 float-right"
                    disabled={formik.isSubmitting || !formik.isValid}
                  >
                    Save
                  </Button>
                )}
                <button
                  type="button"
                  onClick={setFlag.off}
                  className="px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export const EditMore: React.FC<UpdateAboutProps> = ({ setFlag, data }) => {
  const [checkInput, setCheckInput] = useState("");

  const [genders, setGender] = useState("Male");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state: RootStateToken) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      second_name: "",
      gender: "",
      descriptions: "",
      address: data.address,
      company: data.company,
      country: data.country,
      school: data.school,
    },
    validationSchema: Yup.object().shape({
      address: Yup.string().matches(RULES.noBlank).required("Required"),
      company: Yup.string().matches(RULES.noBlank).required("Required"),
      country: Yup.string().matches(RULES.noBlank).required("Required"),
      school: Yup.string().matches(RULES.noBlank).required("Required"),
    }),
    validateOnChange: true,
    onSubmit: async (value) => {
      setIsLoading(true);
      const report = {
        email: data.email,
        name: data.name,
        phone: data.phone,
        second_name: data.second_name,
        gender: genders,
        descriptions: data.descriptions,
        address: value.address,
        company: value.company,
        country: value.country,
        school: value.school,
      };

      setIsLoading(true);
      try {
        const { body } = await ClientServices.updateProfile(
          report,
          accessToken,
          axiosJWT
        );
        console.log(body);
        if (body?.success) {
          setIsLoading(false);
          dispatch(updateUserSuccess(body.result));
          showToast("Update Thanh cong nha!", "success");
          setFlag.off();
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
    <div className="w-2/5 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal brightness-125">
      <div className="h-full flex flex-col space-y-5">
        <div className="px-5 py-2 flex space-x-5 shadow border-b-2">
          <span className="text-lg grow text-title">Edit More</span>
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
              <div className="flex flex-col py-2 space-y-2">
                <div className="relative px-2 flex flex-col">
                  <Label className="text-sm text-title">
                    Edit Introduction
                  </Label>
                  <span className="text-title-foreground text-sm">
                    The details you choose will be displayed publicly.
                  </span>
                </div>
                <div className="relative px-2 flex flex-col">
                  <Label className="text-sm text-title">Gender</Label>
                  <span className="my-2 text-sm w-full">
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
                  </span>
                </div>
                <div className="relative px-2 flex flex-col">
                  <Label htmlFor="address" className="text-sm text-title">
                    Address
                  </Label>
                  <div className="flex px-2 justify-between">
                    <div className="flex items-center mt-3 text-title-foreground w-full">
                      <Switch className="" />{" "}
                      <span className="px-4 text-sm w-full">
                        <Input
                          id="address"
                          name="address"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.address}
                          placeholder={data.address || "nothing"}
                          disabled={checkInput === "ADDRESS" ? false : true}
                        />
                      </span>
                    </div>
                    <div className="flex items-center mt-3 text-title-foreground">
                      <PenSquare
                        onClick={() => {
                          setCheckInput("ADDRESS");
                        }}
                        className="text-title-foreground hover:brightness-125 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative px-2 flex flex-col">
                  <Label htmlFor="school" className="text-sm text-title">
                    School
                  </Label>
                  <div className="flex px-2 justify-between">
                    <div className="flex items-center mt-3 text-title-foreground w-full">
                      <Switch className="" />{" "}
                      <span className="px-4 text-sm w-full">
                        <Input
                          id="school"
                          name="school"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.school}
                          placeholder={data.school || "nothing"}
                          disabled={checkInput === "SCHOOL" ? false : true}
                        />
                      </span>
                    </div>
                    <div className="flex items-center mt-3 text-title-foreground ">
                      <PenSquare
                        onClick={() => {
                          setCheckInput("SCHOOL");
                        }}
                        className="text-title-foreground hover:brightness-125 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative px-2 flex flex-col">
                  <Label htmlFor="company" className="text-sm text-title">
                    Company
                  </Label>
                  <div className="flex px-2 justify-between">
                    <div className="flex items-center mt-3 text-title-foreground w-full">
                      <Switch className="" />{" "}
                      <span className="px-4 text-sm w-full">
                        <Input
                          id="company"
                          name="company"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.company}
                          placeholder={data.company || "nothing"}
                          disabled={checkInput === "COMPANY" ? false : true}
                        />
                      </span>
                    </div>
                    <div className="flex items-center mt-3 text-title-foreground ">
                      <PenSquare
                        onClick={() => {
                          setCheckInput("COMPANY");
                        }}
                        className="text-title-foreground hover:brightness-125 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative px-2 flex flex-col">
                  <Label htmlFor="country" className="text-sm text-title">
                    Country
                  </Label>
                  <div className="flex px-2 justify-between">
                    <div className="flex items-center mt-3 text-title-foreground w-full">
                      <Switch className="" />{" "}
                      <span className="px-4 text-sm w-full">
                        <Input
                          id="country"
                          name="country"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.country}
                          placeholder={data.country || "nothing"}
                          disabled={checkInput === "COUNTRY" ? false : true}
                        />
                      </span>
                    </div>
                    <div className="flex items-center mt-3 text-title-foreground">
                      <PenSquare
                        onClick={() => {
                          setCheckInput("COUNTRY");
                        }}
                        className="text-title-foreground hover:brightness-125 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" py-2 border-t">
                {isLoading ? (
                  <Button className="px-5 py-1.5 float-right" disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="px-5 py-1.5 float-right"
                    disabled={formik.isSubmitting || !formik.isValid}
                  >
                    Save
                  </Button>
                )}
                <button
                  type="button"
                  onClick={setFlag.off}
                  className="px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
