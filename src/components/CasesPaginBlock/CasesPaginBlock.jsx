import styles from "./casesPaginBlock.module.scss";

const CasesPaginBlock = ({ count, all }) => {
  const fCount = String(count).padStart(2, "0");
  const fAll = String(all).padStart(2, "0");
  return (
    <div className={styles.paginWrap}>
      <span className={styles.paginWrap_active}>{fCount}</span>
      <span className={styles.paginWrap_static}>/{fAll}</span>
    </div>
  );
};

export default CasesPaginBlock;
