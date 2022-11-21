import { BurgerMenuBtn } from "./BurgerMenu.styled";
import { GiHamburgerMenu } from "react-icons/gi";

export const BurgerMenu = ({ handleClick }) => {
  return (
    <BurgerMenuBtn onClick={handleClick} type="button">
      <GiHamburgerMenu />
    </BurgerMenuBtn>
  );
};
