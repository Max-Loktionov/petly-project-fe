import { BurgerMenuBtn, IconBurgerBtn, IconCrossBtn } from "./BurgerMenu.styled";

export const BurgerMenu = ({ isOpenMobile, handleClick }) => {
  return (
    <BurgerMenuBtn onClick={handleClick} type="button">
      {isOpenMobile ? <IconCrossBtn /> : <IconBurgerBtn />}
    </BurgerMenuBtn>
  );
};
