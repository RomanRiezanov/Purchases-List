import styles from "./Input.module.scss";

const Input = (props: any) => {
  return (
    <>
      <input className={styles.inpt} {...props} />
      <img className={styles.img} src={props.imgPath} />
    </>
  );
};

export default Input;
