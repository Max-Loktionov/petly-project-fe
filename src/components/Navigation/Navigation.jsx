import { useState } from "react";

import { AuthNav } from "components/AuthNav/AuthNav";
import { BurgerMenu } from "components/BurgerMenuBtn/BurgerMenu";
import { Nav } from "components/Nav/Nav";
// import { UserNav } from "components/UserNav/UserNav";
import { MobileMenu, NavContainer } from "./Navigation.styled";

export const Navigation = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const onClick = () => {
    setIsOpenMobile(!isOpenMobile);
  };
  return (
    <>
      <BurgerMenu handleClick={onClick} />

      <MobileMenu $mode={isOpenMobile}>
        <NavContainer>
          <Nav />

          {/* <Container> */}
          {/* <UserNav /> */}
          <AuthNav />
          {/* </Container> */}
        </NavContainer>
      </MobileMenu>
    </>
  );
};
