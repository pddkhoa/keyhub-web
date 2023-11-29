import CategoryType from "@/types/categories";
import { useState } from "react";
import { TabListItems } from "../Profile/accountDetail";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormik } from "formik";
import { RULES } from "@/lib/rules";
import * as Yup from "yup";
import { Loader2 } from "lucide-react";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import { ListUserFollow } from "./listUserFollow";
import useBoolean from "@/hooks/useBoolean";
import Modal from "@/components/Modal/modal";
import { UploadAvatarCategories } from "./uploadAvatar";
import { Button } from "@/components/ui/button";

interface SettingCategoriesProps {
  data?: CategoryType;
}

export const SettingCategories: React.FC<SettingCategoriesProps> = ({
  data,
}) => {
  const [tabs, setTabs] = useState("OVERVIEW");

  const [displayModal, setDisplayModal] = useState(false);
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  const renderContent = () => {
    switch (tabs) {
      case "OVERVIEW":
        return <OverviewCategories data={data} />;
      case "USER_FOLLOW":
        return <ListUserFollow />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="flex  border-b p-6">
        <div className="w-full  p-8 sm:flex sm:space-x-6 bg-gray-900 text-gray-100">
          <div className="flex-shrink-0  mb-6 h-36  w-36 sm:mb-0">
            <img
              src={data?.avatar?.toString()}
              alt=""
              className="object-cover object-center w-full h-full rounded bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{data?.name}</h2>
            </div>
            <div>{data?.description}</div>
            <div className="mt-4">
              <Button
                onClick={() => {
                  setDisplayCreate.on(), setDisplayModal(true);
                }}
                variant={"gradient"}
                className="rounded-sm"
              >
                Upload New Avatar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <ul className="grid grid-flow-col text-center text-gray-500">
        <TabListItems
          title="Overview"
          tabs={"OVERVIEW"}
          setTabs={setTabs}
          activeTab={tabs}
        />
        <TabListItems
          title="User Follow"
          tabs={"USER_FOLLOW"}
          setTabs={setTabs}
          activeTab={tabs}
        />
      </ul>
      <div className=" text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        {renderContent()}
      </div>
      <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
        {displayModal ? (
          <UploadAvatarCategories
            avatar={data?.avatar}
            setFlag={setDisplayCreate}
          />
        ) : null}
      </Modal>
    </>
  );
};

interface OverviewCategoriesProps {
  data: CategoryType;
}

export const OverviewCategories: React.FC<OverviewCategoriesProps> = ({
  data,
}) => {
  const [bio, setBio] = useState<string>(data?.description || "");
  const [charCount, setCharCount] = useState<number>(bio?.length);
  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    formik.setFieldValue("description", text);
    setBio(text);
    setCharCount(text.length);
  };

  const { isLoading, sendRequest } = useFetch();

  const formik = useFormik({
    initialValues: {
      id: data?.id,
      name: data?.name,
      description: data?.description,
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().matches(RULES.noBlank).required("Required"),
      description: Yup.string().matches(RULES.noBlank).required("Required"),
    }),
    validateOnChange: true,
    onSubmit: async (value) => {
      const report = {
        id: data?.id,
        name: value?.name,
        description: value?.description,
      };
      await sendRequest({ type: REQUEST_TYPE.UPDATE_CATEGORIES, data: report });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-8 grid w-full items-center gap-4">
        <div className="flex flex-col space-y-2 py-4">
          <div className="relative px-2">
            <Label htmlFor="name" className="text-md text-title-foreground">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              onBlur={formik.handleBlur}
              value={formik.values.name}
              onChange={formik.handleChange}
              className="w-full text-sm px-4 py-3  rounded-lg"
            />
          </div>
          <div className="relative ">
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
                    id="description"
                    name="description"
                    className="text-white"
                    placeholder="Tell us a little bit about yourself"
                    maxLength={150}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                    onChange={handleBioChange}
                  />
                  <div className="float-right text-sm text-title-foreground">
                    Characters remaining: {charCount}/150
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            className="w-fit bg-blue-600 text-white"
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Update
          </Button>
        )}
      </div>
    </form>
  );
};
