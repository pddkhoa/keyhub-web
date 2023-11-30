import { useCallback, useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import edjsHTML from "editorjs-html";

import "./style.css";

import { DetailBlog } from "./editDetail";
import TagType from "@/types/tags";
import CategoryType from "@/types/categories";

import { PenTool, Settings2, ShieldCheck } from "lucide-react";

import { EditorOutput } from "./output";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/redux/authSlice";
import { createAxios } from "@/api/createInstance";
import { RootState } from "@/redux/store";
import { useFormik } from "formik";
import { showToast } from "@/hooks/useToast";
import { createBlogSuccess } from "@/redux/blogSlice";
import ClientServices from "@/services/client/client";
import { useNavigate } from "react-router-dom";
import useFetch from "@/hooks/useFetch";

interface ReportType {
  title: string;
  description: string;
  categoryIds: CategoryType;
  tagIds: TagType[];
  seriesId: number;
  content: string;
  avatar: string;
}

const Editor = () => {
  const ref = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  let editor: EditorJS | undefined;
  const [report, setReport] = useState<ReportType>();
  const [isLoading, setIsLoading] = useState(false);
  const [checkNull, setCheckNull] = useState(false);
  const [Step, setStep] = useState("STEP_ONE");

  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;

  const navigate = useNavigate();

  useEffect(() => {
    // This function will be called whenever the route changes
    localStorage.removeItem("editorContent");
  }, [location]);

  //Initialize editorjs
  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const List = (await import("@editorjs/list")).default;
    const Code = (await import("@editorjs/code")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;
    const Paragraph = (await import("@editorjs/paragraph")).default;
    const Quote = (await import("@editorjs/quote")).default;
    const ImageTool = (await import("@editorjs/image")).default;

    if (!ref.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      editor = new EditorJS({
        holder: "editor",
        onReady: async () => {
          ref.current = editor;
          const content = JSON.parse(localStorage.getItem("editorContent")!);
          if (content.blocks.length !== 0) {
            editor?.render(content);
          }
        },
        onChange: async () => {
          const content = await editor?.saver.save();
          localStorage.setItem("editorContent", JSON.stringify(content));
          const edjsParser = edjsHTML();
          setCheckNull(false);
          if (content?.blocks.length !== 0) {
            setCheckNull(true);
          }
          const result = edjsParser.parse(content);
          setReport((prev): any => ({
            ...prev,
            content: result?.join(""),
          }));
        },
        placeholder: "Type here to write your post...",
        inlineToolbar: true,
        data: { blocks: [] },
        tools: {
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
          header: Header,
          image: {
            class: ImageTool,

            config: {
              uploader: {
                async uploadByFile(file: File) {
                  // upload to uploadthing
                  const { body } = await ClientServices.uploadFiles(
                    file,
                    accessToken,
                    axiosJWT
                  );

                  return {
                    success: 1,
                    file: {
                      url: body?.result,
                    },
                  };
                },
              },
              withBorder: true,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          code: Code,
          inlineCode: InlineCode,
          embed: Embed,
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: "CMD+SHIFT+O",
            config: {
              quotePlaceholder: "Enter a quote",
              captionPlaceholder: "Quote's author",
            },
          },
        },
      });
    }
  }, []);
  console.log(report);

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      description: "",
      categoryIds: "",
      tagIds: "",
      seriesId: "",
      avatar: "",
    },

    onSubmit: async () => {
      let reportss;
      if (report) {
        reportss = {
          title: report.title,
          content: report.content,
          description: report.description,
          categoryIds: report.categoryIds?.id,
          tagIds: report.tagIds.map((item) => item.id),
          seriesId: report.seriesId,
          avatar: report.avatar,
        };
      }
      console.log(reportss);
      setIsLoading(true);
      try {
        const { body } = await ClientServices.createBlog(
          reportss,
          accessToken,
          axiosJWT
        );
        console.log(body);
        if (body?.success) {
          setIsLoading(false);
          dispatch(createBlogSuccess);
          localStorage.removeItem("editorContent");
          setReport({} as ReportType);
          showToast("Create Thanh cong nha!", "success");
          navigate("/profile");
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

  useEffect(() => {
    formik.setFieldValue("content", report?.content);
  }, [report?.content, setReport]);

  const handleSaveDaft = async () => {
    let reportDatf;
    if (report) {
      reportDatf = {
        title: report.title,
        content: report.content,
        description: report.description,
        categoryIds: report.categoryIds?.id,
        tagIds:
          report.tagIds.length > 0
            ? report.tagIds?.map((item) => item.id)
            : undefined,
        seriesId: report.seriesId,
        avatar: report.avatar,
      };
    }
    console.log(reportDatf);
    try {
      const { body } = await ClientServices.createBlogDaft(
        reportDatf,
        accessToken,
        axiosJWT
      );
      console.log(body);
      if (body?.success) {
        setIsLoading(false);
        // dispatch(createBlogSuccess);
        localStorage.removeItem("editorContent");
        setReport({} as ReportType);
        showToast("add daft Thanh cong nha!", "success");
        navigate("/profile");
      } else {
        setIsLoading(false);
        showToast(body?.message || "Erorr", "error");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const handleCancle = async () => {
    try {
      const { body } = await ClientServices.cancleBlog();
      console.log(body);
      if (body?.success) {
        setIsLoading(false);
        localStorage.removeItem("editorContent");
        setReport({} as ReportType);
        navigate(0);
        showToast("cancle  Thanh cong nha!", "success");
      } else {
        setIsLoading(false);
        showToast(body?.message || "Erorr", "error");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };

    if (isMounted) {
      init();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor, Step]);

  if (!isMounted) {
    return null;
  }

  //

  //
  const render = () => {
    switch (Step) {
      case "STEP_ONE":
        return (
          <div className=" w-full">
            <div
              id="editor"
              className={`rounded-lg w-full p-2 border ${
                !checkNull ? "border-red-500" : "border-border"
              }`}
            />
            <div className="flex justify-between">
              <p className="text-sm text-gray-500">
                Use{" "}
                <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
                  Tab
                </kbd>{" "}
                to open the command menu.
              </p>
              {!checkNull ? (
                <p className="text-sm float-right text-red-500">
                  Content required
                </p>
              ) : null}
            </div>
          </div>
        );
      case "STEP_TWO":
        return (
          <DetailBlog
            report={report || ({} as ReportType)}
            setReport={setReport}
          />
        );
      case "STEP_THREE":
        return <EditorOutput report={report || ({} as ReportType)} />;
    }
  };

  return (
    <div className="container  min-h-0 px-9 py-10">
      <div className=" p-4 w-[1200px]  rounded-lg pt-10 mx-auto text-title space-y-10">
        <div className="w-full mx-auto">
          <div>
            <ol className="grid grid-cols-1 divide-x divide-border overflow-hidden rounded-lg border border-border text-sm text-title shadow-2xl  sm:grid-cols-3">
              <li
                onClick={() => {
                  setStep("STEP_ONE");
                }}
                className={`flex items-center justify-center gap-2 p-4 hover:bg-gray-800 hover:text-title-foreground cursor-pointer ${
                  Step === "STEP_ONE"
                    ? " bg-gray-800 text-title-foreground"
                    : null
                }`}
              >
                <div className="p-2 rounded-full bg-red-800 shadow-xl">
                  <PenTool className="w-5 h-5" />
                </div>
                <p className="leading-none">
                  <strong className="block font-medium"> Content </strong>
                  <small className="mt-1"> Fill content in area. </small>
                </p>
              </li>
              <li
                onClick={() => {
                  setStep("STEP_TWO");
                }}
                className={`flex items-center justify-center gap-2 p-4 hover:bg-gray-800 hover:text-title-foreground cursor-pointer ${
                  Step === "STEP_TWO"
                    ? " bg-gray-800 text-title-foreground"
                    : null
                }`}
              >
                <div className="p-2 rounded-full bg-red-800 shadow-xl">
                  <Settings2 className="w-5 h-5" />
                </div>
                <p className="leading-none">
                  <strong className="block font-medium"> Setting </strong>
                  <small className="mt-1"> Setting my blog </small>
                </p>
              </li>
              <li
                onClick={() => {
                  setStep("STEP_THREE");
                }}
                className={`flex items-center justify-center gap-2 p-4 hover:bg-gray-800 hover:text-title-foreground cursor-pointer ${
                  Step === "STEP_THREE"
                    ? " bg-gray-800 text-title-foreground"
                    : null
                }`}
              >
                <div className="p-2 rounded-full bg-red-800 shadow-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <p className="leading-none">
                  <strong className="block font-medium"> Confirmation </strong>
                  <small className="mt-1"> Check last one</small>
                </p>
              </li>
            </ol>
          </div>
        </div>

        <div className="fixed bottom-10 z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-5">
          <div className="flex gap-5 space-x-5">
            <form onSubmit={formik.handleSubmit} className="flex gap-5">
              <button
                onClick={handleCancle}
                type="button"
                className="px-5 py-1.5 float-right button-cancle"
              >
                <svg viewBox="0 0 448 512" className="svgIcon">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                </svg>
              </button>
              <button
                type="button"
                onClick={handleSaveDaft}
                disabled={!checkNull || !report?.title ? true : false}
                className={`px-5 py-1.5 float-right button-save-daft ${
                  !checkNull || !report?.title
                    ? "cursor-not-allowed"
                    : "cursor-pointer"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth={10}
                  id="save"
                  className="svgIcon-save"
                >
                  <path
                    fill="#ffff"
                    d="M18 8.1V8A6 6 0 0 0 6.26 6.26 6 6 0 0 0 6 17.64V21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3.1a5 5 0 0 0 0-9.8ZM13 20h-2v-2h2Zm3-3v3h-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3H8v-8h5.59L16 14.41Zm2-1.17V14a1 1 0 0 0-.29-.71l-3-3A1 1 0 0 0 14 10H7a1 1 0 0 0-1 1v4.47a4 4 0 0 1 1.27-7.4 1 1 0 0 0 .8-.8A4 4 0 0 1 16 8v1a1 1 0 0 0 1 1 3 3 0 0 1 1 5.83Z"
                    data-name="Layer 2"
                  ></path>
                </svg>
              </button>
              {Step === "STEP_THREE" ? (
                isLoading ? (
                  <button
                    className={`px-5 py-1.5 float-right button-save-end cursor-not-allowed
                      
                  `}
                    disabled
                  >
                    Please Wait..
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={`px-5 py-1.5 float-right button-save-end ${
                      !checkNull || !report?.title
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                    disabled={!checkNull || !report?.title ? true : false}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      id="checkmark"
                      className="svgIcon-end"
                    >
                      <path
                        fill="currentColor"
                        d="M8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8C13 10.7614 10.7614 13 8 13ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M10.8558 5.14907C11.048 5.34783 11.0481 5.67009 10.8558 5.86885L7.97222 8.85092C7.87992 8.94638 7.75474 9 7.6242 9 7.49367 9 7.36848 8.94638 7.27618 8.85093L6.14415 7.68025C5.95195 7.48148 5.95195 7.15922 6.14416 6.96046 6.33636 6.7617 6.64799 6.7617 6.84019 6.96047L7.6242 7.77125 10.1598 5.14908C10.352 4.95031 10.6636 4.95031 10.8558 5.14907zM6 10.5C6 10.2239 6.22386 10 6.5 10H9.49826C9.7744 10 9.99826 10.2239 9.99826 10.5 9.99826 10.7761 9.7744 11 9.49826 11H6.5C6.22386 11 6 10.7761 6 10.5z"
                      ></path>
                    </svg>
                  </button>
                )
              ) : null}
            </form>
          </div>
        </div>
        <div>{render()}</div>
      </div>
    </div>
  );
};
export default Editor;
