import { Loading } from "@/components/Loading/loading";
import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getColumnsCommentReport } from "./column";

const ListComment = () => {
    const { isLoading, sendRequest } = useFetch();

    const listCommentReport = useSelector(
        (state: RootState) => state.admin.listCommentReport
    );

    const [evalute, setEvalute] = useState(false);

    useEffect(() => {
        setEvalute(false);
        sendRequest({
            type: REQUEST_TYPE.ADMIN_COMMENT_REPORT,
        });
    }, [evalute]);

    return (
        <div className="grid grid-cols-1 gap-6 pl-16 h-full 3xl:gap-8 shadow-2xl py-16 ">
            {isLoading ? (
                <div>
                    <Loading />
                </div>
            ) : (
                listCommentReport && (
                    <BasicTableWidget
                        variant="classic"
                        className="opacity-90 text-white shadow-2xl"
                        data={listCommentReport}
                        enableSearch
                        enablePagination
                        getColumns={getColumnsCommentReport}
                        setEvalute={setEvalute}
                    />
                )
            )}
        </div>
    );
};

export default ListComment;
