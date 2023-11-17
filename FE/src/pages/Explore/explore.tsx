import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import BlogPost from "@/types/blog";
import ClientServices from "@/services/client/client";
import { Nodata } from "@/components/ui/nodata";
import Pagination from "@/components/Pagination/pagination";
import { CardDefault } from "@/components/Card/card";
import { Skeleton } from "@/components/ui/skeleton";
import useAuth from "@/hooks/useAuth";

const Explore = () => {
  const { axiosJWT, accessToken } = useAuth();

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
        <div className="h-full w-full col-span-8 flex flex-col p-5 space-y-5 mx-auto overflow-x-hidden overflow-y-hidden ">
          <div className="w-full space-y-2">
            <section className="px-5 py-10 bg-gray-900 text-gray-100">
              <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
                <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
                  <div className="flex flex-col space-y-8 md:space-y-12">
                    <div className="flex flex-col space-y-2">
                      <h3 className="flex items-center space-x-2 text-gray-400">
                        <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-400" />
                        <span className="text-xs font-bold tracki uppercase">
                          Exclusive
                        </span>
                      </h3>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="font-serif hover:underline"
                      >
                        Donec sed elit quis odio mollis dignissim eget et nulla.
                      </a>
                      <p className="text-xs text-gray-400">
                        47 minutes ago by
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:underline text-violet-400"
                        >
                          Leroy Jenkins
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h3 className="flex items-center space-x-2 text-gray-400">
                        <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-400" />
                        <span className="text-xs font-bold tracki uppercase">
                          Exclusive
                        </span>
                      </h3>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="font-serif hover:underline"
                      >
                        Ut fermentum nunc quis ipsum laoreet condimentum.
                      </a>
                      <p className="text-xs text-gray-400">
                        2 hours ago by
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:underline text-violet-400"
                        >
                          Leroy Jenkins
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <h3 className="flex items-center space-x-2 text-gray-400">
                        <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-400" />
                        <span className="text-xs font-bold tracki uppercase">
                          Exclusive
                        </span>
                      </h3>
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="font-serif hover:underline"
                      >
                        Nunc nec ipsum lobortis, pulvinar neque sed.
                      </a>
                      <p className="text-xs text-gray-400">
                        4 hours ago by
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="hover:underline text-violet-400"
                        >
                          Leroy Jenkins
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col w-full space-y-2">
                    <div className="flex w-full h-1 bg-opacity-10 bg-violet-400">
                      <div className="w-1/2 h-full bg-violet-400" />
                    </div>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="flex items-center justify-between w-full"
                    >
                      <span className="text-xs font-bold tracki uppercase">
                        See more exclusives
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 stroke-current text-violet-400"
                      >
                        <line x1={5} y1={12} x2={19} y2={12} />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div
                  className="relative flex col-span-12 bg-center bg-no-repeat bg-cover bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/random/239x319")',
                  }}
                >
                  <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-violet-400 text-gray-100">
                    paris, france
                  </span>
                  <a className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-gray-900 to-gray-900">
                    <span className="flex items-center mb-4 space-x-2 text-violet-400">
                      <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-400">
                        <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-400" />
                      </span>
                      <span className="text-sm font-bold">Live</span>
                    </span>
                    <h1
                      rel="noopener noreferrer"
                      className="font-serif text-2xl font-semibold group-hover:underline text-gray-100"
                    >
                      Morbi mattis justo est, ac consectetur dui eleifend vitae.
                      Donec venenatis?
                    </h1>
                  </a>
                </div>
                <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
                  <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-400">
                    <button
                      type="button"
                      className="pb-5 text-xs font-bold uppercase border-b-2 border-violet-400"
                    >
                      Latest
                    </button>
                  </div>
                  <div className="flex flex-col divide-y divide-gray-700">
                    <div className="flex px-1 py-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                        src="https://source.unsplash.com/random/244x324"
                      />
                      <div className="flex flex-col flex-grow">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="font-serif hover:underline"
                        >
                          Aenean ac tristique lorem, ut mollis dui.
                        </a>
                        <p className="mt-auto text-xs text-gray-400">
                          5 minutes ago
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                          >
                            Politics
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex px-1 py-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                        src="https://source.unsplash.com/random/245x325"
                      />
                      <div className="flex flex-col flex-grow">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="font-serif hover:underline"
                        >
                          Nulla consectetur efficitur.
                        </a>
                        <p className="mt-auto text-xs text-gray-400">
                          14 minutes ago
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                          >
                            Sports
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex px-1 py-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                        src="https://source.unsplash.com/random/246x326"
                      />
                      <div className="flex flex-col flex-grow">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="font-serif hover:underline"
                        >
                          Vitae semper augue purus tincidunt libero.
                        </a>
                        <p className="mt-auto text-xs text-gray-400">
                          22 minutes ago
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                          >
                            World
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex px-1 py-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500"
                        src="https://source.unsplash.com/random/247x327"
                      />
                      <div className="flex flex-col flex-grow">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="font-serif hover:underline"
                        >
                          Suspendisse potenti.
                        </a>
                        <p className="mt-auto text-xs text-gray-400">
                          37 minutes ago
                          <a
                            rel="noopener noreferrer"
                            href="#"
                            className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                          >
                            Business
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="w-full space-y-2">
            <div className="max-w-screen-xl p-5 mx-auto bg-gray-900 text-gray-100">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                <div
                  className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/random/240x320")',
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined"
                    >
                      Politics
                    </a>
                    <div className="flex flex-col justify-start text-center text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        04
                      </span>
                      <span className="leadi uppercase">Aug</span>
                    </div>
                  </div>
                  <h2 className="z-10 p-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-md hover:underline text-gray-100"
                    >
                      {" "}
                      Autem sunt tempora mollitia magnam non voluptates
                    </a>
                  </h2>
                </div>
                <div
                  className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/random/241x320")',
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined"
                    >
                      Health
                    </a>
                    <div className="flex flex-col justify-start text-center text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        01
                      </span>
                      <span className="leadi uppercase">Aug</span>
                    </div>
                  </div>
                  <h2 className="z-10 p-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-md hover:underline text-gray-100"
                    >
                      Inventore reiciendis aliquam excepturi
                    </a>
                  </h2>
                </div>
                <div
                  className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/random/242x320")',
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100  border-t-4 border-purple-400"
                    >
                      Science
                    </a>
                    <div className="flex flex-col justify-start text-center text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        28
                      </span>
                      <span className="leadi uppercase">Jul</span>
                    </div>
                  </div>
                  <h2 className="z-10 p-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-md hover:underline text-gray-100"
                    >
                      Officiis mollitia dignissimos commodi optio vero animi
                    </a>
                  </h2>
                </div>
                <div
                  className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 bg-gray-500"
                  style={{
                    backgroundImage:
                      'url("https://source.unsplash.com/random/243x320")',
                  }}
                >
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />
                  <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-3 py-2 text-xs font-semibold tracki uppercase text-gray-100 bgundefined"
                    >
                      Sports
                    </a>
                    <div className="flex flex-col justify-start text-center text-gray-100">
                      <span className="text-3xl font-semibold leadi tracki">
                        19
                      </span>
                      <span className="leadi uppercase">Jul</span>
                    </div>
                  </div>
                  <h2 className="z-10 p-5">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="font-medium text-md hover:underline text-gray-100"
                    >
                      Doloribus sit illo necessitatibus architecto
                      exercitationem enim
                    </a>
                  </h2>
                </div>
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
      </div>
    </div>
  );
};

export default Explore;
