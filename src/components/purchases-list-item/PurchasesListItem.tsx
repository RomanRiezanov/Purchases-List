import styles from './PurchasesListItem.module.scss';

// interface typeList {
//   number: number;
//   name: string;
//   price: string;
//   date: string;
//   id: number;
// }

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
