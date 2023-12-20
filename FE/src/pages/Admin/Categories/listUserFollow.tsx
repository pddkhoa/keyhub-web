import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import { REQUEST_TYPE } from "@/types";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getColumnsUsersFollowCate } from "./columnUserFollow";
import BasicTableWidget from "@/components/Table/Table";

export const ListUserFollow = () => {
    const { id } = useParams();
    const { isLoading, sendRequest } = useFetch();
    const listUserFollow = useSelector(
        (state: RootState) => state.categories.listUserFollowCate
    );

    useEffect(() => {
        sendRequest({ type: REQUEST_TYPE.GET_LIST_USER_FOLLOW_CATE, slug: id });
    }, []);
    return (
        <div className="grid grid-cols-1 px-20 gap-6 pl-16  h-full 3xl:gap-8 shadow-2xl py-8 ">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <BasicTableWidget
                    variant="classic"
                    title="Classic Table"
                    className="opacity-90  shadow-2xl bg-gray-800 outline-none"
                    data={listUserFollow}
                    enableSearch
                    enablePagination
                    getColumns={getColumnsUsersFollowCate}
                />
            )}
        </div>
    );
};
