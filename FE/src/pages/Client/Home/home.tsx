import { useCallback, useEffect, useRef, useState } from "react";

import BlogPost from "@/types/blog";
import { Nodata } from "@/components/ui/nodata";
import CardDetail from "@/components/Card/cardDetail";
import useLoadingLazy from "@/hooks/useLoadingLazy";
import { SkeletonPost } from "@/components/ui/skeleton";

import ClientServices from "@/services/client/client";

const Home = () => {
    const [indexPage, setIndexPage] = useState<number>(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [isHide, setIsHide] = useState(false);
    const [isBookmark, setIsBookmark] = useState(false);
    const [unBookmark, setUnBookmark] = useState(false);

    const customGetBlogPopular = async (
        indexPage: any,
        accessToken: any,
        axiosJWT: any
    ) => {
        return await ClientServices.getBlogInFeed(
            indexPage,
            accessToken,
            axiosJWT
        );
    };
    const { isLoading, result, hasNextPage } = useLoadingLazy<BlogPost>(
        indexPage,
        customGetBlogPopular,
        isHide,
        isBookmark,
        unBookmark
    );

    const intObserver = useRef<any>();
    const lastPostRef = useCallback(
        (post: BlogPost) => {
            if (isLoading) return;

            // if (isHide[post.id]) {
            //   // Skip observing if post is already hidden
            //   return;
            // }

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
        [isLoading, hasNextPage, isHide, isBookmark, unBookmark]
    );

    useEffect(() => {
        // Check if any post is hidden or bookmarked
        const isAnyPostHidden = Object.values(isHide).some(
            (visibility) => visibility
        );

        // If any post is hidden or bookmarked, reload data
        if (isAnyPostHidden || isBookmark || unBookmark) {
            // Trigger a reload, reset the page index or any logic you have to fetch data
            setIndexPage(1); // Reset indexPage to 1
        }
    }, [isHide, isBookmark, unBookmark]);

    const content =
        result &&
        result.length > 0 &&
        result.map((post, i) => {
            if (result.length === i + 1) {
                return (
                    <CardDetail
                        ref={lastPostRef}
                        key={post.id}
                        post={post}
                        isHide={isHide}
                        setIsBookmark={setIsBookmark}
                        setUnBookmark={setUnBookmark}
                        setIsHide={setIsHide}
                    />
                );
            }
            return (
                <CardDetail
                    key={post.id}
                    post={post}
                    setIsHide={setIsHide}
                    setIsBookmark={setIsBookmark}
                    setUnBookmark={setUnBookmark}
                    isHide={isHide}
                />
            );
        });

    return (
        <div className="container  min-h-0 px-4 py-4">
            <div className="w-full h-full flex justify-center  overflow-y-auto py-4">
                <div className="h-full w-fit col-span-8  flex flex-col p-6 space-y-5 overflow-x-hidden overflow-y-hidden ">
                    {/* <StoryUser /> */}
                    <div className="min-h-0 col rounded-xl py-6">
                        <div className="w-full space-y-5">
                            <div className="mx-auto  flex flex-col  max-w-full p-4 gap-5">
                                {result && result.length > 0 ? (
                                    content
                                ) : (
                                    <Nodata />
                                )}
                                {isLoadingMore && <SkeletonPost />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
