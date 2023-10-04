import { createAxios } from "../../api/createInstance";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import seriesType from "../../types/series";
import { useEffect } from "react";
import { getAllSeries } from "../../redux/apiRequest";
import { RootStateToken } from "../../types/token";
import { DetailCard } from "@/components/Card/CardPorfile/detailCard";
import { CreateCard } from "@/components/Card/CreateCard/createCard";

// import { StoryUser } from "@/components/Story/storyUser";
import { SidebarHome } from "@/components/Sidebar/Home/sidebarHome";
import { loginSuccess } from "@/redux/authSlice";

interface RootStateSeries {
  series: {
    series: {
      data: seriesType;
    };
  };
}

const Home = () => {
  const user = useSelector((state: RootStateToken) => state.auth.login);
  const seriesList = useSelector(
    (state: RootStateSeries) => state.series.series.data
  );
  console.log(seriesList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosJWT = createAxios(user, dispatch, loginSuccess);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user?.data.token) {
      getAllSeries(user?.data.token, dispatch, axiosJWT);
    }
  }, []);

  return (
    <div className=" container  min-h-0 px-9 py-16">
      <div className="w-full h-full grid grid-cols-6">
        <div className="h-full w-full col-span-4 flex flex-col p-6 space-y-5 mx-auto overflow-x-hidden overflow-y-hidden ">
          {/* This is Story
          <StoryUser /> */}
          {/* This is content */}
          <div className="h-full  boder rounded-xl ">
            <div className="w-full space-y-5">
              <div className="mx-auto h-fit  flex flex-col border  p-4 shadow-lg max-w-2xl rounded-xl bg-card">
                <CreateCard />
              </div>
              <div className="mx-auto  flex flex-col   max-w-2xl p-4 space-y-5">
                <DetailCard />
                <DetailCard />
                <DetailCard />
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
