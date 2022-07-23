import PurchasesListHeader from "./purchases-list-header/PurchasesListHeader";
import PurchasesListItem, {
  listItem,
} from "./purchases-list-item/PurchasesListItem";
import styles from "./PurchasesList.module.scss";

export interface listItems {
  purchases: Array<listItem>;
}

const PurchasesList = ({ purchases }: listItems) => {
  return (
    <div className={styles.purchasesList}>
      <PurchasesListHeader />
      <div>
        {purchases.map((list) => (
          <PurchasesListItem list={list} key={list.id} />
        ))}
      </div>
    </div>
  );
};
export default PurchasesList;
