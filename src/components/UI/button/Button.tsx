import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  addNewPurchase: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ addNewPurchase }: ButtonProps) => {
  return (
    <button className={styles.btn} onClick={addNewPurchase}>
      Button
    </button>
  );
};

export default Button;
