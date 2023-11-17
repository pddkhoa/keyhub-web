import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  IconDelete,
  IconHide,
  IconReport,
  IconUnBookmark,
  IconBookmark,
  IconBlock,
} from "../ui/icon";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import BlogPost from "@/types/blog";

interface DropdownProps {
  data: BlogPost;
  setDisplayModal: React.Dispatch<React.SetStateAction<string>>;
  setDisplayCreate: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
}

export const Dropdown: React.FC<DropdownProps> = ({
  setDisplayCreate,
  setDisplayModal,
  data,
}) => {
  // Lấy thông tin user đăng nhập
  const user = useSelector((state: RootState) => state.user.detail.data);

  // Kiểm tra điều kiện
  const isOwner = data.users.id === user.id;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="hover:brightness-150 opacity-70 rounded-xl hover:bg-input p-2 h-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              id="menumeatballs"
            >
              <path
                fill="#ffff"
                d="M12 10C13.1046 10 14 10.8954 14 12 14 13.1046 13.1046 14 12 14 10.8954 14 10 13.1046 10 12 10 10.8954 10.8954 10 12 10zM4 10C5.10457 10 6 10.8954 6 12 6 13.1046 5.10457 14 4 14 2.89543 14 2 13.1046 2 12 2 10.8954 2.89543 10 4 10zM20 10C21.1046 10 22 10.8954 22 12 22 13.1046 21.1046 14 20 14 18.8954 14 18 13.1046 18 12 18 10.8954 18.8954 10 20 10z"
                className="color000000 svgShape"
              ></path>
            </svg>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-2">
          <DropdownMenuLabel>Option</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {isOwner ? (
            <DropdownMenuItem
              onClick={() => {
                setDisplayCreate.on(), setDisplayModal("DELETE");
              }}
              className="cursor-pointer"
            >
              <IconDelete className="w-6 h-6 mr-2" />
              <span>Delete</span>
            </DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => {
                  setDisplayCreate.on(), setDisplayModal("HIDE");
                }}
              >
                <IconHide className="w-6 h-6 mr-2" />
                <span>Hide</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setDisplayCreate.on(), setDisplayModal("REPORT");
                }}
                className="cursor-pointer"
              >
                <IconReport className="w-6 h-6 mr-2" />
                <span>Report Blog</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <IconBlock className="w-6 h-6 mr-2" />
                <span>Block User</span>
              </DropdownMenuItem>
            </>
          )}
          <DropdownMenuItem
            onClick={() => {
              setDisplayCreate.on(),
                data.isSave
                  ? setDisplayModal("UNBOOKMARK")
                  : setDisplayModal("BOOKMARK");
              // setActiveBlog(!active);
            }}
            className="cursor-pointer"
          >
            {data.isSave ? (
              <>
                <IconUnBookmark className="mr-2" />
                <span>Unbookmark</span>
              </>
            ) : (
              <>
                <IconBookmark className="w-6 h-6 mr-2" />
                <span>Bookmark</span>
              </>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
