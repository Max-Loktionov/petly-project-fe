import Button from "components/Button";
import { StyledNavLink } from "./UserNav.styled";

export const UserNav = () => {
  return (
    <Button active={true}>
      <StyledNavLink to="/user">Account</StyledNavLink>
    </Button>
  );
};
