import Button from "components/Button";
import { useState } from "react";

const CATEGORY = [
  {
    category: "lost/found",
    value: "Lost/found",
  },
  {
    category: "in_good_hands",
    value: "In good hands",
  },
  {
    category: "sell",
    value: " Sell",
  },
];

function ModalAddPets() {
  const [page, setPage] = useState(1);
  const [noticeCategory, setNoticeCategory] = useState("sell");

  const handleClick = e => {
    console.log(e.currentTarget);
    setNoticeCategory(e.currentTarget.value);
  };

  const checkCategory = value => {
    if (value === noticeCategory) {
      return true;
    }

    return false;
  };

  return (
    page === 1 && (
      <div>
        <h2>Add pet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>
        <div>
          {CATEGORY.map(({ category, value }) => (
            <Button type="button" value={category} active={checkCategory(category)} onClick={handleClick}>
              {value}
            </Button>
          ))}
        </div>
      </div>
    )
  );
}

export default ModalAddPets;
