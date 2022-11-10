import { AuthNavItem, AuthNavList, StyledNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthNavList>
      <AuthNavItem>
        <StyledNavLink to="/login">Login</StyledNavLink>
      </AuthNavItem>
      <AuthNavItem>
        <StyledNavLink to="/register">Registration</StyledNavLink>
      </AuthNavItem>
    </AuthNavList>
  );
};
