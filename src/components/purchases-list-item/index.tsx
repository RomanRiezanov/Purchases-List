import styles from './PurchasesListItem.module.scss';

const PurchasesListItem = () => {
  return (
    <div>
      <div className={styles.root}>
        <div>1</div>
        <div>DT-Brand-campaign</div>
        <div>$1,718.56</div>
        <div>12.07.2022</div>
      </div>
      <div className={styles.root}>
        <div>2</div>
        <div>new_offer_8735</div>
        <div>$1,518.56</div>
        <div>12.07.2022</div>
      </div>
      <div className={styles.root}>
        <div>3</div>
        <div>spring_2020</div>
        <div>$956.54</div>
        <div>12.07.2022</div>
      </div>
      <div className={styles.root}>
        <div>4</div>
        <div>DT-Brand-campaign</div>
        <div>$1,133.69</div>
        <div>12.07.2022</div>
      </div>
    </div>
  );
};

export default PurchasesListItem;
