// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { CardUser } from "../Card/cardUser";
import "./slideUser.css";
import User from "@/types/user";
import { Nodata } from "../ui/nodata";
import { SkeletonUser } from "../ui/skeleton";
import { useState } from "react";
import { Button } from "../ui/button";

interface SlideUserProps {
  user: User[];
  loading: boolean;
  setFollowing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SlideUser: React.FC<SlideUserProps> = ({
  user,
  loading,
  setFollowing,
}) => {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="h-full rounded-xl">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          enabled: true,
        }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        className="slider-user"
      >
        {loading ? (
          <>
            <div className="grid grid-flow-col">
              <SkeletonUser />
              <SkeletonUser />
              <SkeletonUser />
            </div>
          </>
        ) : user && user.length > 0 ? (
          user.map((item) => (
            <SwiperSlide>
              <CardUser key={item.id} data={item} setFollowing={setFollowing} />
            </SwiperSlide>
          ))
        ) : (
          <Nodata />
        )}
        <div className="flex justify-end -mt-12 mx-10">
          <button
            className="cursor-pointer  duration-200 hover:scale-125 active:scale-100 border-2  z-50"
            title="Go Back"
            onClick={() => {
              swiper.slidePrev();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              className="stroke-blue-900"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M11 6L5 12M5 12L11 18M5 12H19"
              />
            </svg>
          </button>

          <button
            className="cursor-pointer duration-200 hover:scale-125 active:scale-100 rotate-180  z-50"
            title="Go Next"
            onClick={() => {
              swiper.slideNext();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              className="stroke-blue-900"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M11 6L5 12M5 12L11 18M5 12H19"
              />
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
};
