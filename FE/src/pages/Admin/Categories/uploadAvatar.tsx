import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import { useDispatch } from "react-redux";
import { ImagePlus, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router";
import { uploadAvatarCategoriesFail } from "@/redux/adminSlice";

type UploadFileProps = {
    setFlag: {
        on: () => void;
        off: () => void;
        toggle: () => void;
    };
    avatar?: string;
};

export const UploadAvatarCategories: React.FC<UploadFileProps> = ({
    setFlag,
    avatar,
}) => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { isLoading, sendRequest } = useFetch();

    const handleUploadAvatarUser = async (file: File) => {
        try {
            if (file) {
                const formData = new FormData();
                formData.append("file", file);

                // Call the sendRequest function with the correct type and data
                await sendRequest({
                    type: REQUEST_TYPE.UPLOAD_AVATAR_CATEGORIES,
                    data: formData,
                    slug: id,
                });
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div className="w-1/3 h-fit 2xl:w-xl sm:x-0   overflow-y-scroll">
            <div className="w-full bg-gray-900  rounded-xl">
                <div className=" py-2 flex justify-end space-x-5 shadow border-b-2 px-4">
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
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-4 space-y-3 p-4"
                >
                    <div className="grid grid-cols-1 space-y-2">
                        <div className="py-2 rounded w-full mx-auto">
                            {avatar ? (
                                <div className="relative flex flex-col space-y-3  p-4 text-title-foreground border border-border rounded">
                                    <div className="relative  h-60  text-title-foreground border border-border  border-dashed rounded-lg cursor-pointer">
                                        <img
                                            src={avatar}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="border"></div>
                                    <div className="flex justify-center w-full ">
                                        <Button
                                            className="bg-red-600"
                                            type="button"
                                            onClick={() => {
                                                dispatch(
                                                    uploadAvatarCategoriesFail()
                                                );
                                            }}
                                        >
                                            <XCircle />
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <input
                                        type="file"
                                        onChange={(event: any) => {
                                            handleUploadAvatarUser(
                                                event.target.files[0]
                                            );
                                        }}
                                        id="input-file"
                                        hidden
                                    />
                                    <label
                                        htmlFor="input-file"
                                        className="relative flex flex-col p-4 text-title-foreground border border-title-foreground rounded"
                                    >
                                        <div
                                            x-ref="dnd"
                                            className="relative flex flex-col text-title-foreground border border-border  border-dashed rounded cursor-pointer"
                                        >
                                            <div className="flex flex-col items-center justify-center py-10 text-center">
                                                {isLoading ? (
                                                    <div
                                                        className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                                        role="status"
                                                    >
                                                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                                            Loading...
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div className="rounded-full p-2.5 bg-input hover:brightness-75 cursor-pointer text-title-foreground">
                                                            <ImagePlus />
                                                        </div>
                                                        <p className="m-0">
                                                            Click in this area
                                                            to add new post
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </label>
                                </>
                            )}
                        </div>
                    </div>

                    <p className="text-sm text-gray-300">
                        <span>File type: types of images</span>
                    </p>
                </form>
            </div>
        </div>
    );
};
