import PurchasesListHeader from "./purchases-list-header/PurchasesListHeader";
import PurchasesListItem, {
  listItem,
} from "./purchases-list-item/PurchasesListItem";
import styles from "./PurchasesList.module.scss";

export type sortByFunc = (sort: string) => void;

interface PurchasesListItemsProps {
  purchases: Array<listItem>;
  sortBy: sortByFunc;
  removePurchaseItem: any;
}

const PurchasesList = ({
  purchases,
  sortBy,
  removePurchaseItem,
}: PurchasesListItemsProps) => {
  return (
    <div className={styles.purchasesList}>
      <PurchasesListHeader sortBy={sortBy} />
      <div>
        {purchases.map((list: any) => (
          <PurchasesListItem
            list={list}
            key={list.id}
            removePurchaseItem={removePurchaseItem}
          />
        ))}
      </div>
    </div>
  );
};
export default PurchasesList;
