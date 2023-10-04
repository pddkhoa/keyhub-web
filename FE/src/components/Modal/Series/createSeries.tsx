import { createAxios } from "@/api/createInstance";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { showToast } from "@/hooks/useToast";
import { RULES } from "@/lib/rules";
import { createSeries } from "@/redux/apiRequest";
import { loginSuccess } from "@/redux/authSlice";
import { addSeries } from "@/redux/seriesSlice";
import { RootState } from "@/redux/store";
import { useFormik } from "formik";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

type CreateSeriesProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
};

export const CreateSeries: React.FC<CreateSeriesProps> = ({ setFlag }) => {
  const [bio, setBio] = useState<string>("");
  const [charCount, setCharCount] = useState<number>(bio.length);
  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    formik.setFieldValue("description", text);
    setBio(text);
    setCharCount(text.length);
  };

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().matches(RULES.noBlank).required("Required"),
    }),
    validateOnChange: true,
    onSubmit: async (value) => {
      setIsLoading(true);
      const report = {
        name: value.name,
        description: value.description,
      };

      console.log(report);

      setIsLoading(true);
      try {
        const { body } = await createSeries(report, accessToken, axiosJWT);
        console.log(body);
        if (body?.success) {
          setIsLoading(false);
          showToast("Add new series Thanh cong nha!", "success");
          setFlag.off();
          dispatch(addSeries(body.result));
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
    <div className="w-1/3 h-fit 2xl:w-xl sm:x-0 border rounded shadow bg-modal brightness-110 overflow-y-scroll">
      <div className="h-full flex flex-col space-y-3">
        <div className="px-5 py-2 flex space-x-5 shadow border-b ">
          <span className="text-lg grow text-title">Add New Series</span>
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
            <div className="flex flex-col">
              <div className="relative ">
                <Label
                  htmlFor="title"
                  className="text-md text-title-foreground"
                >
                  Title
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name Serise"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="relative ">
                <Label
                  htmlFor="description"
                  className="text-md text-title-foreground"
                >
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Description Series"
                  onChange={handleBioChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  maxLength={150}
                />
                <div className="float-right text-sm text-title-foreground">
                  Characters remaining: {charCount}/150
                </div>
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
