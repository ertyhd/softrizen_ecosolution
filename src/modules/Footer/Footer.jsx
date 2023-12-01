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
      <div className={styles.footerUpBlock}>
        <div className={styles.footerUpBlock_halfW}>
          <ButtonLogo />
        </div>
        <div className={styles.footerUpBlock_social}>
          <ContactUsSingleItem item={social} withoutTitle={true} />
        </div>
        <div className={styles.footerUpBlock_btn}>
          <ButtonUp />
        </div>
      </div>
      <div className={styles.footerDownBlock}>
        <p className={styles.footerUpBlock_halfW}>{address.text_1}</p>
        <p className={styles.footerDownBlock_mail}>{email.text_1}</p>
        <p className={styles.footerDownBlock_cop}>ecosolution © 2023</p>
      </div>
    </section>
  );
};

export default Footer;
