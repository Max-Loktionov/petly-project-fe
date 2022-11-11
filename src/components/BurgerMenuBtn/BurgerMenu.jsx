import { useState } from "react";
import { BurgerMenuBtn } from "./BurgerMenu.styled";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BurgerMenuBtn
      onClick={() => {
        setIsOpen(!isOpen);
        console.log("isOpen", isOpen);
      }}
      type="button"
    ></BurgerMenuBtn>
  );
};
