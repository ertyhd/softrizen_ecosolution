import styles from "./mainPage.module.scss";
import Hero from "../../modules/Hero/Hero";
import About from "../../modules/About/About";

import AboutSingleCard from "../../components/AboutSingleCard/AboutSingleCard";

const MainPage = () => {
  return (
    <section className={styles.container}>
      <Hero />
      <About />
      <AboutSingleCard />
    </section>
  );
};

export default MainPage;
