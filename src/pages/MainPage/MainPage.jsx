import styles from "./mainPage.module.scss";

import Hero from "../../modules/Hero/Hero";
import About from "../../modules/About/About";
import Electricity from "../../modules/Electricity/Electricity";
import Cases from "../../modules/Cases/Cases";
import Faq from "../../modules/Faq/Faq";
import ContactUs from "../../modules/ContactUs/ContactUs";
import Footer from "../../modules/Footer/Footer";

const MainPage = () => {
  return (
    <section className={styles.container}>
      <Hero />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default MainPage;
