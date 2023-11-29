import styles from "./buttonLogo.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";
import { Link } from "react-scroll";

const ButtonLogo = () => {
  return (
    <Link className={styles.hederSectionLogo} to="header">
      <SvgSelector styles={styles.hederSectionLogo_svg} id="logo" />
    </Link>
  );
};

export default ButtonLogo;
