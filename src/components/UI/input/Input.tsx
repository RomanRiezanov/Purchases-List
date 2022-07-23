import styles from "./Input.module.scss";

const Input = (props: any) => {
  return <input className={styles.inpt} {...props} />;
};

export default Input;
