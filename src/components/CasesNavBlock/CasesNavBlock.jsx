import styles from "./casesNavBlock.module.scss";

import { SvgSelector } from "../SvgSelector/SvgSelector";

const CasesNavBlock = ({ arL, arR }) => {
  return (
    <div className={styles.buttonWrap}>
      <button onClick={arL}>
        <SvgSelector styles={styles.buttonWrap_svg} id="arrowL" />
      </button>
      <button onClick={arR} className={styles.buttonWrap_r}>
        <SvgSelector styles={styles.buttonWrap_svg} id="arrowL" />
      </button>
    </div>
  );
};

export default CasesNavBlock;
