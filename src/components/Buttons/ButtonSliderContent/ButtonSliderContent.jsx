import styles from "./buttonSliderContent.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";

const ButtonSliderContent = () => {
  return (
    <button className={styles.buttonWrap}>
      <SvgSelector styles={styles.buttonWrap_svg} id="arrowTR" />
    </button>
  );
};

export default ButtonSliderContent;
