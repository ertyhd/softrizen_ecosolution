import styles from "./buttonUp.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";
import { Link } from "react-scroll";

const ButtonUp = () => {
  return (
    <Link to="Main" smooth={true} duration={1200} className={styles.buttonUp}>
      <SvgSelector styles={styles.buttonUp_svg} id="arrowUp" />
    </Link>
  );
};

export default ButtonUp;
