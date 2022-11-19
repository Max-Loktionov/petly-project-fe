import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
  text-align: center;
  @media ${p => p.theme.media.desktop} {
    display: flex;
  }
`;
export const NavItem = styled.li`
  @media ${p => p.theme.media.desktop} {
    :not(:last-child) {
      margin-right: 80px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.37;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.navBarText};

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
