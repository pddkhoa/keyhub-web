import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFetch from "@/hooks/useFetch";
import { RULES } from "@/lib/rules";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";

interface FormAddTagProps {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  data: any;
  setIsAdd?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormEditTag: React.FC<FormAddTagProps> = ({
  setFlag,
  data,
  setIsAdd,
}) => {
  const { isLoading, sendRequest } = useFetch();
  const listCategories = useSelector(
    (state: RootState) => state.admin.listAllCategories
  );

  const [categories, setCategories] = useState(
    listCategories ? listCategories[0] : null
  );
  console.log(data);
  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_CATEGORIES,
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      id: data.id,
      name: data?.name,
      categoryIds: categories,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().matches(RULES.noBlank).required("Required"),
    }),
    validateOnChange: true,
    onSubmit: async (value) => {
      setIsAdd(true);

      const report = {
        id: data.id,
        name: value.name,
        categoryIds: categories?.id,
      };

      try {
        await sendRequest({
          type: REQUEST_TYPE.ADMIN_EDIT_TAG,
          data: report,
        });
        setIsAdd(false);
      } catch (error) {
        console.log(error);
        setIsAdd(false);
      }
      setFlag.off();
    },
  });

  return (
    <div className="w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-gray-900 overflow-y-scroll">
      <div className="h-full flex flex-col space-y-3">
        <div className="px-5 py-2 flex space-x-5 shadow border-b-2 ">
          <span className="text-lg grow text-title">Edit Tag</span>
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
        <div className="px-8 grow overflow-y-auto p-2">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col py-6 gap-8">
              <div className="relative ">
                <Label htmlFor="name" className="text-md text-title-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name Tag"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
              <div>
                <Label
                  htmlFor="gender"
                  className="text-sm text-title-foreground"
                >
                  Categories
                </Label>
                <Select
                  name="categories"
                  onValueChange={setCategories}
                  defaultValue={categories?.id?.toString()}
                >
                  <SelectTrigger className="w-full text-sm">
                    <SelectValue placeholder="Categories" />
                  </SelectTrigger>
                  <SelectContent className="h-52 overflow-y-scroll bg-gray-900 w-full">
                    {listCategories &&
                      listCategories?.length > 0 &&
                      listCategories.map((item) => (
                        <SelectItem key={item?.id} value={item?.id?.toString()}>
                          {item?.name}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="px-5 py-2 border-t">
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
