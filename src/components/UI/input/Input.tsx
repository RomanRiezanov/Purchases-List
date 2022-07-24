import styles from "./Input.module.scss";

const Input = (props: any) => {
  return (
    <div className={styles.inptBlock}>
      <input className={styles.inpt} {...props} />
      <div className={styles.imgBlock}>
        <img className={styles.img} src={props.imgPath} />
      </div>
    </div>
  );
};

export default Input;
