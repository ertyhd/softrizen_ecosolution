import styles from "./hero.module.scss";

import ButtonLearnMore from "../../components/Buttons/ButtonLearnMore/ButtonLearnMore";
import picture_d_1x from "../../assete/images/jpg/desk/wind-turbine-clean-energy1x.jpg";
import picture_d_2x from "../../assete/images/jpg/desk/wind-turbine-clean-energy2x.jpg";
import picture_d_4x from "../../assete/images/jpg/desk/wind-turbine-clean-energy4x.jpg";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
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
        {/* Cases */}
      </div>
      <div className={styles.heroContactBlock}>
        <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        <div className={styles.heroContactBlock_rightPart}>
          <p>office@ecosolution.com</p>
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
    </section>
  );
};

export default Hero;
