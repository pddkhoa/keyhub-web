import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { Nodata } from "@/components/ui/nodata";
import Pagination from "@/components/Pagination/pagination";
import { CardDefault } from "@/components/Card/CardList/card";
import { Skeleton } from "@/components/ui/skeleton";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import useAuth from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import convertDate from "@/components/FormatDate/formatDate";

const Explore = () => {
  const { isLoading, sendRequest } = useFetch();
  const { axiosJWT, accessToken } = useAuth();
  const [index, setIndex] = useState<number>(1);

  const blogPopular = useSelector(
    (state: RootState) => state.explore.blogPopular
  );
  const blogLastest = useSelector(
    (state: RootState) => state.explore.blogLastest
  );
  const blogMostLike = useSelector(
    (state: RootState) => state.explore.blogMostLike
  );
  const blogMostView = useSelector(
    (state: RootState) => state.explore.blogMostView
  );

  const blogRight = useSelector((state: RootState) => state.explore.blog4Right);
  const blogLeft = useSelector((state: RootState) => state.explore.blog4Left);
  const blogFive = useSelector(
    (state: RootState) => state.explore.blog5Popular
  );

  const blogOne = useSelector(
    (state: RootState) => state.explore.blogOnePopular
  );

  const [maxPages, setMaxPages] = useState<number>();

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.LIST_BLOG_LASTEST,
      slug: index.toString(),
    });

    sendRequest({
      type: REQUEST_TYPE.LIST_BLOG_MOSTLIKE,
      slug: index.toString(),
    });
    sendRequest({
      type: REQUEST_TYPE.LIST_BLOG_MOSTVIEW,
      slug: index.toString(),
    });
    sendRequest({
      type: REQUEST_TYPE.LIST_BLOG_POPULAR,
      slug: index.toString(),
    });

    sendRequest({ type: REQUEST_TYPE.GET_BLOG_LEFT });
    sendRequest({ type: REQUEST_TYPE.GET_BLOG_RIGHT });
    sendRequest({ type: REQUEST_TYPE.GET_5_BLOG });
    sendRequest({ type: REQUEST_TYPE.GET_ONE_BLOG });
  }, [index]);

  useEffect(() => {
    const fetchSizeBlog = async () => {
      const { body } = await ClientServices.getSizeBlogExplore(
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setMaxPages(body?.result);
      } else {
        console.log(body?.message);
      }
    };

    fetchSizeBlog();
  }, [index]);

  const handlePageChange = (pageIndex: number) => {
    setIndex(pageIndex);
  };

  const formatDate = (date: any) => {
    const inputDate = date;
    const formattedDate = inputDate && convertDate(inputDate);

    return formattedDate;
  };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="container  min-h-0 px-9 py-16">
      <div className="w-full h-full grid grid-cols-8">
        <div className="h-full w-full col-span-8 flex flex-col p-5 space-y-5 mx-auto overflow-x-hidden overflow-y-hidden ">
          <div className="w-full space-y-2">
            <section className="px-5 py-10 bg-gray-900 text-gray-100 dark:bg-stone-300 dark:text-black">
              <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
                <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                  <div className="flex flex-col space-y-8 md:space-y-12">
                    {blogLeft &&
                      blogLeft.length > 0 &&
                      blogLeft.map((blog) => (
                        <div
                          key={blog?.id}
                          className="flex flex-col space-y-0.5"
                        >
                          <h3 className="flex items-center space-x-2 text-gray-400">
                            <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-400 dark:bg-black" />
                            <span className="text-xs font-bold tracki uppercase dark:text-black">
                              Exclusive
                            </span>
                          </h3>
                          <Link
                            to={`/blog/${blog?.id}`}
                            className="font-base hover:underline dark:text-black"
                          >
                            {blog?.title}
                          </Link>
                          <p className="text-xs text-gray-400 dark:text-gray-500">
                            {formatDate(blog?.create_date)} by
                            <Link
                              to={`/user/${blog?.users?.id}`}
                              className="hover:underline text-violet-400 dark:text-blue-600"
                            >
                              {blog?.users?.name}
                            </Link>
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="flex flex-col w-full space-y-2">
                    <div className="flex w-full h-1 bg-opacity-10 bg-violet-400 ">
                      <div className="w-1/2 h-full bg-violet-400 dark:bg-black" />
                    </div>
                  </div>
                </div>
                <div
                  className="relative flex col-span-12 bg-center bg-no-repeat bg-cover bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
                  style={{
                    backgroundImage: `url(${blogOne?.avatar})`,
                  }}
                >
                  <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-violet-400 dark:border-white text-gray-100">
                    {blogOne?.categories?.name}
                  </span>
                  <Link
                    to={`/blog/${blogOne?.id}`}
                    className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-gray-900 to-gray-900"
                  >
                    <h1 className="font-base text-2xl font-semibold group-hover:underline text-gray-100">
                      {blogOne?.title}
                    </h1>
                  </Link>
                </div>
                <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                  <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-400">
                    <div className="pb-5 text-xs font-bold uppercase border-b-2 border-violet-400 dark:border-black">
                      Latest
                    </div>
                  </div>
                  <div className="flex flex-col divide-y divide-gray-700">
                    {blogRight &&
                      blogRight.length > 0 &&
                      blogRight.map((blog) => (
                        <div key={blog.id} className="flex px-1 py-4">
                          <img
                            className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                            src={blog?.avatar}
                          />
                          <div className="flex flex-col flex-grow">
                            <Link
                              to={`/blog/${blog?.id}`}
                              className="font-base hover:underline"
                            >
                              {blog?.title}
                            </Link>
                            <p className="mt-auto text-xs text-gray-400 dark:text-gray-500">
                              {formatDate(blog?.create_date)}
                              <Link
                                to={`/user/${blog?.id}`}
                                className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                              >
                                @{blog?.users?.second_name}
                              </Link>
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="w-full space-y-2">
            <div className="max-w-screen-xl p-5 mx-auto bg-gray-900  text-gray-100 dark:bg-stone-300 dark:text-black">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                {blogFive &&
                  blogFive.length > 0 &&
                  blogFive.map((blog) => (
                    <div
                      key={blog?.id}
                      className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                      style={{
                        backgroundImage: `url(${blog?.avatar})`,
                      }}
                    >
                      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />
                      <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                        <Link
                          to={`/categories/${blog.categories.id}`}
                          className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100  border-t-4 border-purple-400"
                        >
                          {blog?.categories?.name}
                        </Link>
                        <div className="flex flex-col justify-start text-center text-gray-100">
                          {formatDate(blog?.create_date)}
                        </div>
                      </div>
                      <h2 className="z-10 p-5">
                        <Link
                          to={`/blog/${blog?.id}`}
                          className="font-medium text-md hover:underline text-gray-100"
                        >
                          {blog?.title}
                        </Link>
                      </h2>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="w-full space-y-2">
            <div className="w-full space-y-2 ">
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
                  <div className="h-fit rounded-lg p-4 ">
                    <div className="grid-flow-row w-full space-y-5">
                      {isLoading ? (
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
                  <div className="h-fit rounded-lg p-4">
                    <div className="grid-flow-row w-full space-y-5">
                      {isLoading ? (
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
                  <div className="h-fit rounded-lg p-4 ">
                    <div className="grid-flow-row w-full space-y-5">
                      {isLoading ? (
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
                  <div className="h-fit rounded-lg p-4 ">
                    <div className="grid-flow-row w-full space-y-5">
                      {isLoading ? (
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
      </div>
    </div>
  );
};

export default Explore;
