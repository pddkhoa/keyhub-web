import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Pagination from "@/components/Pagination/pagination";
import { Loading } from "@/components/Loading/loading";
import { getColumnsBlogsReport } from "./column";

const Main = () => {
  const { isLoading, sendRequest } = useFetch();

  const listBlogReport = useSelector(
    (state: RootState) => state.admin.listBlogReport
  );
  const sizeBlogReport = useSelector(
    (state: RootState) => state.admin.sizeBlogReport
  );

  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_BLOG_REPORT,
      slug: index.toString(),
    });
  }, [index]);

  console.log(listBlogReport);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_SIZE_BLOG_REPORT,
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
            title="Classic Table"
            className="opacity-90 text-white shadow-2xl"
            data={listBlogReport}
            enableSearch
            getColumns={getColumnsBlogsReport}
          />
          <div className="flex justify-end">
            <Pagination
              page={index}
              setPage={handlePageChange}
              maxPage={sizeBlogReport ? sizeBlogReport : 0}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
