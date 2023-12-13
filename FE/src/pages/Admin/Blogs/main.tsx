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

  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    setIsDelete(false);
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_ALLBLOG,
    });
  }, [isDelete]);

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
            enablePagination
            getColumns={getColumnsBlogs}
            setIsDelete={setIsDelete}
          />
        </>
      )}
    </div>
  );
};

export default Main;
