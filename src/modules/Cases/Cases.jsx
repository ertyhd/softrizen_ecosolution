import styles from "./cases.module.scss";
import { useRef, useState } from "react";

import CasesNavBlock from "../../components/CasesNavBlock/CasesNavBlock";
import CasesSlider from "../../components/CasesSlider/CasesSlider";
import CasesPaginBlock from "../../components/CasesPaginBlock/CasesPaginBlock";

import items from "../../assete/data/cases_items";
import { Element } from "react-scroll";

const Cases = () => {
  const reviewsSwiperRef = useRef(null);
  const [isSlideIndex, setSlideIndex] = useState(1);

  const handleSlideChange = () => {
    if (reviewsSwiperRef && reviewsSwiperRef.current) {
      setSlideIndex(reviewsSwiperRef.current.swiper.realIndex + 1);
    }
  };

  const handleClickPrev = () => reviewsSwiperRef.current.swiper.slidePrev();
  const handleClickNext = () => reviewsSwiperRef.current.swiper.slideNext();
  return (
    <Element name="cases" className={styles.casesSection}>
      <div className={styles.casesSection_topBlock}>
        <h2>Successful cases of our company</h2>
        <div className={styles.casesSection_topBlock_navBlock}>
          <CasesPaginBlock count={isSlideIndex} all={items.length} />
          <CasesNavBlock arL={handleClickPrev} arR={handleClickNext} />
        </div>
      </div>
      <div className={styles.casesSection_bottomBlock}>
        <CasesSlider
          items={items}
          onSlideChange={handleSlideChange}
          refference={reviewsSwiperRef}
        />
      </div>
    </Element>
  );
};

export default Cases;
