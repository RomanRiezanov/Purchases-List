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
    <div>
      <Input
        value={purchase.title}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPurchase({ ...purchase, title: event.target.value })
        }
        type="text"
        placeholder="Purchase title"
      />
      <Input
        value={purchase.price}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPurchase({ ...purchase, price: event.target.value })
        }
        type="text"
        placeholder="Purchase price"
      />
      <Button onClick={addNewPurchase} />
    </div>
  );
};

export default PurchaseForm;
