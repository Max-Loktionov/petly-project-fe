import { BurgerMenuBtn } from "./BurgerMenu.styled";

export const BurgerMenu = ({ handleClick }) => {
  return <BurgerMenuBtn onClick={handleClick} type="button"></BurgerMenuBtn>;
};
