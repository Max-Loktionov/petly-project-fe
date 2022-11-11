import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.heading};
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  @media ${p => p.theme.media.tablet} {
    font-size: 16px;
  }
  @media ${p => p.theme.media.desktop} {
    display: inline-block;
    margin-left: auto;
  } ;
`;
