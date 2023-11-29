import styles from "./faq.module.scss";
import FaqGridBlock from "../../components/FaqGridBlock/FaqGridBlock";
import ButtonTouch from "../../components/Buttons/ButtonTouch/ButtonTouch";

import items from "../../assete/data/faq_items";
import { Element } from "react-scroll";

const Faq = () => {
  return (
    <Element name="FAQ" className={styles.fagSection}>
      <div className={styles.fagSection_leftBlock}>
        <FaqGridBlock items={items} />
      </div>
      <div className={styles.fagSection_rightBlock}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.fagSection_rightBlock_down}>
          <p>Didn't find the answer to your question? </p>
          <ButtonTouch>Contact Us</ButtonTouch>
        </div>
      </div>
    </Element>
  );
};

export default Faq;
