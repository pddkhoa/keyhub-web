import { Loading } from "@/components/Loading/loading";
import BasicTableWidget from "@/components/Table/Table";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getColumnsCategories } from "./column";
import { Button } from "@/components/ui/button";
import useBoolean from "@/hooks/useBoolean";
import Modal from "@/components/Modal/modal";
import { FormAddCategories } from "./formAdd";

const Main = () => {
  const { isLoading, sendRequest } = useFetch();
  const [displayModal, setDisplayModal] = useState(false);
  const [displayCreate, setDisplayCreate] = useBoolean(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const listCategories = useSelector(
    (state: RootState) => state.admin.listAllCategories
  );

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.ADMIN_GET_CATEGORIES,
    });
  }, [isAdd, isDelete]);

  return (
    <div className="grid grid-cols-1 gap-6 pl-16 h-full 3xl:gap-8 shadow-2xl py-16 ">
      <div className="flex justify-end">
        <Button
          onClick={() => {
            setDisplayCreate.on(), setDisplayModal(true);
          }}
          variant={"gradient"}
          className="rounded-sm"
        >
          Add New Categories
        </Button>
      </div>
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
            enablePagination
            setIsDelete={setIsDelete}
            getColumns={getColumnsCategories}
          />
        </>
      )}
      <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
        {displayModal ? (
          <FormAddCategories setFlag={setDisplayCreate} setIsAdd={setIsAdd} />
        ) : null}
      </Modal>
    </div>
  );
};

export default Main;
