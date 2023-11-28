import styles from "./buttonLearnMore.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";

const ButtonLearnMore = () => {
  return (
    <>
      <a className={styles.learmMoreBtn} href="#top">
        Learn more
        <div className={styles.learmMoreBtn_svgWrapper}>
          <SvgSelector id="cleanArrowR" />
        </div>
      </a>
    </>
  );
};

export default ButtonLearnMore;
