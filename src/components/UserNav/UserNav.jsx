import { AccountButton, StyledNavLink } from "./UserNav.styled";

export const UserNav = () => {
  return (
    <AccountButton active={true}>
      <StyledNavLink to="/user">Account</StyledNavLink>
    </AccountButton>
  );
};
