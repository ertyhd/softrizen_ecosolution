import styles from "./heder.module.scss";
import { useState } from "react";
import ButtonLogo from "../../components/Buttons/ButtonLogo/ButtonLogo";
import ButtonTouch from "../../components/Buttons/ButtonTouch/ButtonTouch";
import ButtonBurger from "../../components/Buttons/ButtonBurger/ButtonBurger";
import { Element } from "react-scroll";
import ModalMenu from "../../components/ModalMenu/ModalMenu";

const Header = () => {
  const [isBurgerPresed, setBurgerPresed] = useState(false);

  const closeModal = () => {
    setBurgerPresed(false);
  };

  return (
    <>
      <Element name="header" className={styles.hederSlick}>
        {isBurgerPresed && <ModalMenu close={closeModal} />}
      </Element>
      <section className={styles.hederSection}>
        <div className={styles.hederSectionCentred}>
          <ButtonLogo />
          <div className={styles.hederSectionButtonBlock}>
            <ButtonBurger handleClick={() => setBurgerPresed(true)} />
            <ButtonTouch>Get in touch</ButtonTouch>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
