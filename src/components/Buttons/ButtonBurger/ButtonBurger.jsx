import styles from "./buttonBurger.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";

const ButtonBurger = () => {
  return (
    <button className={styles.hederSectionButtonBlock_burger} type="button">
      <SvgSelector id="burgerDesk" />
    </button>
  );
};

export default ButtonBurger;
