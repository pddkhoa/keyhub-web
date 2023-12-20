import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getColumnsUsers } from "./column";
import { Loading } from "@/components/Loading/loading";

const Main = () => {
    const { isLoading, sendRequest } = useFetch();

    const [isDelete, setIsDelete] = useState(false);
    const listAllUser = useSelector(
        (state: RootState) => state.admin.listAllUser
    );

    const isUpdate = useSelector(
        (state: RootState) => state.admin.isLoadingUpdate
    );

    useEffect(() => {
        setIsDelete(false);
        sendRequest({
            type: REQUEST_TYPE.ADMIN_GET_ALLUSER,
        });
    }, [isUpdate, isDelete]);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="grid grid-cols-1 gap-6 pl-16 h-full 3xl:gap-8 shadow-2xl py-16 ">
            <BasicTableWidget
                variant="classic"
                className="opacity-90 shadow-2xl bg-gray-800 outline-none"
                data={listAllUser}
                enableSearch
                enablePagination
                setIsDelete={setIsDelete}
                getColumns={getColumnsUsers}
            />
        </div>
    );
};

export default Main;
