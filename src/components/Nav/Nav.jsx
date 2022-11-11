import { StyledNavLink, NavItem, NavList } from "./Nav.styled";

export const Nav = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <StyledNavLink to="/news">News</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/notices">Find pet</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/friends">Our friend</StyledNavLink>
        </NavItem>
      </NavList>
    </nav>
  );
};
