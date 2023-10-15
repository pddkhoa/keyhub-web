import { createAxios } from "@/api/createInstance";
import { ListCard } from "@/components/Card/CardBlog/listCard";
import { CardBookmark } from "@/components/Card/CardBookmark/cardBookmark";
import { Loading } from "@/components/Loading/loading";
import { Button } from "@/components/ui/button";
import { loginSuccess } from "@/redux/authSlice";
import { RootState } from "@/redux/store";
import ClientServices from "@/services/client/client";
import BlogPost from "@/types/blog";
import { SlidersHorizontal } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Bookmark = () => {
  const user = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();
  const axiosJWT = createAxios(user, dispatch, loginSuccess);
  const accessToken = user?.data.token;
  const [loading, setLoading] = useState(false);
  const [bookmark, setBookmark] = useState<BlogPost[]>();
  const [removing, setRemoving] = useState(false);

  useEffect(() => {
    const fetchBookmark = async () => {
      setLoading(true);
      const { body } = await ClientServices.getBlogSaveByAuth(
        accessToken,
        axiosJWT
      );
      if (body?.success) {
        setBookmark(body?.result);
        setLoading(false);
      } else {
        console.log(body?.message);
        setLoading(false);
      }
    };

    fetchBookmark();
  }, [removing]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto container  py-16">
      <div className="grid grid-cols-8 text-title p-5 gap-5">
        <div className="col-span-6 flex flex-col">
          <div className="flex h-12 gap-3 self-stretch items-center mb-6 typo-callout">
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
                placeholder="Search bookmarks"
                id="posts-search"
                className="flex-1 h-10 rounded-12 text-theme-label-tertiary hover:text-theme-label-primary min-w-0  bg-transparent typo-body caret-theme-label-link focus:outline-none"
              ></input>
            </div>
            <Button>
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8">
            {bookmark && bookmark.length > 0 ? (
              bookmark.map((item) => (
                <CardBookmark data={item} setRemoving={setRemoving} />
              ))
            ) : (
              <div>No data</div>
            )}
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-5">
          <div className="bg-white shadow-xl w-80 rounded-lg overflow-hidden">
            <div
              className="bg-cover bg-center h-16 p-4 flex justify-end items-center"
              style={{
                backgroundImage:
                  "url(https://mosscm.com/wp-content/uploads/2017/11/news-dallas-skyline.jpg)",
              }}
            >
              <p className="uppercase tracking-widest text-sm text-white bg-black py-1 px-2 rounded opacity-75 shadow-lg">
                Dallas, TX
              </p>
            </div>
            <div className="p-4 text-gray-700 flex justify-between">
              <div>
                <p className="text-3xl text-gray-900">
                  <i className="wi wi-day-sunny text-yellow-500" /> 84°
                  <span className="text-lg text-gray-500">/ 67°</span>
                </p>
                <p className="text-sm w-56">
                  Mostly sunny throughout the day.
                  <br />
                  4-8 MPH winds.
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border-t border-gray-300 text-gray-600"></div>
          </div>
          <div className="mt-5 bg-gray-700 w-80 rounded-xl hover:bg-gray-800 hover:scale-105 duration-700 p-5">
            <figure className="w-10 h-10 p-2 bg-blue-800 rounded-md">
              <svg width={24} height={24} fill="#FFFFFF">
                <path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
              </svg>
            </figure>
            <h4 className="py-2 text-white font-bold">Jesus Echeverria</h4>
            <p className="text-base leading-7 text-white font-semibold space-y-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <p className="text-sm leading-7 text-slate-300 space-y-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
              est numquam ipsa consequatur provident fugiat quaerat cupiditate
              temporibus cum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
