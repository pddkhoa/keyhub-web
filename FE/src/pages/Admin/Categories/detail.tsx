import { Label } from "@/components/ui/label";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { SettingCategories } from "./settingCategories";
import { Loading } from "@/components/Loading/loading";

const DetailCategories = () => {
  const { id } = useParams();
  const { isLoading, sendRequest } = useFetch();
  const categoriesData = useSelector(
    (state: RootState) => state.admin.categoriesById
  );

  const fetchData = (categoryId: string) => {
    sendRequest({
      type: REQUEST_TYPE.GET_BLOG_CATEGORIES_BY_ID,
      slug: categoryId,
    });
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <div className="container pl-24 h-full ">
      <div className="bg-gray-800 rounded-md h-fit mt-20 shadow-2xl ">
        <div className="flex flex-col p-6 py-4 gap-8">
          <Label className="text-white text-2xl font-bold">
            Categories Detail
          </Label>
        </div>

        {isLoading ? (
          <Loading />
        ) : categoriesData ? (
          <SettingCategories data={categoriesData} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DetailCategories;
