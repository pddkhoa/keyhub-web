import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useFormik } from "formik";

import { REQUEST_TYPE } from "@/types";
import useFetch from "@/hooks/useFetch";
import User from "@/types/user";
import { useState } from "react";

interface EditProfileProps {
  data: User;
}

const EditProfile: React.FC<EditProfileProps> = ({ data }) => {
  const { isLoading, sendRequest } = useFetch();

  const [genders, setGender] = useState("Male");

  const [bio, setBio] = useState<string>(data.descriptions || "");
  const [charCount, setCharCount] = useState<number>(bio.length);
  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    formik.setFieldValue("descriptions", text);
    setBio(text);
    setCharCount(text.length);
  };

  const formik = useFormik({
    initialValues: {
      email: data.email,
      name: data.name,
      phone: data.phone,
      second_name: data.second_name,
      gender: data.gender,
      descriptions: data.descriptions,
      address: data.address,
      company: data.company,
      country: data.country,
      school: data.school,
    },
    // validationSchema: Yup.object().shape({
    //   name: Yup.string().matches(RULES.noBlank).required("Required"),
    //   second_name: Yup.string().matches(RULES.noBlank).required("Required"),
    // }),
    // validateOnChange: true,
    onSubmit: async (value) => {
      const report = {
        email: value.email,
        name: value.name,
        phone: value.phone,
        second_name: value.second_name,
        gender: value.gender,
        descriptions: value.descriptions,
        address: value.address,
        company: value.company,
        country: value.country,
        school: value.school,
      };
      sendRequest({ type: REQUEST_TYPE.UPDATE_USER, data: report });
    },
  });

  return (
    <div className="">
      <form onSubmit={formik.handleSubmit}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-5 py-4">
            <div className="relative px-2">
              <Label htmlFor="name" className="text-md text-title-foreground">
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
            <div className="relative px-2">
              <Label htmlFor="phone" className="text-md text-title-foreground">
                Phone
              </Label>
              <Input
                id="phone"
                type="text"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                placeholder={data.phone}
                className="w-full text-sm px-4 py-3  rounded-lg"
              />
            </div>
            <div className="relative px-2">
              <div className="relative  flex flex-col">
                <Label className="text-sm text-title-foreground">Gender</Label>
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
            </div>
            <div className="grid grid-cols-2 gap-5 px-2">
              <div className="col-span-1">
                <Label
                  htmlFor="country"
                  className="text-md text-title-foreground"
                >
                  Country
                </Label>
                <Input
                  id="country"
                  type="text"
                  name="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country || "nothing"}
                  placeholder={data.country || "nothing"}
                  className="w-full text-sm px-4 py-3  rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <Label
                  htmlFor="address"
                  className="text-md text-title-foreground"
                >
                  Address
                </Label>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address || "nothing"}
                  placeholder={data.address || "nothing"}
                  className="w-full text-sm px-4 py-3  rounded-lg"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 px-2">
              <div className="col-span-1">
                <Label
                  htmlFor="school"
                  className="text-md text-title-foreground"
                >
                  School
                </Label>
                <Input
                  id="school"
                  type="text"
                  name="school"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.school || "nothing"}
                  placeholder={data.school || "nothing"}
                  className="w-full text-sm px-4 py-3  rounded-lg"
                />
              </div>
              <div className="col-span-1">
                <Label
                  htmlFor="second_name"
                  className="text-md text-title-foreground"
                >
                  Comany
                </Label>
                <Input
                  id="second_name"
                  type="text"
                  name="second_name"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // value={formik.values.second_name}
                  // placeholder={data.second_name}
                  className="w-full text-sm px-4 py-3  rounded-lg"
                />
              </div>
            </div>
          </div>

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
                  value={formik.values.descriptions || "nothing"}
                  onChange={handleBioChange}
                />
                <div className="float-right text-sm text-title-foreground">
                  Characters remaining: {charCount}/150
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
              className="px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
