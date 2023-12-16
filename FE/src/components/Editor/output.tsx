interface ReportType {
    title: string;
    description: string;
    categoryIds: CategoryType;
    tagIds: TagType[];
    seriesId: number;
    content: string;
    avatar: string;
}
interface EditorOutputProps {
    report: ReportType;
}
import CategoryType from "@/types/categories";
import TagType from "@/types/tags";
import Output from "editorjs-blocks-react-renderer";

import "./output.css";
import { Link } from "react-router-dom";

export const EditorOutput: React.FC<EditorOutputProps> = ({ report }) => {
    // Tạo một mảng chứa các khối Editor.js tương ứng
    const blocks = [];

    // Phân tích mã HTML để tạo các khối
    const parser = new DOMParser();
    const doc = parser.parseFromString(report.content, "text/html");
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
        <>
            <div className="max-w-5xl px-6 py-10 mx-auto space-y-12">
                <article className="space-y-8  text-gray-50">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-bold md:tracki md:text-5xl">
                            {report?.title}
                        </h1>

                        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400">
                            <div className="flex items-center md:space-x-2">
                                {/* <p className="text-sm">
                  {report?.users?.name} • {formatDate(report?.create_date)}
                </p> */}
                            </div>
                            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                                {report?.categoryIds?.name}
                            </p>
                        </div>
                        <img
                            src={report?.avatar}
                            alt=""
                            className="w-full h-96 object-cover rounded-lg bg-gray-500"
                        ></img>
                    </div>
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
                                        " flex flex-col h-[700px] w-[900px] justify-center items-center  mt-10 mx-auto  py-5 rounded-xl",
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
                        {report?.tagIds && report.tagIds.length > 0
                            ? report.tagIds.map((item) => (
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
                </div>
            </div>
        </>
    );
};
