import styles from "./buttonTouch.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";
import { Link } from "react-scroll";

const ButtonTouch = ({ children }) => {
  return (
    <Link
      to="Contact Us"
      smooth={true}
      duration={1200}
      offset={-92}
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
