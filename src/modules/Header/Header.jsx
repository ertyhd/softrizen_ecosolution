import styles from "./heder.module.scss";

import ButtonLogo from "../../components/Buttons/ButtonLogo/ButtonLogo";
import ButtonTouch from "../../components/Buttons/ButtonTouch/ButtonTouch";
import ButtonBurger from "../../components/Buttons/ButtonBurger/ButtonBurger";

const Header = () => {
  return (
    <section className={styles.hederSection}>
      <ButtonLogo />
      <div className={styles.hederSectionButtonBlock}>
        <ButtonBurger />
        <ButtonTouch>Get in touch</ButtonTouch>
      </div>
    </section>
  );
};
export default Header;
