import ClientServices from "@/services/client/client";
import CommentType from "@/types/comment";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import AlphabetAvatar from "../Avatar/avatar";
import convertDate from "../FormatDate/formatDate";
import { Button } from "../ui/button";
import { IconComment, IconDelete, IconWarning } from "../ui/icon";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import useBoolean from "@/hooks/useBoolean";
import Modal from "../Modal/modal";
import { ReportComment } from "../Modal/Comment/reportComment";
import { Loading } from "../Loading/loading";

interface CommentsProps {
    idBlog?: number;
}

export const Comments: React.FC<CommentsProps> = ({ idBlog }) => {
    const [comment, setComment] = useState<CommentType[]>();
    const { id } = useParams();
    const blogid = Number(id);
    const [loading, setLoading] = useState(false);
    const [posting, setPosting] = useState(false);

    const { axiosJWT, accessToken } = useAuth();

    const [activeComment, setActiveComment] = useState();

    useEffect(() => {
        setLoading(true);
        const fetchComment = async () => {
            let selectedId = blogid; // Sử dụng giá trị ban đầu là blog_id

            if (!selectedId && idBlog) {
                selectedId = idBlog; // Nếu blog_id không tồn tại, sử dụng idBlog thay thế
            }
            const blog_id = blogid ? blogid : selectedId;
            try {
                const { body } = await ClientServices.getCommentByBlog(
                    blog_id,
                    accessToken,
                    axiosJWT
                );

                if (body?.success) {
                    setLoading(false);

                    setComment(body?.result);
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

        fetchComment();
    }, [posting]);

    //Root Comment
    const rootComment = comment?.filter(
        (comment) => comment.parentComment === null
    );
    // Child Comment
    const childComment = (commentId: number) => {
        return comment?.filter(
            (comment) => comment.parentComment?.id === commentId
        );
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="flex flex-col w-full space-y-3 mt-5">
            <div className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-100 dark:text-black">
                Comments
            </div>
            <div className="relative flex flex-col  ">
                <CommentForm setPosting={setPosting} idBlog={idBlog} />
            </div>

            {rootComment && rootComment.length > 0
                ? rootComment.map((item) => (
                      <>
                          <Comment
                              key={item.id}
                              comment={item}
                              child={childComment(item.id)}
                              childComment={childComment}
                              activeComment={activeComment}
                              setActiveComment={setActiveComment}
                              setPosting={setPosting}
                              nestingLevel={0}
                              idBlog={idBlog}
                          />
                      </>
                  ))
                : null}
        </div>
    );
};

interface CommentProps {
    comment: CommentType;
    child?: CommentType[];
    isChild?: boolean;
    activeComment: any;
    setActiveComment: React.Dispatch<React.SetStateAction<any>>;
    setPosting: React.Dispatch<React.SetStateAction<boolean>>;
    parentId?: number;
    childComment: any;
    nestingLevel: number;
    idBlog?: number;
}

export const Comment: React.FC<CommentProps> = ({
    comment,
    activeComment,
    setActiveComment,
    setPosting,
    idBlog,
    childComment,
    nestingLevel,
}) => {
    const isReplying =
        activeComment &&
        activeComment.type === "replying" &&
        activeComment.id === comment.id;

    const { axiosJWT, accessToken } = useAuth();

    const MAX_NESTING = 3;
    const [hideChildComment, setHideChildComment] = useState(false);

    const replies: CommentType[] = childComment(comment.id);
    const sumChildComment = replies.length;

    const hanldeDeleteComment = async (id: number) => {
        if (id) {
            setPosting(true);
            const { body } = await ClientServices.deleteComment(
                id,
                accessToken,
                axiosJWT
            );
            if (body?.success) {
                setPosting(false);

                toast.success(body.message);
            } else {
                console.log(body?.message);
                setPosting(false);
                toast.error(body?.message || "Error");
            }
        }
    };
    const formatDate = (date: string) => {
        const inputDate = date;
        const formattedDate = convertDate(inputDate);

        return formattedDate;
    };

    const [displayModal, setDisplayModal] = useState(false);
    const [displayCreate, setDisplayCreate] = useBoolean(false);

    return (
        <div>
            <div className="flex flex-col w-full max-w-2xl p-4 divide-y rounded-md divide-gray-700 bg-gray-900  text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img
                                src={comment?.users?.avatar?.toString()}
                                alt=""
                                className="object-cover w-12 h-12 rounded-full bg-gray-500"
                            />
                        </div>
                        <div>
                            <h4 className="font-bold">
                                {comment?.users?.name}
                            </h4>
                            <span className="text-xs text-gray-400">
                                {formatDate(comment.createdAt)}.
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <button
                            onClick={() => {
                                setDisplayCreate.on();
                                setDisplayModal(true);
                            }}
                            className="inline-flex items-center flex-column hover:brightness-150"
                        >
                            <IconWarning className="w-4 h-6" />
                        </button>
                        <button
                            onClick={() => {
                                hanldeDeleteComment(comment.id);
                            }}
                            className="inline-flex items-center  ml-4 flex-column hover:brightness-150"
                        >
                            <IconDelete className="w-6 h-6" />
                        </button>
                        <div className="flex items-center space-x-2 hover:brightness-150 cursor-pointer">
                            {nestingLevel <= MAX_NESTING ? (
                                <>
                                    <button
                                        onClick={() => {
                                            setActiveComment({
                                                id: comment?.id,
                                                type: "replying",
                                            });
                                        }}
                                        className="inline-flex items-center flex-column group group-hover:brightness-150"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            className="w-6 h-6 group-hover:brightness-150"
                                            id="reply"
                                        >
                                            <linearGradient
                                                id="a"
                                                x1="169.657"
                                                x2="406.21"
                                                y1="131.461"
                                                y2="368.014"
                                                gradientTransform="matrix(1 0 0 -1 0 514)"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop
                                                    offset="0"
                                                    stopColor="#332c81"
                                                ></stop>
                                                <stop
                                                    offset="1"
                                                    stopColor="#e21d73"
                                                ></stop>
                                            </linearGradient>
                                            <path
                                                fill="url(#a)"
                                                d="M14.1 191.4 186 43c15-13 38.8-2.4 38.8 17.7v78.2C381.6 140.7 506 172.1 506 320.8c0 60-38.7 119.4-81.4 150.5-13.3 9.7-32.3-2.5-27.4-18.2 44.3-141.6-21-179.2-172.5-181.4v85.9c0 20.2-23.7 30.7-38.8 17.7L14.1 226.9c-10.8-9.4-10.8-26.2 0-35.5z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <span className="mt-2 text-title font-black group-hover:brightness-150">
                                        {sumChildComment}
                                    </span>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-400">
                    <p>{comment.content}</p>
                </div>
            </div>
            {sumChildComment > 0 ? (
                <div
                    className="mt-2 ml-6 text-title flex gap-2 hover:bg-input w-fit p-2 rounded-xl items-center cursor-pointer"
                    onClick={() => {
                        setHideChildComment(!hideChildComment);
                    }}
                >
                    <span>
                        <ChevronUp
                            className={`w-5 h-5 duration-200 text-gray-300 ${
                                hideChildComment ? "rotate-180" : ""
                            }`}
                        />
                    </span>
                    <span className="flex gap-2 items-center text-gray-300">
                        {sumChildComment}{" "}
                        <IconComment className="ml-2 w-6 h-6 " />
                    </span>
                </div>
            ) : null}

            {isReplying && (
                <div className="mt-2 ml-10 rounded-lg">
                    <CommentForm
                        setPosting={setPosting}
                        parentId={comment.id}
                        setActiveComment={setActiveComment}
                        idBlog={idBlog}
                    />
                </div>
            )}
            {hideChildComment ? (
                <>
                    {replies && replies?.length > 0 && (
                        <div className="pt-1 md-10 ml-10">
                            {replies?.map((commentChild) => (
                                <Comment
                                    childComment={childComment}
                                    comment={commentChild}
                                    key={commentChild.id}
                                    isChild={true}
                                    // child={[]}
                                    setActiveComment={setActiveComment}
                                    activeComment={activeComment}
                                    setPosting={setPosting}
                                    parentId={comment.id}
                                    nestingLevel={nestingLevel + 1}
                                />
                            ))}
                        </div>
                    )}
                </>
            ) : null}

            <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
                {displayModal ? (
                    <ReportComment
                        setFlag={setDisplayCreate}
                        comment={comment}
                    />
                ) : null}
            </Modal>
        </div>
    );
};

interface CommentFormProps {
    setPosting: React.Dispatch<React.SetStateAction<boolean>>;
    parentId?: number;
    setActiveComment?: React.Dispatch<React.SetStateAction<any>>;
    idBlog?: number;
}

export const CommentForm: React.FC<CommentFormProps> = ({
    setPosting,
    parentId,
    setActiveComment,
    idBlog,
}) => {
    const { id } = useParams();
    const blogid = Number(id);
    const selectedId = blogid ? blogid : idBlog;

    const { axiosJWT, accessToken } = useAuth();

    const [InputComment, setInputComment] = useState<string>();
    const isCheckComment = InputComment?.length === 0;
    const [isFocused, setIsFocused] = useState(false);

    const handleReplyComment = async (InputComment: string) => {
        const report = {
            parent_id: parentId,
            content: InputComment,
        };
        if (InputComment) {
            setPosting(true);
            const { body } = await ClientServices.replyComment(
                report,
                selectedId as any,
                accessToken,
                axiosJWT
            );
            if (body?.success && setActiveComment) {
                setPosting(false);
                toast.success(body.message);
                setActiveComment(null);
            } else {
                console.log(body?.message);
                toast.error(body?.message || "Error");
                setPosting(false);
            }
        }
    };

    const handlePostComment = async (InputComment: string) => {
        const report = {
            content: InputComment,
        };
        if (InputComment) {
            setPosting(true);
            const { body } = await ClientServices.addComment(
                report,
                selectedId as any,
                accessToken,
                axiosJWT
            );
            if (body?.success) {
                setPosting(false);
                toast.success(body.message);
            } else {
                console.log(body?.message);
                toast.error(body?.message || "Error");
                setPosting(false);
            }
        }
    };
    const onSubmit = (event: any) => {
        event?.preventDefault();
        if (InputComment) {
            if (parentId) {
                console.log(selectedId);
                handleReplyComment(InputComment);
            } else {
                console.log(selectedId);
                handlePostComment(InputComment);
            }
        }
        setInputComment("");
    };
    return (
        <form
            onSubmit={onSubmit}
            className=" flex flex-col border w-full mx-auto max-w-5xl p-2  divide-y rounded-md divide-gray-700 bg-gray-900 dark:bg-white/70 dark:text-black text-gray-100"
        >
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <AlphabetAvatar size={50} />
                </div>
            </div>
            <div className="space-y-2 text-sm text-gray-400 dark:text-black">
                <div
                    className={`flex flex-row w-full  rounded-lg p-2 ${
                        isFocused && isCheckComment
                            ? " border-red-500 border"
                            : null
                    }`}
                >
                    <span className="flex flex-col relative flex-1  ">
                        <textarea
                            name="comment"
                            onChange={(e) => {
                                setInputComment(e.target.value);
                            }}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="Comment in area"
                            value={InputComment}
                            className={`flex flex-1  bg-transparent outline-none rounded-lg text-title-foreground p-2 placeholder:text-gray-600 dark:placeholder:text-black placeholder:italic`}
                            rows={3}
                        ></textarea>
                    </span>
                </div>
            </div>

            <div className="flex flex-row gap-3 justify-end items-center p-3 px-4 border-t text-title-foreground">
                <div className="flex  gap-5">
                    {parentId && setActiveComment ? (
                        <Button
                            onClick={() => {
                                setActiveComment(null);
                            }}
                            className="disabled:cursor-not-allowed disabled:brightness-75"
                        >
                            Cancle
                        </Button>
                    ) : null}
                    <Button disabled={isCheckComment} type="submit">
                        Comment
                        <IconComment className="w-6 h-6 ml-2" />
                    </Button>
                </div>
            </div>
        </form>
    );
};
