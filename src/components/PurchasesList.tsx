import PurchasesListHeader from './purchases-list-header/PurchasesListHeader';
import PurchasesListItem from './purchases-list-item/PurchasesListItem';

const PurchasesList = (props: any) => {
  return (
    <>
      <PurchasesListHeader />
      {props.listItems.map((list: any, id: number) => {
        return <PurchasesListItem list={list} key={list.id} />;
      })}
    </>
  );
};
export default PurchasesList;
