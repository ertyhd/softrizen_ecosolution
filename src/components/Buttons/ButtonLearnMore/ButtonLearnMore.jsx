import styles from "./buttonLearnMore.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";
import { Link } from "react-scroll";

const ButtonLearnMore = () => {
  return (
    <>
      <Link
        to="Cases"
        smooth={true}
        duration={1200}
        className={styles.learmMoreBtn}
        href="#top"
      >
        Learn more
        <div className={styles.learmMoreBtn_svgWrapper}>
          <SvgSelector id="cleanArrowR" />
        </div>
      </Link>
    </>
  );
};

export default ButtonLearnMore;
