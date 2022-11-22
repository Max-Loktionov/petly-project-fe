import { useState } from "react";
import { BurgerMenuBtn, IconBurgerBtn, IconCrossBtn } from "./BurgerMenu.styled";

export const BurgerMenu = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobMenu = e => {
    setIsOpen(!isOpen);
    handleClick(e);
  };
  return (
    <BurgerMenuBtn onClick={toggleMobMenu} type="button">
      {isOpen ? <IconCrossBtn /> : <IconBurgerBtn />}
    </BurgerMenuBtn>
  );
};
