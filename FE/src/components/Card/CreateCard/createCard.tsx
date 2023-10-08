import AlphabetAvatar from "@/components/Avatar/avatar";
import { ChevronDown, ImagePlus, PencilLine } from "lucide-react";
import { useState } from "react";
import "./createCard.css";

export const CreateCard = () => {
  const [tabs, setTabs] = useState("TAB_BLOG");
  const [hide, setHide] = useState(false);

  return (
    <div className="space-y-1 duration-300">
      <div className="flex justify-between">
        <div>
          <AlphabetAvatar size={50} />
        </div>
        <div
          onClick={() => {
            setHide(!hide);
          }}
          className={`p-3.5 rounded-full bg-input hover:bg-hover flex justify-center duration-300 items-center cursor-pointer ${
            hide ? "rotate-180" : ""
          }`}
        >
          <ChevronDown className="text-title-foreground w-6 h-6" />
        </div>
      </div>
      <div className="">
        <CreateItems setTabs={setTabs} />
      </div>
      <div className={`create-card duration-300 ease-in-out `}>
        <div className="py-2 rounded w-9/12 mx-auto">
          {hide ? <CreateContent tabName={tabs} /> : null}
        </div>
      </div>
    </div>
  );
};

interface CreateItemsProps {
  setTabs: React.Dispatch<React.SetStateAction<string>>;
}

