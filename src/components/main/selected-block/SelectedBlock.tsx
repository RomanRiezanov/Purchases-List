import styles from "./SelectedBlock.module.scss";
import Select from "react-select";

interface SelectedBlockProps {
  months: Array<SelectedOption>;
  years: Array<SelectedOption>;
}

interface SelectedOption {
  value: string | number;
  label: string | number;
}

const SelectedBlock = ({ months, years }: SelectedBlockProps) => {
  return (
    <div className={styles.selectBlock}>
      <Select
        className={styles.selectItem}
        options={months}
        placeholder="Choose month..."
      ></Select>
      <Select
        className={styles.selectItem}
        options={years}
        placeholder="Choose year..."
      ></Select>
    </div>
  );
};

export default SelectedBlock;
