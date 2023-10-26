import { createAxios } from "@/api/createInstance";
import { GridCard } from "@/components/Card/CardBlog/listCard";
import { Button } from "@/components/ui/button";
import { Nodata } from "@/components/ui/nodata";
import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import BlogPost from "@/types/blog";
import CategoryType from "@/types/categories";
import { SlidersHorizontal } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router";

export const CategoriesDetail = () => {
  const { id } = useParams();
  const idCategories = Number(id);
  const user = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();
  const axiosJWT = createAxios(user, dispatch, loginSuccess);
  const accessToken = user?.data.token;
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const [categoriesDetail, setCategoriesDetail] = useState<CategoryType>();

  useEffect(() => {
    if (location.state) {
      setCategoriesDetail(location.state.data);
    }
  }, [location.state]);

  const [blog, setBlog] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      const { body } = await ClientServices.getBlogByCategories(
        idCategories,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setBlog(body?.result);
        setLoading(false);
      } else {
        console.log(body?.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  return (
    <div className="min-h-0 w-full">
      {categoriesDetail && (
        <>
          <div className="z-30 h-96 mt-10 relative items-center justify-center w-full overflow-hidden">
            <div
              className="inset-0 h-screen bg-cover bg-center"
              style={{
                backgroundImage: `url(${categoriesDetail.banner})`,
              }}
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75" />
            <div className="absolute inset-0  z-30  flex flex-col items-center justify-center">
              <div
                className="shadow-2xl rounded-lg w-4/5 h-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${categoriesDetail.banner})`,
                }}
              >
                <div className="grid grid-cols-12 gap-1">
                  <div className="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                    <div className="border-l-4 border-gray-400 py-12 px-5 mx-2 absolute left-0">
                      <p className="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                        {categoriesDetail.name}
                      </p>
                    </div>
                    <div className="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5" />
                  </div>
                  <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                    <div className="relative bg-pink-800  h-64 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                      <div className="p-8">
                        <p className="text-white text-xs md:text-sm lg:text-xl mb-4">
                          {categoriesDetail.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-0 w-10/12 mx-auto py-10">
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-3 flex items-center gap-5 mb-10">
                {" "}
                <div className="items-center h-10 rounded-xl border-2 flex-1 compact flex px-4 overflow-hidden bg-input   cursor-text ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="text-title-foreground mr-2 w-6 h-6"
                    id="search"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path
                      fill="currentColor"
                      d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    ></path>
                  </svg>
                  <input
                    placeholder="Search blog"
                    id="posts-search"
                    className="flex-1 h-10 rounded-12 text-theme-label-tertiary hover:text-theme-label-primary min-w-0  bg-transparent typo-body caret-theme-label-link focus:outline-none"
                  ></input>
                </div>
                <Button>
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
              </div>
              {blog && blog.length > 0 ? (
                blog.map((item) => <GridCard data={item} />)
              ) : (
                <Nodata />
              )}
              {/* <CardCategories />
    <CardCategories />
    <CardCategories />
    <CardCategories /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
