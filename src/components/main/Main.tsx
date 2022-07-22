import SelectedBlock from "./selected-block/SelectedBlock";
import PurchasesList from "./purhcases-list/PurchasesList";
import styles from "./Main.module.scss";

const months = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const years = [
  { value: 2020, label: 2020 },
  { value: 2021, label: 2021 },
  { value: 2022, label: 2022 },
];

const Main = () => {
  return (
    <div className={styles.main}>
      <SelectedBlock months={months} years={years} />
      <PurchasesList />
    </div>
  );
};

export default Main;
