import { useCallback, useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import edjsHTML from "editorjs-html";

import "./style.css";
import { Button } from "../ui/button";

import { DetailBlog } from "./editDetail";

import { Loader2, PenTool, Settings2, ShieldCheck } from "lucide-react";

import { EditorOutput } from "./output";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "@/redux/authSlice";
import { createAxios } from "@/api/createInstance";
import { RootState } from "@/redux/store";
import { showToast } from "@/hooks/useToast";
import ClientServices from "@/services/client/client";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BlogPost from "@/types/blog";
import convertHTMLToEditorJS from "./convert";
import { Loading } from "../Loading/loading";
import CategoryType from "@/types/categories";
import TagType from "@/types/tags";
import useBoolean from "@/hooks/useBoolean";
import Modal from "../Modal/modal";
import { ChangeDraft } from "../Modal/Blog/changeDraft";

interface ReportType {
  title: string;
  description: string;
  categoryIds: CategoryType;
  tagIds: TagType[];
  seriesId?: number;
  content: string;
  avatar: string;
}

const EditBlog = () => {
  function convertToReportType(blogPost: BlogPost): ReportType {
    const { title, description, content, avatar } = blogPost;
    const categoryIds: CategoryType = {
      id: blogPost.categories && blogPost?.categories.id,
      name: blogPost.categories && blogPost?.categories.name,
    };
    const tagIds: TagType[] =
      blogPost.tags &&
      blogPost?.tags.map((tag) => ({
        id: tag.id,
        name: tag.name,
      }));
    const seriesId: number = blogPost.series && blogPost.series.id;

    return {
      title,
      description,
      content,
      avatar,
      categoryIds,
      tagIds,
    };
  }

  const { id } = useParams();
  const blog_id = Number(id);

  const ref = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState<boolean>(false);

  let editor: EditorJS | undefined;
  const [isLoading, setIsLoading] = useState(false);

  const [Step, setStep] = useState("STEP_ONE");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;

  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<ReportType | null>(location.state);
  const locationState = location.state as BlogPost;
  const [displayModal, setDisplayModal] = useState(false);
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  const [checkNull, setCheckNull] = useState(false);

  // ...

  useEffect(() => {
    // This function will be called whenever the route changes
    localStorage.removeItem("editBlog");
  }, [location]);

  useEffect(() => {
    if (locationState) {
      const reportData = convertToReportType(locationState);
      setReport(reportData);
    }
  }, [locationState]);

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
          const contentEdit = JSON.parse(localStorage.getItem("editBlog")!);
          if (report?.content) {
            const content = convertHTMLToEditorJS(report?.content);
            if (localStorage.getItem("editBlog")) {
              editor?.render(contentEdit as any);
            } else {
              editor?.render(content);
            }
          }
        },
        onChange: async () => {
          const content = await editor?.saver.save();
          localStorage.setItem("editBlog", JSON.stringify(content));
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

  const handleCancle = async () => {
    try {
      const { body } = await ClientServices.cancleBlog();
      console.log(body);
      if (body?.success) {
        setIsLoading(false);
        localStorage.removeItem("editBlog");
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
  console.log(report);

  useEffect(() => {
    const init = async () => {
      if (!report?.content) {
        return;
      }
      await initializeEditor();
    };

    if (isMounted) {
      if (!report?.content) {
        return;
      }
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
            report={report || ({} as BlogPost)}
            setReport={setReport}
          />
        );
      case "STEP_THREE":
        return <EditorOutput report={report || ({} as BlogPost)} />;
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container  min-h-0 px-9 py-12">
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
            <button
              onClick={handleCancle}
              type="button"
              className="px-5 py-1.5 float-right button-cancle"
            >
              <svg viewBox="0 0 448 512" className="svgIcon">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
              </svg>
            </button>

            {Step === "STEP_THREE" ? (
              isLoading ? (
                <Button className="px-5 py-1.5 float-right" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <button
                  onClick={() => {
                    setDisplayCreate.on(), setDisplayModal(true);
                  }}
                  disabled={!checkNull || !report?.title ? true : false}
                  className={`px-5 py-1.5 float-right button-save-end ${
                    !checkNull || !report?.title
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
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

            <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
              {displayModal ? (
                <ChangeDraft
                  setFlag={setDisplayCreate}
                  id={blog_id}
                  report={report}
                />
              ) : null}
            </Modal>
          </div>
        </div>

        <div>{render()}</div>
      </div>
    </div>
  );
};
export default EditBlog;
