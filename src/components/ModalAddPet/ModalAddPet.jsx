import Button from "components/Button";
import { useState } from "react";

function ModalAddPet() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("sell");

  const handleClick = e => {
    console.log(e.currentTarget.value);

    setCategory(e.currentTarget.value);

    e.currentTarget.setAttribute("active", true);
  };

  return (
    page === 1 && (
      <div>
        <h2>Add pet</h2>
        <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>

        <Button value={"lost/found"} onClick={handleClick}>
          Lost/found
        </Button>
        <Button value={"in good hands"} onClick={handleClick}>
          In good hands
        </Button>
        <Button value={"sell"} onClick={handleClick}>
          Sell
        </Button>
      </div>
    )
  );
}

export default ModalAddPet;