const CreateItems: React.FC<CreateItemsProps> = ({ setTabs }) => {
  const [activeTab, setActiveTab] = useState("TAB_BLOG");

  const handleBlogTabClick = () => {
    setActiveTab("TAB_BLOG");
    setTabs("TAB_BLOG");
  };

  const handleVideoTabClick = () => {
    setActiveTab("TAB_VIDEO");
    setTabs("TAB_VIDEO");
  };

  return (
    <div>
      <ul className="grid grid-flow-col text-center text-title space-x-0.5">
        <li>
          <div
            onClick={handleBlogTabClick}
            className={`flex justify-center cursor-pointer items-center border-b-2  hover:text-title-foreground hover:border-title hover:bg-card hover:rounded-tl-xl hover:rounded-tr-xl  ${
              activeTab === "TAB_BLOG"
                ? "border-white text-title-foreground bg-card rounded-tl-xl rounded-tr-xl"
                : ""
            } py-4 font-semibold`}
          >
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 32 32"
              stroke="currentColor"
              strokeWidth={2}
              id="editor"
            >
              <path d="M31.03,4.52l.25-.25a2.511,2.511,0,0,0,0-3.54,2.574,2.574,0,0,0-3.54,0l-.7.71L24.47,4H2.5A2.5,2.5,0,0,0,0,6.5v17A2.5,2.5,0,0,0,2.5,26H12.97a5.48,5.48,0,0,1-2.17,3.9L9.2,31.1a.5.5,0,0,0,.3.9h13a.5.5,0,0,0,.3-.9l-1.6-1.2A5.48,5.48,0,0,1,19.03,26H29.5A2.5,2.5,0,0,0,32,23.5V6.5A2.512,2.512,0,0,0,31.03,4.52ZM24.89,5l1-1,1.5-1.5L28.89,4l.62.62L29.13,5l-9.35,9.36,0,0a5,5,0,0,0-2.124-2.126Zm-6,9.866L16.71,15.3l.436-2.181A3.957,3.957,0,0,1,18.892,14.866ZM20.6,30.7l.4.3H11l.4-.3A6.531,6.531,0,0,0,13.98,26h4.04A6.531,6.531,0,0,0,20.6,30.7ZM31,23.5A1.5,1.5,0,0,1,29.5,25H2.5A1.5,1.5,0,0,1,1,23.5V22H31ZM31,21H1V6.5A1.5,1.5,0,0,1,2.5,5H23.47l-7.04,7.05a.481.481,0,0,0-.14.25l-.71,3.54a.506.506,0,0,0,.14.45.533.533,0,0,0,.36.15c.03,0,.06-.01.09-.01l3.54-.71a.069.069,0,0,0,.037-.015c.007,0,.014,0,.021,0l0,0h.009a.334.334,0,0,0,.1-.06l.008-.007a.481.481,0,0,0,.085-.073.583.583,0,0,0,.046-.039L30.31,5.24A1.474,1.474,0,0,1,31,6.5ZM30.57,3.56l-.35.36L28.1,1.8l.35-.36a1.528,1.528,0,0,1,2.12,0,1.5,1.5,0,0,1,0,2.12Zm-16.547,13.1a3.492,3.492,0,0,1-2.58.836A2.481,2.481,0,0,1,9.7,16.515,3.693,3.693,0,0,1,9,14.473a10.337,10.337,0,0,1,.028-1.157,6.235,6.235,0,0,0-.142-2.269A3.88,3.88,0,0,0,6.863,8.714,4.509,4.509,0,0,0,3.379,8.5a.5.5,0,1,0,.342.939,3.488,3.488,0,0,1,2.7.166,2.894,2.894,0,0,1,1.512,1.733,5.413,5.413,0,0,1,.1,1.912A10.976,10.976,0,0,0,8,14.527a4.685,4.685,0,0,0,.9,2.592,3.449,3.449,0,0,0,2.435,1.369,3.98,3.98,0,0,0,.425.023,4.57,4.57,0,0,0,2.912-1.092.5.5,0,1,0-.648-.762Z"></path>
            </svg>
            Blog
          </div>
        </li>

        <li>
          <div
            onClick={handleVideoTabClick}
            className={`flex justify-center cursor-pointer items-center border-b-2 hover:text-title-foreground hover:border-title hover:bg-card hover:rounded-tl-xl hover:rounded-tr-xl  ${
              activeTab === "TAB_VIDEO"
                ? "border-white text-title-foreground bg-card rounded-tl-xl rounded-tr-xl"
                : ""
            } py-4 font-semibold`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-film w-6 h-6 mr-2"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 3v18" />
              <path d="M3 7.5h4" />
              <path d="M3 12h18" />
              <path d="M3 16.5h4" />
              <path d="M17 3v18" />
              <path d="M17 7.5h4" />
              <path d="M17 16.5h4" />
            </svg>
            Video
          </div>
        </li>
      </ul>
    </div>
  );
};

interface CreateContentProps {
  tabName: string;
}

const CreateContent: React.FC<CreateContentProps> = ({ tabName }) => {
  switch (tabName) {
    case "TAB_BLOG":
      return (
        <div className="relative flex flex-col p-4 text-title-foreground border border-title-foreground rounded">
          <div
            x-ref="dnd"
            className="relative flex flex-col text-title-foreground border border-border hover:brightness-150  border-dashed rounded cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center py-10 text-center ">
              <div className="rounded-full p-2.5 bg-input hover:brightness-75 cursor-pointer text-title-foreground">
                <PencilLine />
              </div>
              <p className="m-0">Click in this area to add new post</p>
            </div>
          </div>
        </div>
      );
    case "TAB_VIDEO":
      return (
        <div className="relative flex flex-col p-4 text-title-foreground border border-title-foreground rounded">
          <div
            x-ref="dnd"
            className="relative flex flex-col text-title-foreground border border-border hover:brightness-150  border-dashed rounded cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="rounded-full p-2.5 bg-input hover:brightness-75 cursor-pointer text-title-foreground">
                <ImagePlus />
              </div>
              <p className="m-0">Click in this area to add new post</p>
            </div>
          </div>
        </div>
      );

      return (
        <div>
          <div className="grid grid-cols-3 gap-4">
            {optionview === "LIST" ? (
              <>
                <div className="col-span-1 h-full ">
                  <ListCard /> BOOKMARK
                </div>
                <div className="col-span-1 h-full">
                  <ListCard />
                </div>
                <div className="col-span-1 h-full">
                  <ListCard />
                </div>
              </>
            ) : (
              <div className="col-span-3 w-full space-y-10">
                <DetailCard />
                <DetailCard />
              </div>
            )}
          </div>
        </div>
      );
    default:
      return null;
  }
};
