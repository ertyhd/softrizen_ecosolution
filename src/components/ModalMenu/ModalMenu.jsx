import styles from "./modalMenu.module.scss";

import { nanoid } from "nanoid";

import Modal from "../Modal/Modal";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import { Link } from "react-scroll";
import ContactUsSingleItem from "../ContactUsSingleItem/ContactUsSingleItem";
import items from "../../assete/data/contact_items";

const ModalMenu = ({ close }) => {
  const modules = ["Main", "About", "Cases", "FAQ", "Contact Us"];
  const social = items.find((option) => option.title === "social networks");
  const elements = modules.map((modul) => (
    <li key={nanoid()}>
      <Link
        to={modul}
        smooth={true}
        duration={1200}
        offset={-92}
        className={styles.modalMenuWindow_link}
      >
        <p>{modul}</p>
        <SvgSelector styles={styles.modalMenuWindow_link_svg} id="modalLink" />
      </Link>
    </li>
  ));
  return (
    <Modal close={close}>
      <section className={styles.modalMenuWindow}>
        <div className={styles.modalMenuWindow_upBlock}>
          <button
            type="button"
            onClick={close}
            className={styles.modalMenuWindow_button}
          >
            <SvgSelector
              styles={styles.modalMenuWindow_button_svg}
              id="close"
            />
            <p>close</p>
          </button>
          <ul className={styles.modalMenuWindow_links}>{elements}</ul>
        </div>

        <ContactUsSingleItem
          item={social}
          withoutTitle={true}
          modalStyles={true}
        />
      </section>
    </Modal>
  );
};

export default ModalMenu;
