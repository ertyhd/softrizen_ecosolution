import styles from "./footer.module.scss";
import ButtonLogo from "../../components/Buttons/ButtonLogo/ButtonLogo";
import items from "../../assete/data/contact_items";
import ContactUsSingleItem from "../../components/ContactUsSingleItem/ContactUsSingleItem";
import ButtonUp from "../../components/Buttons/ButtonUp/ButtonUp";

const Footer = () => {
  const address = items.find((option) => option.title === "address");
  const email = items.find((option) => option.title === "e-mail");
  const social = items.find((option) => option.title === "social networks");
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerLeftBlock}>
        <ButtonLogo />
        <p>{address.text_1}</p>
      </div>
      <div className={styles.footerRightBlock}>
        <div className={styles.footerRightBlock_social}>
          <ContactUsSingleItem item={social} withoutTitle={true} />
          <p>{email.text_1}</p>
        </div>
        <div className={styles.footerRightBlock_upBtn}>
          <ButtonUp />
          <p>ecosolution © 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
