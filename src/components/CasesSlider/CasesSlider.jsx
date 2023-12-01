import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper/modules";

import CasesSingleCard from "../CasesSingleCard/CasesSingleCard";

const CasesSlider = ({ onSlideChange, items, refference }) => {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setMobile(mediaQuery.matches);
    const handleMediaChange = (event) => {
      setMobile(event.matches);
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addListener(handleMediaChange);
    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, [isMobile]);

  const elements = items.map((item) => (
    <SwiperSlide key={item.id}>
      <CasesSingleCard key={item.id} item={item} />
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        style={{ width: "100%" }}
        onSlideChange={onSlideChange}
        ref={refference}
        slidesPerView={isMobile ? 1 : 2}
        spaceBetween={12}
        freeMode={true}
        centeredSlides={false}
        loop={true}
        modules={[Pagination]}
      >
        {elements}
      </Swiper>
    </>
  );
};

export default CasesSlider;
