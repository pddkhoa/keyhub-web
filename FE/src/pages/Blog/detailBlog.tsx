import AlphabetAvatar from "@/components/Avatar/avatar";
import BlogPost from "@/types/blog";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Output from "editorjs-blocks-react-renderer";
import { format } from "date-fns";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import { Loading } from "@/components/Loading/loading";
import { Comments } from "@/components/Comment/comment";
import "./detailBlog.css";
import useAuth from "@/hooks/useAuth";

const DetailBlog = () => {
  const userData = useSelector((state: RootState) => state.user.detail?.data);
  // const blog = useSelector((state: RootState) => state.blog.blog.result);
  const { axiosJWT, accessToken } = useAuth();
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
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-transparent antialiased">
      <div className="flex justify-between px-4 mx-auto">
        <div className="mx-auto w-full max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <div className="mb-4 lg:mb-6 not-format">
            <div className="pt-8 pb-8  bg-transparent antialiased">
              <div className="flex justify-between mx-auto ">
                <div className="mx-auto w-full max-w-6xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                  <div className="mb-4 lg:mb-6 not-format">
                    <div className="flex items-center justify-between mb-6 not-italic">
                      <div className="inline-flex items-center mr-3 text-sm text-title ">
                        <AlphabetAvatar size={110} />
                        <div className="ml-4 mt-1">
                          <a
                            href="#"
                            rel="author"
                            className="text-3xl font-bold text-title "
                          >
                            {userData.name}
                          </a>
                          <p className="text-base text-title-foreground ">
                            @{userData.second_name}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col mt-1 items-center space-x-3 ">
                        <div className="flex gap-3 text-title text-xl">
                          <div>{blogData?.categories.name}</div>
                        </div>
                        <p className="text-base text-title-foreground ">
                          <div>{format(editorData.time, "MMM. d, yyyy")}</div>
                        </p>
                      </div>
                    </div>
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-100 my-4">
                      {blogData?.title}
                    </h1>
                    <div className="output">
                      <Output
                        data={editorData}
                        config={{
                          code: {
                            className: "language-js py-4 text-white",
                          },
                          delimiter: {
                            className: "border border-2 w-16 mx-auto",
                          },
                          embed: {
                            className: "border-0",
                          },
                          header: {
                            className:
                              "text-2xl font-semibold  text-transparent text-white my-6",
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
                              "text-lg text-opacity-90 text-title para ",
                            actionsClassNames: {
                              alignment: "text-{alignment}",
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
                        <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-100">
                          Tags:
                        </span>
                        <div className="flex gap-3">
                          {blogData?.tags && blogData.tags.length > 0 ? (
                            blogData.tags.map((item) => (
                              <span
                                key={item.id}
                                className="p-1.5 bg-input text-title-foreground text-sm rounded-md font-bold hover:brightness-125 cursor-pointer "
                              >
                                #{item.name}
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

          <div className=" w-full mt-10 p-4">
            <Comments />
          </div>
        </div>
      </div>
    </main>
  );
};
export default DetailBlog;
