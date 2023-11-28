import styles from "./buttonTouch.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";

const ButtonTouch = ({ children }) => {
  return (
    <a className={styles.hederSectionButtonBlock_touch} href="#top">
      <p>{children}</p>
      <SvgSelector
        styles={styles.hederSectionButtonBlock_touch__svg}
        id="touchPoint"
      />
    </a>
  );
};

export default ButtonTouch;
