import styles from "./buttonLogo.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";

const ButtonLogo = () => {
  return (
    <a className={styles.hederSectionLogo} href="#top">
      <SvgSelector styles={styles.hederSectionLogo_svg} id="logo" />
    </a>
  );
};

export default ButtonLogo;
