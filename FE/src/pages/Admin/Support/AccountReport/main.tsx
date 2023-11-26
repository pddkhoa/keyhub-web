import { Loading } from "@/components/Loading/loading";
import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Pagination from "@/components/Pagination/pagination";
import { getColumnsUserReport } from "./column";

const Main = () => {
  const { isLoading, sendRequest } = useFetch();

  const listUserReport = useSelector(
    (state: RootState) => state.admin.listUserReport
  );
  const sizeUserReport = useSelector(
    (state: RootState) => state.admin.sizeUserReport
  );

  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_USER_REPORT,
      slug: index.toString(),
    });
  }, [index]);

  console.log(listUserReport);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_SIZE_USER_REPORT,
    });
  }, []);

  const handlePageChange = (pageIndex: number) => {
    setIndex(pageIndex);
  };

  return (
    <div className="grid grid-cols-1 gap-6 pl-16 h-full 3xl:gap-8 shadow-2xl py-16 ">
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <BasicTableWidget
            variant="classic"
            className="opacity-90 text-white shadow-2xl"
            data={listUserReport && listUserReport}
            enableSearch
            getColumns={getColumnsUserReport}
          />
          <div className="flex justify-end">
            <Pagination
              page={index}
              setPage={handlePageChange}
              maxPage={sizeUserReport ? sizeUserReport : 0}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
