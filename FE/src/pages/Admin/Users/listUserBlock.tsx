import { Loading } from "@/components/Loading/loading";
import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getColumnsTags } from "../Tags/column";
import { getColumnsUsers } from "./column";
import Pagination from "@/components/Pagination/pagination";

const ListUserBlock = () => {
  const { isLoading, sendRequest } = useFetch();

  const listUserBlock = useSelector(
    (state: RootState) => state.admin.listUserBlock
  );

  const sizeUserBlock = useSelector(
    (state: RootState) => state.admin.sizeUserBlock
  );

  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_USER_BLOCK,
      slug: index.toString(),
    });
  }, [index]);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_SIZE_USER_BLOCK,
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
      <>
        <BasicTableWidget
          variant="classic"
          title="Classic Table"
          className="opacity-90 text-white shadow-2xl"
          data={listUserBlock}
          enableSearch
          enablePagination
          getColumns={getColumnsUsers}
        />
        <div className="flex justify-end">
          <Pagination
            page={index}
            setPage={handlePageChange}
            maxPage={sizeUserBlock ? sizeUserBlock : 0}
          />
        </div>
      </>
    </div>
  );
};

export default ListUserBlock;
