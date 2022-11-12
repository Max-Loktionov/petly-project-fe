import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const AuthNavList = styled.ul`
  display: flex;
  @media (min-width: 768px) {
    /* margin-left: auto; */
  }
  @media (min-width: 1280px) {
    margin-left: auto;
  }
`;

export const AuthNavItem = styled.li`
  :not(:last-child) {
    margin-right: 12px;
  }
  @media (min-width: 1280px) {
    :not(:last-child) {
      margin-right: 20px;
    }
  } ;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.35;
  letter-spacing: 0.04em;
  font-weight: ${p => p.theme.fontWeights.heading};
  color: ${p => p.theme.colors.primaryBtnText};

  &.active {
    color: ${p => p.theme.colors.secondatyBtnText};
  }
  @media ${p => p.theme.media.tablet} {
    font-size: 20px;
  }
`;
