import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getColumnsBlogs } from "./column";
import Pagination from "@/components/Pagination/pagination";
import { Loading } from "@/components/Loading/loading";

const Main = () => {
  const { isLoading, sendRequest } = useFetch();

  const listAllBlog = useSelector(
    (state: RootState) => state.admin.listAllBlog
  );
  const sizeAllBlog = useSelector(
    (state: RootState) => state.admin.sizeAllBlog
  );

  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_ALLBLOG,
      slug: index.toString(),
    });
  }, [index]);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_SIZE_ALLBLOG,
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
            data={listAllBlog}
            enableSearch
            getColumns={getColumnsBlogs}
          />
          <div className="flex justify-end">
            <Pagination
              page={index}
              setPage={handlePageChange}
              maxPage={sizeAllBlog ? sizeAllBlog : 100}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
