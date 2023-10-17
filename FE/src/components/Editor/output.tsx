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
import { RootState } from "@/redux/store";
import CategoryType from "@/types/categories";
import TagType from "@/types/tags";
import { useSelector } from "react-redux";
import Output from "editorjs-blocks-react-renderer";

import "./output.css";
import { format } from "date-fns";
import AlphabetAvatar from "../Avatar/avatar";

export const EditorOutput: React.FC<EditorOutputProps> = ({ report }) => {
  const userData = useSelector((state: RootState) => state.user.detail?.data);

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
      <div className="pt-8 pb-8  bg-background dark:bg-gray-900 antialiased">
        <div className="flex justify-between mx-auto ">
          <div className="mx-auto w-full max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <div className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-title ">
                  <AlphabetAvatar size={85} />
                  <div className="ml-4 mt-2">
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
                    <p className="text-base text-title-foreground ">
                      <div>{format(editorData.time, "MMM. d, yyyy")}</div>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-title">
                {report.title ? report.title : <div>No Title</div>}
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
                        " flex flex-col h-[400px] w-full justify-center items-center  mt-10 mx-auto bg-transparent",
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
                  <span>Category:</span>
                  {report.categoryIds ? (
                    <div>{report.categoryIds.name}</div>
                  ) : (
                    <div>No Selected Categories</div>
                  )}
                </div>
                <div className="flex items-center space-x-3 text-title-foreground">
                  <span>Tags:</span>
                  <div className="flex gap-3">
                    <div>
                      {report.tagIds && report.tagIds.length > 0 ? (
                        report.tagIds.map((item) => (
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
    </>
  );
};
