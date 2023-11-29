import styles from "./contactUsSingleItem.module.scss";
import { Link } from "react-router-dom";
import { SvgSelector } from "../SvgSelector/SvgSelector";

const ContactUsSingleItem = ({
  item,
  withoutTitle = false,
  modalStyles = false,
}) => {
  return (
    <>
      {!withoutTitle && <p className={styles.contactTitle}>{item.title}:</p>}
      <div className={item.text_1 ? styles.linkBlockCol : styles.linkBlockRow}>
        <Link className={styles.contactLink} href={item.link_1}>
          <SvgSelector
            styles={
              modalStyles ? styles.modalLinkBlock_svg : styles.linkBlock_svg
            }
            id={item.ico_1}
          />
          <p>{item.text_1}</p>
        </Link>
        {item.ico_2 && (
          <Link className={styles.contactLink} href={item.link_2}>
            <SvgSelector
              styles={
                modalStyles ? styles.modalLinkBlock_svg : styles.linkBlock_svg
              }
              id={item.ico_2}
            />
            <p>{item.text_2}</p>
          </Link>
        )}
      </div>
    </>
  );
};

export default ContactUsSingleItem;
