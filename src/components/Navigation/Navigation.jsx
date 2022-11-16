import { useState } from "react";

import { AuthNav } from "components/AuthNav/AuthNav";
import { BurgerMenu } from "components/BurgerMenuBtn/BurgerMenu";
import { Nav } from "components/Nav/Nav";
import { UserNav } from "components/UserNav/UserNav";
import { MobileMenu, NavContainer } from "./Navigation.styled";
import { useCurrentUserQuery } from "redux/auth/authApi";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const { data } = useCurrentUserQuery();
  console.log("data", data);
  const isLoggedIn = useSelector(state => state.auth.token);
  console.log("isLoggedIn", isLoggedIn);

  const onMobileMenuClick = e => {
    if (e) {
      setIsOpenMobile(!isOpenMobile);
    }
  };

  const closeMobileMenu = e => {
    if (e) {
      setIsOpenMobile(false);
    }
  };

  const screenSize = window.innerWidth;

  return (
    <>
      <BurgerMenu handleClick={onMobileMenuClick} />
      <MobileMenu $mode={isOpenMobile}>
        <NavContainer>
          <Nav handleClick={onMobileMenuClick} />

          {/* <Container> */}
          {screenSize < 768 && !isLoggedIn && (
            <AuthNav closeMobileMenu={closeMobileMenu} />
          )}
          {screenSize < 768 && isLoggedIn && (
            <UserNav closeMobileMenu={closeMobileMenu} />
          )}

          {/* </Container> */}
        </NavContainer>
      </MobileMenu>
      {screenSize >= 768 && !isLoggedIn && (
        <AuthNav closeMobileMenu={closeMobileMenu} />
      )}
      {screenSize >= 768 && isLoggedIn && (
        <UserNav closeMobileMenu={closeMobileMenu} />
      )}
    </>
  );
};
