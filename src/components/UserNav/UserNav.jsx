import { AccountButton, StyledNavLink } from "./UserNav.styled";

export const UserNav = ({ closeMobileMenu }) => {
  return (
    <AccountButton onClick={closeMobileMenu} active={true}>
      <StyledNavLink to="/user">Account</StyledNavLink>
    </AccountButton>
  );
};
