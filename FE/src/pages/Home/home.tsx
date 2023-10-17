import { createAxios } from "../../api/createInstance";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import seriesType from "../../types/series";
import { useEffect } from "react";
import { RootStateToken } from "../../types/token";
import { CreateCard } from "@/components/Card/CreateCard/createCard";

import { SidebarHome } from "@/components/Sidebar/Home/sidebarHome";
import { loginSuccess } from "@/redux/authSlice";
import ClientServices from "@/services/client/client";

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
      ClientServices.getAllSeries(user?.data.token, dispatch, axiosJWT);
    }
  }, []);

  return (
    <div className=" container  min-h-0 px-9 py-16">
      <div className="w-full h-full grid grid-cols-6">
        <div className="h-full w-full col-span-4 flex flex-col p-6 space-y-5 mx-auto overflow-x-hidden overflow-y-hidden ">
          {/* This is Story
          <StoryUser /> */}
          {/* This is content */}
          <div className="h-full  rounded-xl py-6">
            <div className="w-full space-y-5">
              <div className="mx-auto h-fit  flex flex-col border-t-2  p-4 shadow-lg max-w-2xl rounded-xl bg-card">
                <CreateCard />
              </div>
              <div className="mx-auto  flex flex-col   max-w-2xl p-4 space-y-5"></div>
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
