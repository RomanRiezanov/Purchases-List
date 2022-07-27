import SelectedBlock from "./selected-block/SelectedBlock";
import PurchasesList from "./purhcases-list/PurchasesList";
import styles from "./Main.module.scss";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import { useState } from "react";
import PurchaseForm from "./purchase-form/PurchaseForm";

export interface PurchasesTypes {
  title: string;
  price: string;
}

function formatDate(date: Date) {
  return date.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

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
  const [purchases, setPurhcases] = useState([
    {
      number: 1,
      title: "DT-Brand-campaign",
      price: "$1,718.56",
      date: "12.07.2022",
      id: 1,
    },
    {
      number: 2,
      title: "new_offer_8735",
      price: "$1,518.56",
      date: "12.07.2022",
      id: 2,
    },
    {
      number: 3,
      title: "spring_2020",
      price: "$956.54",
      date: "12.07.2022",
      id: 3,
    },
    {
      number: 4,
      title: "DT-ORIT-campaign",
      price: "$1,133.69",
      date: "12.07.2022",
      id: 4,
    },
  ]);

  const removePurchaseItem = (id: number) => {
    setPurhcases(purchases.filter((purchase) => purchase.id !== id));
  };

  const createPurchase = (newPurchase: PurchasesTypes) => {
    setPurhcases([
      ...purchases,
      {
        ...newPurchase,
        number: purchases.length + 1,
        id: purchases.length + 1,
        date: formatDate(new Date()),
      },
    ]);
  };

  return (
    <div className={styles.main}>
      <PurchaseForm create={createPurchase} />
      <SelectedBlock months={months} years={years} />
      <PurchasesList purchases={purchases} removePurchaseItem={removePurchaseItem} />
    </div>
  );
};

export default Main;
