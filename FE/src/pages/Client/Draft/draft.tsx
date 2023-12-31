import { Card } from "@/components/Card/CardList/card";
import { Loading } from "@/components/Loading/loading";
import { Nodata } from "@/components/ui/nodata";
import useFetch from "@/hooks/useFetch";
import { RootState } from "@/redux/store";
import { REQUEST_TYPE } from "@/types";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ListDraft = () => {
    const { isLoading, sendRequest } = useFetch();

    const blogDraft = useSelector((state: RootState) => state.blog.blogDraft);

    useEffect(() => {
        sendRequest({ type: REQUEST_TYPE.LIST_BLOG_DRAFT });
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="mx-auto container  py-16">
            <div className="grid grid-cols-8 text-title p-5 gap-5">
                <div className="col-span-8 flex flex-col">
                    {/* <div className="flex h-12 gap-3 self-stretch items-center mb-6 typo-callout">
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
                placeholder="Search drafts"
                id="posts-search"
                className="flex-1 h-10 rounded-12 text-theme-label-tertiary hover:text-theme-label-primary min-w-0  bg-transparent typo-body caret-theme-label-link focus:outline-none"
              ></input>
            </div>
          </div> */}
                    <div className="mt-8  space-y-5">
                        {blogDraft && blogDraft.length > 0 ? (
                            blogDraft.map((item) => (
                                <Card
                                    data={item}
                                    key={item.id}
                                    cardType="draft"
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

export default ListDraft;
