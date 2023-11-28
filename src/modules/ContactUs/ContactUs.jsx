import styles from "./contactUs.module.scss";

import items from "./items";
import ContactUsBlock from "../../components/ContactUsBlock/ContactUsBlock";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";

const ContactUs = () => {
  return (
    <section className={styles.contactUsSection}>
      <h2>Contact us</h2>
      <div className={styles.contactUsContainer}>
        <div className={styles.contactUsContainer_contacts}>
          <ContactUsBlock items={items} />
        </div>
        <div className={styles.contactUsContainer_forms}>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
