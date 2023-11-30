import styles from "./aboutSingleCard.module.scss";
import { SvgSelector } from "../SvgSelector/SvgSelector";

const AboutSingleCard = ({ item }) => {
  if (item) {
    return (
      <>
        {item.atr === "card" && (
          <li className={styles.singlCardContainer}>
            <div className={styles.singlCardContainer_titleBlock}>
              <SvgSelector
                styles={styles.singlCardContainer_titleBlock_svg}
                id={item.svgId}
              />

              <h3>{item.title}</h3>
            </div>
            <p>{item.text}</p>
          </li>
        )}
        {item.atr === "img" && (
          <li className={styles.singlImageContainer}>
            <img
              className={styles.singlImageContainer_img}
              alt={item.title}
              srcSet={`${item.img.d_1x} 1x, ${item.img.d_2x} 2x, ${item.img.d_4x} 4x`}
              src={item.img.d_1x}
            />
          </li>
        )}
      </>
    );
  }
  return;
};

export default AboutSingleCard;
