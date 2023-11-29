import styles from "./buttonSliderContent.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";

const ButtonSliderContent = () => {
  return (
    <button
      className={styles.buttonWrap}
      onClick={() => console.log("Slide button click!")}
    >
      <SvgSelector styles={styles.buttonWrap_svg} id="arrowTR" />
    </button>
  );
};

export default ButtonSliderContent;
