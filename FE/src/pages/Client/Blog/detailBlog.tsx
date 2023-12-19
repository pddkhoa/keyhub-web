import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Output from "editorjs-blocks-react-renderer";
import { RootState } from "@/redux/store";
import { Loading } from "@/components/Loading/loading";
import "./detailBlog.css";
import { Comments } from "@/components/Comment/comment";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import convertDate from "@/components/FormatDate/formatDate";

const DetailBlog = () => {
    // const blog = useSelector((state: RootState) => state.blog.blog.result);
    const { isLoading, sendRequest } = useFetch();
    const blogData = useSelector((state: RootState) => state.blog.detailBlog);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await sendRequest({
                type: REQUEST_TYPE.GET_DETAIL,
                slug: id,
            });

            // eslint-disable-next-line react-hooks/rules-of-hooks
        };

        fetchData();
    }, [id]);

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

    const formatDate = (date: any) => {
        const inputDate = date;
        const formattedDate = inputDate && convertDate(inputDate);
        return formattedDate;
    };

    // Tạo đối tượng dữ liệu cho Editor.js
    const editorData = {
        time: new Date(),
        blocks: blocks,
        version: "2.22.2", // Thay đổi phiên bản tùy ý
    };
    if (isLoading) {
        return (
            <div className="mx-auto w-fit space-y-5">
                <div className="h-1.5 relative w-40 rounded bg-slate-200 bg-gray-100">
                    <div className="absolute h-full w-full">
                        <Loading className="h-full before:bg-gradient-to-l before:from-indigo-500 before:via-purple-500 before:to-pink-500 before:rounded" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-5xl px-6 py-20 mx-auto space-y-12">
            <article className="space-y-8  text-gray-50">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracki md:text-5xl dark:text-black">
                        {blogData?.title}
                    </h1>

                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-500">
                        <div className="flex items-center md:space-x-2">
                            <p className="text-sm">
                                {blogData?.users?.name} •{" "}
                                {formatDate(blogData?.create_date)}
                            </p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                            {blogData?.categories?.name}
                        </p>
                    </div>
                    <img
                        src={blogData?.avatar}
                        alt=""
                        className="w-full h-96 object-cover rounded-lg bg-gray-500"
                    ></img>
                </div>
                <div className="output">
                    <Output
                        data={editorData || undefined}
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
                                    " flex flex-col h-[500px] w-[900px] justify-center items-center  mt-10 mx-auto  py-5 rounded-xl",
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
            </article>
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                    {blogData?.tags && blogData.tags.length > 0
                        ? blogData.tags.map((item) => (
                              <Link
                                  key={item.id}
                                  rel="noopener noreferrer"
                                  // href="#"
                                  to={`/tags/${item.id}`}
                                  className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900"
                              >
                                  #{item.name}
                              </Link>
                          ))
                        : null}
                </div>
                <div className="space-y-2">
                    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                        <img
                            src={blogData?.users?.avatar?.toString()}
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-700"
                        />
                        <div className="flex flex-col mt-1">
                            <h4 className="text-lg text-white font-semibold dark:text-black">
                                {blogData?.users?.name}
                            </h4>
                            <p className="text-gray-500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odio ullam incidunt in enim
                                voluptates. Quas soluta necessitatibus aperiam
                                laborum maxime nesciunt autem sequi in cumque
                                iste, rem ea non officia.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 py-5">
                    <Comments />
                </div>
            </div>
        </div>
    );
};
export default DetailBlog;
