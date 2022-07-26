import styles from "./Input.module.scss";
import { ChangeEvent } from "react";

interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  imgpath: string;
  style?: { width: string };
}

const Input = (props: InputProps) => {
  return (
    <div className={styles.inptBlock}>
      <input className={styles.inpt} {...props} />
      <div className={styles.imgBlock}>
        <img className={styles.img} src={props.imgpath} />
      </div>
    </div>
  );
};

export default Input;
