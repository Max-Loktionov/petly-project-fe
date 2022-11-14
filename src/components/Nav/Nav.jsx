import { StyledNavLink, NavItem, NavList } from "./Nav.styled";

export const Nav = ({ handleClick }) => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <StyledNavLink to="/news" onClick={handleClick}>
            News
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/notices" onClick={handleClick}>
            Find pet
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/friends" onClick={handleClick}>
            Our friend
          </StyledNavLink>
        </NavItem>
      </NavList>
    </nav>
  );
};
