import styles from "./buttomSubmit.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";

const ButtomSubmit = ({ children, type }) => {
  return (
    <button className={styles.BtnSubmit} type={type}>
      {children}
      <div className={styles.BtnSubmit_svgWrapper}>
        <SvgSelector id="cleanArrowR" />
      </div>
    </button>
  );
};

export default ButtomSubmit;
