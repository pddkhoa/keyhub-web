import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Loading } from "@/components/Loading/loading";
import { getColumnsBlogsReport } from "./column";

const Main = () => {
  const { isLoading, sendRequest } = useFetch();

  const listBlogReport = useSelector(
    (state: RootState) => state.admin.listBlogReport
  );

  const [evalute, setEvalute] = useState(false);

  useEffect(() => {
    setEvalute(false);
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_BLOG_REPORT,
    });
  }, [evalute]);

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
            enablePagination
            getColumns={getColumnsBlogsReport}
            setEvalute={setEvalute}
          />
        </>
      )}
    </div>
  );
};

export default Main;
