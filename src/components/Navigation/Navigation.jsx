import { AuthNav } from "components/AuthNav/AuthNav";
import { BurgerMenu } from "components/BurgerMenuBtn/BurgerMenu";
import { Nav } from "components/Nav/Nav";
// import { UserNav } from "components/UserNav/UserNav";
import { MobileMenu, NavContainer } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <>
      <BurgerMenu />
      <MobileMenu>
        <NavContainer>
          <Nav />

          {/* <Container> */}
          {/* <UserNav /> */}
          <AuthNav />
          {/* </Container> */}
        </NavContainer>
      </MobileMenu>{" "}
    </>
  );
};
