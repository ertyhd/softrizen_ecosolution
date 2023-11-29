import styles from "./buttonTouch.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";
import { Link } from "react-scroll";

const ButtonTouch = ({ children }) => {
  return (
    <Link
      to="contact"
      smooth={true}
      duration={1200}
      className={styles.hederSectionButtonBlock_touch}
    >
      <p>{children}</p>
      <SvgSelector
        styles={styles.hederSectionButtonBlock_touch__svg}
        id="touchPoint"
      />
    </Link>
  );
};

export default ButtonTouch;
