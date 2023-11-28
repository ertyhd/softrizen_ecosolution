import styles from "./contactUsBlock.module.scss";
import ContactUsSingleItem from "../ContactUsSingleItem/ContactUsSingleItem";

const ContactUsBlock = ({ items }) => {
  const elements = items.map((item) => (
    <li key={item.id}>
      <ContactUsSingleItem item={item} />
    </li>
  ));
  return <ul className={styles.contactUsBlock}>{elements}</ul>;
};

export default ContactUsBlock;
