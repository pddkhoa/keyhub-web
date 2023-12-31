import { Button } from "@/components/ui/button";
import { IconHide } from "@/components/ui/icon";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";

type HideBlogProps = {
    setFlag: {
        on: () => void;
        off: () => void;
        toggle: () => void;
    };
    id: number;
    setIsHide?: React.Dispatch<React.SetStateAction<any>>;
};

export const HideBlog: React.FC<HideBlogProps> = ({
    setFlag,
    id,
    setIsHide,
}) => {
    const { isLoading, sendRequest } = useFetch();

    const handleHide = async (id: number) => {
        try {
            // Show loading state
            sendRequest({
                type: REQUEST_TYPE.HIDE_BLOG,
                data: null,
                slug: id.toString(),
            });

            if (setIsHide) {
                setIsHide((prevVisibility: any) => ({
                    ...prevVisibility,
                    [id]: true,
                }));
            }

            // Close the modal or perform any other necessary actions
            setFlag.off();
        } catch (error) {
            // Handle errors, show an error message, or log the error
            console.error("Error hiding blog:", error);
            // Optionally, you can reset the loading state here
        }
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
                    <IconHide className=" h-12 flex justify-center w-full" />
                    <h2 className="text-xl font-bold py-4 text-title">
                        Are you sure?
                    </h2>
                    <p className="text-sm text-gray-500 px-8">
                        Do you really want to hide your blog ? This process
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
                        <Button
                            disabled
                            title="Save"
                            className="cursor-pointer flex items-center fill-blue-400 bg-blue-950 hover:bg-blue-900 active:border active:border-blue-400 rounded-md duration-100 p-2"
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
                            <span className="text-sm text-title-foreground font-bold pr-1">
                                Please wait...
                            </span>
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                handleHide(id);
                            }}
                            title="Save"
                        >
                            Confirm
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};
