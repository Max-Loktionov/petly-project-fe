import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
  text-align: center;
  @media ${p => p.theme.media.desktop} {
    display: flex;
  }
`;
export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  :not(:last-child) {
    margin-bottom: 24px;
  }

  @media ${p => p.theme.media.desktop} {
    :not(:last-child) {
      margin-right: 80px;
      margin-bottom: 0;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  position: relative;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.navBarText};

  :after {
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    bottom: 4px;
    height: 2px;
    background-color: ${p => p.theme.colors.accent};
    content: "";
    transition: width 0.3s ease-out;
    @media ${p => p.theme.media.desktop} {
      bottom: 0;
    }
  }

  :hover:after,
  :focus:after {
    width: 100%;
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }

  @media ${p => p.theme.media.tablet} {
    font-size: 48px;
  }
  @media ${p => p.theme.media.desktop} {
    font-size: 20px;
    line-height: 1.35;
  }
`;
