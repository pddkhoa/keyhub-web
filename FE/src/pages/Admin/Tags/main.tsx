import { Loading } from "@/components/Loading/loading";
import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getColumnsTags } from "./column";

const Main = () => {
  const { isLoading, sendRequest } = useFetch();

  const listTags = useSelector((state: RootState) => state.admin.listAllTags);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_TAGS,
    });
  }, []);

  console.log(listTags);

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
            data={listTags}
            enableSearch
            enablePagination
            getColumns={getColumnsTags}
          />
        </>
      )}
    </div>
  );
};

export default Main;
