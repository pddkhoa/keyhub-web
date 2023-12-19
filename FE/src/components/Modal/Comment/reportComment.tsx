import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import useAuth from "@/hooks/useAuth";
import { RULES } from "@/lib/rules";
import ClientServices from "@/services/client/client";
import CommentType from "@/types/comment";
import { useFormik } from "formik";
import { X, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Label } from "recharts";
import * as Yup from "yup";

type ReportCommentProps = {
    setFlag: {
        on: () => void;
        off: () => void;
        toggle: () => void;
    };
    comment: CommentType;
};

export const ReportComment: React.FC<ReportCommentProps> = ({
    setFlag,
    comment,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { accessToken, axiosJWT } = useAuth();
    const ReasonReport = [
        {
            id: 1,
            reason: "Spam",
        },
        {
            id: 2,
            reason: "Thông tin sai sự thật",
        },
        {
            id: 3,
            reason: "Gây thù ghét",
        },
        {
            id: 4,
            reason: "Nội dung không phù hợp",
        },
    ];

    const [selectedReasons, setSelectedReasons] = useState<any>([]);

    const handleCheckboxChange = (id: number) => {
        const index = selectedReasons.indexOf(id);

        if (index === -1) {
            // Nếu id không tồn tại trong mảng, thêm nó vào
            setSelectedReasons([...selectedReasons, id]);
        } else {
            // Nếu id tồn tại trong mảng, loại bỏ nó
            const newSelectedReasons = [...selectedReasons];
            newSelectedReasons.splice(index, 1);
            setSelectedReasons(newSelectedReasons);
        }
    };

    useEffect(() => {
        const selectedReasonsText = ReasonReport.filter((reason) =>
            selectedReasons.includes(reason.id)
        )
            .map((reason) => reason.reason)
            .join(", ");

        formik.setFieldValue("reason", selectedReasonsText);
    }, [selectedReasons]);

    const formik = useFormik({
        initialValues: {
            comment_id: "",
            reason: "",
        },
        validationSchema: Yup.object().shape({
            reason: Yup.string().matches(RULES.noBlank).required("Required"),
        }),
        validateOnChange: true,
        onSubmit: async (value) => {
            const report = {
                comment_id: comment.id,
                reason: value.reason,
            };

            setIsLoading(true);
            try {
                const { body } = await ClientServices.reportComment(
                    report,
                    accessToken,
                    axiosJWT
                );
                if (body?.success) {
                    setIsLoading(false);
                    toast.success(body.message);
                    setFlag.off();
                } else {
                    setIsLoading(false);
                    toast.error(body?.message || "Error");
                }
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        },
    });

    return (
        <div className="w-2/4 h-fit 2xl:w-xl sm:x-0  rounded-xl shadow bg-gray-900 ">
            <div className="h-full flex flex-col space-y-5">
                <div className="px-5 py-2 flex space-x-5 shadow border-b-2">
                    <span className="text-lg grow text-title">
                        Report Comment of @{comment?.users?.name}
                    </span>
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
                <div className="px-8 grow overflow-y-auto">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-2">
                                <div className="relative px-2 py-2">
                                    <Label className="text-md text-title-foreground">
                                        Reason
                                    </Label>
                                    {ReasonReport.map((item: any) => (
                                        <div
                                            key={item.id}
                                            className="items-top flex space-x-2 mt-4"
                                        >
                                            <Checkbox
                                                id={item.id.toString()}
                                                onCheckedChange={() =>
                                                    handleCheckboxChange(
                                                        item.id
                                                    )
                                                }
                                                checked={selectedReasons.includes(
                                                    item.id
                                                )}
                                            />
                                            <div className="grid gap-1.5 leading-none">
                                                <label
                                                    htmlFor={item.id.toString()}
                                                    className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    {item.reason}
                                                </label>
                                                <p className="text-sm text-muted-foreground">
                                                    You may choice many reason
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="relative px-2 py-2">
                                    <Label className="text-md text-title-foreground">
                                        Other
                                    </Label>
                                    <Textarea
                                        className="mt-2"
                                        id="reason"
                                        name="reason"
                                        placeholder="Tell us a reason report"
                                        maxLength={150}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.reason}
                                        onChange={formik.handleChange}
                                    />
                                    <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
                                        {formik.errors.reason &&
                                        formik.touched.reason ? (
                                            <X className="text-red-500" />
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                            <div className=" py-2 border-t">
                                {isLoading ? (
                                    <Button
                                        className="px-5 py-1.5 float-right"
                                        disabled
                                    >
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Please wait
                                    </Button>
                                ) : (
                                    <Button
                                        type="submit"
                                        className="px-5 py-1.5 float-right"
                                        disabled={
                                            formik.isSubmitting ||
                                            !formik.isValid
                                        }
                                    >
                                        Save
                                    </Button>
                                )}
                                <button
                                    type="button"
                                    onClick={setFlag.off}
                                    className="px-5 py-1.5  float-right text-base font-medium rounded text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
