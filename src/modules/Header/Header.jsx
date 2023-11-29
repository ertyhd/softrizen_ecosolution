import styles from "./heder.module.scss";

import ButtonLogo from "../../components/Buttons/ButtonLogo/ButtonLogo";
import ButtonTouch from "../../components/Buttons/ButtonTouch/ButtonTouch";
import ButtonBurger from "../../components/Buttons/ButtonBurger/ButtonBurger";
import { Element } from "react-scroll";

const Header = () => {
  return (
    <>
      <Element name="header" className={styles.hederSlick} />
      <section className={styles.hederSection}>
        <div className={styles.hederSectionCentred}>
          <ButtonLogo />
          <div className={styles.hederSectionButtonBlock}>
            <ButtonBurger />
            <ButtonTouch>Get in touch</ButtonTouch>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
