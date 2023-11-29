import styles from "./hero.module.scss";

import ButtonLearnMore from "../../components/Buttons/ButtonLearnMore/ButtonLearnMore";
import picture_d_1x from "../../assete/images/jpg/desk/wind-turbine-clean-energy1x.jpg";
import picture_d_2x from "../../assete/images/jpg/desk/wind-turbine-clean-energy2x.jpg";
import picture_d_4x from "../../assete/images/jpg/desk/wind-turbine-clean-energy4x.jpg";

import items from "../../assete/data/contact_items";
import { Element } from "react-scroll";

const Hero = () => {
  const address = items.find((option) => option.title === "address");
  const email = items.find((option) => option.title === "e-mail");

  return (
    <Element name="Main" className={styles.heroContainer}>
      <div className={styles.heroTextBlock}>
        <h1>RENEWABLE ENERGY For any task</h1>
        <div className={styles.heroTextBlock_deskription}>
          <p>
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <ButtonLearnMore />
        </div>
      </div>
      <div className={styles.heroContactBlock}>
        <p>{address.text_1}</p>
        <div className={styles.heroContactBlock_rightPart}>
          <p>{email.text_1}</p>
          <p>ecosolution © 2023</p>
        </div>
      </div>
      <div className={styles.heroImgBlock}>
        <img
          alt="wind farm"
          srcSet={`${picture_d_1x} 1x, ${picture_d_2x} 2x, ${picture_d_4x} 4x`}
          src={picture_d_1x}
        />
      </div>
    </Element>
  );
};

export default Hero;
