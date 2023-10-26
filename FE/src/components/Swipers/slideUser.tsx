// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { CardUser } from "../Card/cardUser";
import "./slideUser.css";
import User from "@/types/user";
import { Nodata } from "../ui/nodata";
import { SkeletonUser } from "../ui/skeleton";

interface SlideUserProps {
  user: User[];
  loading: boolean;
}

export const SlideUser: React.FC<SlideUserProps> = ({ user, loading }) => {
  return (
    <div className="h-full rounded-xl">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: true,
        }}
        modules={[Pagination, Navigation]}
        className="slider-user"
      >
        {loading ? (
          <>
            <div className="grid grid-flow-col">
              <SkeletonUser />
              <SkeletonUser />
              <SkeletonUser />
              <SkeletonUser />
            </div>
          </>
        ) : user && user.length > 0 ? (
          user.map((item) => (
            <SwiperSlide>
              <CardUser key={item.id} data={item} />
            </SwiperSlide>
          ))
        ) : (
          <Nodata />
        )}

        <div className=" mx-auto">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
        </div>
      </Swiper>
    </div>
  );
};
