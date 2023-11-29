import styles from "./buttonBurger.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";

const ButtonBurger = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={styles.hederSectionButtonBlock_burger}
      type="button"
    >
      <SvgSelector id="burgerDesk" />
    </button>
  );
};

export default ButtonBurger;
