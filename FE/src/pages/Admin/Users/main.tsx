import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getColumnsUsers } from "./column";
import Pagination from "@/components/Pagination/pagination";
import { Loading } from "@/components/Loading/loading";

const Main = () => {
  const { isLoading, sendRequest } = useFetch();

  const listAllUser = useSelector(
    (state: RootState) => state.admin.listAllUser
  );

  const sizeAllUser = useSelector(
    (state: RootState) => state.admin.sizeAllUser
  );

  const isUpdate = useSelector(
    (state: RootState) => state.admin.isLoadingUpdate
  );

  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_ALLUSER,
      slug: index.toString(),
    });
  }, [index, isUpdate]);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_SIZE_ALLUSER,
    });
  }, []);

  const handlePageChange = (pageIndex: number) => {
    setIndex(pageIndex);
  };

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
        index={index}
        getColumns={getColumnsUsers}
      />
      <div className="flex justify-end">
        <Pagination
          page={index}
          setPage={handlePageChange}
          maxPage={sizeAllUser ? sizeAllUser : 100}
        />
      </div>
    </div>
  );
};

export default Main;
