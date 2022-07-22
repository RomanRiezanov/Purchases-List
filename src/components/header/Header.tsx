import classes from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <div className={classes.title}>
        <h1>Shopping List</h1>
      </div>
    </div>
  );
};

export default Header;
