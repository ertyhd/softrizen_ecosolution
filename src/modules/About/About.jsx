import styles from "./about.module.scss";
import items from "../../assete/data/about_items";
import AboutSingleCard from "../../components/AboutSingleCard/AboutSingleCard";
import { Element } from "react-scroll";

const About = () => {
  const elements = items.map((item) => (
    <AboutSingleCard key={item.id} item={item} />
  ));

  return (
    <Element name="about" className={styles.aboutContainer}>
      <div className={styles.aboutContainer_description}>
        <h2>Main values of our company</h2>
        <p>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </p>
      </div>
      <ul className={styles.aboutContainer_grid}>{elements}</ul>
    </Element>
  );
};

export default About;
