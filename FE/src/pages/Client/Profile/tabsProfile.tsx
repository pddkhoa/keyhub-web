import { useEffect, useState } from "react";
import { GridCard } from "../../../components/Card/CardBlog/card";
import { Button } from "../../../components/ui/button";
import { Contact, ScrollText, UserPlus2 } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BlogPost from "@/types/blog";
import { CardSeries } from "../../../components/Card/CardSeries/cardSeries";
import seriesType from "@/types/series";
import { Nodata } from "../../../components/ui/nodata";
import { useParams } from "react-router";
import useFetch from "@/hooks/useFetch";
import { REQUEST_TYPE } from "@/types";
import Modal from "@/components/Modal/modal";
import { ModalListUser } from "@/components/Modal/modalUser";
import useBoolean from "@/hooks/useBoolean";

export const TabsProfile = () => {
  const [tabs, setTabs] = useState("TAB_BLOG");
  const blog = useSelector((state: RootState) => state.blog.blog.result);
  const userData = useSelector((state: RootState) => state.user.detail?.data);

  const [displayModal, setDisplayModal] = useState("");
  const [displayCreate, setDisplayCreate] = useBoolean(false);

  const { sendRequest } = useFetch();

  const { id } = useParams();
  const [isUser, setIsUser] = useState(false);
  const blogUser = useSelector((state: RootState) => state.blog.blogByUser);
  const seriesUser = useSelector(
    (state: RootState) => state.series.seriesByUser
  );
  const series = useSelector((state: RootState) => state.series.series);

  const userId = Number(id);

  useEffect(() => {
    if (!userId || userData.id !== Number(userId)) {
      const isUser = !userId || userData.id === Number(userId);
      setIsUser(isUser);
    }
  }, [userId]);

  useEffect(() => {
    try {
      if (userId) {
        sendRequest({
          type: REQUEST_TYPE.GET_BLOG_BY_USER,
          slug: userId.toString(),
        });
        sendRequest({
          type: REQUEST_TYPE.LIST_SERIES_USER,
          slug: userId.toString(),
        });
      } else {
        sendRequest({ type: REQUEST_TYPE.LIST_BLOG });
        sendRequest({ type: REQUEST_TYPE.LIST_SERIES });
      }
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  return (
    <div>
      <div className="w-full h-fit">
        <div className="flex flex-auto justify-between p-2">
          <div className="w-full ">
            <div className="relative right-0">
              <TabsItems
                setTabs={setTabs}
                setDisplayModal={setDisplayModal}
                setDisplayCreate={setDisplayCreate}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-0  p-1.5 space-y-3">
        <div className="w-full bg-card shadow-lg  rounded-lg overflow-hidden"></div>
        {!isUser ? (
          <TabContent
            tabName={tabs}
            data={blogUser}
            series={seriesUser}
            displayModal={displayModal}
            displayCreate={displayCreate}
            setDisplayCreate={setDisplayCreate}
          />
        ) : (
          <TabContent
            tabName={tabs}
            data={blog}
            series={series}
            displayModal={displayModal}
            displayCreate={displayCreate}
            setDisplayCreate={setDisplayCreate}
          />
        )}
      </div>
    </div>
  );
};

interface TabsContentProps {
  tabName: string;
  data: BlogPost[];
  series: seriesType[];
  displayModal: string;
  displayCreate: boolean;
  setDisplayCreate: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
}

export const TabContent: React.FC<TabsContentProps> = ({
  tabName,
  data,
  series,
  displayModal,
  displayCreate,
  setDisplayCreate,
}) => {
  const [expanded, setExpanded] = useState<number | undefined>();

  const blogBySeries = useSelector(
    (state: RootState) => state.series.blogBySeries
  );
  const [seriesSelected, setSeriesSelected] = useState<seriesType>();
  const { id } = useParams();
  const [isUser, setIsUser] = useState(false);
  const userData = useSelector((state: RootState) => state.user.detail?.data);
  const listFollowing = useSelector(
    (state: RootState) => state.user.listFollowing
  );
  const listFollower = useSelector(
    (state: RootState) => state.user.listFollower
  );

  const { sendRequest } = useFetch();
  const [following, setFollowing] = useState(false);

  const userId = Number(id);

  useEffect(() => {
    const isUser = !userId || userData.id === Number(userId);
    setIsUser(isUser);
  }, [userData, userId]);

  useEffect(() => {
    if (expanded) {
      sendRequest({
        type: REQUEST_TYPE.LIST_BLOG_BY_SERIES,
        slug: seriesSelected?.id.toString(),
      });
    } else return;
  }, [expanded]);

  useEffect(() => {
    sendRequest({
      type: REQUEST_TYPE.GET_LIST_USER_FOLLOWING,
      slug: !isUser ? userId.toString() : userData.id?.toString(),
    });
    sendRequest({
      type: REQUEST_TYPE.GET_LIST_USER_FOLLOWER,
      slug: !isUser ? userId.toString() : userData.id?.toString(),
    });
  }, [following, isUser, id]);

  switch (tabName) {
    case "TAB_FOLLOWER":
      return (
        <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
          {displayModal === "FOLLOWER" ? (
            <ModalListUser
              setFlag={setDisplayCreate}
              data={listFollower}
              setFollowing={setFollowing}
            />
          ) : null}
        </Modal>
      );
    case "TAB_FOLLOWING":
      return (
        <Modal flag={displayCreate} closeModal={setDisplayCreate.off}>
          {displayModal === "FOLLOWING" ? (
            <ModalListUser
              setFlag={setDisplayCreate}
              data={listFollowing}
              setFollowing={setFollowing}
            />
          ) : null}
        </Modal>
      );
    case "TAB_BLOG":
      return (
        <div>
          <div className="grid grid-cols-3 gap-5 px-8">
            {data && data.length > 0 ? (
              data.map((item) => (
                <div key={item.id} className="col-span-1 h-full ">
                  <GridCard data={item} />
                </div>
              ))
            ) : (
              <div className="col-span-4">
                <Nodata />
              </div>
            )}
          </div>
        </div>
      );

    case "TAB_SERIES":
      return (
        <div>
          <div className="grid grid-cols-3 gap-5">
            {expanded ? (
              <>
                <div className="col-span-3">
                  <div className="w-full bg-card shadow-lg  rounded-lg overflow-hidden">
                    <div className="py-2 px-6 flex justify-between items-center">
                      <span className="font-semibold text-title text-xl">
                        <div className="flex items-center justify-between ">
                          <div className="flex items-center space-x-4">
                            <div className="rounded-full w-12 h-12 border border-purple-500 border-dashed p-1.5 flex justify-between items-center">
                              <span className="text-xl w-full h-full flex justify-center items-center">
                                {seriesSelected?.sumBlog}
                              </span>
                            </div>
                            <div className="text-2xl truncate font-bold w-80">
                              {seriesSelected?.name}
                            </div>
                          </div>
                        </div>
                      </span>
                      <div className="flex gap-5">
                        <Button
                          onClick={() => {
                            setExpanded(undefined);
                          }}
                        >
                          Back
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {blogBySeries && blogBySeries.length > 0
                  ? blogBySeries.map((item) => (
                      <div className="col-span-1 h-full ">
                        <GridCard key={item.id} data={item} />
                      </div>
                    ))
                  : null}
              </>
            ) : isUser ? (
              series && series.length > 0 ? (
                series.map((item) => (
                  <div className="col-span-1 h-full ">
                    <CardSeries
                      key={item.id}
                      data={item}
                      setExpanded={setExpanded}
                      setSeriesSelected={setSeriesSelected}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-3">
                  <Nodata />
                </div>
              )
            ) : series && series.length > 0 ? (
              series.map((item) => (
                <div className="col-span-1 h-full ">
                  <CardSeries
                    key={item.id}
                    data={item}
                    setExpanded={setExpanded}
                    setSeriesSelected={setSeriesSelected}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-3">
                <Nodata />
              </div>
            )}
          </div>
        </div>
      );
    default:
      return null;
  }
};

interface TabsItemsProps {
  setTabs: React.Dispatch<React.SetStateAction<string>>;
  setDisplayCreate?: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  };
  setDisplayModal?: React.Dispatch<React.SetStateAction<string>>;
}

export const TabsItems: React.FC<TabsItemsProps> = ({
  setTabs,
  setDisplayCreate,
  setDisplayModal,
}) => {
  const [activeTab, setActiveTab] = useState("TAB_BLOG");

  const handleBlogTabClick = () => {
    setActiveTab("TAB_BLOG");
    setTabs("TAB_BLOG");
  };

  const handleSeriesTabClick = () => {
    setActiveTab("TAB_SERIES");
    setTabs("TAB_SERIES");
  };

  const handleFollowingClick = () => {
    setActiveTab("TAB_FOLLOWING");
    setTabs("TAB_FOLLOWING");
    setDisplayCreate?.on();
    setDisplayModal("FOLLOWING");
  };
  const handleFollowerClick = () => {
    setActiveTab("TAB_FOLLOWER");
    setDisplayCreate?.on();
    setDisplayModal("FOLLOWER");
    setTabs("TAB_FOLLOWER");
  };

  return (
    <div>
      <ul className="flex justify-center  border-t border-gray-600 text-gray-500 ">
        <li>
          <div
            onClick={handleBlogTabClick}
            className={`flex items-center cursor-pointer p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white    ${
              activeTab === "TAB_BLOG"
                ? "text-white border-t-2 border-white "
                : ""
            } py-4 font-semibold`}
          >
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 32 32"
              stroke="currentColor"
              strokeWidth={2}
              id="editor"
            >
              <path d="M31.03,4.52l.25-.25a2.511,2.511,0,0,0,0-3.54,2.574,2.574,0,0,0-3.54,0l-.7.71L24.47,4H2.5A2.5,2.5,0,0,0,0,6.5v17A2.5,2.5,0,0,0,2.5,26H12.97a5.48,5.48,0,0,1-2.17,3.9L9.2,31.1a.5.5,0,0,0,.3.9h13a.5.5,0,0,0,.3-.9l-1.6-1.2A5.48,5.48,0,0,1,19.03,26H29.5A2.5,2.5,0,0,0,32,23.5V6.5A2.512,2.512,0,0,0,31.03,4.52ZM24.89,5l1-1,1.5-1.5L28.89,4l.62.62L29.13,5l-9.35,9.36,0,0a5,5,0,0,0-2.124-2.126Zm-6,9.866L16.71,15.3l.436-2.181A3.957,3.957,0,0,1,18.892,14.866ZM20.6,30.7l.4.3H11l.4-.3A6.531,6.531,0,0,0,13.98,26h4.04A6.531,6.531,0,0,0,20.6,30.7ZM31,23.5A1.5,1.5,0,0,1,29.5,25H2.5A1.5,1.5,0,0,1,1,23.5V22H31ZM31,21H1V6.5A1.5,1.5,0,0,1,2.5,5H23.47l-7.04,7.05a.481.481,0,0,0-.14.25l-.71,3.54a.506.506,0,0,0,.14.45.533.533,0,0,0,.36.15c.03,0,.06-.01.09-.01l3.54-.71a.069.069,0,0,0,.037-.015c.007,0,.014,0,.021,0l0,0h.009a.334.334,0,0,0,.1-.06l.008-.007a.481.481,0,0,0,.085-.073.583.583,0,0,0,.046-.039L30.31,5.24A1.474,1.474,0,0,1,31,6.5ZM30.57,3.56l-.35.36L28.1,1.8l.35-.36a1.528,1.528,0,0,1,2.12,0,1.5,1.5,0,0,1,0,2.12Zm-16.547,13.1a3.492,3.492,0,0,1-2.58.836A2.481,2.481,0,0,1,9.7,16.515,3.693,3.693,0,0,1,9,14.473a10.337,10.337,0,0,1,.028-1.157,6.235,6.235,0,0,0-.142-2.269A3.88,3.88,0,0,0,6.863,8.714,4.509,4.509,0,0,0,3.379,8.5a.5.5,0,1,0,.342.939,3.488,3.488,0,0,1,2.7.166,2.894,2.894,0,0,1,1.512,1.733,5.413,5.413,0,0,1,.1,1.912A10.976,10.976,0,0,0,8,14.527a4.685,4.685,0,0,0,.9,2.592,3.449,3.449,0,0,0,2.435,1.369,3.98,3.98,0,0,0,.425.023,4.57,4.57,0,0,0,2.912-1.092.5.5,0,1,0-.648-.762Z"></path>
            </svg>
            Blog
          </div>
        </li>

        <li>
          <div
            onClick={handleSeriesTabClick}
            className={`flex items-center cursor-pointer p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white     ${
              activeTab === "TAB_SERIES"
                ? "text-white border-t-2 border-white "
                : ""
            } py-4 font-semibold`}
          >
            <ScrollText className="mr-2" />
            Series
          </div>
        </li>
        <li>
          <div
            onClick={handleFollowingClick}
            className={`flex items-center cursor-pointer p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white     ${
              activeTab === "TAB_FOLLOWING"
                ? "text-white border-t-2 border-white "
                : ""
            } py-4 font-semibold`}
          >
            <UserPlus2 className="mr-2 w-6 h-6" />
            Following
          </div>
        </li>
        <li>
          <div
            onClick={handleFollowerClick}
            className={`flex items-center cursor-pointer p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white     ${
              activeTab === "TAB_FOLLOWER"
                ? "text-white border-t-2 border-white "
                : ""
            } py-4 font-semibold`}
          >
            <Contact className="mr-2 w-6 h-6" />
            Follower
          </div>
        </li>
      </ul>
    </div>
  );
};
