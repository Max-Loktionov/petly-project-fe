import Button from "components/Button";
// import { useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthNavItem, AuthNavList, StyledNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
  const { pathname } = useLocation();
  const isActiveLogin = pathname === "/login" ? true : false;
  const isActiveRegister = pathname === "/register" ? true : false;

  return (
    <AuthNavList>
      <AuthNavItem>
        <Button active={isActiveLogin}>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </Button>
      </AuthNavItem>
      <AuthNavItem>
        <Button active={isActiveRegister}>
          <StyledNavLink to="/register">Registration</StyledNavLink>
        </Button>
      </AuthNavItem>
    </AuthNavList>
  );
};
