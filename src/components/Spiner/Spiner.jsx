import styles from "./spiner.module.scss";

import { ColorRing } from "react-loader-spinner";

const Spiner = () => {
  return (
    <div className={styles.spinerWrapp}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#1a7d63", "#1a7d63", "#97d28b", "#173d33", "#1a7d63"]}
      />
    </div>
  );
};

export default Spiner;
