import { useState } from "react";
import { AuthNav } from "components/AuthNav/AuthNav";
import { BurgerMenu } from "components/BurgerMenuBtn/BurgerMenu";
import { Nav } from "components/Nav/Nav";
import { UserNav } from "components/UserNav/UserNav";
import { MobileMenu, NavContainer } from "./Navigation.styled";
import { useSelector } from "react-redux";

export const Navigation = () => {
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.token);
  // window.addEventListener("scroll", () => {
  //   document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
  // });

  const onMobileMenuClick = e => {
    setIsOpenMobile(!isOpenMobile);
    if (!isOpenMobile) {
      // Когда модальное окно открыто, фиксируем элемент body
      const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
      const body = document.body;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}`;
    } else {
      // When the modal is hidden..
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  };

  const closeMobileMenu = e => {
    setIsOpenMobile(false);
  };

  const screenSize = window.innerWidth;

  return (
    <>
      <BurgerMenu handleClick={onMobileMenuClick} />
      <MobileMenu $mode={isOpenMobile}>
        <NavContainer>
          <Nav handleClick={onMobileMenuClick} />

          {screenSize < 768 && !isLoggedIn && <AuthNav closeMobileMenu={closeMobileMenu} />}
          {screenSize < 768 && isLoggedIn && <UserNav closeMobileMenu={closeMobileMenu} />}
        </NavContainer>
      </MobileMenu>
      {screenSize >= 768 && !isLoggedIn && <AuthNav closeMobileMenu={closeMobileMenu} />}
      {screenSize >= 768 && isLoggedIn && <UserNav closeMobileMenu={closeMobileMenu} />}
    </>
  );
};
