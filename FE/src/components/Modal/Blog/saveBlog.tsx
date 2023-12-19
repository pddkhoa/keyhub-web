import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import { useParams } from "react-router-dom";

type SaveBlogsProps = {
    setFlag: {
        on: () => void;
        off: () => void;
        toggle: () => void;
    };
    id: number;
    setIsBookmark?: React.Dispatch<React.SetStateAction<boolean>>;
    idCategories?: string;
};

export const SaveBlog: React.FC<SaveBlogsProps> = ({
    setFlag,
    id,
    setIsBookmark,
    idCategories,
}) => {
    const { isLoading, sendRequest } = useFetch();

    const { iduser } = useParams();
    const userId = Number(iduser);
    console.log(idCategories);

    const handleSaveBlog = async (blog_id: number) => {
        await sendRequest({
            type: REQUEST_TYPE.BOOKMARK_BLOG,
            data: null,
            slug: blog_id.toString(),
        });
        if (setIsBookmark) {
            setIsBookmark((prevIsBookmark) => !prevIsBookmark);
        }
        setFlag.off();
        sendRequest({ type: REQUEST_TYPE.LIST_BLOG });
        sendRequest({ type: REQUEST_TYPE.LIST_BLOG_BOOKMARK });
        sendRequest({
            type: REQUEST_TYPE.GET_USER_ID,
            slug: userId.toString(),
        });

        sendRequest({
            type: REQUEST_TYPE.GET_BLOG_CATEGORIES,
            slug: idCategories,
        });

        // sendRequest({ type: REQUEST_TYPE.LIST_BLOG_FEED });
    };

    return (
        <div className="w-1/3 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-modal dark:bg-stone-200  overflow-y-scroll">
            <div>
                <div className="px-5 py-2 flex justify-end space-x-5 shadow border-b-2 ">
                    <button
                        className="block w-6 h-6 p-0.5 hover:text-white hover:bg-red-500 rounded-full text-gray-500 transition-colors"
                        onClick={setFlag.off}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-full h-full"
                        >
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                </div>
                {/*body*/}
                <div className="text-center p-5 flex-auto justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        id="bookmark"
                        className="w-10 h-10 flex justify-center mx-auto"
                    >
                        <defs>
                            <linearGradient
                                id="a"
                                x1="11"
                                x2="37"
                                y1="24"
                                y2="24"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0" stopColor="#f12711"></stop>
                                <stop offset="1" stopColor="#f5af19"></stop>
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#a)"
                            d="M37,7V41a1,1,0,0,1-1,1,1,1,0,0,1-.5-.14L24,35.16l-11.5,6.7A1,1,0,0,1,11,41V7a1,1,0,0,1,1-1H36A1,1,0,0,1,37,7Z"
                        ></path>
                    </svg>
                    <h2 className="text-xl font-bold py-4 text-title">
                        Are you sure?
                    </h2>
                    <p className="text-sm text-gray-500 px-8">
                        Do you really want to bookmark your blog ? This process
                        cannot be undone
                    </p>
                </div>
                {/*footer*/}
                <div className="p-3 flex justify-around   mt-2 text-center space-x-4 ">
                    <Button
                        onClick={() => {
                            setFlag.off();
                        }}
                    >
                        Cancle
                    </Button>
                    {isLoading ? (
                        <Button disabled title="Save">
                            <svg
                                viewBox="0 -0.5 25 25"
                                height="20px"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="1.5"
                                    d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                />
                            </svg>
                            <span className="text-sm text-title-foreground font-bold pr-1">
                                Please wait...
                            </span>
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                handleSaveBlog(id);
                            }}
                            title="Save"
                        >
                            <svg
                                viewBox="0 -0.5 25 25"
                                height="20px"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="1.5"
                                    d="M18.507 19.853V6.034C18.5116 5.49905 18.3034 4.98422 17.9283 4.60277C17.5532 4.22131 17.042 4.00449 16.507 4H8.50705C7.9721 4.00449 7.46085 4.22131 7.08577 4.60277C6.7107 4.98422 6.50252 5.49905 6.50705 6.034V19.853C6.45951 20.252 6.65541 20.6407 7.00441 20.8399C7.35342 21.039 7.78773 21.0099 8.10705 20.766L11.907 17.485C12.2496 17.1758 12.7705 17.1758 13.113 17.485L16.9071 20.767C17.2265 21.0111 17.6611 21.0402 18.0102 20.8407C18.3593 20.6413 18.5551 20.2522 18.507 19.853Z"
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                />
                            </svg>
                            Save Post
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
