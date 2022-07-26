import { sortByFunc } from "../PurchasesList";
import styles from "./PurchasesListHeader.module.scss";

type PurchasesListHeaderProps = {
  sortBy: sortByFunc;
};

const PurchasesListHeader = ({ sortBy }: PurchasesListHeaderProps) => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        №
        <div onClick={() => sortBy("number")}>
          <img
            className={styles.img}
            src="./assets/icons/sort-down.svg"
            alt="sort-down"
          />
        </div>
      </li>
      <li className={styles.list__item}>Name</li>
      <li className={styles.list__item}>
        Spent
        <div onClick={() => sortBy("price")}>
          <img
            className={styles.img}
            src="./assets/icons/sort-down.svg"
            alt="sort-down"
          />
        </div>
      </li>
      <li className={styles.list__item}>Date</li>
    </ul>
  );
};

export default PurchasesListHeader;
