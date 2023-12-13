import { Loading } from "@/components/Loading/loading";
import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getColumnsUserReport } from "./column";

const Main = () => {
  const { isLoading, sendRequest } = useFetch();

  const listUserReport = useSelector(
    (state: RootState) => state.admin.listUserReport
  );

  const [evalute, setEvalute] = useState(false);

  useEffect(() => {
    setEvalute(false);
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_USER_REPORT,
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
            className="opacity-90 text-white shadow-2xl"
            data={listUserReport}
            enableSearch
            enablePagination
            getColumns={getColumnsUserReport}
            setEvalute={setEvalute}
          />
        </>
      )}
    </div>
  );
};

export default Main;
