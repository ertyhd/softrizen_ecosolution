import styles from "./notFoundPage.module.scss";
import { Link } from "react-router-dom";

import Footer from "../../modules/Footer/Footer";

import { SvgSelector } from "../../components/SvgSelector/SvgSelector";

const NotFoundPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.notFoundPageContainer}>
        <h1>Not found page</h1>
        <h1>404</h1>
        <Link className={styles.noPageBtn} to={-1}>
          <div className={styles.noPageBtn_svgWrapper}>
            <SvgSelector id="cleanArrowR" />
          </div>
          Go back
        </Link>
      </div>
      <Footer />
    </section>
  );
};

export default NotFoundPage;
