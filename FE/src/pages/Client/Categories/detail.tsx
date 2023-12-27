import { GridCard } from "@/components/Card/CardBlog/card";
import { Button } from "@/components/ui/button";
import { Nodata } from "@/components/ui/nodata";
import useAuth from "@/hooks/useAuth";
import useFetch from "@/hooks/useFetch";
import ClientServices from "@/services/client/client";
import { REQUEST_TYPE } from "@/types";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const CategoriesDetail = () => {
  const { id } = useParams();
  const idCategories = Number(id);
  const { axiosJWT, accessToken } = useAuth();

  const { sendRequest } = useFetch();

  // const [categoriesDetail, setCategoriesDetail] = useState<CategoryType>();

  const categoriesDetail = useSelector(
    (state: RootState) => state?.admin?.categoriesById
  );
  const [isFollowing, setIsFollowing] = useState(
    categoriesDetail?.checkFollowCategory
  );

  const [isFollowingCate, setIsFollowingCate] = useState(false);

  const [isBookmark, setIsBookmark] = useState(false);
  const [unBookmark, setUnBookmark] = useState(false);
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.GET_BLOG_CATEGORIES_BY_ID,
      slug: id,
    });
  }, [idCategories, isFollowingCate]);

  const blogFilter = useSelector(
    (state: RootState) => state.categories.blogSearch
  );

  useEffect(() => {
    const fetchBlog = async () => {
      await sendRequest({
        type: REQUEST_TYPE.GET_BLOG_CATEGORIES,
        slug: id,
      });
    };

    fetchBlog();
  }, [id, isBookmark, unBookmark, isHide]);
  const blog = useSelector((state: RootState) => state.categories.listBlog);

  const handleFollow = async (id: number) => {
    if (!isFollowing) {
      setIsFollowingCate(true);
      // Nếu chưa follow, thực hiện follow
      const { body } = await ClientServices.followCategories(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        toast.success(body?.message);
        setIsFollowing(true);
        setIsFollowingCate(false);
      } else {
        console.log(body?.message);
        setIsFollowingCate(false);

        toast.error(body?.message || "Error");
      }
    } else {
      // Nếu đã follow, thực hiện unfollow (tương tự)
      setIsFollowingCate(true);

      const { body } = await ClientServices.followCategories(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        toast.success(body?.message);
        setIsFollowing(false);
        setIsFollowingCate(false);
      } else {
        console.log(body?.message);
        toast.error(body?.message || "Error");
        setIsFollowingCate(false);
      }
    }
  };

  return (
    <div className="min-h-0 w-full">
      {categoriesDetail && (
        <>
          <section className="py-16 ">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <div className="bg-gray-900 dark:bg-white/90 dark:text-black text-white flex flex-col mx-auto lg:flex-row">
                <div
                  className="w-full lg:w-1/3"
                  style={{
                    backgroundImage: `url(${categoriesDetail?.avatar})`,
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
                    {categoriesDetail?.name}
                  </h2>
                  <p className="mt-4 mb-8 text-sm">
                    {categoriesDetail?.description}
                  </p>
                  {!isFollowing ? (
                    <Button
                      variant={"gradient"}
                      onClick={() => {
                        handleFollow(categoriesDetail?.id);
                      }}
                      className="self-start text-lg rounded-xl"
                    >
                      Follow
                    </Button>
                  ) : (
                    <Button
                      variant={"gradient"}
                      onClick={() => {
                        handleFollow(categoriesDetail?.id);
                      }}
                      className="self-start text-lg rounded-xl"
                    >
                      Unfollow
                    </Button>
                  )}
                </div>
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
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default CategoriesDetail;
