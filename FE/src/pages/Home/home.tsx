import { useCallback, useRef, useState } from "react";

import { SidebarHome } from "@/components/Sidebar/Home/sidebarHome";
import BlogPost from "@/types/blog";
import { Nodata } from "@/components/ui/nodata";
import CardDetail from "@/components/Card/cardDetail";
import ClientServices from "@/services/client/client";
import useLoadingLazy from "@/hooks/useLoadingLazy";
import { SkeletonPost } from "@/components/ui/skeleton";

const Home = () => {
  const [indexPage, setIndexPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const customGetBlogPopular = async (
    indexPage: any,
    accessToken: any,
    axiosJWT: any
  ) => {
    return await ClientServices.getBlogInFeed(indexPage, accessToken, axiosJWT);
  };
  const { isLoading, result, hasNextPage } = useLoadingLazy<BlogPost>(
    indexPage,
    customGetBlogPopular
  );

  const intObserver = useRef<any>();
  const lastPostRef = useCallback(
    (post: BlogPost) => {
      if (isLoading) return;
      if (intObserver.current) {
        intObserver.current.disconnect();
      }
      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage && !isLoading) {
          setIndexPage((prev) => prev + 1);
          setIsLoadingMore(true);
        }
        if (!hasNextPage) setIsLoadingMore(false);
      });
      if (post) intObserver.current.observe(post);
    },
    [isLoading, hasNextPage]
  );

  const content =
    result &&
    result.length > 0 &&
    result.map((post, i) => {
      if (result.length === i + 1) {
        return <CardDetail ref={lastPostRef} key={post.id} post={post} />;
      }
      return <CardDetail key={post.id} post={post} />;
    });

  return (
    <div className="container  min-h-0 px-9 py-16">
      <div className="w-full h-full grid grid-cols-6  overflow-y-auto">
        <div className="h-full w-full col-span-4 flex flex-col p-6 space-y-5 mx-auto overflow-x-hidden overflow-y-hidden ">
          {/* This is Story
          <StoryUser /> */}
          {/* This is content */}
          <div className="min-h-0  rounded-xl py-6">
            <div className="w-full space-y-5">
              <div className="mx-auto  flex flex-col   max-w-2xl p-4 space-y-5 gap-5">
                {result && result.length > 0 ? content : <Nodata />}
                {isLoadingMore && <SkeletonPost />}
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-full col-span-2 flex flex-col p-6  overflow-x-hidden">
          {/* This is suggest */}
          <SidebarHome />
        </div>
      </div>
    </div>
  );
};
export default Home;
