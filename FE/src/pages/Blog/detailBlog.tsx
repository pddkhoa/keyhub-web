import AlphabetAvatar from "@/components/Avatar/avatar";
import { Button } from "@/components/ui/button";
import BlogPost from "@/types/blog";
import { ChevronUp, Image, MessagesSquare, View } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Output from "editorjs-blocks-react-renderer";
import { format } from "date-fns";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import { createAxios } from "@/api/createInstance";
import { RootStateToken } from "@/types/token";
import { loginSuccess } from "@/redux/authSlice";
import { Loading } from "@/components/Loading/loading";
import CommentType from "@/types/comment";
import { showToast } from "@/hooks/useToast";
import convertDate from "@/components/FormatDate/formatDate";

export const DetailBlog = () => {
  const userData = useSelector((state: RootState) => state.user.detail?.data);
  const blog = useSelector((state: RootState) => state.blog.blog.result);
  const dispatch = useDispatch();
  const auth = useSelector((state: RootStateToken) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;
  const [blogData, setBlogData] = useState<BlogPost>();

  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const blog_id = Number(id);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { body } = await ClientServices.getAllBlogByID(
          blog_id,
          accessToken,
          axiosJWT
        );

        if (body?.success) {
          setLoading(false);

          setBlogData(body?.result);
        } else {
          // Xử lý khi có lỗi từ API
          setLoading(false);

          console.error(body?.message);
        }
      } catch (error) {
        // Xử lý khi có lỗi trong quá trình gọi API
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const blocks = [];

  // Phân tích mã HTML để tạo các khối
  const parser = new DOMParser();

  const doc = parser.parseFromString(blogData?.content, "text/html");
  const elements = doc.body.children; // Lấy tất cả các phần tử con trong body của HTML

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    let block;

    if (element.tagName === "P") {
      // Xử lý thẻ <p>
      block = {
        type: "paragraph",
        data: {
          text: element.innerHTML, // Sử dụng nội dung HTML của mỗi đoạn văn làm text cho khối paragraph
        },
      };
    } else if (element.tagName.startsWith("H")) {
      // Xử lý thẻ tiêu đề <h1>, <h2>, <h3>,...
      block = {
        type: "header",
        data: {
          level: Number(element.tagName.charAt(1)), // Lấy cấp độ tiêu đề từ số sau chữ 'h'
          text: element.innerHTML, // Sử dụng nội dung HTML của tiêu đề
        },
      };
    } else if (element.tagName === "OL" || element.tagName === "UL") {
      // Xử lý thẻ danh sách <ol> và <ul>
      const listItems = Array.from(element.getElementsByTagName("li"));
      const listData = listItems.map((item) => item.innerHTML);

      block = {
        type: element.tagName === "OL" ? "list" : "list",
        data: {
          style: element.tagName === "OL" ? "unordered" : "ordered",
          items: listData,
        },
      };
    } else if (element.tagName === "PRE") {
      // Xử lý thẻ <pre> để hiển thị mã code
      const codeElement = element.querySelector("code");
      if (codeElement) {
        block = {
          type: "code",
          data: {
            code: codeElement.textContent, // Sử dụng nội dung của thẻ <code> làm mã code
            language: "javascript", // Đặt ngôn ngữ (ở đây là JavaScript, bạn có thể thay đổi theo ngôn ngữ của bạn)
          },
        };
      }
    } else if (element.tagName === "BLOCKQUOTE") {
      // Xử lý thẻ <q> để hiển thị trích dẫn (quote)
      block = {
        type: "quote",
        data: {
          text: element.innerHTML,
        },
      };
    } else if (element.tagName === "IMG") {
      // Xử lý thẻ <img>
      block = {
        type: "image",
        data: {
          file: {
            url: element.getAttribute("src"), // Lấy đường dẫn ảnh từ thuộc tính src
          },
          caption: element.getAttribute("alt") || "", // Lấy mô tả ảnh từ thuộc tính alt
        },
      };
    }
    if (block) {
      blocks.push(block);
    }
  }

  // Tạo đối tượng dữ liệu cho Editor.js
  const editorData = {
    time: new Date(),
    blocks: blocks,
    version: "2.22.2", // Thay đổi phiên bản tùy ý
  };
  if (loading) {
    return (
      <div className="mx-auto w-fit space-y-5">
        <div className="space-y-2">
          <h4 className="text-center opacity-70">Project Detail</h4>
          <div className="w-fit mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 opacity-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <p className="text-xs text-center">Please wait ...</p>
        </div>

        <div className="h-1.5 relative w-40 rounded bg-slate-200 dark:bg-gray-100">
          <div className="absolute h-full w-full">
            <Loading className="h-full before:bg-gradient-to-l before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-background dark:bg-gray-900 antialiased">
          <div className="flex justify-between px-4 mx-auto ">
            <div className="mx-auto w-full max-w-4xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <div className="mb-4 lg:mb-6 not-format">
                <div className="pt-8 pb-8  bg-background dark:bg-gray-900 antialiased">
                  <div className="flex justify-between mx-auto ">
                    <div className="mx-auto w-full max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                      <div className="mb-4 lg:mb-6 not-format">
                        <address className="flex items-center justify-between mb-6 not-italic">
                          <div className="inline-flex items-center mr-3 text-sm text-title ">
                            <AlphabetAvatar size={80} />
                            <div className="ml-4 mt-1">
                              <a
                                href="#"
                                rel="author"
                                className="text-xl font-bold text-title "
                              >
                                {userData.name}
                              </a>
                              <p className="text-base text-title-foreground ">
                                {userData.second_name}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col mt-1 items-center space-x-3 ">
                            <div className="flex gap-3 text-title">
                              <div>{blogData?.categories.name}</div>
                            </div>
                            <p className="text-base text-title-foreground ">
                              <div>
                                {format(editorData.time, "MMM. d, yyyy")}
                              </div>
                            </p>
                            <div></div>
                          </div>
                        </address>
                        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-title">
                          {blogData?.title}
                        </h1>
                        <div className="output">
                          <Output
                            data={editorData}
                            config={{
                              code: {
                                className: "language-js",
                              },
                              delimiter: {
                                className: "border border-2 w-16 mx-auto",
                              },
                              embed: {
                                className: "border-0",
                              },
                              header: {
                                className: "font-bold text-lg",
                              },
                              image: {
                                className:
                                  " flex flex-col h-[500px] w-[600px] justify-center items-center  mt-10 mx-auto bg-transparent",
                              },
                              list: {
                                className: "text-title-foreground",
                              },
                              paragraph: {
                                className:
                                  "text-base text-opacity-75 text-title-foreground para",
                                actionsClassNames: {
                                  alignment: "text-{alignment}", // This is a substitution placeholder: left or center.
                                },
                              },
                              quote: {
                                className: "py-3 px-5 italic",
                              },
                            }}
                          />
                        </div>
                      </div>

                      <div className="border-t-2 w-full mt-10 p-4">
                        <div className="flex flex-col space-y-3">
                          <div className="flex items-center space-x-3 text-title-foreground">
                            <span>Tags:</span>
                            <div className="flex gap-3">
                              <div>
                                {blogData?.tags && blogData.tags.length > 0 ? (
                                  blogData.tags.map((item) => (
                                    <span
                                      key={item.id}
                                      className="bg-blue-100 text-title-foreground text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                                    >
                                      {item.name}
                                    </span>
                                  ))
                                ) : (
                                  <div>No Selected Tags</div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" w-full mt-10 p-4">
                <Comments />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export const Comments = () => {
  const [comment, setComment] = useState<CommentType[]>();
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog_id = Number(id);
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);

  const auth = useSelector((state: RootStateToken) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;

  const [activeComment, setActiveComment] = useState();

  useEffect(() => {
    setLoading(true);
    const fetchComment = async () => {
      try {
        const { body } = await ClientServices.getCommentByBlog(
          blog_id,
          accessToken,
          axiosJWT
        );

        if (body?.success) {
          setLoading(false);

          setComment(body?.result);
        } else {
          // Xử lý khi có lỗi từ API
          setLoading(false);

          console.error(body?.message);
        }
      } catch (error) {
        // Xử lý khi có lỗi trong quá trình gọi API
        console.error(error);
        setLoading(false);
      }
    };

    fetchComment();
  }, [posting]);

  //Root Comment
  const rootComment = comment?.filter(
    (comment) => comment.parentComment === null
  );
  // Child Comment
  const childComment = (commentId: number) => {
    return comment?.filter(
      (comment) => comment.parentComment?.id === commentId
    );
  };
  // console.log(childComment(30));

  return (
    <div className="flex flex-col w-full space-y-3 mt-5">
      <div className="flex items-center space-x-3 text-xl text-title">
        Comments
      </div>
      <div className="relative flex flex-col bg-card rounded-xl">
        <CommentForm setPosting={setPosting} />
      </div>

      {rootComment && rootComment.length > 0
        ? rootComment.map((item) => (
            <>
              <Comment
                key={item.id}
                comment={item}
                child={childComment(item.id)}
                childComment={childComment}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                setPosting={setPosting}
                nestingLevel={0}
              />
            </>
          ))
        : null}
    </div>
  );
};

interface CommentProps {
  comment: CommentType;
  child?: CommentType[];
  isChild?: boolean;
  activeComment: any;
  setActiveComment: React.Dispatch<React.SetStateAction<undefined>>;
  setPosting: React.Dispatch<React.SetStateAction<boolean>>;
  parentId?: number;
  childComment: any;
  nestingLevel: number;
}

export const Comment: React.FC<CommentProps> = ({
  comment,
  child,
  isChild,
  activeComment,
  setActiveComment,
  setPosting,
  parentId,
  childComment,
  nestingLevel,
}) => {
  const isReplying =
    activeComment &&
    activeComment.type === "replying" &&
    activeComment.id === comment.id;

  const dispatch = useDispatch();
  const auth = useSelector((state: RootStateToken) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;
  const MAX_NESTING = 3;
  const [hideChildComment, setHideChildComment] = useState(false);

  const replies: CommentType[] = childComment(comment.id);
  const sumChildComment = replies.length;

  const hanldeDeleteComment = async (id: number) => {
    if (id) {
      setPosting(true);
      const { body } = await ClientServices.deleteComment(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setPosting(false);

        showToast("Delete Success", "success");
      } else {
        console.log(body?.message);
        setPosting(false);
        showToast("Delete Fail", "error");
      }
    }
  };
  const formatDate = (date: string) => {
    const inputDate = date;
    const formattedDate = convertDate(inputDate);

    return formattedDate;
  };

  return (
    <div>
      <div className="flex flex-row bg-card rounded-xl mt-4 p-3">
        <div
          style={{ width: 45, height: 45 }}
          className="relative cursor-pointer bg-card flex justify-center items-center group overflow-hidden hover:brightness-110 border-2 border-border  rounded-full  "
        >
          {comment.users.avatar ? (
            <img
              className="w-[100%] h-[100%] rounded-full object-cover"
              src={comment.users.avatar}
            />
          ) : (
            <svg
              className=" w-full h-full rounded-full bg-gray-100 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="flex-col mt-1">
          <div className="flex items-center  flex-1 px-4 font-bold text-title-foreground leading-tight">
            @{comment.users.second_name}
            <span className="ml-2 text-xs font-normal text-title-foreground">
              {formatDate(comment.createdAt)}.
            </span>
          </div>
          <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-blue-700">
            {isChild ? "@" + comment.parentComment?.users.second_name : null}
            <span className="ml-2 text-gray-600">{comment.content}</span>
          </div>
          <div className="flex gap-5">
            <div className="flex gap-2 items-center justify-center">
              {nestingLevel <= MAX_NESTING ? (
                <>
                  <button
                    onClick={() => {
                      setActiveComment({ id: comment.id, type: "replying" });
                    }}
                    className="inline-flex items-center px-1 pt-2 ml-1 flex-column group group-hover:brightness-150"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-6 h-6 ml-2 group-hover:brightness-150"
                      id="reply"
                    >
                      <linearGradient
                        id="a"
                        x1="169.657"
                        x2="406.21"
                        y1="131.461"
                        y2="368.014"
                        gradientTransform="matrix(1 0 0 -1 0 514)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#332c81"></stop>
                        <stop offset="1" stop-color="#e21d73"></stop>
                      </linearGradient>
                      <path
                        fill="url(#a)"
                        d="M14.1 191.4 186 43c15-13 38.8-2.4 38.8 17.7v78.2C381.6 140.7 506 172.1 506 320.8c0 60-38.7 119.4-81.4 150.5-13.3 9.7-32.3-2.5-27.4-18.2 44.3-141.6-21-179.2-172.5-181.4v85.9c0 20.2-23.7 30.7-38.8 17.7L14.1 226.9c-10.8-9.4-10.8-26.2 0-35.5z"
                      ></path>
                    </svg>
                  </button>
                  <span className="mt-2 text-title font-black group-hover:brightness-150">
                    {sumChildComment}
                  </span>
                </>
              ) : null}
            </div>
            <button
              onClick={() => {
                hanldeDeleteComment(comment.id);
              }}
              className="inline-flex items-center px-1 pt-2 ml-1 flex-column"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 flex items-center text-red-500 mx-auto hover:brightness-150"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {sumChildComment > 0 ? (
        <div
          className="mt-2 ml-6 text-title flex gap-2 hover:bg-input w-fit p-2 rounded-xl items-center cursor-pointer"
          onClick={() => {
            setHideChildComment(!hideChildComment);
          }}
        >
          <span>
            <ChevronUp
              className={`w-5 h-5 duration-200 text-gray-500 ${
                hideChildComment ? "rotate-180" : ""
              }`}
            />
          </span>
          <span className="flex gap-2 items-center text-gray-500">
            {sumChildComment} <MessagesSquare className="ml-2 w-5 h-5 " />
          </span>
        </div>
      ) : null}

      {isReplying && (
        <div className="mt-2 ml-10 bg-card rounded-lg">
          <CommentForm setPosting={setPosting} parentId={comment.id} />
        </div>
      )}
      {hideChildComment ? (
        <>
          {replies && replies?.length > 0 && (
            <div className="pt-1 md-10 ml-10">
              {replies?.map((commentChild) => (
                <Comment
                  childComment={childComment}
                  comment={commentChild}
                  key={commentChild.id}
                  isChild={true}
                  // child={[]}
                  setActiveComment={setActiveComment}
                  activeComment={activeComment}
                  setPosting={setPosting}
                  parentId={comment.id}
                  nestingLevel={nestingLevel + 1}
                />
              ))}
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};

interface CommentFormProps {
  setPosting: React.Dispatch<React.SetStateAction<boolean>>;
  parentId?: number;
}

export const CommentForm: React.FC<CommentFormProps> = ({
  setPosting,
  parentId,
}) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const blog_id = Number(id);

  const auth = useSelector((state: RootStateToken) => state.auth.login);
  const axiosJWT = createAxios(auth, dispatch, loginSuccess);
  const accessToken = auth?.data.token;

  const [InputComment, setInputComment] = useState<string>();
  const isCheckComment = InputComment?.length === 0;

  const handleReplyComment = async (InputComment: string) => {
    const report = {
      parent_id: parentId,
      content: InputComment,
    };
    if (InputComment) {
      setPosting(true);
      const { body } = await ClientServices.replyComment(
        report,
        blog_id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setPosting(false);
        showToast("Success", "success");
      } else {
        showToast("Error", "error");
        console.log(body?.message);
        setPosting(false);
      }
    }
  };

  const handlePostComment = async (InputComment: string) => {
    const report = {
      content: InputComment,
    };
    if (InputComment) {
      setPosting(true);
      const { body } = await ClientServices.addComment(
        report,
        blog_id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setPosting(false);
        showToast("Success", "success");
      } else {
        showToast("Error", "error");
        console.log(body?.message);
        setPosting(false);
      }
    }
  };
  const onSubmit = (event: any) => {
    event?.preventDefault();
    if (InputComment) {
      if (parentId) {
        console.log(1);
        handleReplyComment(InputComment);
      } else {
        console.log(2);

        handlePostComment(InputComment);
      }
    }
    setInputComment("");
  };
  return (
    <form onSubmit={onSubmit} className="flex flex-col  h-fit">
      <div
        className={`flex flex-row w-full  rounded-lg p-3 ${
          isCheckComment ? " border-red-500 border" : null
        }`}
      >
        <AlphabetAvatar size={50} />
        <span className="flex flex-col relative flex-1 p-3 ">
          <textarea
            name="comment"
            onChange={(e) => {
              setInputComment(e.target.value);
            }}
            placeholder="Comment in area"
            value={InputComment}
            className={`flex flex-1  bg-transparent outline-none rounded-lg text-title-foreground p-2 placeholder:text-gray-600 placeholder:italic`}
            rows={3}
          ></textarea>
          {isCheckComment ? <div className="text-red-500">Required</div> : null}
        </span>
      </div>
      <div className="flex flex-row gap-3 justify-between items-center p-3 px-4 border-t text-title-foreground">
        <div className="flex gap-4">
          <Image className="hover:brightness-110 cursor-pointer" />
          <View className="hover:brightness-110 cursor-pointer" />
        </div>
        <div className="flex gap-5">
          <Button
            disabled={isCheckComment}
            type="submit"
            className="disabled:cursor-not-allowed disabled:brightness-75"
          >
            Post
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="ml-2 w-6 h-6"
              viewBox="0 0 24 24"
              id="new-post"
            >
              <path
                fill="url(#paint0_linear_1233_4338)"
                fill-rule="evenodd"
                d="M1 7C1 3.68629 3.68629 1 7 1H17C20.3137 1 23 3.68629 23 7V17C23 20.3137 20.3137 23 17 23H7C3.68629 23 1 20.3137 1 17V7ZM7 3C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7ZM12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11V6C11 5.44772 11.4477 5 12 5Z"
                clip-rule="evenodd"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_1233_4338"
                  x1="12"
                  x2="12"
                  y1="1"
                  y2="23"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#57EAEA"></stop>
                  <stop offset="1" stop-color="#2BC9FF"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Button>
        </div>
      </div>
    </form>
  );
};
