import { AccountButton, IconAccount, StyledNavLink } from "./UserNav.styled";

export const UserNav = ({ closeMobileMenu }) => {
  return (
    <AccountButton onClick={closeMobileMenu} active={true}>
      <IconAccount />
      <StyledNavLink to="/user">Account</StyledNavLink>
    </AccountButton>
  );
};
