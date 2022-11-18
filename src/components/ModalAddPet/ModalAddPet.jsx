import Button from "components/Button";
import { useState } from "react";

function ModalAddPet() {
  // const [page, _] = useState(2);                  //unknown var
  const [category, setCategory] = useState("sell");

  const handleClick = e => {
    setCategory(e.currentTarget.value);

    e.currentTarget.setAttribute("active", true);
  };

  return (
    <div>
      <h2>Add pet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</p>

      <Button value={"lost/found"} onClick={handleClick} category={category}>
        Lost/found
      </Button>
      <Button value={"in good hands"} onClick={handleClick} category={category}>
        In good hands
      </Button>
      <Button value={"sell"} onClick={handleClick} category={category}>
        Sell
      </Button>
    </div>
  );
}

export default ModalAddPet;
