import styles from "./Button.module.scss";

const Button = (props: any) => {
  return (
    <button className={styles.btn} {...props}>
      Button
    </button>
  );
};

export default Button;
