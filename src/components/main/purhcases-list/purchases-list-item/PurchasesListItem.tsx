import styles from "./PurchasesListItem.module.scss";
import trash from "../../../../assets/icons/trash.svg";

export interface PurchasesListItemProps {
  list: listItem;
}

export interface listItem {
  number: number;
  title: string;
  price: string;
  date: string;
  id: number;
}

const PurchasesListItem = ({ list, removePurchaseItem }: any) => {
  return (
    <div className={styles.listItem}>
      <div>{list.number}</div>
      <div>{list.title}</div>
      <div>{list.price}</div>
      <div>{list.date}</div>
      <div onClick={() => removePurchaseItem(list.id)}>
        <img className={styles.btn} src={trash} alt="trash" />
      </div>
    </div>
  );
};

export default PurchasesListItem;
