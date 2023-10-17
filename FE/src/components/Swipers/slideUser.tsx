// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { CardUser } from "../Card/cardUser";
import "./slideUser.css";

export const SlideUser = () => {
  return (
    <div className="h-full rounded-lg">
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
        <SwiperSlide>
          <CardUser />
        </SwiperSlide>
        <SwiperSlide>
          <CardUser />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <CardUser />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <CardUser />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <CardUser />
        </SwiperSlide>
        <div className=" mx-auto">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
        </div>
      </Swiper>
    </div>
  );
};
