import { createAxios } from "@/api/createInstance";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import CategoryType from "@/types/categories";
import TagType from "@/types/tags";
import { ImagePlus, Minus, Plus, PlusCircle, Tag, XCircle } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal/modal";
import { CreateSeries } from "../Modal/Series/createSeries";

import useBoolean from "@/hooks/useBoolean";
import { showToast } from "@/hooks/useToast";
import seriesType from "@/types/series";
import ClientServices from "@/services/client/client";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";

interface ReportType {
    title: string;
    description: string;
    categoryIds: CategoryType;
    tagIds: TagType[];
    seriesId: number;
    content: string;
    avatar: string;
}

type CreateBlogProps = {
    setReport: Dispatch<SetStateAction<any>>;
    report: ReportType;
};

export const DetailBlog: React.FC<CreateBlogProps> = ({
    setReport,
    report,
}) => {
    const [displayModal, setDisplayModal] = useState(false);
    const [displayCreate, setDisplayCreate] = useBoolean(false);
    // const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    const [cate, setCate] = useState<CategoryType[]>();
    const [tags, setTags] = useState<TagType[]>();
    const [selectTags, setSelectTags] = useState<TagType[]>(
        report.tagIds ? report.tagIds : []
    );
    const [selectedCate, setSelectedCate] = useState<any>(
        report.categoryIds ? report.categoryIds : []
    );

    const [urlImage, setUrlImage] = useState<string>(
        report.avatar ? report.avatar : ""
    );

    const seriesList = useSelector((state: RootState) => state?.series?.series);

    console.log(seriesList);
    const user = useSelector((state: RootState) => state.auth.login);
    const auth = useSelector((state: RootState) => state.auth.login);
    const isSucces = useSelector((state: RootState) => state.series.isSuccess);

    const accessToken = auth?.data.token;
    const dispatch = useDispatch();
    const axiosJWT = createAxios(user, dispatch, loginSuccess);

    const [adding, setAdd] = useState(false);

    const { sendRequest } = useFetch();

    useEffect(() => {
        sendRequest({ type: REQUEST_TYPE.LIST_SERIES });
    }, [isSucces, adding]);

    const handleUploadAvatar = async (file: File) => {
        try {
            setIsUploading(true);
            if (file) {
                const { body } = await ClientServices.uploadAvatarBlog(
                    file,
                    accessToken,
                    axiosJWT
                );
                if (body?.success) {
                    setUrlImage(body.result);
                    setIsUploading(false);
                } else {
                    showToast("Error", "error");
                    setIsUploading(false);
                }
            }
        } catch (error) {
            console.log(error);
            setIsUploading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { body } = await ClientServices.getAllCategories();
                if (body?.success) {
                    setCate(body.result);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    const handleSelectCate = async (cate: CategoryType) => {
        try {
            setSelectTags([]);
            const { body } = await ClientServices.getTagByCategories(cate.id);
            if (body?.success) {
                setTags(body.result);
                setSelectedCate(cate);
                setReport({ ...report, categoryIds: cate });
            }
        } catch (error) {
            console.log(error);
        }
    };

    function handleSelectSeries(selectedValue: seriesType) {
        setReport({ ...report, seriesId: selectedValue });
    }

    const handleTagClick = (tag: TagType) => {
        const tagIndex = selectTags.findIndex((t) => t.id === tag.id);

        if (tagIndex === -1) {
            // Nếu không tìm thấy tag trong mảng selectTags
            // => Chưa chọn tag này, thêm vào selectTags
            setSelectTags([...selectTags, tag]);
        } else {
            // Nếu tìm thấy tag trong mảng selectTags
            // => Đã chọn tag này, xóa khỏi selectTags
            const newSelectTags = [...selectTags];
            newSelectTags.splice(tagIndex, 1);
            setSelectTags(newSelectTags);
            // setReport({ ...report, tagIds: selectTags });
        }
    };
    useEffect(() => {
        setReport({ ...report, tagIds: selectTags, avatar: urlImage });
    }, [selectTags, urlImage]);

    return (
        <div className="px-8 grow overflow-y-auto">
            <div className="grid w-full items-center gap-4 p-2">
                <div className="flex flex-col">
                    <div className="relative ">
                        <Label
                            htmlFor="title"
                            className="text-md text-title-foreground"
                        >
                            Title
                        </Label>
                        <Textarea
                            id="title"
                            name="title"
                            placeholder={report.title}
                            onChange={(e) =>
                                setReport({ ...report, title: e.target.value })
                            }
                            className={`${
                                !report.title
                                    ? "border-red-500"
                                    : " border-border"
                            }`}
                            value={report.title ? report?.title : ""}
                        />
                        <div className="flex justify-between">
                            <div className="text-sm text-red-500">
                                {!report.title ? "Required" : null}
                            </div>
                            <div className=" text-sm text-title-foreground">
                                Characters remaining: 0/300
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="relative ">
                        <Label
                            htmlFor="description"
                            className="text-md text-title-foreground"
                        >
                            Description
                        </Label>
                        <Textarea
                            id="description"
                            name="description"
                            onChange={(e) => {
                                setReport({
                                    ...report,
                                    description: e.target.value,
                                });
                            }}
                            value={"" || report?.description}
                        />
                        {/* <div className="float-right text-sm text-title-foreground">
              Characters remaining: 0/300
            </div> */}
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="relative space-y-2">
                        <Label
                            htmlFor="series"
                            className="text-md text-title-foreground"
                        >
                            Series
                        </Label>

                        <div className="grid grid-cols-6 my-2 text-sm w-full">
                            <div className="col-span-4">
                                <Select
                                    name="series"
                                    onValueChange={handleSelectSeries}
                                    defaultValue={
                                        report.seriesId ? report.seriesId : ""
                                    }
                                >
                                    <SelectTrigger className="w-full text-sm">
                                        <SelectValue placeholder="Series" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {seriesList &&
                                            seriesList?.length > 0 &&
                                            seriesList.map((item) => (
                                                <SelectItem
                                                    value={`${item?.id}`}
                                                >
                                                    {item?.name}
                                                </SelectItem>
                                            ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="col-span-2 flex justify-center items-center">
                                <Button
                                    onClick={() => {
                                        setDisplayCreate.on(),
                                            setDisplayModal(true);
                                    }}
                                    className="flex gap-3"
                                >
                                    <span>Add New Series</span>
                                    <PlusCircle className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 w-full text-title-foreground gap-3 mt-5">
                    <div className="col-span-2 border p-2 rounded-lg h-56 overflow-y-auto">
                        <div className="flex flex-col space-y-3">
                            <div className="text-title-foreground">
                                Categories
                            </div>
                            {cate &&
                                cate?.length > 0 &&
                                cate.map((item) => (
                                    <div
                                        key={item?.id}
                                        onClick={() => {
                                            handleSelectCate(item);
                                        }}
                                        className={`p-1.5 rounded-lg border-l-2 hover:brightness-150 cursor-pointer ${
                                            selectedCate?.id == item?.id
                                                ? "bg-green-900"
                                                : "bg-input"
                                        }`}
                                    >
                                        {item.name}
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="col-span-3 border p-2 rounded-lg h-56 overflow-y-auto">
                        <div className="flex flex-col space-y-3">
                            <div className="flex flex-col space-y-3">
                                <span>Selected Tags:</span>
                                <div className="w-full min-h-[100px] border rounded-lg flex flex-wrap gap-3 p-2">
                                    {selectTags && selectTags?.length > 0 ? (
                                        selectTags.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center gap-3 p-1.5 bg-green-900 border-l-2 w-fit h-fit rounded-lg hover:brightness-150 cursor-pointer"
                                            >
                                                <span className="text-sm">
                                                    {item.name}
                                                </span>
                                                <Tag className="mr-2 w-5 h-5 bg-hover rounded-full p-1" />
                                            </div>
                                        ))
                                    ) : (
                                        <div>No Data</div>
                                    )}
                                </div>
                            </div>
                            <div className="">List Tag:</div>
                            <div className="flex flex-wrap gap-3">
                                {tags && tags?.length > 0 ? (
                                    tags.map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                handleTagClick(item);
                                            }}
                                            className={`flex justify-between items-center gap-3 p-1.5  border-l-2 w-fit rounded-lg hover:brightness-150 cursor-pointer ${
                                                selectTags.find(
                                                    (t) => t.id === item.id
                                                )
                                                    ? "bg-green-900"
                                                    : "bg-input"
                                            }`}
                                        >
                                            <span className="text-sm">
                                                {item?.name}
                                            </span>
                                            {selectTags.find(
                                                (t) => t.id === item.id
                                            ) ? (
                                                <Minus className="mr-2 w-5 h-5 bg-hover rounded-full p-1" />
                                            ) : (
                                                <Plus className="mr-2 w-5 h-5 bg-hover rounded-full p-1" />
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <div>No data</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <Label className="text-title-foreground text-md">
                        Avatar Blog
                    </Label>
                    <div className="py-2 rounded w-2/4 mx-auto">
                        {urlImage ? (
                            <div className="relative flex flex-col space-y-3  p-4 text-title-foreground border border-border rounded">
                                <div className="relative  h-60  text-title-foreground border border-border  border-dashed rounded-lg cursor-pointer">
                                    <img
                                        src={urlImage}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="border"></div>
                                <div className="flex justify-center w-full ">
                                    <Button
                                        className="bg-red-600"
                                        type="button"
                                        onClick={() => {
                                            setUrlImage("");
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
                                        handleUploadAvatar(
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
                                            {isUploading ? (
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
                                                        Click in this area to
                                                        add new post
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
            </div>
            <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
                {displayModal ? (
                    <CreateSeries setFlag={setDisplayCreate} setAdd={setAdd} />
                ) : null}
            </Modal>
        </div>
    );
};
