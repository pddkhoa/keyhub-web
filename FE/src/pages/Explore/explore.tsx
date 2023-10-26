import AlphabetAvatar from "@/components/Avatar/avatar";
import { Slider } from "@/components/Swipers/slideHighlight";
import image from "../../asset/1111.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { SlideVideo } from "@/components/Swipers/slideVideo";
import { useEffect, useState } from "react";
import BlogPost from "@/types/blog";
import { createAxios } from "@/api/createInstance";
import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import ClientServices from "@/services/client/client";
import { Nodata } from "@/components/ui/nodata";
import Pagination from "@/components/Pagination/pagination";
import { CardDefault } from "@/components/Card/card";
import { Skeleton } from "@/components/ui/skeleton";

export const Explore = () => {
  const user = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();
  const axiosJWT = createAxios(user, dispatch, loginSuccess);
  const accessToken = user?.data.token;
  const [loading, setLoading] = useState(false);
  const [blogPopular, setBlogPopular] = useState<BlogPost[]>();
  const [blogLastest, setBlogLastest] = useState<BlogPost[]>();
  const [blogMostLike, setBlogMostLike] = useState<BlogPost[]>();
  const [blogMostView, setBlogMostView] = useState<BlogPost[]>();
  const [maxPages, setMaxPages] = useState<number>();

  const [index, setIndex] = useState<number>(1);

  useEffect(() => {
    const fetchBlogPopular = async () => {
      setLoading(true);
      const { body } = await ClientServices.getBlogPopular(
        index,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setBlogPopular(body?.result);
        setLoading(false);
      } else {
        console.log(body?.message);
        setLoading(false);
      }
    };

    fetchBlogPopular();
  }, [index]);

  useEffect(() => {
    const fetchBlogLastest = async () => {
      setLoading(true);
      const { body } = await ClientServices.getBlogLastest(
        index,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setBlogLastest(body?.result);
        setLoading(false);
      } else {
        console.log(body?.message);
        setLoading(false);
      }
    };

    fetchBlogLastest();
  }, [index]);

  useEffect(() => {
    const fetchBlogMostLike = async () => {
      setLoading(true);
      const { body } = await ClientServices.getBlogMostLike(
        index,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setBlogMostLike(body?.result);
        setLoading(false);
      } else {
        console.log(body?.message);
        setLoading(false);
      }
    };

    fetchBlogMostLike();
  }, [index]);
  useEffect(() => {
    const fetchBlogMostView = async () => {
      setLoading(true);
      const { body } = await ClientServices.getBlogMostViews(
        index,
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setBlogMostView(body?.result);
        setLoading(false);
      } else {
        console.log(body?.message);
        setLoading(false);
      }
    };

    fetchBlogMostView();
  }, [index]);

  useEffect(() => {
    const fetchSizeBlog = async () => {
      setLoading(true);
      const { body } = await ClientServices.getSizeBlogExplore(
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setMaxPages(body?.result);
        setLoading(false);
      } else {
        console.log(body?.message);
        setLoading(false);
      }
    };

    fetchSizeBlog();
  }, [index]);

  const handlePageChange = (pageIndex: number) => {
    setIndex(pageIndex);
  };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="container  min-h-0 px-9 py-16">
      <div className="w-full h-full grid grid-cols-8">
        <div className="h-full w-full col-span-6 flex flex-col p-5 space-y-5 mx-auto overflow-x-hidden overflow-y-hidden ">
          <div className="w-full space-y-2">
            <h2 className="text-xl text-title">Tin nổi bật</h2>
            <Slider />
          </div>
          <div className="w-full space-y-2">
            <h2 className="text-xl text-title">Video nổi bật</h2>
            <SlideVideo />
          </div>
          <div className="w-full space-y-2">
            <h2 className="text-xl text-title">Các bài viết hay</h2>
            <div className="w-full space-y-2">
              <Tabs defaultValue="Popular">
                <TabsList className="w-full border-b-2 border-border text-title-foreground">
                  <TabsTrigger
                    onClick={() => setIndex(1)}
                    className="data-[state=active]:border-b-2 py-2.5 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500 "
                    value="Popular"
                  >
                    Popular
                  </TabsTrigger>
                  <TabsTrigger
                    onClick={() => setIndex(1)}
                    className="data-[state=active]:border-b-2 py-2.5 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500"
                    value="Latest"
                  >
                    Latest
                  </TabsTrigger>
                  <TabsTrigger
                    onClick={() => setIndex(1)}
                    className="data-[state=active]:border-b-2 py-2.5 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500"
                    value="mostLike"
                  >
                    Most Like
                  </TabsTrigger>
                  <TabsTrigger
                    onClick={() => setIndex(1)}
                    className="data-[state=active]:border-b-2 py-2.5 data-[state=active]:border-blue-500 data-[state=active]:text-blue-500"
                    value="mostView"
                  >
                    Most View
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="Popular">
                  <div className="h-fit rounded-lg p-4 bg-card">
                    <div className="grid-flow-row w-full space-y-5">
                      {loading ? (
                        <>
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </>
                      ) : blogPopular && blogPopular.length > 0 ? (
                        blogPopular.map((item) => <CardDefault data={item} />)
                      ) : (
                        <Nodata />
                      )}
                    </div>
                    <div className="w-full mx-auto py-4 flex justify-center">
                      <Pagination
                        page={index}
                        setPage={handlePageChange}
                        maxPage={maxPages ? maxPages : 100}
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="Latest">
                  <div className="h-fit rounded-lg p-4 bg-card">
                    <div className="grid-flow-row w-full space-y-5">
                      {loading ? (
                        <>
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </>
                      ) : blogLastest && blogLastest.length > 0 ? (
                        blogLastest.map((item) => <CardDefault data={item} />)
                      ) : (
                        <Nodata />
                      )}
                    </div>
                    <div className="w-full mx-auto py-4 flex justify-center">
                      <Pagination
                        page={index}
                        setPage={handlePageChange}
                        maxPage={maxPages ? maxPages : 100}
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="mostLike">
                  <div className="h-fit rounded-lg p-4 bg-card">
                    <div className="grid-flow-row w-full space-y-5">
                      {loading ? (
                        <>
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </>
                      ) : blogMostLike && blogMostLike.length > 0 ? (
                        blogMostLike.map((item) => <CardDefault data={item} />)
                      ) : (
                        <Nodata />
                      )}
                    </div>
                    <div className="w-full mx-auto py-4 flex justify-center">
                      <Pagination
                        page={index}
                        setPage={handlePageChange}
                        maxPage={maxPages ? maxPages : 100}
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="mostView">
                  <div className="h-fit rounded-lg p-4 bg-card">
                    <div className="grid-flow-row w-full space-y-5">
                      {loading ? (
                        <>
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                          <Skeleton />
                        </>
                      ) : blogMostView && blogMostView.length > 0 ? (
                        blogMostView.map((item) => <CardDefault data={item} />)
                      ) : (
                        <Nodata />
                      )}
                    </div>
                    <div className="w-full mx-auto py-4 flex justify-center">
                      <Pagination
                        page={index}
                        setPage={handlePageChange}
                        maxPage={maxPages ? maxPages : 100}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        <div className="h-full w-full col-span-2 flex flex-col p-5 space-y-5 mx-auto overflow-x-hidden overflow-y-hidden">
          <div className="w-full space-y-2">
            <div className="h-fit rounded-lg p-4 mt-9 bg-card">
              <div className="flex flex-col space-y-5">
                <div className="text-title flex justify-between">
                  <span>Thành viên nổi bật</span>
                  <span>See all</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2 hover:bg-hover p-2 rounded-lg cursor-pointer">
                    <AlphabetAvatar size={50} />
                    <div className="flex flex-col">
                      <span className="text-title text-md">
                        Phan Dai Dang Khoa
                      </span>
                      <span className="text-title-foreground text-sm">
                        @pddkhoa
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 hover:bg-hover p-2 rounded-lg cursor-pointer">
                    <AlphabetAvatar size={50} />
                    <div className="flex flex-col">
                      <span className="text-title text-md">
                        Phan Dai Dang Khoa
                      </span>
                      <span className="text-title-foreground text-sm">
                        @pddkhoa
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 hover:bg-hover p-2 rounded-lg cursor-pointer">
                    <AlphabetAvatar size={50} />
                    <div className="flex flex-col">
                      <span className="text-title text-md">
                        Phan Dai Dang Khoa
                      </span>
                      <span className="text-title-foreground text-sm">
                        @pddkhoa
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 hover:bg-hover p-2 rounded-lg cursor-pointer">
                    <AlphabetAvatar size={50} />
                    <div className="flex flex-col">
                      <span className="text-title text-md">
                        Phan Dai Dang Khoa
                      </span>
                      <span className="text-title-foreground text-sm">
                        @pddkhoa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-2">
            <div className="h-fit rounded-lg p-4 mt-2 bg-card">
              <div className="flex flex-col space-y-5">
                <div className="text-title flex justify-between">
                  <span>Intro/QC</span>
                </div>
                <div className="flex flex-col space-y-3">
                  <div className="w-full overflow-hidden">
                    <a
                      href="#"
                      className="group relative rounded-lg block bg-black"
                    >
                      <img
                        alt="Developer"
                        src={image}
                        className="absolute inset-0 h-full w-full object-cover rounded-lg opacity-75 transition-opacity group-hover:opacity-50"
                      />
                      <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                          Developer
                        </p>
                        <p className="text-xl font-bold text-white sm:text-2xl">
                          PDD KHOA
                        </p>
                        <div className="mt-32 sm:mt-48 lg:mt-64">
                          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p className="text-sm text-white">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Omnis perferendis hic asperiores
                              quibusdam quidem voluptates doloremque reiciendis
                              nostrum harum. Repudiandae?
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-2">
            <div className="h-full rounded-lg p-4 mt-2 bg-card">
              <div className="flex flex-col space-y-5">
                <div className="text-title flex justify-between">
                  <span>Danh Muc</span>
                  <span>See all</span>
                </div>
                <div className="flex flex-col space-y-3 h-52 overflow-y-auto">
                  <div className="flex justify-between w-full p-2 bg-input hover:bg-hover text-title-foreground rounded-md border-l-2">
                    <span>Bong Da</span>
                    <span className="p-1.5 rounded-full bg-card hover:bg-hover cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="flex justify-between w-full p-2 bg-input hover:bg-hover text-title-foreground rounded-md border-l-2">
                    <span>Bong Da</span>
                    <span className="p-1.5 rounded-full bg-card hover:bg-hover cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="flex justify-between w-full p-2 bg-input hover:bg-hover text-title-foreground rounded-md border-l-2">
                    <span>Bong Da</span>
                    <span className="p-1.5 rounded-full bg-card hover:bg-hover cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="flex justify-between w-full p-2 bg-input hover:bg-hover text-title-foreground rounded-md border-l-2">
                    <span>Bong Da</span>
                    <span className="p-1.5 rounded-full bg-card hover:bg-hover cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="flex justify-between w-full p-2 bg-input hover:bg-hover text-title-foreground rounded-md border-l-2">
                    <span>Bong Da</span>
                    <span className="p-1.5 rounded-full bg-card hover:bg-hover cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
