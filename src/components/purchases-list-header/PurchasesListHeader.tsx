import styles from './PurchasesListHeader.module.scss';

const PurchasesListHeader = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li className={styles.list__item}>№</li>
        <li className={styles.list__item}>Name</li>
        <li className={styles.list__item}>Spent</li>
        <li className={styles.list__item}>Date</li>
      </ul>
    </div>
  );
};

export default PurchasesListHeader;
