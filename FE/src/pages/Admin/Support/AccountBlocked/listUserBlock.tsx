import { Loading } from "@/components/Loading/loading";
import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getColumnsUsersBlock } from "./column";

const ListUserBlock = () => {
  const { isLoading, sendRequest } = useFetch();

  const [unblock, setUnBlock] = useState(false);

  const listUserBlock = useSelector(
    (state: RootState) => state.admin.listUserBlock
  );

  useEffect(() => {
    setUnBlock(false);
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_USER_BLOCK,
    });
  }, [unblock]);

  console.log(unblock);

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
          setUnBlock={setUnBlock}
          getColumns={getColumnsUsersBlock}
        />
      </>
    </div>
  );
};

export default ListUserBlock;
