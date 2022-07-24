import Button from "../../UI/button/Button";
import Input from "../../UI/input/Input";
import styles from "./PurchaseForm.module.scss";
import { ChangeEvent, useState } from "react";
import { PurchasesTypes } from "../Main";

interface PurchaseFormProps {
  create: (purchase: PurchasesTypes) => void;
}

const PurchaseForm = ({ create }: PurchaseFormProps) => {
  const [purchase, setPurchase] = useState<PurchasesTypes>({
    title: "",
    price: "",
  });

  const addNewPurchase = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    create(purchase);
    setPurchase({ title: "", price: "" });
  };

  return (
    <form className={styles.purchaseForm}>
      <Input
        value={purchase.title}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPurchase({ ...purchase, title: event.target.value })
        }
        type="text"
        placeholder="Purchase title"
        imgPath="./assets/icons/label.svg"
      />
      <Input
        value={purchase.price}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPurchase({ ...purchase, price: event.target.value })
        }
        type="text"
        placeholder="Purchase price"
        imgPath="./assets/icons/dollar.svg"
      />
      <Button onClick={addNewPurchase} />
    </form>
  );
};

export default PurchaseForm;
