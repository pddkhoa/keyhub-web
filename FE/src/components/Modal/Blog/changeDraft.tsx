import { createAxios } from "@/api/createInstance";
import { Loading } from "@/components/Loading/loading";
import { showToast } from "@/hooks/useToast";
import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import CategoryType from "@/types/categories";
import TagType from "@/types/tags";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ReportType {
  title: string;
  description: string;
  categoryIds: CategoryType;
  tagIds: TagType[];
  seriesId?: number;
  content: string;
  avatar: string;
}

type ChangeDraftProps = {
  setFlag: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  id: number;
  report: ReportType;
};

export const ChangeDraft: React.FC<ChangeDraftProps> = ({
  setFlag,
  id,
  report,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;
  const [isPublic, setIsPublic] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      description: "",
      categoryIds: "",
      tagIds: "",
      seriesId: "",
      avatar: "",
      status_id: "",
    },

    onSubmit: async () => {
      let reportDraft;
      let reportPublic;
      if (report) {
        reportDraft = {
          title: report.title,
          content: report.content,
          description: report.description,
          categoryIds: report.categoryIds.id,
          tagIds: report.tagIds.map((item) => item.id),
          seriesId: report.seriesId,
          avatar: report.avatar,
          status_id: 0,
        };
        reportPublic = {
          title: report.title,
          content: report.content,
          description: report.description,
          categoryIds: report.categoryIds.id,
          tagIds: report.tagIds.map((item) => item.id),
          seriesId: report.seriesId,
          avatar: report.avatar,
          status_id: 1,
        };
      }
      console.log(reportDraft);
      setIsLoading(true);
      try {
        const { body } = await ClientServices.updateBlog(
          id,
          isPublic ? reportPublic : reportDraft,
          accessToken,
          axiosJWT
        );
        console.log(body);
        if (body?.success) {
          setIsLoading(false);
          // dispatch(createBlogSuccess);
          // localStorage.removeItem("editBlog");
          // setReport({} as BlogPost);
          showToast("Edit Thanh cong nha!", "success");
          // navigate("/profile");
          setFlag.off();
        } else {
          setIsLoading(false);
          showToast(body?.message || "Erorr", "error");
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal brightness-150 overflow-y-scroll">
      <div className="px-5 py-2 flex justify-end space-x-5 shadow border-b-2 ">
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

      {/*body*/}
      <div className="text-center p-5  flex-auto justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-16 h-16 flex items-center text-blue-800 mx-auto"
          id="post-it"
        >
          <path
            fill="currentColor"
            d="M59.46,34.76,49.28,32.03,48.09,34.1a.99926.99926,0,0,1-1.73-1l.92-1.6-5.74-1.54a3.43008,3.43008,0,0,1-2.05,2.04,3.08512,3.08512,0,0,1,3.51,3.00006V49a2.97886,2.97886,0,0,1-1.43,2.54l-4.21,4.22,7.65,2.05a2.0114,2.0114,0,0,0,2.45-1.42l1.03-3.86a2.00671,2.00671,0,0,1,2.45-1.42l3.86,1.04a1.99613,1.99613,0,0,0,2.45-1.41l3.63-13.53A2.01125,2.01125,0,0,0,59.46,34.76Z"
          ></path>
          <path
            fill="currentColor"
            d="M50.41992 52.05a.98491.98491 0 00-.96.74l-.96 3.58 5.75-3.33-3.57-.96A1.09207 1.09207 0 0050.41992 52.05zM35.99994 52a1.003 1.003 0 00-1 1v3.7L39.7 52z"
          ></path>
          <path
            fill="currentColor"
            d="M39.99994 51a2.00591 2.00591 0 002-2V35a2.00587 2.00587 0 00-2-2H31.77l-2.02 3.5A.99926.99926 0 0128.02 35.49994L29.46 33h-11.46a2.00587 2.00587 0 00-2 2V57a2.00591 2.00591 0 002 2h14a2.00591 2.00591 0 002-2V53a2.00587 2.00587 0 012-2zm-12-1h-6A1.00011 1.00011 0 0122 48h5.99994A1.00011 1.00011 0 0127.99994 50zm5-5h-11A1.00011 1.00011 0 0122 43H32.99994A1.00012 1.00012 0 0132.99994 45zm0-5h-11A1.00011 1.00011 0 0122 38H32.99994A1.00012 1.00012 0 0132.99994 40zM53.75989 14.279L51.26 18.609c-.83 1.43756.05017 3.493 1.96411 4.59808 1.91394 1.105 4.13409.83948 4.96411-.59808l2.5-4.33014C62.56708 14.80475 55.82971 10.91339 53.75989 14.279z"
          ></path>
          <path
            fill="currentColor"
            d="M51.59 28.04c4.54541 2.25268 9.44451.4649 6.74591-4.081-3.12317 2.64264-9.06556-.75848-8.303-4.80218-5.301-.07764-4.40778 5.06982-.14234 7.84784-.042.02045-2.57965 4.46026-2.61053 4.49536l2 .53zM35.42108 16.67963l-2.49994 4.33c-.83 1.43762.05017 3.49311 1.96411 4.59809 1.91394 1.105 4.1341.83953 4.96412-.59809l2.5-4.33008C44.22827 17.20538 37.49084 13.314 35.42108 16.67963z"
          ></path>
          <path
            fill="currentColor"
            d="M33.24994,30.44c4.54565,2.25348,9.446.466,6.747-4.08044-3.12348,2.64221-9.06519-.75849-8.303-4.80219-5.30029-.07763-4.4079,5.06909-.14319,7.84723-.047.028-2.05658,3.55506-2.09076,3.5954h2.31Z"
          ></path>
          <path
            fill="currentColor"
            d="M28.87994 32l1.35-2.34c-2.56769-1.86566-4.76373-6.1195-1.8-8.25-.22241-1.05291-.57147-2.10919-1.73-2.35-.78522 3.53869-5.57336 3.40527-8.47 2.02l-.69.18005-2.79 4.84A.99926.99926 0 0113.02 25.09991L14.80994 21.99l-10.33 2.77A2.00516 2.00516 0 003.07 27.21L8.76 48.46a2.01135 2.01135 0 002.45 1.42l3.79-1.02V35a3.00879 3.00879 0 013-3zM20.42108 6.279l-2.49994 4.33c-.83 1.43756.05017 3.493 1.96411 4.59808 1.91394 1.105 4.1341.83948 4.96412-.59808l2.5-4.33014C29.22827 6.80475 22.49084 2.91339 20.42108 6.279z"
          ></path>
          <path
            fill="currentColor"
            d="M18.24994,20.04c4.54584,2.25274,9.44586.46551,6.74713-4.08093-3.12341,2.64245-9.06555-.75843-8.3031-4.80225-5.3006-.0777-4.40784,5.06934-.14288,7.84741-.05207.03565-1.70343,2.93994-1.74115,2.98578l2.73-.73Z"
          ></path>
        </svg>
        <h2 className="text-xl font-bold py-4 text-title uppercase">privacy</h2>
        <p className="text-sm text-gray-500 px-8">
          Please be cautious when selecting between 'Draft' and 'Public' rights.
        </p>
      </div>
      {/*footer*/}
      <div className="p-3  mt-2 text-center space-x-4 md:block py-8">
        <form onSubmit={formik.handleSubmit} className="space-x-16">
          <button
            onClick={() => {
              setIsPublic(false);
            }}
            className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
          >
            Draft
          </button>
          <button
            onClick={() => {
              setIsPublic(true);
            }}
            className="mb-2 md:mb-0 bg-blue-800 border border-blue-800 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:brightness-150"
          >
            Public
          </button>
        </form>
      </div>
    </div>
  );
};
