import styles from './PurchasesListItem.module.scss';

const PurchasesListItem = ({ list }: any) => {
  return (
    <div>
      <div className={styles.root}>
        <div>{list.number}</div>
        <div>{list.name}</div>
        <div>{list.price}</div>
        <div>{list.date}</div>
      </div>
    </div>
  );
};

export default PurchasesListItem;
