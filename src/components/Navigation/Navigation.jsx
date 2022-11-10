import { AuthNav } from "components/AuthNav/AuthNav";
import { Nav } from "components/Nav/Nav";
import { UserNav } from "components/UserNav/UserNav";
import { ReactComponent as Icon } from "../../img/icons/menu.svg";
import { BurgerMenuBtn, MobileMenu, NavContainer } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <>
      <BurgerMenuBtn type="button">
        <Icon width={30} height={20}></Icon>
      </BurgerMenuBtn>
      <MobileMenu>
        <NavContainer>
          <Nav />
          <UserNav />
          <AuthNav />
        </NavContainer>
      </MobileMenu>
    </>
  );
};
