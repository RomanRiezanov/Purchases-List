import Input from "../../UI/input/Input";
import styles from "./PurhcasesList.module.scss";
import { ChangeEvent } from "react";
import magnifyingGlassImage from "../../../../public/assets/icons/magnifying-glass.svg";

interface PurchaseFilterProps {
  searchQuery: string;
  setSearchQuery: (arg: string) => void;
}

const PurchaseFilter = ({
  searchQuery,
  setSearchQuery,
}: PurchaseFilterProps) => {
  return (
    <div>
      <Input
        style={{ width: "620px" }}
        placeholder="Search..."
        value={searchQuery}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setSearchQuery(event.target.value)
        }
        type="text"
        imgPath="./assets/icons/magnifying-glass.svg"
      />
    </div>
  );
};

export default PurchaseFilter;
