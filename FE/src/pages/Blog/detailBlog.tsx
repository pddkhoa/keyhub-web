import AlphabetAvatar from "@/components/Avatar/avatar";
import { EditorOutput } from "@/components/Editor/output";
import { Button } from "@/components/ui/button";
import BlogPost from "@/types/blog";
import { Image, View } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Output from "editorjs-blocks-react-renderer";
import { format } from "date-fns";
import { RootState } from "@/redux/store";

export const DetailBlog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState<BlogPost>();
  const userData = useSelector((state: RootState) => state.user.detail?.data);

  useEffect(() => {
    const { state } = location;
    if (state === null || typeof state !== "object") {
      navigate("/login", { replace: true });
      return;
    }
    setData(state);
  }, [location, navigate]);

  console.log(data);
  const blocks = [];

  // Phân tích mã HTML để tạo các khối
  const parser = new DOMParser();
  const doc = parser.parseFromString(data?.content, "text/html");
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
                              <div>{data?.categories.name}</div>
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
                          {data?.title}
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
                                {data?.tags && data.tags.length > 0 ? (
                                  data.tags.map((item) => (
                                    <span
                                      key={item.id}
                                      className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
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
                <div className="flex flex-col w-full space-y-3 mt-5">
                  <div className="flex items-center space-x-3 text-xl text-title">
                    Comments
                  </div>
                  <div className="relative flex flex-col bg-card rounded-xl">
                    <div className="flex flex-col h-fit">
                      <div className="flex flex-row w-full p-3">
                        <img
                          className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                          alt="Noob master's avatar"
                          src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                        />
                        <span className="flex relative flex-1 p-3">
                          <textarea
                            className="flex flex-1 bg-transparent outline-none rounded-lg text-title-foreground p-2"
                            rows={3}
                          ></textarea>
                        </span>
                      </div>
                      <div className="flex flex-row gap-3 justify-between items-center p-3 px-4 border-t text-title-foreground">
                        <div className="flex gap-4">
                          <Image className="hover:brightness-110 cursor-pointer" />
                          <View className="hover:brightness-110 cursor-pointer" />
                        </div>
                        <div>
                          <Button>Post Comment</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-4 p-3">
                    <img
                      className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                      alt="Noob master's avatar"
                      src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                    />
                    <div className="flex-col mt-1">
                      <div className="flex items-center flex-1 px-4 font-bold text-title-foreground leading-tight">
                        Noob master
                        <span className="ml-2 text-xs font-normal text-title-foreground">
                          2 weeks ago
                        </span>
                      </div>
                      <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                        Wow!!! how you did you create this?
                      </div>
                      <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg
                          className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                          viewBox="0 0 95 78"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                      <button className="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg
                          className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 ml-16 border-border" />
                  <div className="flex flex-row pt-1 md-10 md:ml-16">
                    <img
                      className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                      alt="Noob master's avatar"
                      src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                    />
                    <div className="flex-col mt-1">
                      <div className="flex items-center flex-1 px-4 font-bold text-title-foreground leading-tight">
                        Noob master
                        <span className="ml-2 text-xs font-normal text-title-foreground">
                          2 weeks ago
                        </span>
                      </div>
                      <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                        Wow!!! how you did you create this?
                      </div>
                      <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg
                          className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                          viewBox="0 0 95 78"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                      <button className="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg
                          className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-row mt-4 p-3">
                    <img
                      className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                      alt="Noob master's avatar"
                      src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80"
                    />
                    <div className="flex-col mt-1">
                      <div className="flex items-center flex-1 px-4 font-bold text-title-foreground leading-tight">
                        Noob master
                        <span className="ml-2 text-xs font-normal text-title-foreground">
                          2 weeks ago
                        </span>
                      </div>
                      <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                        Wow!!! how you did you create this?
                      </div>
                      <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg
                          className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                          viewBox="0 0 95 78"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                            fillRule="nonzero"
                          />
                        </svg>
                      </button>
                      <button className="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg
                          className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
