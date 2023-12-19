import { Card } from "@/components/Card/CardList/card";
import { Loading } from "@/components/Loading/loading";
import { Nodata } from "@/components/ui/nodata";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Bookmark = () => {
    const { isLoading, sendRequest } = useFetch();

    const blogBookmark = useSelector(
        (state: RootState) => state.blog.blogBookmark
    );

    useEffect(() => {
        sendRequest({ type: REQUEST_TYPE.LIST_BLOG_BOOKMARK });
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="mx-auto container  py-16">
            <div className="grid grid-cols-8 text-title p-5 gap-5">
                <div className="col-span-8 flex flex-col">
                    <div className="mt-8 space-y-5">
                        {blogBookmark && blogBookmark.length > 0 ? (
                            blogBookmark.map((item) => (
                                <Card
                                    key={item.id}
                                    data={item}
                                    cardType="bookmark"
                                />
                            ))
                        ) : (
                            <Nodata />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;
