import styles from "./PurchasesListItem.module.scss";

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

const PurchasesListItem = ({ list }: PurchasesListItemProps) => {
  return (
    <div className={styles.listItem}>
      <div>{list.number}</div>
      <div>{list.title}</div>
      <div>{list.price}</div>
      <div>{list.date}</div>
    </div>
  );
};

export default PurchasesListItem;
