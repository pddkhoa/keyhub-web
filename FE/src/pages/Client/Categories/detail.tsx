import { GridCard } from "@/components/Card/CardBlog/card";
import { Button } from "@/components/ui/button";
import { Nodata } from "@/components/ui/nodata";
import useAuth from "@/hooks/useAuth";
import useFetch from "@/hooks/useFetch";
import ClientServices from "@/services/client/client";
import { REQUEST_TYPE } from "@/types";
import CategoryType from "@/types/categories";
import { SlidersHorizontal } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { useLocation, useParams } from "react-router";
import { debounce } from "lodash";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CategoriesDetail = () => {
  const { id } = useParams();
  const idCategories = Number(id);
  const { axiosJWT, accessToken } = useAuth();

  const location = useLocation();
  const { sendRequest } = useFetch();

  const [categoriesDetail, setCategoriesDetail] = useState<CategoryType>();
  const [isFollowing, setIsFollowing] = useState(false);

  const [isBookmark, setIsBookmark] = useState(false);
  const [unBookmark, setUnBookmark] = useState(false);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    if (location.state) {
      setCategoriesDetail(location.state.data);
      setIsFollowing(location.state.data.checkFollowCategory);
    }
  }, [location.state]);

  const [searchTerm, setSearchTerm] = useState("");

  // Tạo debounced search function
  const debouncedSearch = useCallback(
    debounce(async (value) => {
      const report = {
        keyword: searchTerm,
        category_id: id,
      };
      await sendRequest({
        type: REQUEST_TYPE.SEARCH_BLOG_CATEGORIES,
        data: report,
      });
    }, 500),
    [searchTerm]
  );
  const blogFilter = useSelector(
    (state: RootState) => state.categories.blogSearch
  );

  // useEffect(() => {
  //   debouncedSearch(searchTerm);
  // }, [searchTerm, debouncedSearch]);

  function handleInputBlur() {
    debouncedSearch(searchTerm);
  }

  useEffect(() => {
    const fetchBlog = async () => {
      await sendRequest({ type: REQUEST_TYPE.GET_BLOG_CATEGORIES, slug: id });
    };

    fetchBlog();
  }, [id, isBookmark, unBookmark, isHide]);
  const blog = useSelector((state: RootState) => state.categories.listBlog);

  const handleFollow = async (id: number) => {
    if (!isFollowing) {
      // Nếu chưa follow, thực hiện follow
      const { body } = await ClientServices.followCategories(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        toast.success(body?.message);
        setIsFollowing(true);
      } else {
        console.log(body?.message);

        toast.error(body?.message || "Error");
      }
    } else {
      // Nếu đã follow, thực hiện unfollow (tương tự)
      const { body } = await ClientServices.followCategories(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        toast.success(body?.message);
        setIsFollowing(false);
      } else {
        console.log(body?.message);
        toast.error(body?.message || "Error");
      }
    }
    sendRequest({ type: REQUEST_TYPE.GET_LIST_CATEGORIES });
  };

  return (
    <div className="min-h-0 w-full">
      {categoriesDetail && (
        <>
          <section className="py-16 text-gray-100">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <div className="bg-gray-900 flex flex-col mx-auto lg:flex-row">
                <div
                  className="w-full lg:w-1/3"
                  style={{
                    backgroundImage: `url(${categoriesDetail.avatar})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-8 h-8 mb-8 text-violet-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <h2 className="text-3xl font-semibold leadi">
                    {categoriesDetail.name}
                  </h2>
                  <p className="mt-4 mb-8 text-sm">
                    {categoriesDetail.description}
                  </p>
                  {isFollowing ? (
                    <Button
                      variant={"gradient"}
                      onClick={() => {
                        handleFollow(categoriesDetail.id);
                      }}
                      className="self-start text-lg rounded-xl"
                    >
                      Follow
                    </Button>
                  ) : (
                    <Button
                      variant={"gradient"}
                      onClick={() => {
                        handleFollow(categoriesDetail.id);
                      }}
                      className="self-start text-lg rounded-xl"
                    >
                      Unfollow
                    </Button>
                  )}
                </div>
              </div>
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
                    value={searchTerm}
                    onBlur={handleInputBlur}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 h-10 rounded-12 text-theme-label-tertiary hover:text-theme-label-primary min-w-0  bg-transparent typo-body caret-theme-label-link focus:outline-none"
                  ></input>
                </div>
                <Button>
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
              </div>
              <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/**/}
                {blogFilter && blogFilter.length > 0 ? (
                  blogFilter.map((post) => (
                    <GridCard
                      key={post.id}
                      data={post}
                      setIsBookmark={setIsBookmark}
                      setUnBookmark={setUnBookmark}
                      setIsHide={setIsHide}
                      idCategories={id}
                    />
                  ))
                ) : blog && blog.length > 0 ? (
                  blog.map((item) => (
                    <GridCard
                      key={item.id}
                      data={item}
                      idCategories={id}
                      setIsBookmark={setIsBookmark}
                      setUnBookmark={setUnBookmark}
                      setIsHide={setIsHide}
                    />
                  ))
                ) : (
                  <Nodata />
                )}
              </div>
              {/* <div className="flex justify-center">
                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
                >
                  Load more posts...
                </button>
              </div> */}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CategoriesDetail;
