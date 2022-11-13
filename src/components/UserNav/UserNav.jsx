import { StyledButton, StyledNavLink } from "./UserNav.styled";

export const UserNav = () => {
  return (
    <StyledButton active={true}>
      <StyledNavLink to="/user">Account</StyledNavLink>
    </StyledButton>
  );
};
