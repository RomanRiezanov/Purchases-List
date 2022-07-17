import classes from "./Header.module.scss";
import SelectedBlock from "./selected-block/SelectedBlock";

const months = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const years = [
  { value: 2020, label: 2020 },
  { value: 2021, label: 2021 },
  { value: 2022, label: 2022 },
];

const Header = () => {
  return (
    <div>
      <div className={classes.title}>
        <h1>Shopping List</h1>
      </div>
      <SelectedBlock months={months} years={years} />
    </div>
  );
};

export default Header;
