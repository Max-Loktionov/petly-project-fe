import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { StyledButton } from "../Button/Button.styled";

export const AccountButton = styled(StyledButton)`
  @media ${p => p.theme.media.mobile} {
    margin-bottom: 60px;
  }
  @media ${p => p.theme.media.tablet} {
    margin-left: auto;
    margin-right: 62px;
  }
  @media ${p => p.theme.media.desktop} {
    margin-right: 0px;
  }
`;

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
