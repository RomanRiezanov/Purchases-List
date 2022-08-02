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

  const addNewPurchase = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    create(purchase);
    setPurchase({ title: "", price: "" });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault("");
  };

  return (
    <form className={styles.purchaseForm} onSubmit={handleSubmit}>
      <Input
        value={purchase.title}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPurchase({ ...purchase, title: event.target.value })
        }
        type="text"
        placeholder="Purchase title"
        imgpath="./assets/icons/label.svg"
      />
      <Input
        value={purchase.price}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPurchase({ ...purchase, price: event.target.value })
        }
        type="number"
        placeholder="Purchase price"
        imgpath="./assets/icons/ukraine_money_icon.svg"
      />
      <Button addNewPurchase={addNewPurchase} />
    </form>
  );
};

export default PurchaseForm;
