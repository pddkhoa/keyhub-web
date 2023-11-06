import { GridCard } from "@/components/Card/CardBlog/listCard";
import { Button } from "@/components/ui/button";
import { Nodata } from "@/components/ui/nodata";
import useAuth from "@/hooks/useAuth";
import { showToast } from "@/hooks/useToast";
import ClientServices from "@/services/client/client";
import BlogPost from "@/types/blog";
import CategoryType from "@/types/categories";
import { SlidersHorizontal } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";

const CategoriesDetail = () => {
  const { id } = useParams();
  const idCategories = Number(id);
  const { axiosJWT, accessToken } = useAuth();

  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const [categoriesDetail, setCategoriesDetail] = useState<CategoryType>();
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (location.state) {
      setCategoriesDetail(location.state.data);
      setIsFollowing(location.state.data.checkFollowCategory);
    }
  }, [location.state]);

  console.log(isFollowing);
  console.log(categoriesDetail);

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

  const handleFollow = async (id: number) => {
    if (!isFollowing) {
      // Nếu chưa follow, thực hiện follow
      const { body } = await ClientServices.followCategories(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        showToast(body?.message, "success");
        setIsFollowing(true);
      } else {
        console.log(body?.message);

        showToast("error", "error");
      }
    } else {
      // Nếu đã follow, thực hiện unfollow (tương tự)
      const { body } = await ClientServices.followCategories(
        id,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        showToast(body?.message, "success");
        setIsFollowing(false);
      } else {
        console.log(body?.message);
        showToast("error", "error");
      }
    }
  };

  return (
    <div className="min-h-0 w-full">
      {categoriesDetail && (
        <>
          <div className=" z-30 h-96 mt-10 relative items-center justify-center w-full overflow-hidden">
            <div className="grid grid-cols-2 p-4 mx-28 py-10">
              <div className="col-span-1">
                <div className="flex flex-col gap-3">
                  <span className="text-xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-100">
                    The security first platform
                  </span>
                  <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-pink-100 ">
                    Simplify your security with authentication services
                  </span>
                  <span className="text-xl font-thin text-title-foreground">
                    Define access roles for the end-users, and extend your
                    authorization capabilities to implement dynamic access
                    control.
                  </span>
                  {isFollowing ? (
                    <Button
                      variant={"gradient"}
                      onClick={() => handleFollow(categoriesDetail.id)}
                      className="w-1/5 mt-5 brightness-90"
                    >
                      UnFollow
                    </Button>
                  ) : (
                    <Button
                      variant={"gradient"}
                      onClick={() => handleFollow(categoriesDetail.id)}
                      className="w-1/5 mt-5 brightness-90"
                    >
                      Follow
                    </Button>
                  )}
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <img src="https://preview.cruip.com/stellar/images/feature-image-01.png" />
                </div>
              </div>
            </div>
            <div className="absolute right-0  bottom-0 left-0 z-0 h-full w-36 bg-gradient-to-tr to-transparent  from-gray-900 via-purple-950 filter blur-2xl" />
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

export default CategoriesDetail;
