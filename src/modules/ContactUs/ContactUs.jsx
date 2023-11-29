import styles from "./contactUs.module.scss";

import items from "../../assete/data/contact_items";
import ContactUsBlock from "../../components/ContactUsBlock/ContactUsBlock";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import { Element } from "react-scroll";

const ContactUs = () => {
  return (
    <Element name="contact" className={styles.contactUsSection}>
      <h2>Contact us</h2>
      <div className={styles.contactUsContainer}>
        <div className={styles.contactUsContainer_contacts}>
          <ContactUsBlock items={items} />
        </div>
        <div className={styles.contactUsContainer_forms}>
          <ContactUsForm />
        </div>
      </div>
    </Element>
  );
};

export default ContactUs;
