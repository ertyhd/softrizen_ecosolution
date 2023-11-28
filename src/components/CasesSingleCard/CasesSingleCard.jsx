import styles from "./casesSingleCard.module.scss";
import ButtonSliderContent from "../Buttons/ButtonSliderContent/ButtonSliderContent";

const CasesSingleCard = ({ item }) => {
  return (
    <div className={styles.casesSingleCardContainer}>
      <div className={styles.casesSingleCardContainer_imgWrap}>
        {/* <img alt={text} src={img} /> */}
        <img
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
// {
//     id: nanoid(),
//     title: "Zaporizhia city Private Enterprise “Biotech”",
//     text: "Mini nuclear stations",
//     date: "May 2021",
//     img: {
//       d_1x: nuclear_power_d_1x,
//       d_2x: nuclear_power_d_2x,
//       d_4x: nuclear_power_d_4x,
//     },
//   },
