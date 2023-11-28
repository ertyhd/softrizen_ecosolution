import styles from "./mainPage.module.scss";
import Hero from "../../modules/Hero/Hero";
import About from "../../modules/About/About";
import Electricity from "../../modules/Electricity/Electricity";
import Cases from "../../modules/Cases/Cases";

const MainPage = () => {
  return (
    <section className={styles.container}>
      <Hero />
      <About />
      <Electricity />
      <Cases />
    </section>
  );
};

export default MainPage;
