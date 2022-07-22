import styles from "./PurchasesListItem.module.scss";

interface PurchasesListItemProps {
  list: listItem;
}

interface listItem {
  number: number;
  name: string;
  price: string;
  date: string;
  id: number;
}

const PurchasesListItem = ({ list }: PurchasesListItemProps) => {
  return (
    <div className={styles.listItem}>
      <div>{list.number}</div>
      <div>{list.name}</div>
      <div>{list.price}</div>
      <div>{list.date}</div>
    </div>
  );
};

export default PurchasesListItem;
