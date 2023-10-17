import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import img1 from "../../asset/1112.jpg";
import img2 from "../../asset/banner.jpeg";
import img3 from "../../asset/36.jpg";
import img4 from "../../asset/38.jpg";

export const Slider = () => {
  return (
    <div className="h-fit rounded-lg p-4 bg-card">
      <div className="w-full mx-auto">
        <div className="p-2">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            centeredSlides={true}
            loop={true}
            parallax={true}
            speed={800}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 52,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{ el: ".swiper-pagination" }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper_container"
          >
            <SwiperSlide className="rounded-xl">
              <img
                src={img1}
                alt="slide_image"
                className="w-full h-full rounded-xl object-cover"
              />
              <h2 className="title">
                TẢN MẠN TRƯỚC CHUNG KẾT C1: BÂY GIỜ, HOẶC KHÔNG BAO GIỜ!
              </h2>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <img
                src={img2}
                alt="slide_image"
                className="w-full h-full rounded-xl object-cover"
              />
              <h2 className="title">
                TẢN MẠN TRƯỚC CHUNG KẾT C1: BÂY GIỜ, HOẶC KHÔNG BAO GIỜ!
              </h2>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <img
                src={img3}
                alt="slide_image"
                className="w-full h-full rounded-xl object-cover"
              />
              <h2 className="title">
                TẢN MẠN TRƯỚC CHUNG KẾT C1: BÂY GIỜ, HOẶC KHÔNG BAO GIỜ!
              </h2>
            </SwiperSlide>
            <SwiperSlide className="rounded-xl">
              <img
                src={img4}
                alt="slide_image"
                className="w-full h-full rounded-xl object-cover"
              />
              <h2 className="title">
                TẢN MẠN TRƯỚC CHUNG KẾT C1: BÂY GIỜ, HOẶC KHÔNG BAO GIỜ!
              </h2>
            </SwiperSlide>

            <div className="slider-controler p-2">
              <div className="swiper-pagination mt-4"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
