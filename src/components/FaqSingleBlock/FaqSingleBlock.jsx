import styles from "./faqSingleBlock.module.scss";
import { SvgSelector } from "../SvgSelector/SvgSelector";

const FaqSingleBlock = ({ handleClick, item, isId }) => {
  return (
    <div className={styles.fagSingleBlockWrapp}>
      <div className={styles.btnH3Wrap}>
        <button
          className={styles.btnH3Wrap_button}
          onClick={() => {
            handleClick(item.id);
          }}
          type="button"
        >
          <SvgSelector
            styles={styles.btnH3Wrap_button_svg}
            id={isId === item.id ? "minus" : "plus"}
          />
        </button>
        <h3>{item.q}</h3>
      </div>
      <div
        className={`${styles.movingBlock} ${
          isId === item.id ? styles.expanded : ""
        }`}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
};

export default FaqSingleBlock;
