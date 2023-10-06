import { useCallback, useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import edjsHTML from "editorjs-html";

import "./style.css";
import { Button } from "../ui/button";

import { DetailBlog } from "./editDetail";
import TagType from "@/types/tags";
import CategoryType from "@/types/categories";

import {
  ArrowBigRightDash,
  Loader2,
  PenTool,
  Save,
  Settings2,
  ShieldCheck,
} from "lucide-react";

import { EditorOutput } from "./output";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/redux/authSlice";
import { createAxios } from "@/api/createInstance";
import { RootState } from "@/redux/store";
import { createBlog, uploadFiles } from "@/redux/apiRequest";
import { useFormik } from "formik";
import { showToast } from "@/hooks/useToast";
import { createBlogSuccess } from "@/redux/blogSlice";
import * as Yup from "yup";
import { RULES } from "@/lib/rules";

interface ReportType {
  title: string;
  description: string;
  categoryIds: CategoryType;
  tagIds: TagType[];
  seriesId: number;
  content: string;
  avatar: string;
}

export const Editor = () => {
  const ref = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  let editor: EditorJS | undefined;
  const [report, setReport] = useState<ReportType>();
  const [isLoading, setIsLoading] = useState(false);

  const [Step, setStep] = useState("STEP_ONE");

  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;

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

          const result = edjsParser.parse(content);
          setReport({ ...report, content: result?.join("") } as ReportType);
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
                  const { body } = await uploadFiles(
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
          categoryIds: report.categoryIds.id,
          tagIds: report.tagIds.map((item) => item.id),
          seriesId: report.seriesId,
          avatar: report.avatar,
        };
      }
      console.log(reportss);
      setIsLoading(true);
      try {
        const { body } = await createBlog(reportss, accessToken, axiosJWT);
        console.log(body);
        if (body?.success) {
          setIsLoading(false);
          dispatch(createBlogSuccess);
          localStorage.removeItem("editorContent");
          setReport({} as ReportType);
          showToast("Create Thanh cong nha!", "success");
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
  const render = () => {
    switch (Step) {
      case "STEP_ONE":
        return (
          <div className=" w-full">
            <div id="editor" className=" rounded-lg w-full p-2 border" />
            <p className="text-sm text-gray-500">
              Use{" "}
              <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">
                Tab
              </kbd>{" "}
              to open the command menu.
            </p>
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
            <Button
              type="button"
              className="px-5 py-1.5 float-right"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              Cancle
            </Button>
            <Button
              type="submit"
              className="px-3 py-1.5 float-right"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              <Save className="mr-2 w-6 h-6 p-1" />
              Save to daft
            </Button>
            {Step === "STEP_THREE" ? (
              isLoading ? (
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
              )
            ) : null}
          </form>
        </div>
      </div>

      <div>{render()}</div>
    </div>
  );
};
