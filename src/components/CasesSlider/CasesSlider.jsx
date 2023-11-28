import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Pagination } from "swiper/modules";

import CasesSingleCard from "../CasesSingleCard/CasesSingleCard";

const CasesSlider = ({ onSlideChange, items, refference }) => {
  const elements = items.map((item) => (
    <SwiperSlide key={item.id}>
      <CasesSingleCard key={item.id} item={item} />
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        onSlideChange={onSlideChange}
        ref={refference}
        slidesPerView={2}
        spaceBetween={48}
        centeredSlides={false}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {elements}
      </Swiper>
    </>
  );
};

export default CasesSlider;
