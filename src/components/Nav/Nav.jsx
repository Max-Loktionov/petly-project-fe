import { StyledNavLink } from "./Nav.styled";

export const Nav = () => {
  return (
    <nav>
      <StyledNavLink to="/news">news</StyledNavLink>
      <StyledNavLink to="/notices">find pet</StyledNavLink>
      <StyledNavLink to="/friends">our friend</StyledNavLink>
    </nav>
  );
};
