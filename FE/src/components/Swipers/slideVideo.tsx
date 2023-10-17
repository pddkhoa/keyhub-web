// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import img1 from "../../asset/1112.jpg";
import img2 from "../../asset/banner.jpeg";
import img3 from "../../asset/36.jpg";
import img4 from "../../asset/38.jpg";
import img5 from "../../asset/1111.jpg";
export const SlideVideo = () => {
  return (
    <div className="h-fit rounded-lg p-3 bg-card">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="slide_image"
            className="w-full h-full rounded-xl object-cover"
          />
          <h2 className="title">
            TẢN MẠN TRƯỚC CHUNG KẾT C1: BÂY GIỜ, HOẶC KHÔNG BAO GIỜ!
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="slide_image"
            className="w-full h-full rounded-xl object-cover"
          />
          <h2 className="title">
            TẢN MẠN TRƯỚC CHUNG KẾT C1: BÂY GIỜ, HOẶC KHÔNG BAO GIỜ!
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={img3}
            alt="slide_image"
            className="w-full h-full rounded-xl object-cover"
          />
          <h2 className="title">
            TẢN MẠN TRƯỚC CHUNG KẾT C1: BÂY GIỜ, HOẶC KHÔNG BAO GIỜ!
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img4}
            alt="slide_image"
            className="w-full h-full rounded-xl object-cover"
          />
          <h2 className="title">
            TẢN MẠN TRƯỚC CHUNG KẾT C1: BÂY GIỜ, HOẶC KHÔNG BAO GIỜ!
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img5}
            alt="slide_image"
            className="w-full h-full rounded-xl object-cover"
          />
          <h2 className="title">
            TẢN MẠN TRƯỚC CHUNG KẾT C1: BÂY GIỜ, HOẶC KHÔNG BAO GIỜ!
          </h2>
        </SwiperSlide>
        <div className=" mx-auto">
          <div className="swiper-button-prev slider-arrow"></div>
          <div className="swiper-button-next slider-arrow"></div>
        </div>
      </Swiper>
    </div>
  );
};
