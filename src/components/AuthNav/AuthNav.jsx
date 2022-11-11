import Button from "components/Button";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";
import { AuthNavItem, AuthNavList, StyledNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
  // const { pathname } = useLocation();
  // console.log("location", pathname);
  return (
    <AuthNavList>
      <AuthNavItem>
        <Button>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </Button>
      </AuthNavItem>
      <AuthNavItem>
        <Button>
          <StyledNavLink to="/register">Registration</StyledNavLink>
        </Button>
      </AuthNavItem>
    </AuthNavList>
  );
};
