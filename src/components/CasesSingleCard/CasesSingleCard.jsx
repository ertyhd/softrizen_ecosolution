import styles from "./casesSingleCard.module.scss";
import ButtonSliderContent from "../Buttons/ButtonSliderContent/ButtonSliderContent";

const CasesSingleCard = ({ item }) => {
  return (
    <div className={styles.casesSingleCardContainer}>
      <div className={styles.casesSingleCardContainer_imgWrap}>
        {/* <img alt={text} src={img} /> */}
        <img
          className={styles.casesSingleCardContainer_imgWrap_img}
          alt={item.text}
          srcSet={`${item.img.d_1x} 1x, ${item.img.d_2x} 2x, ${item.img.d_4x} 4x`}
          src={item.img.d_1x}
        />
      </div>
      <div className={styles.casesSingleCardContainer_textBlock}>
        <div className={styles.casesSingleCardContainer_textBlockTop}>
          <p>{item.title}</p>
          <ButtonSliderContent />
        </div>
        <div className={styles.casesSingleCardContainer_textBlockBottom}>
          <p>{item.text}</p>
          <p>{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default CasesSingleCard;
