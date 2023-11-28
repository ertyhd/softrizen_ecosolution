import styles from "./faqGridBlock.module.scss";
import { useState } from "react";
import FaqSingleBlock from "../FaqSingleBlock/FaqSingleBlock";

const FaqGridBlock = ({ items }) => {
  const [isItemID, setItemID] = useState(items[0].id);
  const handleButtonClick = (id) => {
    setItemID(id);
  };
  const elements = items.map((item) => (
    <li key={item.id}>
      <FaqSingleBlock
        handleClick={handleButtonClick}
        item={item}
        isId={isItemID}
      />
    </li>
  ));
  return <ul className={styles.faqGridBlock}>{elements}</ul>;
};

export default FaqGridBlock;
