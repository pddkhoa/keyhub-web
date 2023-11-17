import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useAuth from "@/hooks/useAuth";
import { showToast } from "@/hooks/useToast";
import { RULES } from "@/lib/rules";
import ClientServices from "@/services/client/client";
import BlogPost from "@/types/blog";
import { useFormik } from "formik";
import { Loader2, X } from "lucide-react";
import { useState } from "react";
import * as Yup from "yup";

type ReportUserProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  data: BlogPost;
};

export const ReportUser: React.FC<ReportUserProps> = ({ setFlag, data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { axiosJWT, accessToken } = useAuth();

  const formik = useFormik({
    initialValues: {
      user_id: data.users.id,
      reason: "",
    },
    validationSchema: Yup.object().shape({
      reason: Yup.string().matches(RULES.noBlank).required("Required"),
    }),
    validateOnChange: true,
    onSubmit: async (value) => {
      const report = {
        user_id: data.users.id,
        reason: value.reason,
      };
      setIsLoading(true);
      try {
        const { body } = await ClientServices.reportUser(
          report,
          accessToken,
          axiosJWT
        );
        if (body?.success) {
          setIsLoading(false);
          showToast(body.message, "success");
          setFlag.off();
        } else {
          setIsLoading(false);
          showToast(body?.message || "Error", "error");
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
      //   await updateProfile(report, accessToken, axiosJWT, dispatch);
      //   if (isSuccess) {
      //     setFlag.off();
      //   }
    },
  });

  return (
    <div className="w-2/4 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal ">
      <div className="h-full flex flex-col space-y-5">
        <div className="px-5 py-2 flex space-x-5 shadow border-b-2">
          <span className="text-lg grow text-title">
            Report User @{data.users.second_name}
          </span>
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
                    htmlFor="reason"
                    className="text-md text-title-foreground"
                  >
                    Reason
                  </Label>
                  <Textarea
                    id="reason"
                    name="reason"
                    placeholder="Tell us a little bit about yourself"
                    maxLength={150}
                    onBlur={formik.handleBlur}
                    value={formik.values.reason}
                    onChange={formik.handleChange}
                  />
                  <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
                    {formik.errors.reason && formik.touched.reason ? (
                      <X className="text-red-500" />
                    ) : null}
                  </div>
                  {/* <div className="float-right text-sm text-title-foreground">
                    Characters remaining: {charCount}/150
                  </div> */}
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
