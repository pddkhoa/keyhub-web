import { Loading } from "@/components/Loading/loading";
import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getColumnsCategories } from "./column";

const Main = () => {
  const { isLoading, sendRequest } = useFetch();

  const listCategories = useSelector(
    (state: RootState) => state.admin.listAllCategories
  );

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_CATEGORIES,
    });
  }, []);

  console.log(listCategories);

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
            data={listCategories}
            enableSearch
            getColumns={getColumnsCategories}
          />
        </>
      )}
    </div>
  );
};

export default Main;
